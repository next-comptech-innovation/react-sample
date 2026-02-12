import "./App.css";
import { AppProvider } from "./containers/AppProvider/AppProvider";
import { AppRoutes } from "./routes/routes";

export default function App() {
  return (
    <AppProvider>
      <div className="app">
        <AppRoutes />
      </div>
    </AppProvider>
  );
}
