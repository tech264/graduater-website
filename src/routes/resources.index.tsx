import { createFileRoute } from "@tanstack/react-router";
import { Resources } from "@/components/graduater/directories";
import { pageHead } from "@/data/catalog";
export const Route = createFileRoute("/resources/")({
  head: () =>
    pageHead(
      "Education Insights",
      "Read study planning, destination, scholarship and application guides.",
    ),
  component: Resources,
});
