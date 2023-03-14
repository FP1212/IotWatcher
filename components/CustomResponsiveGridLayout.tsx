import { Responsive } from "react-grid-layout";
import React from "react";
import { SizeMe } from "react-sizeme";

export default function CustomResponsiveGridLayout({
  children,
}: React.PropsWithChildren<React.ReactNode>) {
  return (
    <div
      style={{
        width: "100%",
        maxHeight: "100vh",
      }}
    >
      <SizeMe>
        {({ size }) => (
          <Responsive
            className="layout"
            maxRows={11}
            autoSize={true}
            width={size.width || 700}
            cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
            rowHeight={60}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          >
            {children}
          </Responsive>
        )}
      </SizeMe>
    </div>
  );
}
