import { createFileRoute, notFound } from "@tanstack/react-router";
import { UniversityDetail } from "@/components/graduater/details";
import { universities, pageHead } from "@/data/catalog";
export const Route = createFileRoute("/universities/$slug")({
  loader: ({ params }) => {
    const item = universities.find((x) => x.slug === params.slug);
    if (!item) throw notFound();
    return item;
  },
  head: ({ loaderData: item }) =>
    item
      ? pageHead(
          item.name,
          "Illustrative university profile. Institution information requires verification.",
        )
      : pageHead("Unavailable", "The requested GRADUATER page could not be found."),
  component: Page,
});
function Page() {
  const { slug } = Route.useParams();
  return <UniversityDetail slug={slug} />;
}
