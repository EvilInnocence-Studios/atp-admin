import { ItemType, MenuItemType } from "antd/es/menu/interface";
import { createInjector, inject, mergeProps } from "unstateless";
import { HeaderMenuProps, IHeaderMenuInputProps, IHeaderMenuProps } from "./HeaderMenu";
import { HeaderMenuComponent } from "./HeaderMenu.component";
import { config } from "../../config";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";

const injectHeaderMenuProps = createInjector(({}:IHeaderMenuInputProps):IHeaderMenuProps => {
    const [items, setItems] = useState<ItemType<MenuItemType>[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const curItems:ItemType<MenuItemType>[] = [];
        Promise.all(config.modules.map(moduleName => import(`../../lib/${moduleName}/menus`)))
            .then(modules => {
                modules.forEach(module => {
                    console.log(module.menus.admin);
                    module.menus.admin.forEach((item:any) => curItems.push(item));
                });
                setItems(curItems);
            });
    }, []);

    const onClick = (info:any) => {
        navigate(`/${info.key}`);
    }

    return {items, onClick};
});

const connect = inject<IHeaderMenuInputProps, HeaderMenuProps>(mergeProps(
    injectHeaderMenuProps,
));

export const HeaderMenu = connect(HeaderMenuComponent);
