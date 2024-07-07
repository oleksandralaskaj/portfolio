import {createContext, ReactNode, useContext, useEffect, useState} from 'react';

const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => {}
});

export const ThemeContextProvider = ({children}: {children: ReactNode}) => {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => {
    return useContext(ThemeContext)
}