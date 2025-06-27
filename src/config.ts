import { makeConfig } from "@core/lib/makeConfig";
import { localConfig } from "./config.local";

// Import the modules you want active here
import { module as adminModule } from "@admin/index";
import { module as commonModule } from "@common/index";
import { module as storeModule } from "@store/index";
import { module as subscriptionsModule } from "@subscription/index";
import { module as uacModule } from "@uac/index";

// List the modules you want active here
const modules = [
    adminModule,
    commonModule,
    uacModule,
    subscriptionsModule,
    storeModule,
];

export const config = makeConfig(localConfig.api.baseUrl, modules);