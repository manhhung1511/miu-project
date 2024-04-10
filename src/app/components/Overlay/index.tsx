import React, { ReactNode } from "react";

type OverlayProps = {
  children: JSX.Element;
};

function Overlay ({ children }: OverlayProps): ReactNode {
  return (
    <div className="overlay">
      <div className="overlay-content">
        {children}
      </div>
    </div>
  );
};

export default Overlay;