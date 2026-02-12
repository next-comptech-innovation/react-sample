import { http, HttpResponse } from "msw";
export const getCustomersMock = http.get("*/api/customers", () => HttpResponse.json([{id:"1",name:"山田 太郎",email:"taro@example.com",rank:"A"}]));
