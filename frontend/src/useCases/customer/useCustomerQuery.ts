import { useQuery } from "@tanstack/react-query";
import { CustomerRepository } from "@/repositories/customer/CustomerRepository";
import { queryKeys } from "@/common/constants/queryKeys";

export const useCustomerQuery = (keyword?: string) =>
  useQuery({ queryKey: queryKeys.customers, queryFn: () => CustomerRepository.getCustomers(keyword) });
