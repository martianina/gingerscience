import { useEffect } from "react"; // Import useEffect
import type { AppProps } from "next/app";
import { RainbowKitProvider, lightTheme } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import PlausibleProvider from "next-plausible";
import NextNProgress from "nextjs-progressbar";
import { Toaster } from "react-hot-toast";
import { WagmiConfig } from "wagmi";
import { Footer } from "~~/components/Footer";
import { BlockieAvatar } from "~~/components/scaffold-eth";
import { wagmiConfig } from "~~/services/web3/wagmiConfig";
import { appChains } from "~~/services/web3/wagmiConnectors";
import "~~/styles/globals.css";

const ScaffoldEthApp = ({ Component, pageProps }: AppProps) => {
  // Add MailerLite script on client-side only
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.mailerlite.com/js/universal.js";
    script.async = true;
    document.head.appendChild(script);
    window.ml = window.ml || function () { (window.ml.q = window.ml.q || []).push(arguments); };
    ml('account', '786318');
  }, []);

  return (
    <PlausibleProvider domain="scaffoldeth.io">
      <WagmiConfig config={wagmiConfig}>
        <NextNProgress />
        <RainbowKitProvider chains={appChains.chains} avatar={BlockieAvatar} theme={lightTheme()}>
          <main className="font-space-grotesk">
            <Component {...pageProps} />
          </main>
          <Footer />
          <Toaster />
        </RainbowKitProvider>
      </WagmiConfig>
    </PlausibleProvider>
  );
};

export default ScaffoldEthApp;
