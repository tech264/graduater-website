import { createFileRoute, notFound } from "@tanstack/react-router";
import { CourseDetail } from "@/components/graduater/details";
import { courses, pageHead } from "@/data/catalog";
export const Route = createFileRoute("/courses/$slug")({
  loader: ({ params }) => {
    const item = courses.find((x) => x.slug === params.slug);
    if (!item) throw notFound();
    return item;
  },
  head: ({ loaderData: item }) =>
    item
      ? pageHead(item.name, item.description)
      : pageHead("Unavailable", "The requested GRADUATER page could not be found."),
  component: Page,
});
function Page() {
  const { slug } = Route.useParams();
  return <CourseDetail slug={slug} />;
}
