import { Link } from "react-router-dom";
import styles from "./CustomerTable.module.scss";
import { useCustomerTable } from "./useCustomerTable";

export const CustomerTable=({keyword}:{keyword?:string})=>{
  const {data=[]} = useCustomerTable(keyword);
  return <table className={styles.table}><thead><tr><th>ID</th><th>氏名</th><th>メール</th></tr></thead><tbody>{data.map(c=><tr key={c.id}><td><Link to={`/customers/${c.id}`}>{c.id}</Link></td><td>{c.name}</td><td>{c.email}</td></tr>)}</tbody></table>;
};
