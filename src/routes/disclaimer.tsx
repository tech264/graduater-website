import { createFileRoute } from "@tanstack/react-router";
import { Legal } from "@/components/graduater/information";
import { pageHead } from "@/data/catalog";
export const Route = createFileRoute("/disclaimer")({
  head: () => pageHead("Disclaimer", "GRADUATER disclaimer and initial website information."),
  component: Page,
});
function Page() {
  return <Legal kind="disclaimer" />;
}
