import { createFileRoute } from "@tanstack/react-router";
import { EnquiryPage } from "@/components/graduater/enquiry";
import { pageHead } from "@/data/catalog";
export const Route = createFileRoute("/free-counselling")({
  head: () =>
    pageHead(
      "Free Study Abroad Counselling",
      "Plan your international education journey with personalised GRADUATER guidance.",
    ),
  component: Page,
});
function Page() {
  return <EnquiryPage contact={false} />;
}
