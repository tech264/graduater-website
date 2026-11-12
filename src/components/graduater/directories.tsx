import { useState } from "react";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { countries, courses, articles, filterUniversities, levels } from "@/data/catalog";
import { CountryCard, CourseCard, UniversityCard, ArticleCard, Banner, CTA } from "./shared";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";
export function Destinations() {
  const [q, setQ] = useState(""),
    [region, setRegion] = useState("");
  const results = countries.filter(
    (c) => c.name.toLowerCase().includes(q.toLowerCase()) && (!region || c.region === region),
  );
  return (
    <>
      <Banner
        title="Discover Your Next Destination."
        description="Nine destinations. A world of new perspectives. Find the right setting for your academic ambitions."
      />
      <section className="section">
        <div className="wrap">
          <div className="filters">
            <input
              aria-label="Search destinations"
              className="filter-input"
              placeholder="Search countries…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
            <select
              aria-label="Filter by region"
              className="filter-select"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
            >
              <option value="">All regions</option>
              {["Europe", "North America", "Oceania"].map((r) => (
                <option key={r}>{r}</option>
              ))}
            </select>
            <Button
              variant="outline"
              className="h-[46px]"
              onClick={() => {
                setQ("");
                setRegion("");
              }}
              aria-label="Reset destination filters"
            >
              <RotateCcw />
            </Button>
          </div>
          <p className="results-count">{results.length} destinations to explore</p>
          <div className="grid-3">
            {results.map((c) => (
              <CountryCard key={c.slug} country={c} />
            ))}
          </div>
          {!results.length && <Empty />}
        </div>
      </section>
      <CTA />
    </>
  );
}
export function Courses() {
  const [q, setQ] = useState(""),
    [category, setCategory] = useState("");
  const results = courses.filter(
    (c) =>
      (c.name + " " + c.specialisations.join(" ")).toLowerCase().includes(q.toLowerCase()) &&
      (!category || category === c.slug),
  );
  return (
    <>
      <Banner
        title="Find Your Direction."
        description="Explore undergraduate, postgraduate, diploma and doctoral pathways that turn your interests into possibilities."
      />
      <section className="section">
        <div className="wrap">
          <div className="filters">
            <input
              aria-label="Search courses"
              className="filter-input"
              placeholder="Search courses or specialisations…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
            <select
              aria-label="Filter course category"
              className="filter-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">All categories</option>
              {courses.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </select>
            <Button
              variant="outline"
              className="h-[46px]"
              aria-label="Reset course filters"
              onClick={() => {
                setQ("");
                setCategory("");
              }}
            >
              <RotateCcw />
            </Button>
          </div>
          <p className="results-count">{results.length} course categories</p>
          <div className="grid-3">
            {results.map((c) => (
              <CourseCard key={c.slug} course={c} />
            ))}
          </div>
          {!results.length && <Empty />}
        </div>
      </section>
      <CTA />
    </>
  );
}
export function Universities() {
  const search = useSearch({ from: "/universities/" });
  const navigate = useNavigate({ from: "/universities/" });
  const { q = "", country = "", course = "", level = "" } = search;
  function update(next: Partial<typeof search>) {
    navigate({ search: { ...search, ...next }, replace: true });
  }
  const results = filterUniversities(q, country, course, level);
  return (
    <>
      <Banner
        title="Find a Place to Belong."
        description="Explore university possibilities by destination, subject and degree level. All current entries are illustrative, not verified institutions or partnerships."
      />
      <section className="section">
        <div className="wrap">
          <div className="filters">
            <input
              className="filter-input"
              aria-label="Search universities"
              value={q}
              onChange={(e) => update({ q: e.target.value })}
              placeholder="Search university or city…"
            />
            <select
              className="filter-select"
              aria-label="University country"
              value={country}
              onChange={(e) => update({ country: e.target.value })}
            >
              <option value="">All countries</option>
              {countries.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </select>
            <select
              className="filter-select"
              aria-label="University course"
              value={course}
              onChange={(e) => update({ course: e.target.value })}
            >
              <option value="">All subjects</option>
              {courses.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </select>
            <select
              className="filter-select"
              aria-label="University degree level"
              value={level}
              onChange={(e) => update({ level: e.target.value })}
            >
              <option value="">All study levels</option>
              {levels.map((l) => (
                <option key={l}>{l}</option>
              ))}
            </select>
            <Button
              variant="outline"
              className="h-[46px]"
              aria-label="Reset university filters"
              onClick={() => update({ q: "", country: "", course: "", level: "" })}
            >
              <RotateCcw />
            </Button>
          </div>
          <p className="results-count">
            {results.length} illustrative listings · programme availability requires verification
          </p>
          <div className="grid-3">
            {results.map((u) => (
              <UniversityCard key={u.slug} university={u} />
            ))}
          </div>
          {!results.length && <Empty />}
        </div>
      </section>
      <CTA />
    </>
  );
}
export function Resources() {
  const [q, setQ] = useState(""),
    [category, setCategory] = useState("");
  const results = articles.filter(
    (a) =>
      (a.title + " " + a.description).toLowerCase().includes(q.toLowerCase()) &&
      (!category || category === a.category),
  );
  return (
    <>
      <Banner
        title="Ideas for Your Next Chapter."
        description="Thoughtful guides, practical checklists and destination insights for your global education journey."
      />
      <section className="section">
        <div className="wrap">
          <div className="filters">
            <input
              className="filter-input"
              aria-label="Search articles"
              placeholder="Search education insights…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
            <select
              aria-label="Filter article category"
              className="filter-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">All articles</option>
              {["Study planning", "Destinations", "Applications", "Scholarships"].map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
            <Button
              variant="outline"
              className="h-[46px]"
              aria-label="Reset article filters"
              onClick={() => {
                setQ("");
                setCategory("");
              }}
            >
              <RotateCcw />
            </Button>
          </div>
          <p className="results-count">{results.length} education insights</p>
          {!q && !category && (
            <div className="mb-5">
              <span className="eyebrow">Featured insight</span>
            </div>
          )}
          <div className="grid-3">
            {results.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
          {!results.length && <Empty />}
        </div>
      </section>
      <CTA />
    </>
  );
}
function Empty() {
  return (
    <div className="empty-state">
      <h3>No matches yet.</h3>
      <p>Try a different search or clear a filter to explore more possibilities.</p>
    </div>
  );
}
