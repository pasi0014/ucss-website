import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { injectIntl } from "react-intl";

import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";
import Banner from "./components/Banner/index";
import ContactForm from "./components/ContactForm/index";
import { Donate } from "./pages/Donate/index";
// import HowWeCanHelpYou from "./pages/HowWeCanHelpYou";
import Home from "./pages/Home/index";
import About from "./pages/About/index";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="mx-auto">
        <Banner animateTitle={true} animateBackgroundImage={true} />
        <Navbar animateNavbar={true} />
        <Route
          render={(location) => (
            <TransitionGroup>
              <CSSTransition
                key={location.location.key}
                timeout={400}
                classNames="fade"
              >
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/home" component={Home} />
                  <Route path="/about" component={About} />
                  {/* <Route
                    path="/how-we-can-help-you"
                    component={HowWeCanHelpYou}
                  /> */}
                  <Route path="/donate" component={Donate} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
        <Route path="/contact" component={ContactForm} />
        <Footer />
      </div>
    </Router>
  );
}

export default injectIntl(App);
