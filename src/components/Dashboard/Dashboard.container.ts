import { createInjector, inject, mergeProps } from "unstateless";
import {DashboardComponent} from "./Dashboard.component";
import {IDashboardInputProps, DashboardProps, IDashboardProps} from "./Dashboard.d";

const injectDashboardProps = createInjector(({}:IDashboardInputProps):IDashboardProps => {
    return {};
});

const connect = inject<IDashboardInputProps, DashboardProps>(mergeProps(
    injectDashboardProps,
));

export const Dashboard = connect(DashboardComponent);
