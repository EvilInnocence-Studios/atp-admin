import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";
import styles from "./App.module.scss";
import { LoggedIn } from "./components/Common/LoggedIn";
import { LoginForm } from "./components/Common/LoginForm";
import { Dashboard } from "./components/Dashboard";
import { theme } from "./styles/theme";

const App = () => 
<ConfigProvider theme={theme}>
  <BrowserRouter>
    <div className={styles.app}>
      <LoggedIn yes>
        <Dashboard />
      </LoggedIn>
      <LoggedIn no>
        <LoginForm appName="Admin" />
      </LoggedIn>
    </div>
  </BrowserRouter>
</ConfigProvider>;

export default App
