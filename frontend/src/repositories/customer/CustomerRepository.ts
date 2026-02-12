import { appEnv } from "@/common/env/app.env";
import type { Customer, CustomerDetail } from "@/types/repositories/customer/customerApiType";

export class CustomerRepository {
  static async getCustomers(keyword?: string): Promise<Customer[]> {
    const q = keyword ? `?keyword=${encodeURIComponent(keyword)}` : "";
    const res = await fetch(`${appEnv.apiBaseUrl}/customers${q}`);
    if (!res.ok) throw new Error("failed to fetch customers");
    return res.json();
  }
  static async getCustomerDetail(id: string): Promise<CustomerDetail> {
    const res = await fetch(`${appEnv.apiBaseUrl}/customers/${id}`);
    if (!res.ok) throw new Error("failed to fetch customer detail");
    return res.json();
  }
}
