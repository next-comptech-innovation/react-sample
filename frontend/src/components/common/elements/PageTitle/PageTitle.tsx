import { Typography } from "@mui/material";

type Props = { title: string };

export const PageTitle = ({ title }: Props) => (
  <Typography variant="h4" component="h1" sx={{ mt: 3, mb: 2 }}>
    {title}
  </Typography>
);
