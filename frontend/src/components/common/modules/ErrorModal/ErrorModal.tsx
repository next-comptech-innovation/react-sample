import styles from "./ErrorModal.module.scss";
export const ErrorModal=({message}:{message:string})=><div className={styles.modal}>{message}</div>;
