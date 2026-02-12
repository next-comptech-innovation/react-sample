import { Navigate, Route, Routes } from "react-router-dom";
import { RootPage } from "@/components/pages/RootPage/RootPage";
import { CustomerListPage } from "@/components/pages/CustomerListPage/CustomerListPage";
import { CustomerDetailPage } from "@/components/pages/CustomerDetailPage/CustomerDetailPage";
import { NotFoundPage } from "@/components/pages/NotFound/NotFoundPage";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<RootPage />} />
    <Route path="/customers" element={<CustomerListPage />} />
    <Route path="/customers/:id" element={<CustomerDetailPage />} />
    <Route path="*" element={<NotFoundPage />} />
    <Route path="/home" element={<Navigate to="/" replace />} />
  </Routes>
);
