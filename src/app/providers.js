"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#4258A6",
    700: "#29D7CD",
  },
};

const fonts = {
  heading: "Happy Monkey",
  body: "Happy Monkey",
};

export const theme = extendTheme({ colors, fonts });

export function Providers({ children }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
