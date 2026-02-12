import { Box, CircularProgress, Typography } from "@mui/material";

export const AppLoading = () => (
  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, py: 2 }}>
    <CircularProgress size={20} />
    <Typography>読み込み中...</Typography>
  </Box>
);
