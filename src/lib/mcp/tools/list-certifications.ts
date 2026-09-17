import { defineTool } from "@lovable.dev/mcp-js";
import { certifications } from "../data";

export default defineTool({
  name: "list_certifications",
  title: "List certifications and training",
  description: "List Muhammad Uzair's certifications and professional training with issuer and year.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(certifications, null, 2) }],
    structuredContent: { certifications },
  }),
});
