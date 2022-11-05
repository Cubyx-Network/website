import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import React, { createContext, useEffect, useState } from "react";
import { Poppins } from "@next/font/google";

const queryClient = new QueryClient();

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin-ext"],
});

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
    <div id="wrapper" className={poppins.className}>
      <darkMode.Provider value={isDark}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </darkMode.Provider>
    </div>
  );
}

export default CubyxWebsite;
export { darkMode };
