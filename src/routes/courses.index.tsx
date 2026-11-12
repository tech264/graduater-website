import { createFileRoute } from "@tanstack/react-router";
import { Courses } from "@/components/graduater/directories";
import { pageHead } from "@/data/catalog";
export const Route = createFileRoute("/courses/")({
  head: () =>
    pageHead(
      "Explore Courses",
      "Find international undergraduate, postgraduate, diploma and research course categories.",
    ),
  component: Courses,
});
