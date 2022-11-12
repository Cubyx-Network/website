import "../styles/globals.css";
import "@fontsource/poppins/latin.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import React, { createContext, useEffect, useState } from "react";

const queryClient = new QueryClient();

const darkMode = createContext(false);

function CubyxWebsite({ Component, pageProps }: AppProps) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
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
