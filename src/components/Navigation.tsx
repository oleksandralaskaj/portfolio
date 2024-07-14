import styles from "./Navigation.module.scss";
import { Moon, MoveLeft, Sun } from "lucide-react";
import { useThemeContext } from "../contexts/ThemeContext.tsx";
import { Link } from "./Link.tsx";
import { useLocation } from "react-router-dom";

export const Navigation = () => {
  const { theme, toggleTheme } = useThemeContext();
  const location = useLocation();
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <nav>
          {location.pathname !== "/" ? (
            <Link to="/" hash="#hero">
              <div className={styles.back}>
                <MoveLeft /> Back Home
              </div>
            </Link>
          ) : (
            <>
              <Link to="/" hash="#projects">
                Projects
              </Link>
              <Link to="/" hash="#about">
                About
              </Link>
              <Link to="" hash="#contacts">
                Contacts
              </Link>
            </>
          )}
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
