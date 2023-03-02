"use client"; //we need this for the error to be gone because theme provider or context only works on client not in server
import { ThemeProvider } from "next-themes";
import React from "react";

export default function Providers({ children }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="dark:bg-gray-700 dark:text-gray-200 text-gray-700 transition-colors duration-300 min-h-screen select">
        {children}
      </div>
    </ThemeProvider>
  );
}
