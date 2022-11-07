import { WidthProvider, Responsive } from "react-grid-layout";
import React from 'react';
const ResponsiveGridLayout = WidthProvider(Responsive);

export default function CustomResponsiveGridLayout({ children } : React.PropsWithChildren<React.ReactNode>) {

  return (
    <ResponsiveGridLayout
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      rowHeight={100}
    >
      {children}
    </ResponsiveGridLayout>
  );
}
