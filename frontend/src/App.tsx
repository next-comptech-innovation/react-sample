import "./App.css";
import { Container } from "@mui/material";
import { AppProvider } from "./containers/AppProvider/AppProvider";
import { AppRoutes } from "./routes/routes";

export default function App() {
  return (
    <AppProvider>
      <Container maxWidth="lg" sx={{ py: 2 }}>
        <AppRoutes />
      </Container>
    </AppProvider>
  );
}
