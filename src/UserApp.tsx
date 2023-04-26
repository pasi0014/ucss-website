import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
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
import Home from "./pages/Home/index";

import "./App.css";
import Reviews from "./pages/Reviews";
import Failure from "./pages/Failure";
import Marathon from "./pages/Marathon";
import WaitingList from "./components/WaitingList";
import Testimonials from "./pages/Testmonials";
import Vyshyvanka from "./pages/Vyshyvanka";
import Events from "./pages/Events";
import Camp from "./pages/Camp";
import { PostPage } from "./pages/PostPage";

function UserApp() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Ukrainian Canadian Social Services Ottawa branch</title>
        <meta
          name="description"
          content="Ukrainian Canadian Social Services - Ottawa Branch is a non-profit charitable organization serving the Ukrainian community in Ottawa. Guided by the needs of individuals and families of Ukrainian community, who experience language and cultural barriers. We provide a range of support services."
        />
      </Helmet>
      <div className="mx-auto">
        <Banner animateTitle={true} animateBackgroundImage={true} />
        <Navbar animateNavbar={false} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/news" element={<Reviews />}>
            <Route path="vyshyvanka-vechir" element={<Vyshyvanka />} />
          </Route>
          <Route path="/temp" element={<PostPage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:slug" element={<Events />} />
          <Route path="/news/continental-marathon" element={<Marathon />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/events/sunflower-camp" element={<Camp />} />
          <Route path="/waiting-list" element={<WaitingList />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/donate/success" element={<Success />} />
          <Route path="/donate/failure" element={<Failure />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Outlet />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default injectIntl(UserApp);
