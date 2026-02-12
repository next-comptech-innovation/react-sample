import { z } from "zod";
export const CustomerListPageSchema = z.object({ keyword: z.string().optional() });
