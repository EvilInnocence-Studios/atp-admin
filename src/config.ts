import { adminMenus } from "@admin/menux";
import { adminRoutes } from "@admin/routes";
import { commonRoutes } from "@common/lib/routes";
import { IApiConfig } from "@core/lib/types";
import { uacMenus } from "@uac/lib/menus";
import { uacRoutes } from "@uac/lib/routes";
import { commonMenus } from "./common/lib/menus";
import { localConfig } from "./config.local";
import { storeMenus } from "./store/lib/menus";
import { storeRoutes } from "./store/lib/routes";

export const config = ():IApiConfig => ({
    appName: "Admin",
    api: {
        baseUrl: localConfig.api.baseUrl,
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
        ...storeMenus.admin,
    ],
    routes: [
        ...adminRoutes.admin,
        ...uacRoutes.admin,
        ...commonRoutes.admin,
        ...storeRoutes.admin,
    ],
    social: {
        twitter: "",
        blueSky: "",
        instagram: "",
    },
    paypal: {
        clientId: "",
        plans: {},
    }
});