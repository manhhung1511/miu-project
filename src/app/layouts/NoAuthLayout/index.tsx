import Footer from "core/app/components/Footer";
import Header from "core/app/components/Header";
import { useGetPermission } from "core/queries/user";
import { usePermissionStore } from "core/store/usePermissionStore";
import { ReactNode, useEffect } from "react";
import { useShallow } from "zustand/react/shallow";

interface Props {
  children: JSX.Element;
}

function NoLayout({ children }: Props): ReactNode {

  return (
  <div style={{ display: "flex" }}>
  <div style={{ flex: 1, overflow: "hidden" }}>
    <div
      style={{
        // overflowY: "auto",
      //  height: "calc(100vh)",
      }}
    >
      {children}
    </div>

  </div>
</div>
  )
}

export default NoLayout;
