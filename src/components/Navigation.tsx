import {HashLink} from 'react-router-hash-link';
import styles from './Navigation.module.scss'

export const Navigation = () => {
    return <div className={styles.container}>
        <div>
            <nav>
                <HashLink to="/#hero">Home</HashLink>
                <HashLink to="/#projects">Projects</HashLink>
                <HashLink to="/#about">About</HashLink>
                <HashLink to="#contact">Contact</HashLink>
            </nav>
            <div>
                <p>mode icon</p>
                <p>language icon</p>
            </div>
        </div>
    </div>
}