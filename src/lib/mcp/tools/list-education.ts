import { defineTool } from "@lovable.dev/mcp-js";
import { education } from "../data";

export default defineTool({
  name: "list_education",
  title: "List education",
  description: "List Muhammad Uzair's academic background, including institutions and programs.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(education, null, 2) }],
    structuredContent: { education },
  }),
});
