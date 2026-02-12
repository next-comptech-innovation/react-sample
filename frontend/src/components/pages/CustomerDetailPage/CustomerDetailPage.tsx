import { Paper, Stack, Typography } from "@mui/material";
import { Header } from "@/components/common/modules/Header/Header";
import { AppLoading } from "@/components/common/elements/AppLoading/AppLoading";
import { useGetCustomerDetailInit } from "./useGetCustomerDetailInit";
import { CustomerDetailTable } from "./modules/CustomerDetailTable/CustomerDetailTable";
import { TradeTable } from "./modules/TradeTable/TradeTable";

export const CustomerDetailPage = () => {
  const { id, data, isLoading } = useGetCustomerDetailInit();
  if (isLoading || !data) return <AppLoading />;
  return (
    <Stack spacing={2}>
      <Header />
      <Paper sx={{ p: 2 }}>
        <Stack spacing={2}>
          <Typography variant="h4" component="h2">
            顧客詳細
          </Typography>
          <CustomerDetailTable detail={data} />
          <Typography variant="h5" component="h3">
            取引
          </Typography>
          <TradeTable customerId={id} />
        </Stack>
      </Paper>
    </Stack>
  );
};
