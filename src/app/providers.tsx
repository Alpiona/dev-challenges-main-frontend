"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        background: "gray.200",
      },
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <RecoilRoot>
      <CacheProvider>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </CacheProvider>
    </RecoilRoot>
  );
}
