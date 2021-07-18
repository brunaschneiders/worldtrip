import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import { Header } from "../components/Header";

import { theme } from "../styles/theme";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

import "../components/ContinentsSlider/styles.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
