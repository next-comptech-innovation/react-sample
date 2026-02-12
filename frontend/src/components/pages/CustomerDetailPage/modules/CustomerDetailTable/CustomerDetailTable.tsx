import type { CustomerDetail } from "@/types/repositories/customer/customerApiType";
export const CustomerDetailTable=({detail}:{detail:CustomerDetail})=><table><tbody><tr><th>氏名</th><td>{detail.name}</td></tr><tr><th>電話</th><td>{detail.phone}</td></tr><tr><th>住所</th><td>{detail.address}</td></tr></tbody></table>;
