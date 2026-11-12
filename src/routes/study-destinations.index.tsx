import { createFileRoute } from "@tanstack/react-router";
import { Destinations } from "@/components/graduater/directories";
import { pageHead } from "@/data/catalog";
export const Route = createFileRoute("/study-destinations/")({
  head: () =>
    pageHead(
      "Study Destinations",
      "Explore nine international study destinations for your next academic chapter.",
    ),
  component: Destinations,
});
