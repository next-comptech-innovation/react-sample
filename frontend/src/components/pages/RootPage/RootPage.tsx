import { Stack } from "@mui/material";
import { Header } from "@/components/common/modules/Header/Header";
import { InnerRootPage } from "./modules/InnerRootPage";

export const RootPage = () => (
  <Stack spacing={3}>
    <Header />
    <InnerRootPage />
  </Stack>
);
