import { WidthProvider, Responsive } from "react-grid-layout";
const ResponsiveGridLayout = WidthProvider(Responsive);
import type { AppProps } from "next/app";

export default function CustomResponsiveGridLayout({
  Component,
  pageProps,
}: AppProps) {
  return (
    <ResponsiveGridLayout
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      rowHeight={100}
    >
      <Component {...pageProps} />
    </ResponsiveGridLayout>
  );
}
