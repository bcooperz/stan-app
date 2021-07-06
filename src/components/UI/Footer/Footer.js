import styles from "./Footer.module.css";
import facebookLogo from "../../../assets/social/facebook-white.svg";
import twitterLogo from "../../../assets/social/twitter-white.svg";
import instagramLogo from "../../../assets/social/instagram-white.svg";
import appStoreLogo from "../../../assets/store/app-store.svg";
import playStoreLogo from "../../../assets/store/play-store.svg";
import windowsStoreLogo from "../../../assets/store/windows-store.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className={styles["footer"]}>
            <div className={styles["link-container"]}>
                <p className={styles["navigation-item"]}><NavLink to="/">Home</NavLink></p> |
                <p className={styles["navigation-item"]}><NavLink to="/">Terms and Conditions</NavLink></p> |
                <p className={styles["navigation-item"]}><NavLink to="/">Privacy Policy</NavLink></p> |
                <p className={styles["navigation-item"]}><NavLink to="/">Collection Statement</NavLink></p> |
                <p className={styles["navigation-item"]}><NavLink to="/">Help</NavLink></p> |
                <p className={styles["navigation-item"]}><NavLink to="/">Manage Account</NavLink></p>
            </div>
            <p>Copyright © 2016 DEMO Streaming. All rights reserved</p>
            <div className={styles["additional-links"]}>
                <div className={styles["social-links"]}>
                    <NavLink to="/">
                        <img className={styles["image-logo"]} src={facebookLogo} width="30" height="30" alt="Facebook Logo" />
                    </NavLink>
                    <NavLink to="/">
                        <img className={styles["image-logo"]} src={twitterLogo} width="30" height="30" alt="Twitter Logo" />
                    </NavLink>
                    <NavLink to="/">
                        <img className={styles["image-logo"]} src={instagramLogo} width="30" height="30" alt="Instagram Logo" />
                    </NavLink>
                </div>
                <div className={styles["app-store-links"]}>
                    <NavLink to="/">
                        <img className={styles["image-logo"]} src={appStoreLogo} width="140" height="60" alt="App Store" />
                    </NavLink>
                    <NavLink to="/">
                        <img className={styles["image-logo"]} src={playStoreLogo} width="140" height="60" alt="Play Store" />
                    </NavLink>
                    <NavLink to="/">
                        <img className={styles["image-logo"]} src={windowsStoreLogo} width="140" height="40" alt="Windows Store" />
                    </NavLink>
                </div>
            </div>
        </footer>
    );
}


export default Footer;