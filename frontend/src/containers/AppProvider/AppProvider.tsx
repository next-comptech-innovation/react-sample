import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CssBaseline, ThemeProvider } from "@mui/material";
import type { ReactNode } from "react";
import { theme } from "@/common/theme/theme";
const qc = new QueryClient();
export const AppProvider = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={qc}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  </QueryClientProvider>
);
