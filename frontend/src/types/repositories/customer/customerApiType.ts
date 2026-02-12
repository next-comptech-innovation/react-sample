export type Customer = { id: string; name: string; email: string; rank: string };
export type CustomerDetail = Customer & { address: string; phone: string };
