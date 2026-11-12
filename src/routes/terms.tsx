import { createFileRoute } from "@tanstack/react-router";
import { Legal } from "@/components/graduater/information";
import { pageHead } from "@/data/catalog";
export const Route = createFileRoute("/terms")({
  head: () =>
    pageHead("Terms & Conditions", "GRADUATER terms & conditions and initial website information."),
  component: Page,
});
function Page() {
  return <Legal kind="terms" />;
}
