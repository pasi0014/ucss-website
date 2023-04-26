import React from "react";
import { Helmet } from "react-helmet";
import { injectIntl } from "react-intl";
import Banner from "../../components/Banner";
import Navbar from "../../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";

const MainLayout = () => {
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
        <Outlet />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default injectIntl(MainLayout);
