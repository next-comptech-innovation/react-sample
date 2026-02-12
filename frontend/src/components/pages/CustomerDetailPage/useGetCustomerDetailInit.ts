import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { CustomerRepository } from "@/repositories/customer/CustomerRepository";
export const useGetCustomerDetailInit=()=>{const {id=""}=useParams(); const q=useQuery({queryKey:["customer",id],queryFn:()=>CustomerRepository.getCustomerDetail(id),enabled:!!id}); return {id,...q};};
