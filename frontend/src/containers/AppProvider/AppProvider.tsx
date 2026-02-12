import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";
const qc = new QueryClient();
export const AppProvider = ({children}:{children:ReactNode}) => <QueryClientProvider client={qc}>{children}</QueryClientProvider>;
