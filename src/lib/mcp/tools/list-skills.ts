import { defineTool } from "@lovable.dev/mcp-js";
import { skills } from "../data";

export default defineTool({
  name: "list_skills",
  title: "List skills",
  description: "List the photography and creative-direction skills shown on the portfolio.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: skills.join("\n") }],
    structuredContent: { skills },
  }),
});
