export declare interface IHeaderMenuProps {
    items: ItemType<MenuItemType>[];
    onClick: (info:MenuInfo) => void;
}

// What gets passed into the component from the parent as attributes
export declare interface IHeaderMenuInputProps {

}

export type HeaderMenuProps = IHeaderMenuInputProps & IHeaderMenuProps;