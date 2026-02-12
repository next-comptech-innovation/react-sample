import { useTradeQuery } from "@/useCases/trade/useTradeQuery";
export const useTradeTable=(id:string)=>useTradeQuery(id);
