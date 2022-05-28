import type { AppProps } from "next/app";
import "gun/axe";

import Web3StorageProvider from "../src/features/Web3Storage/Web3Storage.provider";
import P2PNetwworkProvider from "../src/features/P2PNetwork/P2PNetwork.provider";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3StorageProvider>
      <P2PNetwworkProvider>
        <Component {...pageProps} />
      </P2PNetwworkProvider>
    </Web3StorageProvider>
  );
}

export default MyApp;
