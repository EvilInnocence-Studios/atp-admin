import { IApiConfig } from "@core/lib/types";
import { uacMenus } from "@uac/lib/menus";
import { uacRoutes } from "@uac/lib/routes";
import { commonMenus } from "./common/lib/menux";
import { commonRoutes } from "@common/lib/routes";
import { adminMenus } from "@admin/menux";
import { adminRoutes } from "@admin/routes";

export const config = ():IApiConfig => ({
    appName: "Admin",
    api: {
        baseUrl: "http://192.168.254.141:3002/"
    },
    gallery: {
        maxRowCount: 9999,
    },
    modules: [
        "uac", "common", "admin"
    ],
    menus: [
        ...adminMenus.admin,
        ...commonMenus.admin,
        ...uacMenus.admin,
    ],
    routes: [
        ...adminRoutes.admin,
        ...uacRoutes.admin,
        ...commonRoutes.admin,
    ]
});