import { http, HttpResponse } from "msw";
export const getTradesMock = http.get("*/api/customers/:id/trades", ({params}) => HttpResponse.json([{id:"T1",customerId:String(params.id),symbol:"7203",amount:100,tradedAt:"2024-12-01"}]));
