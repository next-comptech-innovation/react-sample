import { CustomerTable } from "./modules/CustomerTable/CustomerTable";
export const renderCustomerListContent=(keyword?:string)=><CustomerTable keyword={keyword} />;
