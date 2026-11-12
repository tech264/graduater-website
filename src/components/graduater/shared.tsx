import { motion, useReducedMotion } from "framer-motion";
import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ArrowUp,
  ChevronDown,
  Menu,
  X,
  MessageCircle,
  MapPin,
  BriefcaseBusiness,
  Monitor,
  Cog,
  PencilRuler,
  FlaskConical,
  Scale,
  Hotel,
  Radio,
  GraduationCap,
  Globe2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { countries, courses, universities, articles, businessContact } from "@/data/catalog";
const nav = [
  { to: "/", name: "Home" },
  { to: "/study-destinations", name: "Study Destinations", children: "countries" },
  { to: "/courses", name: "Explore Courses", children: "courses" },
  { to: "/universities", name: "Universities" },
  { to: "/scholarships", name: "Scholarships" },
  { to: "/resources", name: "Resources" },
  { to: "/about", name: "About Us" },
  { to: "/contact", name: "Contact Us" },
] as const;
export function Brand() {
  return (
    <Link to="/" className="wordmark" aria-label="GRADUATER home">
      GRADUATER<span className="brand-dot">.</span>
    </Link>
  );
}
export function SiteShell({ children }: { children: ReactNode }) {
  const reducedMotion = useReducedMotion();
  const [mobile, setMobile] = useState(false),
    [dropdown, setDropdown] = useState(""),
    [top, setTop] = useState(false),
    [contact, setContact] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setMobile(false);
    setDropdown("");
    setContact(false);
  }, [location.pathname]);
  useEffect(() => {
    const update = () => setTop(window.scrollY > 600);
    window.addEventListener("scroll", update);
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    if (!mobile) return;
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = old;
    };
  }, [mobile]);
  function childrenLinks(kind: string) {
    return kind === "countries"
      ? countries.map((c) => (
          <Link key={c.slug} to="/study-destinations/$slug" params={{ slug: c.slug }}>
            {c.flag} {c.name}
          </Link>
        ))
      : courses.map((c) => (
          <Link key={c.slug} to="/courses/$slug" params={{ slug: c.slug }}>
            {c.name}
          </Link>
        ));
  }
  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Main navigation">
            {nav.map((n) => (
              <div
                className="nav-item"
                key={n.to}
                onMouseEnter={() => setDropdown(n.to)}
                onMouseLeave={() => setDropdown("")}
              >
                <Link
                  to={n.to}
                  className={`nav-link ${location.pathname === n.to || (n.to !== "/" && location.pathname.startsWith(n.to)) ? "active" : ""}`}
                >
                  {n.name}
                </Link>
                {"children" in n && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="nav-menu-toggle"
                    aria-label={`Toggle ${n.name} menu`}
                    aria-expanded={dropdown === n.to}
                    onClick={() => setDropdown(dropdown === n.to ? "" : n.to)}
                  >
                    <ChevronDown />
                  </Button>
                )}
                {"children" in n && dropdown === n.to && (
                  <motion.div
                    initial={{ opacity: 0, y: reducedMotion ? 0 : 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: reducedMotion ? 0 : 0.18 }}
                    className="nav-dropdown"
                    onKeyDown={(e) => {
                      if (e.key === "Escape") setDropdown("");
                    }}
                  >
                    {childrenLinks(n.children)}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>
          <div className="header-actions">
            <Button variant="yellow" asChild className="nav-counselling">
              <Link to="/free-counselling">
                Free Counselling <ArrowUpRight />
              </Link>
            </Button>
          </div>
          <Button
            className="mobile-toggle"
            variant="ghost"
            size="icon"
            aria-label={mobile ? "Close navigation" : "Open navigation"}
            aria-expanded={mobile}
            onClick={() => setMobile(!mobile)}
          >
            {mobile ? <X /> : <Menu />}
          </Button>
        </div>
      </header>
      {mobile && (
        <nav className="mobile-menu" aria-label="Mobile navigation">
          {nav.map((n) => (
            <div key={n.to}>
              <Link to={n.to}>{n.name}</Link>
              {"children" in n && (
                <details>
                  <summary>
                    Explore {n.children === "countries" ? "destinations" : "subjects"}
                  </summary>
                  {childrenLinks(n.children)}
                </details>
              )}
            </div>
          ))}
          <Button variant="yellow" asChild className="mt-6">
            <Link to="/free-counselling">
              Free Counselling <ArrowUpRight />
            </Link>
          </Button>
        </nav>
      )}
      <main>{children}</main>
      <Footer />
      {top && (
        <Button
          className="scroll-top"
          variant="outline"
          size="icon"
          aria-label="Scroll to top"
          title="Back to top"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
                ? "instant"
                : "smooth",
            })
          }
        >
          <ArrowUp />
        </Button>
      )}
      <Button
        className="floating-contact rounded-full h-12 w-12"
        variant="navy"
        size="icon"
        aria-label="WhatsApp contact"
        title="WhatsApp contact"
        onClick={() =>
          businessContact.whatsapp
            ? window.open(
                `https://wa.me/${businessContact.whatsapp}`,
                "_blank",
                "noopener,noreferrer",
              )
            : setContact(!contact)
        }
      >
        <MessageCircle className="size-6" />
      </Button>
      {contact && (
        <div className="fixed right-5 bottom-20 z-40 max-w-[280px] border border-border bg-card p-5 shadow-sm rounded-lg">
          <p className="text-sm">WhatsApp contact details are awaiting confirmation.</p>
          <Button asChild variant="link" className="px-0">
            <Link to="/contact">
              View contact options <ArrowRight />
            </Link>
          </Button>
        </div>
      )}
    </>
  );
}
export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Brand />
            <p>Your Gateway to Global Education.</p>
            <p>
              Personalised guidance for your next chapter. Explore the world, find your direction
              and take the next step.
            </p>
            <Button asChild variant="yellow" className="mt-2">
              <Link to="/free-counselling">
                Book Free Counselling <ArrowUpRight />
              </Link>
            </Button>
          </div>
          <div>
            <h3>Explore GRADUATER</h3>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact Us</Link>
              <Link to="/resources">Resources</Link>
              <Link to="/free-counselling">Free Counselling</Link>
            </div>
          </div>
          <div>
            <h3>Study Destinations</h3>
            <div className="footer-links">
              {countries.slice(0, 6).map((c) => (
                <Link key={c.slug} to="/study-destinations/$slug" params={{ slug: c.slug }}>
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3>Explore Courses</h3>
            <div className="footer-links">
              {courses.slice(0, 5).map((c) => (
                <Link key={c.slug} to="/courses/$slug" params={{ slug: c.slug }}>
                  {c.name}
                </Link>
              ))}
              <Link to="/courses">View all courses →</Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} GRADUATER. All rights reserved.</span>
          <div>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/disclaimer">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
export function CTA() {
  return (
    <section className="final-cta dark-section">
      <div className="wrap">
        <div>
          <div className="eyebrow">Let's make it happen</div>
          <h2>Your Global Journey Starts With One Conversation.</h2>
          <p>
            Take the first step towards international education. Connect with GRADUATER and explore
            opportunities that match your academic goals.
          </p>
        </div>
        <div className="cta-buttons">
          <Button asChild variant="yellow" size="lg">
            <Link to="/free-counselling">
              Book Free Counselling <ArrowUpRight />
            </Link>
          </Button>
          <Button asChild variant="heroOutline" size="lg">
            <Link to="/contact">
              Contact Us <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return (
    <motion.section
      className={className}
      initial={reduced ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: reduced ? 0 : 0.45 }}
    >
      {children}
    </motion.section>
  );
}
export function SectionHeading({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <div className="section-top">
      <div>
        <div className="eyebrow">{eyebrow}</div>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {children}
    </div>
  );
}
export function Banner({
  title,
  description,
  parent,
}: {
  title: string;
  description: string;
  parent?: {
    name: string;
    to: "/courses" | "/study-destinations" | "/universities" | "/resources";
  };
}) {
  return (
    <section className="page-banner">
      <div className="wrap">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          {parent && (
            <>
              <Link to={parent.to}>{parent.name}</Link>
              <span>/</span>
            </>
          )}
          <span aria-current="page">{title}</span>
        </nav>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
export function CountryCard({ country: c }: { country: (typeof countries)[number] }) {
  return (
    <Link className="country-card" to="/study-destinations/$slug" params={{ slug: c.slug }}>
      <img src={c.image} alt={`${c.city}, ${c.name}`} loading="lazy" width={1000} height={750} />
      <span className="country-flag">{c.flag}</span>
      <h3>{c.name}</h3>
      <p>{c.description}</p>
      <span className="country-arrow" aria-label="Explore country">
        <ArrowUpRight />
      </span>
    </Link>
  );
}
const icons = {
  business: BriefcaseBusiness,
  computer: Monitor,
  engineering: Cog,
  design: PencilRuler,
  science: FlaskConical,
  law: Scale,
  hospitality: Hotel,
  media: Radio,
  education: GraduationCap,
};
export function CourseCard({ course: c }: { course: (typeof courses)[number] }) {
  const Icon = icons[c.icon as keyof typeof icons];
  return (
    <Link to="/courses/$slug" params={{ slug: c.slug }} className="course-card">
      <div className="course-icon">
        <Icon />
      </div>
      <h3>{c.name}</h3>
      <p>{c.description}</p>
      <span className="text-link">
        Explore Courses <ArrowUpRight />
      </span>
    </Link>
  );
}
export function UniversityCard({ university: u }: { university: (typeof universities)[number] }) {
  const c = countries.find((c) => c.slug === u.country);
  return (
    <article className="university-card">
      <img
        src={c?.image}
        alt={`${u.city} destination photograph, not a verified campus`}
        loading="lazy"
        width={1000}
        height={650}
      />
      <div className="university-body">
        <span className="sample-label">Illustrative university · not a verified listing</span>
        <h3>{u.name}</h3>
        <div className="small-label flex items-center gap-1">
          <MapPin className="size-3" />
          {u.city}, {c?.name}
        </div>
        <p className="text-xs text-muted-foreground mt-3">
          {u.categories.map((s) => courses.find((c) => c.slug === s)?.name).join(" · ")}
        </p>
        <div className="pills">
          {u.levels.map((l) => (
            <span key={l} className="pill">
              {l}
            </span>
          ))}
        </div>
        <Button variant="outline" asChild className="w-full text-xs">
          <Link to="/universities/$slug" params={{ slug: u.slug }}>
            View University <ArrowUpRight />
          </Link>
        </Button>
      </div>
    </article>
  );
}
export function ArticleCard({ article: a }: { article: (typeof articles)[number] }) {
  return (
    <article className="article-card">
      <Link to="/resources/$slug" params={{ slug: a.slug }}>
        <img src={a.image} alt={a.title} loading="lazy" width={1000} height={650} />
      </Link>
      <div className="article-body">
        <div className="small-label">
          {a.category} <span aria-hidden="true"> · </span> 12 November 2026
        </div>
        <h3>
          <Link to="/resources/$slug" params={{ slug: a.slug }}>
            {a.title}
          </Link>
        </h3>
        <p>{a.description}</p>
        <Link className="text-link" to="/resources/$slug" params={{ slug: a.slug }}>
          Read article <ArrowUpRight />
        </Link>
      </div>
    </article>
  );
}
export function FAQ({ items }: { items: string[][] }) {
  return (
    <div className="faq-list">
      {items.map(([q, a]) => (
        <details key={q}>
          <summary>{q}</summary>
          <p>{a}</p>
        </details>
      ))}
    </div>
  );
}
export function AdviceSidebar() {
  return (
    <aside className="detail-sidebar">
      <Globe2 className="text-primary mb-4" />
      <h3>
        Your ambitions.
        <br />
        Our guidance.
      </h3>
      <p>Find a path that fits your academic background, interests and plans.</p>
      <Button asChild variant="navy" className="w-full">
        <Link to="/free-counselling">
          Talk to an Expert <ArrowUpRight />
        </Link>
      </Button>
    </aside>
  );
}
