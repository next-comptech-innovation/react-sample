import { http, HttpResponse } from "msw";
export const getCustomerDetailMock = http.get("*/api/customers/:id", ({params}) => HttpResponse.json({id:String(params.id),name:"山田 太郎",email:"taro@example.com",rank:"A",address:"東京都",phone:"03-0000-0000"}));
