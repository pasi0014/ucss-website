import React from "react";
import { injectIntl } from "react-intl";

import AdminApp from "./Admin/AdminApp";
import UserApp from "./UserApp";

import {
  ClerkProvider,
  SignIn,
  SignUp,
  SignedIn,
  useClerk,
} from "@clerk/clerk-react";

import "./App.css";
import { Routes, useLocation, Route, useNavigate } from "react-router-dom";
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
import Admin from "./layouts/Admin";

function App() {
  const navigate = useNavigate();
  const clerkFrontendApi = process.env
    .REACT_APP_CLERK_PUBLISHABLE_KEY as string;
  return (
    <ClerkProvider
      publishableKey={clerkFrontendApi}
      navigate={(to) => navigate(to)}>
      <Routes>
        {/* UserApp Public routes */}
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/news" element={<Reviews />}>
            <Route path="vyshyvanka-vechir" element={<Vyshyvanka />} />
          </Route>
          <Route path="/temp" element={<PostPage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:slug" element={<Events />} />
          <Route path="/news/continental-marathon" element={<Marathon />} />
          <Route path="/testimonials" element={<Testmonials />} />
          <Route path="/events/sunflower-camp" element={<Camp />} />
          <Route path="/waiting-list" element={<WaitingList />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/donate/success" element={<Success />} />
          <Route path="/donate/failure" element={<Failure />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Private Routes */}
        <Route path="/administration/*" element={<AdminApp />} />
      </Routes>
    </ClerkProvider>
  );
}

export default injectIntl(App);
