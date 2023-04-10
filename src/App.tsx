import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { injectIntl } from "react-intl";
import { Helmet } from "react-helmet";

import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";
import Banner from "./components/Banner/index";
import ContactForm from "./components/ContactForm/index";
import { Donate } from "./pages/Donate/index";
import Success from "./pages/Success/index";
import NotFound from "./pages/NotFound";
// import HowWeCanHelpYou from "./pages/HowWeCanHelpYou";
import Home from "./pages/Home/index";
// import About from "./pages/About/index";

import "./App.css";
import Reviews from "./pages/Reviews";
// import Camp from "./pages/Camp";
import Failure from "./pages/Failure";
import Marathon from "./pages/Marathon";
// import GratiduteFromHospital from "./pages/GratiduteFromHospital";
import WaitingList from "./components/WaitingList";
import Acknowledgments from "./pages/Acknowledgments";
import Vyshyvanka from "./pages/Vyshyvanka";
import AdminApp from "./AdminApp";
import UserApp from "./UserApp";

import { useHistory } from "react-router-dom";

function App() {
  const path = useHistory();


  const renderApp = () => {
    if(path.location.pathname === '/administration') return <AdminApp />
    return <UserApp />
    
  }

  return renderApp();
}

export default injectIntl(App);
