import { injectIntl } from "react-intl";
import { useHistory } from "react-router-dom";

import AdminApp from "./Admin/AdminApp";
import UserApp from "./UserApp";

import "./App.css";

function App() {
  const path = useHistory();

  const renderApp = () => {
    if (path.location.pathname.includes("administration")) return <AdminApp />;
    return <UserApp />;
  };

  return renderApp();
}

export default injectIntl(App);
