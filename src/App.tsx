import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { injectIntl } from "react-intl";

import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";
import Banner from "./components/Banner/index";
import ContactForm from "./components/ContactForm/index";
import { Donate } from "./pages/Donate/index";
import Success from "./pages/Success/index";
import NotFound from "./pages/NotFound";
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
                  <Route path="/home" exact component={Home} />
                  {/* <Route path="/about" exact component={About} /> */}
                  <Route path="/donate" exact component={Donate} />
                  <Route path="/donate/success" exact component={Success} />
                  <Route path="/contact" exact component={ContactForm} />
                  <Route path="*" component={NotFound} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
        <Footer />
      </div>
    </Router>
  );
}

export default injectIntl(App);
