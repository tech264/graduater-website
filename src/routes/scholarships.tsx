import { createFileRoute } from "@tanstack/react-router";
import { Scholarships } from "@/components/graduater/information";
import { pageHead } from "@/data/catalog";
export const Route = createFileRoute("/scholarships")({
  head: () =>
    pageHead(
      "Scholarship Guidance",
      "Understand scholarship sources, eligibility and funding applications for international study.",
    ),
  component: Scholarships,
});
