import { createFileRoute } from "@tanstack/react-router";
import { Legal } from "@/components/graduater/information";
import { pageHead } from "@/data/catalog";
export const Route = createFileRoute("/privacy-policy")({
  head: () =>
    pageHead("Privacy Policy", "GRADUATER privacy policy and initial website information."),
  component: Page,
});
function Page() {
  return <Legal kind="privacy" />;
}
