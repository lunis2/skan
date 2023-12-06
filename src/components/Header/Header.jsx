import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import styles from "./Header.module.scss";
import ProfileWidget from "../ProfileWidg/ProfileWidget";
import Menu from "../Menu/Menu";
import {ReactComponent as Logo1SVG} from "../../assets/img/logo1.svg";
import {ReactComponent as Logo2SVG} from "../../assets/img/logo2.svg";
import {ReactComponent as MenuSVG} from "../../assets/img/menu.svg";
import {ReactComponent as CrossSVG} from "../../assets/img/cross.svg";


export default function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const menuClickHandler = () => {
        setMenuOpen(!isMenuOpen);
    }

    return (
        <>
            {(isMenuOpen &&
                    <div className={styles.parent_menu}>
                        <div className={styles.menu_header_wrapper}>
                            <Logo1SVG className={styles.logo}/>
                            <CrossSVG className={styles.cross} onClick={menuClickHandler}/>
                        </div>

                        <Menu onBtnClick={() => setMenuOpen(false)}/>
                    </div>)
                ||
                (<div className={styles.parent}>
                    <Logo2SVG className={styles.logo}/>
                    <MenuSVG className={styles.menu} onClick={menuClickHandler}/>

                    <nav>
                        <NavLink to="/" className={styles.link}>Главная</NavLink>
                        <NavLink to="/error" className={styles.link}>Тарифы</NavLink>
                        <NavLink to="/error" className={styles.link}>FAQ</NavLink>
                    </nav>

                    <ProfileWidget/>
                </div>)
            }
        </>
    );
}