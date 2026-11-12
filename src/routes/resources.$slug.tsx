import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArticleDetail } from "@/components/graduater/details";
import { articles, pageHead } from "@/data/catalog";
export const Route = createFileRoute("/resources/$slug")({
  loader: ({ params }) => {
    const item = articles.find((x) => x.slug === params.slug);
    if (!item) throw notFound();
    return item;
  },
  head: ({ loaderData: item }) =>
    item
      ? {
          ...pageHead(item.title, item.description),
          scripts: [{
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: item.title,
              description: item.description,
              datePublished: "2026-11-12",
              author: { "@type": "Organization", name: "GRADUATER" },
            }),
          }],
        }
      : pageHead("Unavailable", "The requested GRADUATER page could not be found."),
  component: Page,
});
function Page() {
  const { slug } = Route.useParams();
  return <ArticleDetail slug={slug} />;
}
