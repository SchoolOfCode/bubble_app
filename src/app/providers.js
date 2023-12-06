"use client";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/happy-monkey/400.css";

const colors = {
  brand: {
    900: "#4258A6",
    700: "#29D7CD",
    pink: "#F2BAC9",
    green: "#9CD6BB",
    purple: "#C0B9DD",
    yellow: "#F0DAA2",
    blue: "#A2C1F0"
  },
};

const fonts = {
  body: "Happy Monkey",
  heading: "Happy Monkey",
};

const styles = {
  global: {
    body: {
      backgroundImage: "linear(to-b, brand.700, brand.900 50%)",
      height: "100vh",
    },
  },
};

export const theme = extendTheme({ colors, fonts, styles });

export function Providers({ children }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
