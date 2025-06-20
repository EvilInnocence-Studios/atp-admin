import { adminMenus } from "@admin/menux";
import { adminRoutes } from "@admin/routes";
import { commonRoutes } from "@common/lib/routes";
import { commonSettings } from "@common/lib/settings";
import { IConfig } from "@core/lib/types";
import { storeSettings } from "@store/lib/settings";
import { uacMenus } from "@uac/lib/menus";
import { uacRoutes } from "@uac/lib/routes";
import { commonMenus } from "./common/lib/menus";
import { localConfig } from "./config.local";
import { storeMenus } from "./store/lib/menus";
import { storeRoutes } from "./store/lib/routes";
import { coreSettings } from "@core/lib/settings";
import { merge } from "lodash";

export const config = ():IConfig => ({
    api: {
        baseUrl: localConfig.api.baseUrl,
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
    settings: merge(
        commonSettings,
        storeSettings,
        coreSettings,
    ),
    paypal: {
        plans: [],
    }
});