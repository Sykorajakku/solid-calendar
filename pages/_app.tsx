import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "@inrupt/solid-ui-react";
import Layout from "../components/layout/layout";
import Authentication from "../components/authentication/authentication";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider sessionId="solid-auth">
      <Layout>
        <Authentication>
          <Component {...pageProps} />
        </Authentication>
      </Layout>
    </SessionProvider>
  );
};

export default MyApp;
