import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/components/graduater/home";
import { pageHead } from "@/data/catalog";
export const Route = createFileRoute("/")({
  head: () => ({
    ...pageHead(
      "Your Future Has No Borders",
      "Discover global universities and international courses with GRADUATER. Personalised study abroad guidance for Indian students.",
    ),
    scripts: [{type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@type":"Organization",name:"GRADUATER",slogan:"Your Gateway to Global Education.",description:"Personalised international education guidance for Indian students."})}],
  }),
  component: Home,
});
