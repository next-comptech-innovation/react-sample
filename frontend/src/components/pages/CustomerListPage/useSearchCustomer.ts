import { useAtom } from "jotai";
import { customerSearchConditionAtom } from "@/jotai/customer/customerSearchConditionAtom";
export const useSearchCustomer=()=>useAtom(customerSearchConditionAtom);
