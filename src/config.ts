import { module as admin } from "./admin";
import { module as brokeredProductsPlugin } from "./brokered-products-plugin";
import { module as comic } from "./comic";
import { module as common } from "./common";
import { module as core } from "./core";
import { module as store } from "./store";
import { module as subscription } from "./subscription";
import { module as subscriptionProductsPlugin } from "./subscription-products-plugin";
import { module as uac } from "./uac";

export const modules = [
    admin,
    brokeredProductsPlugin,
    comic,
    common,
    core,
    store,
    subscription,
    subscriptionProductsPlugin,
    uac
];
