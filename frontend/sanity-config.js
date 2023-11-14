import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "vg6zwgyt",
  dataset: "production",
});
