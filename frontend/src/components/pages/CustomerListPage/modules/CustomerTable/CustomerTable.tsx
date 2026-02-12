import {
  Link as MuiLink,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useCustomerTable } from "./useCustomerTable";

export const CustomerTable = ({ keyword }: { keyword?: string }) => {
  const { data = [] } = useCustomerTable(keyword);
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>氏名</TableCell>
            <TableCell>メール</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((c) => (
            <TableRow key={c.id}>
              <TableCell>
                <MuiLink component={Link} to={`/customers/${c.id}`} underline="hover">
                  {c.id}
                </MuiLink>
              </TableCell>
              <TableCell>{c.name}</TableCell>
              <TableCell>{c.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
