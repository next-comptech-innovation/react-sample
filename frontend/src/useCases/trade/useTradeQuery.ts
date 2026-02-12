import { useQuery } from "@tanstack/react-query";
import { TradeRepository } from "@/repositories/trade/TradeRepository";
import { queryKeys } from "@/common/constants/queryKeys";

export const useTradeQuery = (customerId: string) =>
  useQuery({ queryKey: queryKeys.trades(customerId), queryFn: () => TradeRepository.getTrades(customerId), enabled: !!customerId });
