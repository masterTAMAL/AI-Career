export const config = {
  runtime: "nodejs", // ✅ Force Node.js runtime so Prisma uses binary engine
};

import { serve } from "inngest/next";

import { inngest } from "@/lib/inngest/client";
import { generateIndustryInsights } from "@/lib/inngest/function";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [generateIndustryInsights],
});
