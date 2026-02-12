import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useTradeTable } from "./useTradeTable";

export const TradeTable = ({ customerId }: { customerId: string }) => {
  const { data = [] } = useTradeTable(customerId);
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>銘柄</TableCell>
            <TableCell>数量</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((t) => (
            <TableRow key={t.id}>
              <TableCell>{t.symbol}</TableCell>
              <TableCell>{t.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
