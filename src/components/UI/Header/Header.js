import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={styles["page-header"]}>
            <div className={styles["page-header__name"]}><NavLink to="/">{props.headerText}</NavLink></div>
            <nav className={styles["page-header__nav-container"]}>
                <button className={styles["page-header__transparent-button"]}>Log in</button>
                <button className={styles["page-header__black-button"]}>Start your free trial</button>
            </nav>
        </header>
      );
}

export default Header;