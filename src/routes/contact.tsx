import { createFileRoute } from "@tanstack/react-router";
import { EnquiryPage } from "@/components/graduater/enquiry";
import { pageHead } from "@/data/catalog";
export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead(
      "Contact GRADUATER",
      "Plan your international education journey with personalised GRADUATER guidance.",
    ),
  component: Page,
});
function Page() {
  return <EnquiryPage contact={true} />;
}
