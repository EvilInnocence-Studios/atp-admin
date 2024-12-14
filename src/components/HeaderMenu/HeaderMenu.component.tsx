import { Menu } from "antd";
import { HeaderMenuProps } from "./HeaderMenu.d";
import styles from './HeaderMenu.module.scss';

export const HeaderMenuComponent = ({items, onClick}:HeaderMenuProps) =>
    <Menu mode="horizontal" className={styles.menu} items={items} onClick={onClick}/>
;
