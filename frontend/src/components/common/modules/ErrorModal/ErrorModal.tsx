import { Alert } from "@mui/material";

export const ErrorModal = ({ message }: { message: string }) => <Alert severity="error">{message}</Alert>;
