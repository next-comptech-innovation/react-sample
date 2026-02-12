import { useState } from "react";
import { Paper, Stack, TextField } from "@mui/material";
import { Header } from "@/components/common/modules/Header/Header";
import { PageTitle } from "@/components/common/elements/PageTitle/PageTitle";
import { renderCustomerListContent } from "./renderCustomerListContent";

export const CustomerListPage = () => {
  const [keyword, setKeyword] = useState("");
  return (
    <Stack spacing={2}>
      <Header />
      <PageTitle title="顧客一覧" />
      <Paper sx={{ p: 2 }}>
        <Stack spacing={2}>
          <TextField
            label="キーワード"
            inputProps={{ "aria-label": "keyword" }}
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          {renderCustomerListContent(keyword)}
        </Stack>
      </Paper>
    </Stack>
  );
};
