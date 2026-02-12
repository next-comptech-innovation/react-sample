import { AppBar, Box, Link as MuiLink, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { APP_TITLE } from "@/common/constants/constants";

export const Header = () => (
  <AppBar position="static" color="primary" elevation={1}>
    <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
      <Typography variant="h6" component="strong">
        {APP_TITLE}
      </Typography>
      <Box component="nav">
        <MuiLink component={Link} to="/customers" color="inherit" underline="hover">
          顧客一覧
        </MuiLink>
      </Box>
    </Toolbar>
  </AppBar>
);
