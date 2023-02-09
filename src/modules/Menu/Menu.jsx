import { NavLink } from "react-router-dom";

import items from './items';

import styles from "./menu.module.scss";

const getClassList = ({isActive}) => {
    const classList = (isActive ? `${styles.link} ${styles.active}` : styles.link);
    return classList;
}

const Menu = () => {
    const menuElements = items.map(({id, to, text}) => (
        <li key={id} className={styles.item}>
            <NavLink className={getClassList} to={to} >{text}</NavLink>     
        </li>
    ));

    return (
        <div className={styles.wrapper}> 
            <ul className={styles.menu}>
                {menuElements}
            </ul>
        </div>
    )
}

export default Menu;