import React from "react";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../Configs/theme";

const Providers = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider> 
  );
}

export default Providers;