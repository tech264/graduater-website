import { createFileRoute, notFound } from "@tanstack/react-router";
import { CountryDetail } from "@/components/graduater/details";
import { countries, pageHead } from "@/data/catalog";
export const Route = createFileRoute("/study-destinations/$slug")({
  loader: ({ params }) => {
    const item = countries.find((x) => x.slug === params.slug);
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
  return <CountryDetail slug={slug} />;
}
