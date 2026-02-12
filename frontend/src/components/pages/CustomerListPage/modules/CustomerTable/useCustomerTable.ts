import { useCustomerQuery } from "@/useCases/customer/useCustomerQuery";
export const useCustomerTable=(keyword?:string)=>useCustomerQuery(keyword);
