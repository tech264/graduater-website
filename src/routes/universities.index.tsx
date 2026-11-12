import { createFileRoute } from "@tanstack/react-router";
import { Universities } from "@/components/graduater/directories";
import { pageHead } from "@/data/catalog";
export const Route = createFileRoute("/universities/")({
  validateSearch: (
    input: Record<string, unknown>,
  ): { q?: string; country?: string; course?: string; level?: string } => ({
    q: typeof input["q"] === "string" ? input["q"] : "",
    country: typeof input["country"] === "string" ? input["country"] : "",
    course: typeof input["course"] === "string" ? input["course"] : "",
    level: typeof input["level"] === "string" ? input["level"] : "",
  }),
  head: () =>
    pageHead(
      "University Discovery",
      "Compare illustrative university profiles by destination, course and degree level.",
    ),
  component: Universities,
});
