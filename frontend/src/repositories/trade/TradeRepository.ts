import { appEnv } from "@/common/env/app.env";
import type { Trade } from "@/types/repositories/trade/tradeApiType";

export class TradeRepository {
  static async getTrades(customerId: string): Promise<Trade[]> {
    const res = await fetch(`${appEnv.apiBaseUrl}/customers/${customerId}/trades`);
    if (!res.ok) throw new Error("failed to fetch trades");
    return res.json();
  }
}
