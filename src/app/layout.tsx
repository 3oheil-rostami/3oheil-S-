import ReactCookiesProvider from "@/providers/ReactCookiesProvider";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import localFont from "next/font/local";
import { Flip, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
const iranSans = localFont({ src: "./IRANSans.woff2" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" data-theme="light">
      <body
        style={{ width: "100dvw", height: "100dvh", overflow: "hidden auto" }}
        className={iranSans.className}
      >
        <ReactQueryProvider>
          <ReactCookiesProvider>
            {/* <ThemeProvider> */}
            {children}
            <ToastContainer
              position="bottom-center"
              rtl
              autoClose={3000}
              draggable
              transition={Flip}
              className={"font-bold text-base text-neutral-800"}
            />
            {/* </ThemeProvider> */}
          </ReactCookiesProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
