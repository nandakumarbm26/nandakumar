import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import theme from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      {/* <NavMob /> */}
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}
