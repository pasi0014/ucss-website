import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HowYouCanHelpUs from "./pages/HowYouCanHelpUs";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Footer from "./components/Footer";

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
                  <Route
                    path="/how-you-can-help-us"
                    component={HowYouCanHelpUs}
                  />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
