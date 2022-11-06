import CustomResponsiveGridLayout from "../components/CustomResponsiveGridLayout";
import type { AppProps } from "next/app";

export default function Dashboard({ pageProps }: AppProps) {
  return (
    <CustomResponsiveGridLayout {...pageProps}>
      <div key="a" data-grid={{ x: 0, y: 0, w: 1, h: 2, static: true }}>
        aaaaaaaaaaaaaa
      </div>
      <div key="b" data-grid={{ x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 }}>
        bbbbbbbbbb
      </div>
      <div key="c" data-grid={{ x: 4, y: 0, w: 1, h: 2 }}>
        ccccccccccc
      </div>
    </CustomResponsiveGridLayout>
  );
}
