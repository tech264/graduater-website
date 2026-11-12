const uk = "/images/destinations/uk-destination.jpg";
const germany = "/images/destinations/germany-destination.jpg";
const france = "/images/destinations/france-destination.jpg";
const italy = "/images/destinations/italy-destination.jpg";
const canada = "/images/destinations/canada-destination.jpg";
const australia = "/images/destinations/australia-destination.jpg";
const netherlands = "/images/destinations/netherlands-destination.jpg";
const poland = "/images/destinations/poland-destination.jpg";
const ireland = "/images/destinations/ireland-destination.jpg";
export const countries = [
  {
    slug: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    region: "Europe",
    image: uk,
    description: "World-class learning. A world of possibilities.",
    city: "London",
  },
  {
    slug: "germany",
    name: "Germany",
    flag: "🇩🇪",
    region: "Europe",
    image: germany,
    description: "Innovation meets academic excellence.",
    city: "Berlin",
  },
  {
    slug: "france",
    name: "France",
    flag: "🇫🇷",
    region: "Europe",
    image: france,
    description: "Inspired learning, extraordinary culture.",
    city: "Paris",
  },
  {
    slug: "italy",
    name: "Italy",
    flag: "🇮🇹",
    region: "Europe",
    image: italy,
    description: "A rich heritage. A fresh perspective.",
    city: "Rome",
  },
  {
    slug: "canada",
    name: "Canada",
    flag: "🇨🇦",
    region: "North America",
    image: canada,
    description: "Diverse communities. Limitless discovery.",
    city: "Toronto",
  },
  {
    slug: "australia",
    name: "Australia",
    flag: "🇦🇺",
    region: "Oceania",
    image: australia,
    description: "An exciting education, a vibrant way of life.",
    city: "Sydney",
  },
  {
    slug: "netherlands",
    name: "Netherlands",
    flag: "🇳🇱",
    region: "Europe",
    image: netherlands,
    description: "Creative thinking in a connected world.",
    city: "Amsterdam",
  },
  {
    slug: "poland",
    name: "Poland",
    flag: "🇵🇱",
    region: "Europe",
    image: poland,
    description: "Explore new perspectives in the heart of Europe.",
    city: "Warsaw",
  },
  {
    slug: "ireland",
    name: "Ireland",
    flag: "🇮🇪",
    region: "Europe",
    image: ireland,
    description: "A welcoming home for ambitious minds.",
    city: "Dublin",
  },
];
export const courses = [
  {
    slug: "business-management",
    name: "Business & Management",
    icon: "business",
    description: "Turn big ideas into real-world impact.",
    specialisations: ["International Business", "Finance", "Marketing", "Entrepreneurship"],
  },
  {
    slug: "computer-science",
    name: "Computer Science & IT",
    icon: "computer",
    description: "Create what comes next in a digital world.",
    specialisations: [
      "Artificial Intelligence",
      "Data Science",
      "Cybersecurity",
      "Software Engineering",
    ],
  },
  {
    slug: "engineering",
    name: "Engineering & Technology",
    icon: "engineering",
    description: "Build solutions for a changing world.",
    specialisations: [
      "Mechanical Engineering",
      "Civil Engineering",
      "Electrical Engineering",
      "Renewable Energy",
    ],
  },
  {
    slug: "architecture-design",
    name: "Architecture & Design",
    icon: "design",
    description: "Shape spaces, products and experiences.",
    specialisations: ["Architecture", "Interior Design", "Product Design", "Urban Planning"],
  },
  {
    slug: "science-research",
    name: "Science & Research",
    icon: "science",
    description: "Ask important questions. Discover new answers.",
    specialisations: ["Physics", "Chemistry", "Environmental Science", "Mathematics"],
  },
  {
    slug: "law-humanities",
    name: "Law & Humanities",
    icon: "law",
    description: "Understand societies and influence change.",
    specialisations: ["International Law", "History", "Philosophy", "International Relations"],
  },
  {
    slug: "hospitality-tourism",
    name: "Hospitality & Tourism",
    icon: "hospitality",
    description: "Bring the world together through experiences.",
    specialisations: ["Hotel Management", "Tourism Management", "Event Management"],
  },
  {
    slug: "media-communication",
    name: "Media & Communication",
    icon: "media",
    description: "Find your voice. Tell stories that matter.",
    specialisations: ["Journalism", "Digital Media", "Film Studies", "Public Relations"],
  },
  {
    slug: "education-social-sciences",
    name: "Education & Social Sciences",
    icon: "education",
    description: "Empower people and understand our world.",
    specialisations: ["Education", "Sociology", "Psychology", "Social Policy"],
  },
];
export const levels = ["Bachelor's", "Master's", "Diploma", "PhD"];
export const universities = [
  {
    slug: "london-example",
    name: "London University",
    country: "uk",
    city: "London",
    categories: ["business-management", "computer-science", "law-humanities"],
    levels: ["Bachelor's", "Master's"],
  },
  {
    slug: "berlin-example",
    name: "Berlin Institute of Technology",
    country: "germany",
    city: "Berlin",
    categories: ["engineering", "computer-science", "science-research"],
    levels: ["Bachelor's", "Master's", "PhD"],
  },
  {
    slug: "paris-example",
    name: "Paris School of Business",
    country: "france",
    city: "Paris",
    categories: ["business-management", "hospitality-tourism", "media-communication"],
    levels: ["Bachelor's", "Master's"],
  },
  {
    slug: "toronto-example",
    name: "Toronto International University",
    country: "canada",
    city: "Toronto",
    categories: ["education-social-sciences", "architecture-design", "science-research"],
    levels: ["Bachelor's", "Master's", "Diploma"],
  },
];
export const articles = [
  {
    slug: "choose-your-study-destination",
    title: "How to Choose the Right Country for Higher Education",
    category: "Study planning",
    image: canada,
    description: "Find the destination that fits your ambitions, budget and way of life.",
  },
  {
    slug: "countries-for-indian-students",
    title: "Best Countries for Indian Students to Study Abroad",
    category: "Destinations",
    image: uk,
    description: "A thoughtful look at your global education options.",
  },
  {
    slug: "study-in-germany",
    title: "Study in Germany: A Guide for Indian Students",
    category: "Destinations",
    image: germany,
    description: "Start exploring programmes, applications and life in Germany.",
  },
  {
    slug: "international-university-applications",
    title: "How to Apply to International Universities",
    category: "Applications",
    image: france,
    description: "From your first shortlist to preparing a complete application.",
  },
  {
    slug: "scholarships-for-indian-students",
    title: "Scholarships Available for Indian Students",
    category: "Scholarships",
    image: italy,
    description: "Understand funding sources and prepare a stronger application.",
  },
  {
    slug: "study-in-the-uk",
    title: "Study in the UK: Admission Requirements and Opportunities",
    category: "Destinations",
    image: ireland,
    description: "What to consider before taking your next academic step.",
  },
];
export const faqs = [
  [
    "How can Indian students study abroad?",
    "Start by choosing a study level, subject and destination. Compare programme requirements, prepare academic records and language evidence, then apply directly or with guidance. After an offer, review funding and visa requirements.",
  ],
  [
    "Which countries are best for international education?",
    "The right country depends on your academic goals, budget, preferred language and lifestyle. Compare individual programmes rather than assuming one destination is best for everyone.",
  ],
  [
    "What are the eligibility requirements?",
    "Requirements vary by programme and institution. Academic qualifications, subject prerequisites, language proficiency, portfolios and relevant experience may be considered.",
  ],
  [
    "Can I study abroad after completing Plus Two?",
    "Yes, many undergraduate and foundation programmes accept students with recognised higher secondary qualifications. Specific marks and subject requirements vary.",
  ],
  [
    "What is the difference between undergraduate and postgraduate programmes?",
    "Undergraduate programmes usually lead to a first degree after school. Postgraduate programmes generally require a relevant bachelor's degree and offer advanced study or research.",
  ],
  [
    "Are scholarships available for Indian students?",
    "Some governments and universities offer eligible international students funding. Awards are competitive and their criteria, availability and deadlines should be checked with the provider.",
  ],
  [
    "Is IELTS mandatory for studying abroad?",
    "Not universally. Institutions may accept other language tests or evidence of previous English-medium education. Visa rules can differ from admission requirements.",
  ],
  [
    "How much does studying abroad cost?",
    "Budget for tuition, accommodation, living expenses, insurance, travel and application costs. Amounts depend on the destination and institution; request current figures from official sources.",
  ],
  [
    "How long does the admission process take?",
    "Timelines vary by intake, university, document readiness and visa processing. Start early and confirm the deadlines for each programme.",
  ],
  [
    "Can GRADUATER help with university applications?",
    "GRADUATER provides personalised course selection, university shortlisting, application and documentation guidance, along with visa and pre-departure support.",
  ],
];
export const services = [
  "Personalised Counselling",
  "Course and University Selection",
  "Application Assistance",
  "Documentation Support",
  "Scholarship Guidance",
  "Visa Application Guidance",
  "Pre-Departure Assistance",
];
export const steps = [
  "Initial Counselling",
  "Course & Country Selection",
  "University Shortlisting",
  "Application & Documentation",
  "Admission & Visa Guidance",
  "Pre-Departure Support",
];
export function filterUniversities(query = "", country = "", course = "", level = "") {
  return universities.filter(
    (u) =>
      (u.name + " " + u.city).toLowerCase().includes(query.toLowerCase()) &&
      (!country || u.country === country) &&
      (!course || u.categories.includes(course)) &&
      (!level || u.levels.includes(level)),
  );
}
export const businessContact = {
  email: "",
  phone: "",
  whatsapp: "",
  address: "",
  socials: [] as { name: string; url: string }[],
};
export function pageHead(title: string, description: string) {
  return {
    meta: [
      { title: `${title} | GRADUATER` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} | GRADUATER` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
