import styles from "./TradeTable.module.scss";
import { useTradeTable } from "./useTradeTable";
export const TradeTable=({customerId}:{customerId:string})=>{const {data=[]}=useTradeTable(customerId);return <table className={styles.table}><thead><tr><th>銘柄</th><th>数量</th></tr></thead><tbody>{data.map(t=><tr key={t.id}><td>{t.symbol}</td><td>{t.amount}</td></tr>)}</tbody></table>;};
