import { IApiConfig } from "@core/lib/types";
import { uacMenus } from "@uac/lib/menus";
import { uacRoutes } from "@uac/lib/routes";

export const config:IApiConfig = {
    appName: "Admin",
    api: {
        baseUrl: "http://localhost:3002/"
    },
    gallery: {
        maxRowCount: 9999,
    },
    modules: [
        "uac",
    ],
    menus: [
        ...uacMenus.admin,
    ],
    routes: [
        ...uacRoutes.admin,
    ]
}