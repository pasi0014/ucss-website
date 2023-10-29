import { injectIntl } from "react-intl";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./layouts/Main";
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
import Vyshyvanka from "./pages/Vyshyvanka";
import { PostPage } from "./pages/PostPage";
import Events from "./pages/Events";
import Marathon from "./pages/Marathon";
import Testmonials from "./pages/Testmonials";
import Camp from "./pages/Camp";
import WaitingList from "./components/WaitingList";
import { Donate } from "./pages/Donate";
import Success from "./pages/Success";
import Failure from "./pages/Failure";
import ContactForm from "./components/ContactForm";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      {/* UserApp Public routes */}
      <Route path="/" element={<Main />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/news" element={<Reviews />}>
          <Route path="vyshyvanka-vechir" element={<Vyshyvanka />} />
        </Route>
        <Route path="/events/camp" element={<Camp />} />
        <Route path="/temp" element={<PostPage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:slug" element={<Events />} />
        <Route path="/news/continental-marathon" element={<Marathon />} />
        <Route path="/testimonials" element={<Testmonials />} />
        {/* <Route path="/events/sunflower-camp" element={<Camp />} /> */}
        <Route path="/waiting-list" element={<WaitingList />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/donate/success" element={<Success />} />
        <Route path="/donate/failure" element={<Failure />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default injectIntl(App);
