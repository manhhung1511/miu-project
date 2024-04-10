import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";

import { App } from "core/app";

import "./index.css";
import "./locales/i18n";
import { ThemeProvider } from "@mui/material";
import { theme } from "core/theme";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
     <ThemeProvider theme={theme}>
        <App/>
     </ThemeProvider> 
    </QueryClientProvider>
  </React.StrictMode>,
);
