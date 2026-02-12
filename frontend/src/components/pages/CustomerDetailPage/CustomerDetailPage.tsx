import styles from "./CustomerDetailPage.module.scss";
import { Header } from "@/components/common/modules/Header/Header";
import { AppLoading } from "@/components/common/elements/AppLoading/AppLoading";
import { useGetCustomerDetailInit } from "./useGetCustomerDetailInit";
import { CustomerDetailTable } from "./modules/CustomerDetailTable/CustomerDetailTable";
import { TradeTable } from "./modules/TradeTable/TradeTable";

export const CustomerDetailPage=()=>{
  const { id, data, isLoading } = useGetCustomerDetailInit();
  if (isLoading || !data) return <AppLoading />;
  return <section className={styles.wrapper}><Header /><h2>顧客詳細</h2><CustomerDetailTable detail={data} /><h3>取引</h3><TradeTable customerId={id} /></section>;
};
