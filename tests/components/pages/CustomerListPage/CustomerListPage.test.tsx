import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { CustomerListPage } from "@/components/pages/CustomerListPage/CustomerListPage";
test("顧客一覧タイトルを表示", ()=>{ render(<BrowserRouter><CustomerListPage /></BrowserRouter>); expect(screen.getByText("顧客一覧")).toBeInTheDocument();});
