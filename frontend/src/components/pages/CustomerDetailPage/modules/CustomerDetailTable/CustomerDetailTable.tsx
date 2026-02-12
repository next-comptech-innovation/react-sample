import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import type { CustomerDetail } from "@/types/repositories/customer/customerApiType";

export const CustomerDetailTable = ({ detail }: { detail: CustomerDetail }) => (
  <TableContainer component={Paper}>
    <Table>
      <TableBody>
        <TableRow>
          <TableCell component="th" scope="row" sx={{ width: 160 }}>
            氏名
          </TableCell>
          <TableCell>{detail.name}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell component="th" scope="row">
            電話
          </TableCell>
          <TableCell>{detail.phone}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell component="th" scope="row">
            住所
          </TableCell>
          <TableCell>{detail.address}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
);
