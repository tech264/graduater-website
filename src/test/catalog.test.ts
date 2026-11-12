import { describe, expect, it } from "vitest";
import { countries, courses, universities, filterUniversities } from "@/data/catalog";
import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "@/routeTree.gen";
describe("Education catalogue rules", () => {
  it("includes all nine requested destinations", () => {
    expect(countries.map((c) => c.slug)).toEqual([
      "uk",
      "germany",
      "france",
      "italy",
      "canada",
      "australia",
      "netherlands",
      "poland",
      "ireland",
    ]);
  });
  it("excludes medicine and nursing programmes", () => {
    expect(courses.length).toBe(9);
    expect(JSON.stringify(courses)).not.toMatch(/\b(mbbs|medicine|nursing)\b/i);
  });
  it("matches destination, course and degree level together", () => {
    expect(filterUniversities("", "germany", "engineering", "Master's").map((u) => u.slug)).toEqual(
      ["berlin-example"],
    );
  });
  it("does not ignore an incompatible degree level", () => {
    expect(filterUniversities("", "uk", "business-management", "PhD")).toEqual([]);
  });
  it("searches university cities", () => {
    expect(filterUniversities("Toronto").map((u) => u.slug)).toEqual(["toronto-example"]);
  });
  it("routes every country, course and university to its detail template", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    for (const [base, items] of [
      ["study-destinations", countries],
      ["courses", courses],
      ["universities", universities],
    ] as const) {
      for (const item of items) {
        expect(router.matchRoutes(`/${base}/${item.slug}`).at(-1)?.routeId).toBe(`/${base}/$slug`);
      }
    }
  });
});
