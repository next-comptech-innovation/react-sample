export const queryKeys = { customers:["customers"] as const, customerDetail:(id:string)=>["customer",id] as const, trades:(id:string)=>["trades",id] as const };
