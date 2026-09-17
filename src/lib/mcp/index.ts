import { defineMcp, auth } from "@lovable.dev/mcp-js";
import getProfileTool from "./tools/get-profile";
import listSkillsTool from "./tools/list-skills";
import listWorkExperienceTool from "./tools/list-work-experience";
import listEducationTool from "./tools/list-education";
import listCertificationsTool from "./tools/list-certifications";
import getContactTool from "./tools/get-contact";

// Public Supabase project URL (also shipped to the browser as VITE_SUPABASE_URL).
const SUPABASE_URL = "https://c--04ee7d16-433c-4e07-956c-732095444a67-prod.lovable.cloud";

export default defineMcp({
  name: "muhammad-uzair-portfolio",
  title: "Muhammad Uzair — Portfolio",
  version: "0.1.0",
  instructions:
    "Tools for Muhammad Uzair's data analytics and AI/ML portfolio. Use `get_profile` for the bio, `list_skills`, `list_work_experience`, `list_education`, `list_certifications` for resume sections, and `get_contact` for contact details.",
  auth: auth.oauth.issuer({
    issuer: `${SUPABASE_URL}/auth/v1`,
    acceptedAudiences: "authenticated",
    jwksUri: `${SUPABASE_URL}/auth/v1/.well-known/jwks.json`,
    resourceName: "Muhammad Uzair — Portfolio",
  }),
  tools: [
    getProfileTool,
    listSkillsTool,
    listWorkExperienceTool,
    listEducationTool,
    listCertificationsTool,
    getContactTool,
  ],
});
