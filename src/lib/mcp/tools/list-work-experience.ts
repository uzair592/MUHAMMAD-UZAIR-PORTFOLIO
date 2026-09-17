import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { experiences } from "../data";

export default defineTool({
  name: "list_work_experience",
  title: "List work experience",
  description:
    "List Muhammad Uzair's professional roles, with company, location, period, description and skills. Optionally filter by a search term.",
  inputSchema: {
    query: z
      .string()
      .optional()
      .describe("Optional case-insensitive term to match against role title, company, location or description."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query }) => {
    const term = query?.trim().toLowerCase();
    const items = term
      ? experiences.filter((e) =>
          [e.title, e.company, e.location, e.description, ...e.skills]
            .join(" ")
            .toLowerCase()
            .includes(term),
        )
      : experiences;
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { experiences: items },
    };
  },
});
