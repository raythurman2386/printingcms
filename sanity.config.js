// sanity.config.js
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schema from "./schemas/schema";

export default defineConfig({
  title: "printing-cms",
  projectId: "wqdnxsmi",
  dataset: "production",
  plugins: [deskTool()],
  schema: {
    types: schema,
  },
});
