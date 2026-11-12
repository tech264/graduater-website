import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/graduater/information";
import { pageHead } from "@/data/catalog";
export const Route = createFileRoute("/about")({
  head: () =>
    pageHead(
      "About GRADUATER",
      "Meet GRADUATER and explore our personalised approach to international education guidance.",
    ),
  component: About,
});
