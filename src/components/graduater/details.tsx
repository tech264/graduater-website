import { Link } from "@tanstack/react-router";
import { countries, courses, universities, articles, levels, steps, faqs } from "@/data/catalog";
import {
  AdviceSidebar,
  Banner,
  CTA,
  CountryCard,
  CourseCard,
  UniversityCard,
  ArticleCard,
  FAQ,
  SectionHeading,
} from "./shared";
import type { ReactNode } from "react";
function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="detail-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}
const verification =
  "Current institution-specific details are awaiting verification. Confirm the latest requirements directly with the university and relevant official authorities before applying.";
export function CountryDetail({ slug }: { slug: string }) {
  const c = countries.find((c) => c.slug === slug);
  if (!c) return null;
  const examples = universities.filter((u) => u.country === slug);
  return (
    <>
      <Banner
        title={`Study in ${c.name}.`}
        description={`${c.description} Explore your next academic chapter with personalised guidance from GRADUATER.`}
        parent={{ name: "Study Destinations", to: "/study-destinations" }}
      />
      <section className="section">
        <div className="wrap detail-grid">
          <div>
            <img
              className="detail-cover"
              src={c.image}
              alt={`${c.city}, ${c.name}`}
              width={1000}
              height={650}
            />
            <Block title={`Your education journey in ${c.name}`}>
              <p>
                Choosing {c.name} means considering not just a programme, but the academic
                environment, everyday life and community around it. Start with your interests,
                compare recognised institutions and make a shortlist that fits your plans.
              </p>
            </Block>
            <Block title={`Why study in ${c.name}?`}>
              <ul>
                <li>
                  Explore an international academic environment and different approaches to
                  learning.
                </li>
                <li>Experience life in {c.city} and other university cities.</li>
                <li>Compare subject options, learning formats and campus communities.</li>
                <li>Build cross-cultural connections and develop independent living skills.</li>
              </ul>
            </Block>
            <Block title="Universities to explore">
              <p>
                University selection should be based on recognised status, programme fit and current
                entry criteria, not unsupported rankings.
              </p>
              {examples.length ? (
                <>
                  <p className="sample-label">
                    Illustrative listings only; no affiliation or verified programme availability is
                    implied.
                  </p>
                  <div className="grid-3 mt-5">
                    {examples.map((u) => (
                      <UniversityCard key={u.slug} university={u} />
                    ))}
                  </div>
                </>
              ) : (
                <p>Verified university listings for {c.name} are awaiting approved information.</p>
              )}
            </Block>
            <Block title="Available courses">
              <p>
                Explore these subject areas as a starting point. Availability in {c.name} must be
                confirmed for each institution and intake.
              </p>
              <div className="grid-3 mt-5">
                {courses.slice(0, 3).map((c) => (
                  <CourseCard key={c.slug} course={c} />
                ))}
              </div>
              <Link className="text-link mt-5" to="/courses">
                Explore all course categories →
              </Link>
            </Block>
            <Block title="Bachelor’s and Master’s options">
              <h3>Undergraduate study</h3>
              <p>
                Compare recognised school-leaving qualifications, required subjects, foundation
                pathways and teaching language.
              </p>
              <h3>Postgraduate study</h3>
              <p>
                Review relevant bachelor’s degree requirements, experience, research interests and
                any programme-specific tests or portfolios. Diploma and doctoral routes may also be
                available.
              </p>
            </Block>
            <Block title="Tuition fees and living costs">
              <p>
                No verified cost figures have been supplied. Request current tuition from each
                university, then budget separately for housing, food, transport, insurance, travel
                and visa-related expenses.
              </p>
            </Block>
            <Block title="Eligibility and English language requirements">
              <p>
                Academic entry standards and language evidence vary by university and course.
                English-taught programmes may accept IELTS, TOEFL or other evidence, but exemptions
                are not universal. Confirm any additional visa language requirements.
              </p>
              <p>{verification}</p>
            </Block>
            <Block title="Scholarship opportunities">
              <p>
                Explore university awards, government funding and subject-specific opportunities.
                Eligibility, availability and deadlines need to be checked with the provider.
              </p>
              <Link className="text-link" to="/scholarships">
                Explore scholarship guidance →
              </Link>
            </Block>
            <Block title="Admission process">
              <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                {steps.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ol>
            </Block>
            <Block title="Visa information">
              <p>
                A university offer does not guarantee a visa. Check the official immigration
                authority for the correct student visa route, funds evidence, required documents,
                health or insurance conditions and processing guidance. Requirements may change.
              </p>
            </Block>
            <Block title={`Questions about studying in ${c.name}`}>
              <FAQ items={faqs.slice(2, 9)} />
            </Block>
          </div>
          <AdviceSidebar />
        </div>
      </section>
      <section className="section muted">
        <div className="wrap">
          <SectionHeading eyebrow="Keep exploring" title="Other Destinations to Consider." />
          <div className="grid-3">
            {countries
              .filter((x) => x.slug !== slug)
              .slice(0, 3)
              .map((c) => (
                <CountryCard key={c.slug} country={c} />
              ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
export function CourseDetail({ slug }: { slug: string }) {
  const c = courses.find((c) => c.slug === slug);
  if (!c) return null;
  const examples = universities.filter((u) => u.categories.includes(slug));
  return (
    <>
      <Banner
        title={c.name}
        description={
          c.description + " Explore international pathways that fit your academic interests."
        }
        parent={{ name: "Explore Courses", to: "/courses" }}
      />
      <section className="section">
        <div className="wrap detail-grid">
          <div>
            <Block title="Course overview">
              <p>
                {c.name} offers a range of academic pathways for students who want to deepen their
                knowledge and develop practical skills. Compare the curriculum, assessment style and
                programme aims before choosing an institution.
              </p>
            </Block>
            <Block title="What you could learn">
              <p>
                Programmes can combine foundational theory, subject-specific methods, applied
                projects and independent research. Exact module content depends on the programme;
                review the published curriculum rather than relying on a broad category description.
              </p>
            </Block>
            <Block title="Popular specialisations">
              <ul>
                {c.specialisations.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </Block>
            <Block title="Degree levels">
              <div className="pills">
                {levels.map((l) => (
                  <span className="pill" key={l}>
                    {l}
                  </span>
                ))}
              </div>
              <p>
                Qualification titles and entry routes differ by country and institution. Doctoral
                study usually requires a research proposal and suitable supervision.
              </p>
            </Block>
            <Block title="Destinations to explore">
              <p>
                Use these destinations as a starting point, then verify the specific course and
                teaching language for your intended intake.
              </p>
              <div className="grid-3 mt-5">
                {countries.slice(0, 3).map((c) => (
                  <CountryCard key={c.slug} country={c} />
                ))}
              </div>
            </Block>
            <Block title="University discovery">
              <p className="sample-label">
                Illustrative university content, not verified programme availability.
              </p>
              <div className="grid-3 mt-5">
                {examples.map((u) => (
                  <UniversityCard key={u.slug} university={u} />
                ))}
              </div>
            </Block>
            <Block title="Eligibility">
              <p>
                Academic qualifications, grades, relevant subjects, language evidence and experience
                may be considered. Some programmes require a portfolio, interview or entrance
                assessment. {verification}
              </p>
            </Block>
            <Block title="Tuition and funding">
              <p>
                Verified programme fees have not been supplied. Check the university’s current fee
                schedule and explore funding criteria before making financial commitments.
              </p>
              <Link to="/scholarships" className="text-link">
                Explore funding guidance →
              </Link>
            </Block>
            <Block title="Career pathways">
              <p>
                Depending on your specialisation, you may explore professional or research pathways
                related to {c.specialisations.join(", ").toLowerCase()}. Outcomes depend on your
                skills, experience, local regulations and employment conditions; no job or salary is
                guaranteed.
              </p>
            </Block>
            <Block title="Frequently asked questions">
              <FAQ
                items={[
                  [
                    `How do I choose a ${c.name} programme?`,
                    "Compare the modules, learning approach, entry requirements, teaching language and recognised qualification. Look for a programme that supports your own goals.",
                  ],
                  [
                    "Can I change subject at postgraduate level?",
                    "Some programmes accept students from different academic backgrounds; others have strict subject prerequisites. Check each programme individually.",
                  ],
                  [
                    "Are scholarships available?",
                    "Funding may be offered by governments or institutions. Awards, eligibility and availability require provider verification.",
                  ],
                ]}
              />
            </Block>
          </div>
          <AdviceSidebar />
        </div>
      </section>
      <section className="section muted">
        <div className="wrap">
          <SectionHeading eyebrow="Broaden your options" title="Related Areas to Explore." />
          <div className="grid-3">
            {courses
              .filter((x) => x.slug !== slug)
              .slice(0, 3)
              .map((c) => (
                <CourseCard key={c.slug} course={c} />
              ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
export function UniversityDetail({ slug }: { slug: string }) {
  const u = universities.find((u) => u.slug === slug);
  if (!u) return null;
  const c = countries.find((c) => c.slug === u.country);
  return (
    <>
      <Banner
        title={u.name}
        description={`Illustrative university profile in ${u.city}, ${c?.name}. This is sample content, not a verified institution, partnership or programme listing.`}
        parent={{ name: "Universities", to: "/universities" }}
      />
      <section className="section">
        <div className="wrap detail-grid">
          <div>
            <img
              className="detail-cover"
              src={c?.image}
              alt={`${u.city} destination photograph; not a verified university campus`}
              width={1000}
              height={650}
            />
            <p className="sample-label">
              Sample profile · all institution details require approved information.
            </p>
            <Block title="University overview">
              <p>
                This illustrative profile shows the information to consider when comparing
                universities. A verified overview, recognised institution name, official website and
                campus information are awaiting supplied content.
              </p>
            </Block>
            <Block title="Location">
              <p>
                {u.city}, {c?.name}. The photograph shows the destination, not a verified campus.
              </p>
              <Link
                to="/study-destinations/$slug"
                params={{ slug: u.country }}
                className="text-link"
              >
                Explore {c?.name} →
              </Link>
            </Block>
            <Block title="Illustrative programme areas">
              <div className="grid-3">
                {courses
                  .filter((c) => u.categories.includes(c.slug))
                  .map((c) => (
                    <CourseCard key={c.slug} course={c} />
                  ))}
              </div>
            </Block>
            <Block title="Illustrative degree levels">
              <div className="pills">
                {u.levels.map((l) => (
                  <span className="pill" key={l}>
                    {l}
                  </span>
                ))}
              </div>
              <p>These are sample degree categories. No availability has been confirmed.</p>
            </Block>
            {["Tuition details", "Entry requirements", "Scholarship information"].map((t) => (
              <Block title={t} key={t}>
                <p>
                  {verification} No fees, awards, entry criteria or accreditations have been
                  invented for this sample profile.
                </p>
              </Block>
            ))}
            <Block title="Admission process">
              <p>
                For a verified institution, check application dates, academic prerequisites and
                documentation. Prepare records and language evidence, submit through the official
                channel, then review any offer conditions and visa steps.
              </p>
            </Block>
          </div>
          <AdviceSidebar />
        </div>
      </section>
      <CTA />
    </>
  );
}
export function ArticleDetail({ slug }: { slug: string }) {
  const a = articles.find((a) => a.slug === slug);
  if (!a) return null;
  const subject =
    slug === "study-in-germany"
      ? "Germany"
      : slug === "study-in-the-uk"
        ? "the United Kingdom"
        : "your chosen destination";
  const scholarship = a.category === "Scholarships";
  return (
    <>
      <Banner
        title={a.title}
        description={a.description}
        parent={{ name: "Resources", to: "/resources" }}
      />
      <section className="section">
        <article className="wrap article-reading">
          <div className="small-label mb-5">
            {a.category} · 12 November 2026 · GRADUATER Editorial
          </div>
          <img src={a.image} alt={a.title} className="detail-cover" width={1000} height={650} />
          <p>
            {a.description} A successful plan starts with understanding your own priorities and
            checking the details that matter to you.
          </p>
          <h2>
            {scholarship ? "Understand where funding comes from" : "Start with your academic goals"}
          </h2>
          <p>
            {scholarship
              ? "Scholarships may be offered by individual universities, government programmes, charitable foundations or subject-focused organisations. Some are merit-based; others consider financial need, research interests or particular applicant backgrounds."
              : "Think about what you want to learn, the qualification you need and the type of academic environment in which you work best. Compare specific course content instead of choosing solely by country reputation."}
          </p>
          <h2>
            {scholarship
              ? "Check eligibility before you apply"
              : "Compare programmes and destinations"}
          </h2>
          <p>
            {scholarship
              ? "Read the official criteria carefully. Nationality, study level, subject, academic record and admission status can affect eligibility. Awards may cover only part of your costs; confirm exactly what is included."
              : `When exploring ${subject}, compare the curriculum, entry prerequisites, teaching language, assessment style and campus location. Look at living arrangements, climate and how you would manage day-to-day life.`}
          </p>
          <h2>Plan a realistic budget</h2>
          <p>
            Tuition is only part of the picture. Include accommodation, food, transport, insurance,
            travel and application-related costs. Use current figures from official institutions and
            authorities. Do not assume part-time work or a scholarship will cover your expenses.
          </p>
          <h2>Prepare your documents early</h2>
          <p>
            Academic transcripts, qualification certificates, language evidence, identification,
            references and a statement of purpose may be required. Some programmes ask for a
            portfolio or research proposal. Keep a separate checklist for each application.
          </p>
          <h2>Check the official requirements</h2>
          <p>
            Admission and visa rules are separate, and both can change. Confirm deadlines and
            requirements through the university’s official admissions page and the destination’s
            immigration authority before paying fees or making travel arrangements.
          </p>
          <h2>Your next step</h2>
          <p>
            Build a shortlist, record the requirements for each option and identify the questions
            you still need answered. Personalised guidance can help you organise the process, but no
            admission, funding or visa outcome can be guaranteed.
          </p>
          <p className="small-label">
            General educational guidance, published 12 November 2026. This article is not
            immigration or financial advice. Verify current institution-specific details before
            acting.
          </p>
        </article>
      </section>
      <section className="section muted">
        <div className="wrap">
          <SectionHeading eyebrow="Keep learning" title="More Insights for Your Journey." />
          <div className="grid-3">
            {articles
              .filter((x) => x.slug !== slug)
              .slice(0, 3)
              .map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
