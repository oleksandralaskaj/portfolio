import {HashLink} from 'react-router-hash-link';
import styles from './Navigation.module.scss';
import stylesButtons from './LinkButton.module.scss';
import {Moon, Sun} from 'lucide-react';
import {useThemeContext} from "../contexts/ThemeContext.tsx";
import {LinkButton} from "./LinkButton.tsx";

export const Navigation = () => {
    const {theme, toggleTheme} = useThemeContext()

    return <div className={styles.container}>
        <div className={styles.content}>
            <nav>
                <LinkButton to="/" hash="#hero">Home</LinkButton>
                <LinkButton to="/" hash="#projects">Projects</LinkButton>
                <HashLink to="/#about">About</HashLink>
                <HashLink to="#contact">Contact</HashLink>
            </nav>
            <div className={styles.modeicons}>{
                theme === 'light' ?
                    <Moon className={styles.icon} onClick={toggleTheme}/> :
                    <Sun className={styles.icon} onClick={toggleTheme}/>
            }
            </div>
        </div>
    </div>
}