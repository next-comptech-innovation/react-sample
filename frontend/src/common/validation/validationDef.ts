import { z } from "zod";
export const customerSearchSchema = z.object({ keyword: z.string().max(100).optional() });
