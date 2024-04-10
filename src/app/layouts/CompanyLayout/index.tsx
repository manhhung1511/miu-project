import { ReactNode, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

// import { Capacitor } from "@capacitor/core";

// import { Header } from "core/app/components/Header";
// import { Sidebar } from "core/app/components/Sidebar";
import { routeConfig } from "core/routes/routeConfig.ts";
import useAuthentication from "core/app/hooks/useAuthentication";
import Footer from "core/app/components/Footer";
import Header from "core/app/components/Company/Header";
import { roleConfig } from "core/routes/role";
import usePermission from "core/app/hooks/usePermission";


interface Props {
  children: JSX.Element;
  allowedRoles: string[];
}

function CompanyLayout({ children, allowedRoles }: Props): ReactNode {
  const isAuth = useAuthentication();
  if (!isAuth) return <Navigate to={routeConfig.login} />;

  const type = useRole();
 
  if (type &&
    (!type ||
    !allowedRoles.includes(type))
  ) {
    return <Navigate to={routeConfig.AccessDenied} />;
  }

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1, overflow: "hidden" }}>
        <Header/>
        <div
          style={{
            // overflowY: "auto",
          //  height: "calc(100vh)",
          }}
        >
          {children}
        </div>
        <div className="layout_footer">
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default CompanyLayout;
