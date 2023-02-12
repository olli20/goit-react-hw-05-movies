import { NavLink } from "react-router-dom";

import items from './items';

import styles from "./navbar.module.scss";

const getClassList = ({isActive}) => {
    const classList = (isActive ? `${styles.link} ${styles.active}` : styles.link);
    return classList;
}

const Navbar = () => {
    const menuElements = items.map(({id, to, text}) => (
        <li key={id} className={styles.item}>
            <NavLink className={getClassList} to={to} >{text}</NavLink>     
        </li>
    ));

    return (
        <div className={styles.navbar}>
            <nav className={styles.navbarContainer}>
                <p className={styles.logo}>MOVIES</p> 
                <ul className={styles.menu}>
                    {menuElements}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;