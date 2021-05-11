import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import HowYouCanHelpUs from "./pages/HowWeCanHelpYou";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Footer from "./components/Footer";
import { Donate } from "./pages/Donate";
import { Stories } from "./pages/Stories";
import HowWeCanHelpYou from "./pages/HowWeCanHelpYou";
import { Story } from "./pages/Story";
import Posts from "./pages/posts/Posts";

function App() {
  const posts = Posts.getPosts();
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
                    path="/how-we-can-help-you"
                    component={HowWeCanHelpYou}
                  />
                  <Route path="/donate" component={Donate} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
        <Route path="/stories" component={Stories} />
        <Route
          exact
          path="/story/:id"
          render={({ match }) => (
            <Story post={posts.find((p: any) => p.id === match.params.id)} />
          )}
        />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
