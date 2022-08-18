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
import GratiduteFromHospital from "./pages/GratiduteFromHospital";
import WaitingList from "./components/WaitingList";

function App() {
  return (
    <Router>
      <Helmet>
        <title>Ukrainian Canadian Social Services Ottawa branch</title>
        <meta
          name="description"
          content="Ukrainian Canadian Social Services - Ottawa Branch is a non-profit charitable organization serving the Ukrainian community in Ottawa. Guided by the needs of individuals and families of Ukrainian community, who experience language and cultural barriers. We provide a range of support services."
        />
      </Helmet>
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
                  <Route path="/news" exact component={Reviews} />
                  <Route
                    path="/news/continental-marathon"
                    exact
                    component={Marathon}
                  />
                  {/* <Route
                    path="/news/gratidute-from-hospital"
                    exact
                    component={GratiduteFromHospital}
                  /> */}
                  {/* <Route path="/camp" exact component={Camp} /> */}
                  <Route
                    path="/waiting-list"
                    exact
                    render={() => <WaitingList />}
                  />
                  <Route path="/donate" exact component={Donate} />
                  <Route path="/donate/success" exact component={Success} />
                  <Route path="/donate/failure" exact component={Failure} />
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
