import { IMethods } from "@core/lib/types";
import { brokeredProductsPluginServices } from "./brokered-products-plugin/lib/services";
import { comicServices } from "./comic/lib/services";
import { commonServices } from "./common/lib/services";
import { storeServices } from "./store/lib/services";
import { subscriptionServices } from "./subscription/lib/services";
import { uacServices } from "./uac/lib/services";

export const services = (methods: IMethods) => ({
    ...brokeredProductsPluginServices(methods),
    ...comicServices(methods),
    ...commonServices(methods),
    ...storeServices(methods),
    ...subscriptionServices(methods),
    ...uacServices(methods)
});
