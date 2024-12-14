import { Layout } from "antd";
import { HeaderMenu } from "../HeaderMenu";
import { DashboardProps } from "./Dashboard.d";
import styles from './Dashboard.module.scss';

export const DashboardComponent = ({}:DashboardProps) =>
    <Layout>
        <Layout.Header className={styles.header}>
            <HeaderMenu />
        </Layout.Header>
        <Layout>
            <Layout.Sider>
                <h2>Menu</h2>
            </Layout.Sider>
            <Layout.Content>
                <h2>Dashboard</h2>
            </Layout.Content>
        </Layout>
    </Layout>;
