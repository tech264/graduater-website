import { SearchableSelect } from "./searchable-select";
import { Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ArrowLeft,
  BookOpen,
  MapPin,
  GraduationCap,
  ShieldCheck,
  Globe2,
  Compass,
  FileCheck2,
  Users,
  Lightbulb,
  Building2,
  Network,
  HeartHandshake,
  Check,
  Award,
  Wallet,
  Landmark,
  Quote,
} from "lucide-react";
const heroPortrait = "/images/graduater-hero-portrait.webp";
import { TestimonialPreview } from "./testimonial-preview";
import library from "@/assets/campus-library.jpg";
import { Button } from "@/components/ui/button";
import {
  countries,
  courses,
  universities,
  articles,
  levels,
  faqs,
  steps,
  services,
} from "@/data/catalog";
import {
  CountryCard,
  CourseCard,
  UniversityCard,
  ArticleCard,
  SectionHeading,
  CTA,
  FAQ,
  Reveal,
} from "./shared";
export function Home() {
  const navigate = useNavigate();
  const [course, setCourse] = useState(""),
    [country, setCountry] = useState(""),
    [level, setLevel] = useState(""),
    [story, setStory] = useState(0);
  const storyTypes = ["Undergraduate journey", "Postgraduate journey", "Research journey"];
  return (
    <div className="homepage">
      <section className="hero">
        <div className="wrap hero-inner">
          <div className="hero-content">
            <div className="eyebrow">Your gateway to global education</div>
            <h1>
              Your Future
              <br />
              Has{" "}
              <span>
                No Borders<span className="hero-period">.</span>
              </span>
            </h1>
            <p className="hero-copy">
              Discover global universities, explore international courses and take the next step
              towards your dream career with GRADUATER.
            </p>
            <div className="hero-buttons">
              <Button variant="yellow" asChild className="h-12 px-6">
                <Link to="/courses">
                  Explore Courses <ArrowUpRight />
                </Link>
              </Button>
              <Button variant="heroOutline" asChild className="h-12 px-6">
                <Link to="/free-counselling">
                  Book Free Counselling <ArrowRight />
                </Link>
              </Button>
            </div>
            <div className="hero-note">
              <ShieldCheck />
              <span>
                Personalised Guidance. Global Possibilities.
                <br />
                Your Ambition First.
              </span>
            </div>
          </div>
          <div className="hero-visual student-composition">
            <div className="student-backdrop" aria-hidden="true" />
            <div className="student-frame">
              <img
                className="student-cutout"
                src={heroPortrait}
                alt="Smiling GRADUATER advisor in a dark suit holding a phone"
                width={1080}
                height={1330}
                fetchPriority="high"
              />
            </div>
            {[
              {
                title: "Explore Universities",
                copy: "Find your place",
                to: "/universities",
                Icon: Building2,
                tone: "university",
              },
              {
                title: "Find Scholarships",
                copy: "Invest in your future",
                to: "/scholarships",
                Icon: Award,
                tone: "funding",
              },
              {
                title: "Discover Courses",
                copy: "Follow your ambition",
                to: "/courses",
                Icon: BookOpen,
                tone: "subjects",
              },
              {
                title: "Study Destinations",
                copy: "A world to explore",
                to: "/study-destinations",
                Icon: Globe2,
                tone: "destinations",
              },
            ].map(({ title, copy, to, Icon, tone }) => (
              <Link key={to} to={to} className={`hero-discovery hero-discovery-${tone}`}>
                <span className="discovery-icon">
                  <Icon />
                </span>
                <span>
                  <strong>{title}</strong>
                  <small>{copy}</small>
                </span>
                <ArrowUpRight className="discovery-arrow" />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <TestimonialPreview />
      <div className="wrap search-wrap">
        <div className="finder-heading">
          <div className="eyebrow">Your next chapter, your way</div>
          <h2>Find Your Study Path.</h2>
        </div>
        <form
          className="search-panel"
          onSubmit={(e) => {
            e.preventDefault();
            navigate({ to: "/universities", search: { q: "", country, course, level } });
          }}
        >
          <div className="search-field">
            <BookOpen />
            <div>
              <label htmlFor="hero-course">Select Your Course</label>
              <SearchableSelect
                id="hero-course"
                label="Course"
                placeholder="Choose your course"
                value={course}
                onChange={setCourse}
                options={courses.map((c) => ({ value: c.slug, label: c.name }))}
              />
            </div>
          </div>
          <div className="search-field">
            <MapPin />
            <div>
              <label htmlFor="hero-country">Select Your Destination</label>
              <SearchableSelect
                id="hero-country"
                label="Destination"
                placeholder="Choose your destination"
                value={country}
                onChange={setCountry}
                options={countries.map((c) => ({ value: c.slug, label: c.name }))}
              />
            </div>
          </div>
          <div className="search-field">
            <GraduationCap />
            <div>
              <label htmlFor="hero-level">Select Study Level</label>
              <select id="hero-level" value={level} onChange={(e) => setLevel(e.target.value)}>
                <option value="">Select study level</option>
                {levels.map((l) => (
                  <option key={l}>{l}</option>
                ))}
              </select>
            </div>
          </div>
          <Button type="submit" variant="navy">
            Explore Opportunities <ArrowUpRight />
          </Button>
        </form>
      </div>
      <Reveal className="section">
        <div className="wrap">
          <SectionHeading
            eyebrow="A world waiting for you"
            title="Discover Your Next Destination."
            description="Explore international study destinations and find the right environment for your academic ambitions."
          >
            <Link to="/study-destinations" className="text-link">
              Explore All Destinations <ArrowUpRight />
            </Link>
          </SectionHeading>
          <div className="grid-3">
            {countries.map((c) => (
              <CountryCard key={c.slug} country={c} />
            ))}
          </div>
        </div>
      </Reveal>
      <Reveal className="section muted">
        <div className="wrap">
          <SectionHeading
            eyebrow="Turn your passion into a path"
            title="Find a Course That Matches Your Ambition."
          >
            <Link to="/courses" className="text-link">
              Explore All Courses <ArrowUpRight />
            </Link>
          </SectionHeading>
          <div className="grid-3">
            {courses.map((c) => (
              <CourseCard key={c.slug} course={c} />
            ))}
          </div>
        </div>
      </Reveal>
      <Reveal className="section">
        <div className="wrap">
          <SectionHeading
            eyebrow="The right place to grow"
            title="Explore Universities Around the World."
            description="Illustrative listings for discovery. Verified institution details will be added when supplied."
          >
            <Link to="/universities" className="text-link">
              Explore All Universities <ArrowUpRight />
            </Link>
          </SectionHeading>
          <div className="grid-4">
            {universities.map((u) => (
              <UniversityCard key={u.slug} university={u} />
            ))}
          </div>
        </div>
      </Reveal>
      <Reveal className="section muted">
        <div className="wrap">
          <SectionHeading
            eyebrow="Make your ambitions more attainable"
            title="Explore Opportunities to Fund Your Education."
          >
            <Link to="/scholarships" className="text-link">
              Explore Scholarships <ArrowUpRight />
            </Link>
          </SectionHeading>
          <div className="grid-4">
            {[
              [Award, "Merit-Based Scholarships"],
              [GraduationCap, "University Scholarships"],
              [Landmark, "Government Scholarships"],
              [Wallet, "International Student Funding"],
            ].map(([Icon, title]) => {
              const I = Icon as typeof Award;
              return (
                <Link to="/scholarships" className="scholarship-card" key={String(title)}>
                  <I />
                  <h3>{String(title)}</h3>
                  <p>Understand your options, check eligibility and prepare for the next step.</p>
                </Link>
              );
            })}
          </div>
        </div>
      </Reveal>
      <Reveal className="section dark-section">
        <div className="wrap">
          <div className="eyebrow">The GRADUATER difference</div>
          <h2>
            More Than Admissions.
            <br />A Partner in Your Global Journey.
          </h2>
          <p className="body-copy">
            Thoughtful advice. Practical support. Someone in your corner at every important step.
          </p>
          <div className="services-grid">
            {services.map((s) => (
              <div key={s} className="service">
                <Check />
                {s}
              </div>
            ))}
            <div className="service">
              <HeartHandshake />
              Your goals at the centre
            </div>
          </div>
          <Button variant="yellow" asChild className="mt-5 h-11">
            <Link to="/free-counselling">
              Let's talk about your future <ArrowUpRight />
            </Link>
          </Button>
        </div>
      </Reveal>
      <div className="wrap intro">
        <div>
          <div className="eyebrow">Big ambitions. Personal guidance.</div>
          <h2>
            Making Global Education
            <br />
            More Accessible.
          </h2>
        </div>
        <div>
          <p className="body-copy">
            GRADUATER helps students explore international education opportunities, identify
            suitable universities and navigate their admission journey with professional guidance.
          </p>
          <div className="intro-features">
            {[
              [Globe2, "Global University", "Opportunities"],
              [Compass, "Personalised", "Education Guidance"],
              [FileCheck2, "End-to-End", "Admission Support"],
            ].map(([Icon, a, b]) => {
              const I = Icon as typeof Globe2;
              return (
                <div className="intro-feature" key={String(a)}>
                  <I />
                  <span>
                    {String(a)}
                    <br />
                    {String(b)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Reveal className="section muted">
        <div className="wrap split-section">
          <img
            className="split-photo"
            src={library}
            alt="Indian students collaborating in a bright university library"
            loading="lazy"
            width={1024}
            height={1280}
          />
          <div>
            <div className="eyebrow">More than a degree</div>
            <h2>
              Think Beyond Borders.
              <br />
              Build a Global Future.
            </h2>
            <p className="body-copy">
              A new perspective. An inspiring community. An education that goes beyond the
              classroom.
            </p>
            <div className="benefits">
              {[
                [
                  BookOpen,
                  "International Academic Exposure",
                  "Explore new approaches to your subject.",
                ],
                [
                  Globe2,
                  "Global Learning Environment",
                  "Learn alongside people from around the world.",
                ],
                [
                  Building2,
                  "Industry-Oriented Education",
                  "Connect classroom ideas with practical challenges.",
                ],
                [Users, "Cultural Diversity", "Experience different cultures and perspectives."],
                [Network, "International Networking", "Build meaningful global connections."],
                [
                  Lightbulb,
                  "Personal & Professional Development",
                  "Grow your independence and confidence.",
                ],
              ].map(([Icon, title, copy]) => {
                const I = Icon as typeof Globe2;
                return (
                  <div className="benefit" key={String(title)}>
                    <I />
                    <h3>{String(title)}</h3>
                    <p>{String(copy)}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Reveal>
      <Reveal className="section">
        <div className="wrap">
          <div className="center">
            <div className="eyebrow">A clear path forward</div>
            <h2>Your Study Abroad Journey, Made Simpler.</h2>
          </div>
          <div className="journey">
            {steps.map((s, i) => (
              <div className="journey-step" key={s}>
                <span>0{i + 1}</span>
                <h3>{s}</h3>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
      <Reveal className="section dark-section stories-section">
        <div className="wrap">
          <div className="center mb-8">
            <div className="eyebrow">The journeys that inspire us</div>
            <h2>Real Students. Real Journeys. Global Dreams.</h2>
            <p className="body-copy text-sm">
              Student stories will be published with permission. The preview below is not a student
              review.
            </p>
          </div>
          <div className="testimonial" aria-live="polite">
            <Quote className="mx-auto text-primary size-7" />
            <span className="sample-label mt-4">Placeholder story · {storyTypes[story]}</span>
            <blockquote>
              {
                [
                  "Every global journey begins with a question: where could my ambitions take me?",
                  "A new academic chapter starts with finding a programme that feels right for you.",
                  "Curiosity can cross continents. The right guidance helps you explore your next research chapter.",
                ][story]
              }
            </blockquote>
            <p className="small-label">
              Student name, photograph, university, course and destination awaiting approved
              content.
            </p>
          </div>
          <div className="carousel-controls">
            <Button
              variant="outline"
              size="icon"
              aria-label="Previous student story"
              onClick={() => setStory((story + 2) % 3)}
            >
              <ArrowLeft />
            </Button>
            <span className="small-label self-center px-3">0{story + 1} / 03</span>
            <Button
              variant="outline"
              size="icon"
              aria-label="Next student story"
              onClick={() => setStory((story + 1) % 3)}
            >
              <ArrowRight />
            </Button>
          </div>
        </div>
      </Reveal>
      <Reveal className="section">
        <div className="wrap">
          <SectionHeading
            eyebrow="Good decisions start with good information"
            title="Insights for Your Global Education Journey."
          >
            <Link to="/resources" className="text-link">
              View All Articles <ArrowUpRight />
            </Link>
          </SectionHeading>
          <div className="grid-3">
            {articles.slice(0, 3).map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </div>
      </Reveal>
      <Reveal className="section muted">
        <div className="wrap faq-layout">
          <div>
            <div className="eyebrow">A little clarity goes a long way</div>
            <h2>
              Your Questions.
              <br />
              Thoughtful Answers.
            </h2>
            <p className="body-copy text-sm">
              Every journey is different. Here are some of the questions students ask when exploring
              their options.
            </p>
            <Button variant="outline" asChild className="mt-6">
              <Link to="/contact">
                Have another question? <ArrowUpRight />
              </Link>
            </Button>
          </div>
          <FAQ items={faqs} />
        </div>
      </Reveal>
      <CTA />
    </div>
  );
}
