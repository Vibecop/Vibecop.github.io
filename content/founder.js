/**
 * Copy for /about/founder. DRAFT: every claim here goes out under the
 * founder's name, so each TODO must be confirmed before this ships.
 */

export const FOUNDER = {
  name: "Salman Haseeb",
  role: "Founder & CEO, Vibecop",
  image: "/assets/images/team-salman-haseeb.jpg",
  linkedin: "https://www.linkedin.com/in/salman-haseeb/",
  oneLiner:
    "Founded by Salman Haseeb, founding engineer at award-winning Wosh and Head of Product at Veriom, with 8+ years architecting production systems.",
  intro: [
    "I’ve spent 8+ years as the engineer startups call when the product has to work for real: founding engineer, head of engineering, the person who owns the architecture and answers the 3am page.",
    "Vibecop is that experience, packaged. Every audit gets the same scrutiny I’d give a system I was about to put my own name on.",
  ],
};

/* The headline numbers. Keep them countable, no "100s of" anything. */
export const FOUNDER_STATS = [
  { value: "8+", label: "Years shipping production software" },
  { value: "2", label: "Awards won by Wosh, where he was founding engineer" },
  { value: "1", label: "Startup acquisition (Remoteteam → Gusto)" },
  { value: "2", label: "Startups led, as Head of Engineering and Head of Product" },
];

export const FOUNDER_TRACK_RECORD = [
  {
    company: "Veriom",
    role: "Head of Product",
    period: "2024 – Present",
    body: "Designed the architecture and security model of Veriom, a security-intelligence platform that traces vulnerabilities back to their architectural root cause across code, cloud, CI/CD and production.",
    href: "https://www.veriom.io/",
  },
  {
    company: "Wosh",
    role: "Founding Engineer & Head of Engineering",
    period: "2021 – 2024",
    // TODO: name the two awards (and year); named awards read far stronger than a count.
    body: "Built Wosh from the first commit: subscription scheduling, real-time order tracking and route optimisation. Wosh went on to win two awards.",
    href: "https://www.wosh.be/",
  },
  {
    // TODO: you wrote "Remotive"; the portfolio says "Remoteteam (acquired by Gusto)". Confirm which.
    company: "Remoteteam",
    role: "Software Engineer",
    period: "2019 – 2021",
    body: "Engineered core product for a remote-HR platform through to its acquisition by Gusto. That code had to survive acquirer due diligence.",
  },
  {
    company: "Google engineers",
    role: "Collaboration",
    period: null,
    // TODO: say how (client project? shared team?). Vague Google claims get questioned; specific ones convert.
    body: "Has built and shipped alongside engineers from Google, holding work to big-tech review standards.",
  },
];

export const FOUNDER_WHY = {
  title: "Why I built Vibecop",
  paragraphs: [
    "AI changed how fast products get built. It didn’t change what breaks them. I kept meeting founders with a working demo, real users, and an architecture nobody had ever reviewed. No auth model, secrets in the repo, a database one traffic spike from falling over.",
    "At Wosh and Veriom I was the person who had to make those calls before they became incidents. Vibecop puts that judgment in front of every team that ships with AI: machine-speed analysis, and a senior engineer who verifies every finding before it reaches you.",
  ],
};
