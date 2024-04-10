import { ReactNode, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

// import { Capacitor } from "@capacitor/core";

// import { Header } from "core/app/components/Header";
// import { Sidebar } from "core/app/components/Sidebar";
import { routeConfig } from "core/routes/routeConfig.ts";
import Header from "core/app/components/Header";
import useAuthentication from "core/app/hooks/useAuthentication";
import Footer from "core/app/components/Footer";
import { usePermissionStore } from "core/store/usePermissionStore";
import { useGetPermission } from "core/queries/user";
import { useShallow } from "zustand/react/shallow";
import usePermission from "core/app/hooks/usePermission";
import { roleConfig } from "core/routes/role";
import AccessDenied from "core/app/components/AccessDenied";


interface Props {
  children: JSX.Element;
}

function DefaultLayout({ children }: Props): ReactNode {

  return (
    <div style={{ display: "flex" }}>
      {
            <div style={{ flex: 1, overflow: "hidden" }}>
              <Header/>
              <div>
                {children}
              </div>
              <div className="layout_footer">
                <Footer/>
              </div>
            </div>
      }
    </div>
  );
}

export default DefaultLayout;
