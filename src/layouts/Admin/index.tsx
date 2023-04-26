import { injectIntl } from "react-intl";
import SideBar from "../../Admin/components/SideBar";
import { Outlet, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ClerkProvider } from "@clerk/clerk-react";

const Admin: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Helmet>
        <title>CRM - Ukrainian Canadian Social Services</title>
      </Helmet>
      <div className="flex flex-col">
        <div>
          <SideBar>
            <Outlet />
          </SideBar>
        </div>
      </div>
    </div>
  );
};

export default injectIntl(Admin);
