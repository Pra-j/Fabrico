import "@/app/_styles/globals.css";
import { Provider } from "@/components/ui/provider";

import Header from "./_components/Header";
import localFont from "next/font/local";

import Offer from "./_components/Offer";
import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeProvider } from "@/components/ui/color-mode";

// Load the font
const helveticaFont = localFont({
  src: "../fonts/Helvetica.ttf",
  display: "swap",
});

export const metadata = {
  title: "Fabrico | Shop smart, shop easy",
  description:
    "Discover stylish, high-quality clothing designed for comfort and confidence. At Fabrico, we make fashion simple, smart, and effortless.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-light_gray">
      <body className={`${helveticaFont.className} bg-light_gray h-screen`}>
        <Provider>
          <Offer />
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
