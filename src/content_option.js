/* =====================================================================
   Hill Patel — Portfolio v3.0.0
   Content data — single source of truth for the long-scroll redesign.
   ===================================================================== */

const meta = {
    title: "Hill Patel — Operations & Systems Lead",
    description: "Hill Patel: Operations & Systems Lead. Marketplace operations, pricing strategy, automation, platform integration, full-stack web.",
    name: "Hill Patel",
    handle: "@patelvro",
    role: "Operations & Systems Lead",
    location: "Toronto, CA",
    timezone: "EST / UTC-5",
    email: "hill@hillpatel.com",
    phone: "+1 416 877 3865",
    tagline: "I let bots and AI handle the repetitive stuff so people don’t have to.",
    blurb: "Operations leadership by day: pricing, marketplaces, integrations, and team. Python, JavaScript, React, and SQL the rest of the time. I ship automation, scrapers, dashboards, and trading systems that quietly run themselves.",
    version: "3.0.0",
};

const status = {
    label: "Currently building",
    project: "Cirelay Trader",
    blurb: "9-strategy ensemble across BTC / ETH / SOL. Paper-and-live, CAD-journaled.",
    href: "https://github.com/PatelVro/Cirelay-Trader",
};

const about = {
    title: "About",
    body: [
        "I’m an Operations & Systems Lead who builds automation around the work nobody wants to repeat. By day I lead a team across marketplace operations, pricing strategy, platform integrations, and digital marketing. I keep inventory, e-commerce, accounting, and ERP workflows talking to each other, and train the team that runs them.",
        "The rest of the time I’m writing Python, JavaScript, and React to ship websites, data scrapers, and bots that quietly do the boring parts on autopilot. The first bot I shipped replaced a 30 to 45 minute daily chore. Six days a week. I haven’t stopped since.",
    ],
    facts: [
        ["Based",       "Toronto, ON"],
        ["Origin",      "Vadodara, IN"],
        ["Stack",       "Python · JS · SQL · Go"],
        ["Day job",     "Operations & Systems Lead"],
        ["After hours", "Bots, scrapers, traders"],
        ["Languages",   "EN · HI · GU"],
    ],
};

const services = [
    {
        n: "01",
        title: "Process Automation & Bots",
        desc: "Scripts and bots that take repetitive workflows (reposting, scraping, reporting, syncing) off your plate.",
        stack: ["Python", "Selenium", "Cron", "Headless Chrome"],
    },
    {
        n: "02",
        title: "Marketplace Ops & Pricing",
        desc: "Multi-channel listings and pricing across Facebook, Kijiji, and direct e-commerce. Inventory, accounting, and ERP kept in sync. Team trained on the playbook.",
        stack: ["Pricing", "Multi-channel", "ERP Sync", "Inventory"],
    },
    {
        n: "03",
        title: "Data Scraping & Pipelines",
        desc: "Pulling structured data (prices, listings, content) out of unstructured websites that fight back.",
        stack: ["Playwright", "Undetected-Chromedriver", "ETL", "ChromaDB"],
    },
    {
        n: "04",
        title: "Full-Stack Web Development",
        desc: "Responsive sites, dashboards, and small-business platforms. Portfolio sites to booking systems.",
        stack: ["React", "Node", "Spring Boot", "Tailwind"],
    },
];

const work = [
    {
        slug: "cirelay",
        title: "Cirelay Trader",
        year: "2026",
        role: "Solo build",
        tags: ["Python", "Trading", "Backtest", "Live"],
        img: "/projects/cirelay.png",
        summary: "Local, multi-asset autonomous trading system. 9-strategy ensemble runs daily on BTC / ETH / SOL with paper-and-live modes and CAD-journaled fills.",
        stats: [["Tests", "512"], ["Sharpe", "1.43"], ["Max DD", "-32%"], ["Backtest", "13yr"]],
        url: "https://github.com/PatelVro/Cirelay-Trader",
    },
    {
        slug: "triatomine",
        title: "Triatomine",
        year: "2025",
        role: "Solo build",
        tags: ["Python", "Playwright", "Anti-bot"],
        img: "/projects/triatomine.png",
        summary: "Tiered scraper that escalates HTTP, then headless, then stealth, then real Chrome until the page gives up its data. Local-only, no API keys.",
        stats: [["Tiers", "4"], ["Local", "100%"], ["Cost", "$0/mo"]],
        url: "https://github.com/PatelVro/Triatomine",
    },
    {
        slug: "northstar",
        title: "Northstar Trading",
        year: "2025",
        role: "Solo build",
        tags: ["Go", "IBKR", "Alpaca", "Binance"],
        img: "/projects/northstar.png",
        summary: "Go-based trading engine with unified strategy interface across IBKR, Alpaca, and Binance. One binary, three brokers.",
        stats: [["Brokers", "3"], ["Lang", "Go"], ["Type", "Long-running"]],
        url: "https://github.com/PatelVro/Northstar-Trading",
    },
    {
        slug: "erp",
        title: "ERPNext × WooCommerce",
        year: "2024",
        role: "Custom dev",
        tags: ["Frappe", "Python", "WooCommerce"],
        img: "/projects/erp.png",
        summary: "Custom ERPNext branch with two-way WooCommerce sync (products, orders, inventory). For shops on ERPNext that sell on Woo.",
        stats: [["Sync", "2-way"], ["Stack", "Frappe"]],
        url: "https://github.com/PatelVro/Enterprise-Resource-Planning",
    },
    {
        slug: "chatboy",
        title: "ChatBoy",
        year: "2024",
        role: "Solo build",
        tags: ["FastAPI", "Ollama", "RAG"],
        img: "/projects/chatboy.png",
        summary: "Offline, privacy-first AI chatbot. Drop in your docs, it builds a vector index locally. No data leaves the machine.",
        stats: [["Mode", "Offline"], ["Vector", "ChromaDB"]],
        url: "https://github.com/PatelVro/chatboy",
    },
    {
        slug: "void",
        title: "Void",
        year: "2024",
        role: "Experiment",
        tags: ["JS", "Lenis", "CSS"],
        img: "/projects/void.png",
        summary: "Scroll-driven editorial experience. Smooth scroll, staggered reveals, parallax that does not break on touch.",
        stats: [["Build", "No-step"], ["Stack", "Vanilla"]],
        url: "https://patelvro.github.io/Void/",
    },
    {
        slug: "physio",
        title: "Dr. Moksha Patel",
        year: "2024",
        role: "Client",
        tags: ["React", "Tailwind", "EmailJS"],
        img: "/projects/physio.webp",
        summary: "Editorial site for a freelance physiotherapy practice in Vadodara. Quiet, type-led, calm. Not aggressive sales copy.",
        stats: [["Brief", "Editorial"], ["Live", "Yes"]],
        url: "https://drmokshapatel.in",
    },
    {
        slug: "kijiji",
        title: "Kijiji Ad Reposter",
        year: "2023",
        role: "First bot",
        tags: ["Python", "Selenium"],
        img: "/projects/kijiji.png",
        summary: "The bot that started it all. Selenium script that deletes and reposts about 30 ads daily so listings stay top-of-search.",
        stats: [["Saved", "45min/day"], ["Days", "6/week"]],
        url: "https://github.com/PatelVro/Kijiji-Ad-Reposter",
    },
];

const timeline = [
    { y: "2024 to Now",  role: "Operations & Systems Lead", co: "Canadian Outlet",      note: "Lead and supervise operational team across marketplaces and inventory. Manage pricing strategy across Facebook, Kijiji, and company website. Design and implement automation systems. Integrate inventory, e-commerce, accounting, and ERP platforms. Oversee digital marketing (Google Ads, email, SMS). Train team on marketplace operations." },
    { y: "2023 to Now",  role: "Freelance Software Developer",             co: "Remote",                note: "Automation, scrapers, websites. Python / React / Selenium." },
    { y: "2023 to 2024", role: "Sales Associate / Cashier",                co: "Continental Group",     note: "Customer-facing role while finishing diploma." },
    { y: "2022 to 2023", role: "Software Developer",                       co: "GraspHopp Pvt. Ltd.",   note: "Full-stack web work, internal tools." },
];

const skills = [
    { name: "Python",                v: 90, group: "Languages" },
    { name: "JavaScript",            v: 85, group: "Languages" },
    { name: "SQL",                   v: 85, group: "Languages" },
    { name: "Go",                    v: 60, group: "Languages" },
    { name: "Selenium / Playwright", v: 88, group: "Automation" },
    { name: "Cron / Schedulers",     v: 80, group: "Automation" },
    { name: "Headless Chrome",       v: 82, group: "Automation" },
    { name: "React",                 v: 78, group: "Frontend" },
    { name: "Tailwind",              v: 75, group: "Frontend" },
    { name: "AWS",                   v: 70, group: "Infra" },
    { name: "FastAPI / Node",        v: 72, group: "Infra" },
    { name: "Frappe / ERPNext",      v: 70, group: "Infra" },
];

const education = [
    { school: "Seneca College",                                     degree: "Diploma, Computer Programming", date: "May 2023 to Dec 2024", loc: "Toronto, CA" },
    { school: "The Maharaja Sayajirao University of Baroda (MSUB)", degree: "Diploma",                       date: "Aug 2019 to Apr 2022", loc: "Vadodara, IN" },
];

const certifications = [
    { name: "Fundamentals of Agile Project Management",      org: "PMI",           date: "Oct 2024" },
    { name: "Fundamentals of Predictive Project Management", org: "PMI",           date: "Oct 2024" },
    { name: "Software Engineer Intern",                      org: "HackerRank",    date: "Sep 2024" },
    { name: "JavaScript (Intermediate)",                     org: "HackerRank",    date: "Sep 2024" },
    { name: "Solutions Architecture Virtual Experience",     org: "AWS / Forage",  date: "Jun 2023" },
    { name: "Back-End Engineering Virtual Experience",       org: "Lyft / Forage", date: "Jun 2023" },
    { name: "JavaScript (Basic)",                            org: "HackerRank",    date: "Jun 2023" },
];

const languages = [
    { name: "English",  level: "Professional working" },
    { name: "Hindi",    level: "Full professional" },
    { name: "Gujarati", level: "Native / bilingual" },
];

const social = {
    github:    "https://github.com/PatelVro",
    linkedin:  "https://www.linkedin.com/in/hillpatel/",
    instagram: "https://www.instagram.com/_hillpatel/",
};

const marqueeUpper = [
    "AUTOMATION",
    "MARKETPLACE OPS",
    "ANALYTICS",
    "PLATFORM INTEGRATIONS",
    "DIGITAL MARKETING",
    "FULL-STACK WEB",
    "BOTS · SCRAPERS · DASHBOARDS",
];

const marqueeLower = [
    "PYTHON",
    "JAVASCRIPT",
    "REACT",
    "SQL",
    "GO",
    "AWS",
    "PLAYWRIGHT",
    "FASTAPI",
    "FRAPPE",
    "OLLAMA",
];

const tickerRows = [
    ["BUILD",     "v3.0.0"],
    ["UPTIME",    "∞"],
    ["TIMEZONE",  "EST / UTC-5"],
    ["LATENCY",   "8ms"],
    ["PROJECTS",  "08 SHIPPED"],
    ["STATUS",    "ALL GREEN"],
    ["NOW",       "CIRELAY-TRADER"],
    ["INBOX",     "OPEN"],
];

const navLinks = [
    ["work",     "Work"],
    ["services", "Services"],
    ["about",    "About"],
    ["timeline", "Career"],
    ["skills",   "Skills"],
    ["contact",  "Contact"],
];

const logotext = "HILL_PATEL";

const contactConfig = {
    YOUR_EMAIL: meta.email,
    YOUR_FONE: meta.phone,
};

const socialprofils = social;

export {
    meta,
    status,
    about,
    services,
    work,
    timeline,
    skills,
    education,
    certifications,
    languages,
    social,
    marqueeUpper,
    marqueeLower,
    tickerRows,
    navLinks,
    logotext,
    contactConfig,
    socialprofils,
};
