import styles from "./Navigation.module.scss";
import { Moon, Sun } from "lucide-react";
import { useThemeContext } from "../contexts/ThemeContext.tsx";
import { Link } from "./Link.tsx";

export const Navigation = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <nav>
          <Link to="/" hash="#hero">
            Home
          </Link>
          <Link to="/" hash="#projects">
            Projects
          </Link>
          <Link to="/" hash="#about">
            About
          </Link>
          <Link to="" hash="#contacts">
            Contacts
          </Link>
        </nav>
        <div className={styles.modeicons}>
          {theme === "light" ? (
            <Moon className={styles.icon} onClick={toggleTheme} />
          ) : (
            <Sun className={styles.icon} onClick={toggleTheme} />
          )}
        </div>
      </div>
    </div>
  );
};
