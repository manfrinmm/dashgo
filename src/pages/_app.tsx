import { AppProps } from "next/dist/next-server/lib/router/router";

import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "../styles/theme";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
