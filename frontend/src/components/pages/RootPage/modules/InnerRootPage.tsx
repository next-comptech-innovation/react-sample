import { Button, Paper, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const InnerRootPage = () => (
  <Paper sx={{ p: 3 }}>
    <Stack spacing={2}>
      <Typography variant="body1">顧客管理アプリへようこそ</Typography>
      <Button component={Link} to="/customers" variant="contained" sx={{ width: "fit-content" }}>
        顧客一覧へ
      </Button>
    </Stack>
  </Paper>
);
