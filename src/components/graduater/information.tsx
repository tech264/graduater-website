import { Link } from "@tanstack/react-router";
import { Check, ArrowUpRight, Award, GraduationCap, Landmark, Wallet, Users } from "lucide-react";
import campus from "@/assets/campus-students.jpg";
import { Button } from "@/components/ui/button";
import { services, countries } from "@/data/catalog";
import { Banner, CTA, SectionHeading, FAQ } from "./shared";
export function About() {
  return (
    <>
      <Banner
        title="Global Ambitions. Personal Guidance."
        description="We are GRADUATER — your partner in exploring international education opportunities and making thoughtful decisions about your future."
      />
      <section className="section">
        <div className="wrap split-section">
          <div>
            <div className="eyebrow">Your gateway to global education</div>
            <h2>
              A New Chapter,
              <br />
              With You at the Centre.
            </h2>
            <p className="body-copy">
              GRADUATER helps Indian students explore undergraduate, postgraduate, diploma and
              doctoral programmes around the world. Our approach starts with understanding your
              academic background, interests and ambitions.
            </p>
            <p className="body-copy mt-4">
              We bring clarity to course selection, university shortlisting and the application
              journey, with guidance that respects your circumstances and keeps your goals at the
              centre.
            </p>
          </div>
          <img
            src={campus}
            className="split-photo"
            alt="Students connecting on a university campus"
            width={1920}
            height={1024}
            loading="lazy"
          />
        </div>
      </section>
      <section className="section muted">
        <div className="wrap grid-3">
          {[
            [
              "Our Vision",
              "Make global education more accessible through informed choices and personalised guidance.",
            ],
            [
              "Our Mission",
              "Help students identify suitable programmes and navigate their application journey with practical, transparent support.",
            ],
            [
              "Our Approach",
              "Listen first. Explore options together. Explain requirements clearly. Support the decisions that are right for you.",
            ],
          ].map(([t, p]) => (
            <div key={t}>
              <div className="eyebrow">GRADUATER</div>
              <h2 className="text-2xl">{t}</h2>
              <p className="body-copy text-sm">{p}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <SectionHeading eyebrow="Guidance at every step" title="More Than Admissions." />
          <div className="grid-3">
            {services.map((s) => (
              <div className="course-card" key={s}>
                <Check className="text-primary mb-4" />
                <h3>{s}</h3>
                <p>
                  Personalised support tailored to your goals, your options and the next step in
                  your journey.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section muted">
        <div className="wrap">
          <SectionHeading
            eyebrow="People behind your journey"
            title="Meet Your Guidance Team."
            description="Team profiles will be published when approved names, photographs and biographies are supplied."
          />
          <div className="grid-3">
            {["Education Counsellor", "Admissions Adviser", "Student Support Adviser"].map((t) => (
              <div className="course-card" key={t}>
                <Users className="text-primary mb-4" />
                <span className="sample-label">Team profile placeholder</span>
                <h3>{t}</h3>
                <p>Name, photograph and professional biography awaiting confirmation.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
export function Scholarships() {
  const categories = [
    [
      Award,
      "Merit-Based Scholarships",
      "May consider academic performance, achievements or other selection criteria.",
    ],
    [
      GraduationCap,
      "University Scholarships",
      "Institution-funded awards may be available for eligible international applicants.",
    ],
    [
      Landmark,
      "Government Scholarships",
      "Some public funding programmes support specific destinations, subjects or applicant groups.",
    ],
    [
      Wallet,
      "International Student Funding",
      "Explore foundations, research funding and other approved funding sources.",
    ],
  ] as const;
  return (
    <>
      <Banner
        title="Invest in Your Possibilities."
        description="Explore funding sources, understand eligibility and prepare thoughtful scholarship applications. No awards, amounts or deadlines are presented as verified offers."
      />
      <section className="section">
        <div className="wrap">
          <SectionHeading
            eyebrow="Understand your options"
            title="Funding Your Global Education."
          />
          <div className="grid-4">
            {categories.map(([Icon, t, p]) => (
              <div className="course-card" key={t}>
                <Icon className="text-primary mb-5" />
                <h3>{t}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section muted">
        <div className="wrap detail-grid">
          <div>
            <h2>Country-Specific Opportunities.</h2>
            <p className="body-copy">
              Scholarship availability varies by country, study level and institution. Use official
              government and university funding pages to verify each opportunity.
            </p>
            <div className="pills mt-5">
              {countries.map((c) => (
                <Link
                  key={c.slug}
                  className="pill"
                  to="/study-destinations/$slug"
                  params={{ slug: c.slug }}
                >
                  {c.flag} {c.name} →
                </Link>
              ))}
            </div>
            <h2 className="mt-10">A Strong Application Starts Early.</h2>
            <ol className="list-decimal pl-5 text-muted-foreground space-y-4">
              <li>Find official scholarship information and read the complete criteria.</li>
              <li>Check nationality, degree level, subject and admission requirements.</li>
              <li>Prepare academic records, references and a focused personal statement.</li>
              <li>Confirm the award covers the costs you expect it to cover.</li>
              <li>Track official deadlines and submit through the correct channel.</li>
            </ol>
          </div>
          <aside className="detail-sidebar">
            <h3>Keep your plan realistic.</h3>
            <p>
              Scholarships are competitive. Maintain a funding plan that does not depend on an
              unconfirmed award.
            </p>
            <Button variant="navy" asChild>
              <Link to="/free-counselling">
                Get Funding Guidance <ArrowUpRight />
              </Link>
            </Button>
          </aside>
        </div>
      </section>
      <section className="section">
        <div className="wrap faq-layout">
          <h2>Your Funding Questions.</h2>
          <FAQ
            items={[
              [
                "Does a scholarship cover all expenses?",
                "Not always. Some awards cover only a portion of tuition, while others may include additional support. Read the award terms and budget for the remaining costs.",
              ],
              [
                "Do I need an offer before applying?",
                "Some scholarships require an admission offer; others have separate application timelines. Check each provider’s process.",
              ],
              [
                "Can GRADUATER guarantee funding?",
                "No. We can help you understand options and prepare documents, but selection is made by the funding provider.",
              ],
            ]}
          />
        </div>
      </section>
      <CTA />
    </>
  );
}
export function Legal({ kind }: { kind: "privacy" | "terms" | "disclaimer" }) {
  const titles = {
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
    disclaimer: "Disclaimer",
  };
  return (
    <>
      <Banner
        title={titles[kind]}
        description="Transparent information about this initial GRADUATER website."
      />
      <section className="section">
        <div className="wrap article-reading">
          <p className="sample-label">Initial policy draft · business and legal review pending.</p>
          {kind === "privacy" ? (
            <>
              <h2>Your enquiry information</h2>
              <p>
                This initial website does not send counselling forms to GRADUATER or store them in a
                company database. The information remains in the open page and can be downloaded to
                your device as a text draft. Closing or refreshing the page clears the draft from
                the page.
              </p>
              <h2>Website services</h2>
              <p>
                The website loads fonts and photographs through external hosting services. Hosting
                infrastructure may process standard technical request information. A complete list
                of providers and retention policies must be confirmed before finalising this policy.
              </p>
              <h2>Contact and future changes</h2>
              <p>
                Business contact details are awaiting confirmation. Any future enquiry delivery,
                analytics or account features require updated privacy information before use.
              </p>
            </>
          ) : kind === "terms" ? (
            <>
              <h2>Educational information</h2>
              <p>
                Use this website as a starting point for exploration. Programme, university and
                immigration requirements must be checked with official providers before acting.
              </p>
              <h2>Illustrative content</h2>
              <p>
                Sample university profiles and story previews are clearly labelled and do not
                represent verified partnerships, student reviews or confirmed programme
                availability.
              </p>
              <h2>No guaranteed outcomes</h2>
              <p>
                Guidance does not guarantee admission, scholarship selection, visa approval,
                employment or residency. A final service agreement and business contact information
                are awaiting legal review.
              </p>
            </>
          ) : (
            <>
              <h2>Accuracy and verification</h2>
              <p>
                General educational content is not legal, immigration or financial advice.
                Requirements and opportunities can change. Confirm current details with
                universities, funding providers and relevant authorities.
              </p>
              <h2>University and student content</h2>
              <p>
                Initial university profiles are illustrative and are not verified institutions or
                partnerships. Destination photographs do not represent verified campuses.
                Placeholder stories are not student testimonials.
              </p>
              <h2>Enquiry handling</h2>
              <p>
                Forms prepare a local draft only. An enquiry has not been submitted unless an actual
                delivery integration is configured and confirms receipt.
              </p>
            </>
          )}
        </div>
      </section>
    </>
  );
}
