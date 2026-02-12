import { Link } from "react-router-dom";
import { APP_TITLE } from "@/common/constants/constants";
import styles from "./Header.module.scss";
export const Header=()=> <header className={styles.header}><strong>{APP_TITLE}</strong><nav><Link to="/customers">顧客一覧</Link></nav></header>;
