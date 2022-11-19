import "../styles/globals.css";
import "@fontsource/poppins/latin.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import React, { createContext, useEffect, useState } from "react";
import ProgressBar from "@badrap/bar-of-progress";
import { Router } from "next/router";

const queryClient = new QueryClient();

const darkMode = createContext(false);

const progress = new ProgressBar({
  size: 2,
  color: "#23AA08",
  className: "progress-bar",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function CubyxWebsite({ Component, pageProps }: AppProps) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (localStorage.theme === "dark" || !("theme" in localStorage)) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  return (
    <darkMode.Provider value={isDark}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </darkMode.Provider>
  );
}

export default CubyxWebsite;
export { darkMode };
