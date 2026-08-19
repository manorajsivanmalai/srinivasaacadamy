/**
 * slides-data.js
 * Comprehensive slide deck dataset for Website Revamp Proposals
 * Total: 9 Web Properties / Proposals
 * 1. record.srinivasaacademy.com
 * 2. app.srinivasaacademy.com
 * 3. sep.srinivasaacademy.com
 * 4. onlineclasses.srinivasaacademy.com
 * 5. techmaax.com
 * 6. record.techmaax.com
 * 7. lucky-hostels.com
 * 8. sa3dsolutions.com
 * 9. selfie-miniature.com
 */

const PROPOSAL_DATA = {
  meta: {
    title: "Website Revamp & Business Growth Proposals",
    subtitle: "High-Conversion, Interactive Web Strategy & Digital Transformation",
    author: "Digital Strategy & Enterprise Solutions",
    version: "3.0",
    date: "August 2026"
  },
  categories: [
    { id: "intro", name: "Overview", count: 1, color: "from-blue-600 to-indigo-600", icon: "sparkles", domain: "EXECUTIVE SUMMARY" },
    { id: "srinivasa-record", name: "1. record.srinivasaacademy.com", count: 4, color: "from-emerald-600 to-teal-700", icon: "book-open", domain: "record.srinivasaacademy.com" },
    { id: "srinivasa-app", name: "2. app.srinivasaacademy.com", count: 3, color: "from-cyan-600 to-blue-700", icon: "smartphone", domain: "app.srinivasaacademy.com" },
    { id: "srinivasa-sep", name: "3. sep.srinivasaacademy.com", count: 3, color: "from-purple-600 to-indigo-700", icon: "briefcase", domain: "sep.srinivasaacademy.com" },
    { id: "srinivasa-online", name: "4. onlineclasses.srinivasaacademy.com", count: 3, color: "from-amber-600 to-orange-700", icon: "video", domain: "onlineclasses.srinivasaacademy.com" },
    { id: "techmaax-main", name: "5. techmaax.com (21 Branches)", count: 3, color: "from-rose-600 to-red-700", icon: "map-pin", domain: "techmaax.com" },
    { id: "techmaax-record", name: "6. record.techmaax.com", count: 3, color: "from-orange-600 to-amber-700", icon: "database", domain: "record.techmaax.com" },
    { id: "lucky-hostels", name: "7. lucky-hostels.com", count: 4, color: "from-emerald-600 to-green-800", icon: "home", domain: "lucky-hostels.com" },
    { id: "sa-3d", name: "8. sa3dsolutions.com", count: 4, color: "from-cyan-600 to-teal-800", icon: "box", domain: "sa3dsolutions.com" },
    { id: "selfie-miniature", name: "9. selfie-miniature.com", count: 5, color: "from-indigo-600 to-purple-800", icon: "shopping-bag", domain: "selfie-miniature.com" },
    { id: "summary", name: "Roadmap & Tech Stack", count: 2, color: "from-slate-700 to-zinc-900", icon: "check-circle-2", domain: "IMPLEMENTATION ROADMAP" }
  ],
  slides: [
    // SLIDE 0: Title & Executive Summary
    {
      id: "slide-0",
      categoryId: "intro",
      domain: "PORTFOLIO OVERVIEW",
      tag: "EXECUTIVE SUMMARY",
      title: "Transforming Web Portals into High-Converting Digital Assets",
      subtitle: "Comprehensive Audit & Feature Upgrade Strategy for 9 Live Web Platforms",
      icon: "rocket",
      layout: "hero",
      content: {
        headline: "From Static Websites to Interactive Growth Engines",
        description: "An in-depth analysis of 9 web properties across Education, Hospitality, Manufacturing/3D Modeling, and E-Commerce. By replacing broken demo templates, fragmented subdomains, and static pages with interactive lead generation, live quote calculators, live availability tools, transparent pricing, and unified backend CRM portals, we maximize conversions, trust, and organic SEO revenue.",
        stats: [
          { value: "9", label: "Web Properties Analyzed", sub: "Ed-Tech, LMS, Scale Models & E-Com" },
          { value: "3x - 5x", label: "Projected Lead Conversion", sub: "Via Instant WhatsApp & Demo Funnels" },
          { value: "100%", label: "Brand Unification", sub: "Single Sign-on & Design Consistency" },
          { value: "21", label: "Branch Local Search Boost", sub: "Dedicated Google SEO Geotargeting" }
        ],
        portalsList: [
          { name: "record.srinivasaacademy.com", type: "Academic LMS & Coaching Hub", status: "Critical Template Cleanup & Lead Gen", icon: "book-open" },
          { name: "app.srinivasaacademy.com", type: "Student Application Portal", status: "Feature Advertising & Centralized Dashboard", icon: "smartphone" },
          { name: "sep.srinivasaacademy.com", type: "Statutory Executive Program", status: "Practical E-Filing Simulators & Trust Signals", icon: "briefcase" },
          { name: "onlineclasses.srinivasaacademy.com", type: "CMA Video E-Commerce", status: "Fix Broken Edura Theme & Course Demo Funnel", icon: "video" },
          { name: "techmaax.com", type: "21-Branch IT & SAP Training", status: "Branch Locator, Trust Stats & SEO Rich Snippets", icon: "map-pin" },
          { name: "record.techmaax.com", type: "SAP Recorded Class Platform", status: "UI/UX Simplification & Career Path Showcase", icon: "database" },
          { name: "lucky-hostels.com", type: "Chennai PG & Hostel Accommodation", status: "Instant Room Availability & WhatsApp Booking", icon: "home" },
          { name: "sa3dsolutions.com", type: "Architectural 3D Scale Models", status: "Replace Makeup Studio Template & Add CAD Quote Tool", icon: "box" },
          { name: "selfie-miniature.com", type: "Bags E-Commerce & Data CRM", status: "Full 4-Layer Architecture, GA4 E-Com & Admin Panel", icon: "shopping-bag" }
        ]
      },
      speakerNotes: "Welcome everyone. Today we are presenting a unified digital transformation proposal for 9 websites. Instead of a flat PPT, this interactive presentation platform allows us to explore real-time interactive prototypes, sitemap comparisons, and concrete revenue-growth features."
    },

    // ==========================================
    // PROPOSAL 1: record.srinivasaacademy.com
    // ==========================================
    {
      id: "slide-1a",
      categoryId: "srinivasa-record",
      domain: "record.srinivasaacademy.com",
      tag: "PROPOSAL 1 • AUDIT",
      title: "record.srinivasaacademy.com: Current Website Audit",
      subtitle: "Identifying Critical Credibility Gaps, Broken Templates & Missing Lead Capture",
      icon: "alert-triangle",
      layout: "audit",
      content: {
        url: "https://record.srinivasaacademy.com",
        currentSitemap: [
          { name: "Home", status: "Generic placeholder copy" },
          { name: "Contact", status: "Basic form without course selection" },
          { name: "Enroll Courses", status: "Unclear enrollment flow" },
          { name: "Login", status: "Disjointed LMS login" }
        ],
        painPoints: [
          {
            title: "1. Extremely Weak Navigation",
            desc: "The current 4-item menu is severely restricted for an elite coaching academy offering complex CA, CMA, and CS programs with multiple levels.",
            severity: "High",
            badge: "UX Blocker"
          },
          {
            title: "2. Generic Template Placeholder Content",
            desc: "Homepage still displays demo dummy text: 'David Warner', 'Sarah Taylor', 'Python Developer', outdated 2020 blogs, and broken '00' stat counters.",
            severity: "Critical",
            badge: "Trust Killer"
          },
          {
            title: "3. Complete Absence of Lead Generation",
            desc: "Zero hooks to capture prospective student interest: No free demo class booking, no academic counseling, no scholarship tests, and no WhatsApp lead capture.",
            severity: "High",
            badge: "Revenue Leak"
          },
          {
            title: "4. Hidden Social Proof & Track Record",
            desc: "The academy has trained 10,000+ students, produced 40+ All India Rank holders, and partners with JK Shah Classes, but none of these trust badges are showcased.",
            severity: "High",
            badge: "Under-monetized"
          }
        ]
      },
      speakerNotes: "The LMS portal at record.srinivasaacademy.com has solid authority in the real world, but online it suffers from residual WordPress template content (David Warner, Python Developer). Students visiting doubt its authenticity. We must fix these trust killers immediately."
    },
    {
      id: "slide-1b",
      categoryId: "srinivasa-record",
      domain: "record.srinivasaacademy.com",
      tag: "PROPOSAL 1 • SITEMAP",
      title: "record.srinivasaacademy.com: Proposed Modern Sitemap",
      subtitle: "Structured Architecture for CA, CMA & CS Exam Success & Organic Search Traffic",
      icon: "git-branch",
      layout: "sitemap-compare",
      content: {
        currentTree: {
          name: "Current Sitemap (4 Items)",
          children: [
            { name: "Home" },
            { name: "Contact" },
            { name: "Enroll Courses" },
            { name: "Login" }
          ]
        },
        proposedTree: {
          name: "Proposed High-Conversion Sitemap",
          children: [
            { name: "Home (Hero CTA, Results Bar, Quick Course Finder)" },
            { name: "About Us (Heritage, JK Shah Tie-up, 10k+ Alumni)" },
            { 
              name: "Courses (Group-wise Syllabus & Timetable)",
              children: [
                { name: "CMA Foundation" },
                { name: "CMA Intermediate (Group 1 & Group 2)" },
                { name: "CMA Final (Group 3 & Group 4)" }
              ]
            },
            { name: "Faculty Profiles (Photos, CMA/CA Credentials, Experience)" },
            { name: "Results & AIR Toppers (Rank list, Marksheets, Year-wise %)" },
            { name: "Fee Structure & Batches (Transparent Group Pricing, EMI)" },
            { name: "Study Material (Gated Chapter Notes, Video Previews, Lead Capture)" },
            { name: "Student & Admin Login (Recorded Lectures, Mock Tests, Timetables)" },
            { name: "Blog / ICMAI Exam Notifications (SEO Optimized)" },
            { name: "FAQ (Eligibility, Exemptions, Syllabus 2026)" },
            { name: "Contact & Instant WhatsApp Helpdesk" }
          ]
        }
      },
      speakerNotes: "Compare the left tree (only 4 bare links) with the right tree. We are structuring the courses by level (Foundation, Inter, Final) and adding essential trust pages: Faculty profiles, AIR results, transparent fees, and gated study material."
    },
    {
      id: "slide-1c",
      categoryId: "srinivasa-record",
      domain: "record.srinivasaacademy.com",
      tag: "PROPOSAL 1 • ACTION PLAN",
      title: "14-Point Comprehensive Upgrade Blueprint",
      subtitle: "From First Click to Enrollment: Full-Funnel Academic Modernization",
      icon: "check-circle-2",
      layout: "feature-grid",
      content: {
        features: [
          { num: "01", title: "Hero Essentials & Instant CTA", desc: "Clear value headline + prominent 'Book Free Demo Class' & 'Enroll Now' buttons above the fold." },
          { num: "02", title: "Dedicated Course Portals", desc: "Foundation, Inter, Final separated with Group 1/2 breakdown, class mode (Offline/Online/Hybrid) & duration." },
          { num: "03", title: "Why Choose Us Matrix", desc: "Faculty credentials, national vs institute pass %, small batch doubt sessions, and 15+ years in operation." },
          { num: "04", title: "Faculty Authority Profiles", desc: "High-resolution photos, CA/CMA qualifications, subjects taught, and industry teaching accolades." },
          { num: "05", title: "Results & 40+ AIR Showcase", desc: "Rank holders gallery with photos, verified scores, and year-by-year pass percentage proof." },
          { num: "06", title: "Gated Study Materials Lead Magnet", desc: "Sample chapter notes & mock question banks unlocked via student name/phone lead capture." },
          { num: "07", title: "Transparent Fee Structure", desc: "Clear pricing per subject/group, upcoming batch start dates, early-bird discounts, and EMI options." },
          { num: "08", title: "Student Video Testimonials", desc: "Authentic video interviews of working professionals and students who cleared CMA on their first attempt." },
          { num: "09", title: "High-Intent SEO Blog", desc: "Rank on 'CMA Inter Syllabus 2026', ICMAI exam notification updates, time management tips for articleship." },
          { num: "10", title: "Omnichannel Lead Capture", desc: "Tamil Nadu-optimized WhatsApp chat widget, instant callback requests, and interactive course inquiry form." },
          { num: "11", title: "Comprehensive CMA FAQ Hub", desc: "Covers eligibility criteria, paper exemptions, exam pattern changes, and salary prospects post-CMA." },
          { num: "12", title: "Trust Signals & ICMAI Affiliations", desc: "ICMAI registration numbers, awards, media coverage, and JK Shah Classes official association badge." },
          { num: "13", title: "Dual Login Architecture", desc: "Dedicated Student Portal (videos, mock tests, fee dues) + Backend Admin Portal (enquiries, uploads)." },
          { num: "14", title: "Google Analytics 4 Tracking", desc: "Complete event tracking for form submissions, video demo plays, WhatsApp clicks, and student journeys." }
        ]
      },
      speakerNotes: "Here is the exact 14-point roadmap requested. Each feature addresses a direct conversion roadblock. In Tamil Nadu ed-tech, WhatsApp lead capture + Gated sample notes generate 4x higher student inquiry rates than plain contact forms."
    },
    {
      id: "slide-1d",
      categoryId: "srinivasa-record",
      domain: "record.srinivasaacademy.com",
      tag: "PROPOSAL 1 • INTERACTIVE DEMO",
      title: "Interactive Prototype: Lead Magnet & Gated Notes System",
      subtitle: "Try the proposed Free Demo & Gated CMA Study Notes Lead Capture in real time",
      icon: "layers",
      layout: "demo-gated-notes",
      content: {
        demoType: "gated-notes"
      },
      speakerNotes: "Here is an interactive mockup of how prospective students will interact with the new portal. When a student tries to download the CMA Inter Question Bank, it triggers the instant WhatsApp lead capture."
    },

    // ==========================================
    // PROPOSAL 2: app.srinivasaacademy.com
    // ==========================================
    {
      id: "slide-2a",
      categoryId: "srinivasa-app",
      domain: "app.srinivasaacademy.com",
      tag: "PROPOSAL 2 • STUDENT APP AUDIT",
      title: "app.srinivasaacademy.com: Current State vs Hidden Capabilities",
      subtitle: "Unlocking and Highlighting the Full Power of the Student Application Portal",
      icon: "smartphone",
      layout: "app-audit",
      content: {
        url: "https://app.srinivasaacademy.com",
        currentPublicState: {
          title: "What the Public Landing Page Currently Shows",
          items: [
            { icon: "user-check", name: "Student Dashboard", desc: "Centralized login screen for enrolled learners" },
            { icon: "calendar", name: "Schedule Updates", desc: "Timetable and batch schedule notifications" },
            { icon: "credit-card", name: "Fees & Payments", desc: "Basic fee installment payment interface" },
            { icon: "info", name: "Student Information", desc: "Basic profile and enrolled course details" },
            { icon: "download", name: "Download Section", desc: "Download links for mobile applications" }
          ]
        },
        missingAdvertising: {
          title: "Critical Features Existing Behind Login but NOT Advertised",
          items: [
            { icon: "clock", name: "Live Attendance Tracking", desc: "Biometric & class session attendance logs" },
            { icon: "award", name: "Exam & Mock Test Analytics", desc: "Rank comparison, subject-wise score cards" },
            { icon: "video", name: "Recorded Video Library", desc: "High-definition lecture streaming on demand" },
            { icon: "book-open", name: "Digital Study Materials", desc: "In-house formula sheets, notes & question banks" },
            { icon: "file-text", name: "Assignment Submissions", desc: "Homework submission and faculty grading portal" },
            { icon: "credit-card", name: "Digital Student ID Cards", desc: "QR-coded student badges for campus access" },
            { icon: "message-square", name: "Direct Faculty Communication", desc: "1-on-1 doubt clearing messaging channels" },
            { icon: "check-circle", name: "Course Completion Certificates", desc: "Automated digital verified certificates" }
          ]
        }
      },
      speakerNotes: "The app landing page only mentions schedule updates and fee payments. Prospective parents and students have no idea the app supports recorded video streaming, mock test analysis, digital ID cards, and direct faculty chat. We must turn the app landing page into a major selling point."
    },
    {
      id: "slide-2b",
      categoryId: "srinivasa-app",
      domain: "app.srinivasaacademy.com",
      tag: "PROPOSAL 2 • ARCHITECTURE",
      title: "Proposed Student App Ecosystem & Navigation Flow",
      subtitle: "Seamless Unified Experience from Mobile App Download to Desktop Learning",
      icon: "layout",
      layout: "flow-diagram",
      content: {
        architectureNodes: [
          { step: "01", title: "Student Login", desc: "OTP / Password Authentication with role detection (Student, Parent, Faculty)" },
          { step: "02", title: "Centralized Dashboard", desc: "Real-time upcoming class countdown, attendance %, fee due alert, new study notes" },
          { step: "03", title: "Core Academics", desc: "Recorded Lecture Vault • Mock Test Center • Assignment Evaluation • Timetables" },
          { step: "04", title: "Support & Academy Services", desc: "Doubt Ticketing System • Fee Installments (Razorpay) • Downloadable Receipts • ID Card" }
        ],
        businessImpact: [
          "Eliminates 60% of administrative phone calls regarding timetables and fee receipts.",
          "Provides parents with real-time visibility into attendance and test performance.",
          "Showcases tech-forward coaching infrastructure to attract tech-savvy Gen Z students."
        ]
      },
      speakerNotes: "By standardizing the student flow into a modern, unified application, we reduce support ticket load by over 60% and improve student retention and referral rates."
    },
    {
      id: "slide-2c",
      categoryId: "srinivasa-app",
      domain: "app.srinivasaacademy.com",
      tag: "PROPOSAL 2 • INTERACTIVE DEMO",
      title: "Interactive Prototype: Modern Student Dashboard",
      subtitle: "Experience the proposed student interface with live schedule, test scores & fee status",
      icon: "monitor",
      layout: "demo-student-dashboard",
      content: {
        demoType: "student-dashboard"
      },
      speakerNotes: "Here is an interactive mockup of the proposed student dashboard. Switch tabs to see Attendance analytics, Lecture timetable, Recorded video classes, and Fee installments."
    },

    // ==========================================
    // PROPOSAL 3: sep.srinivasaacademy.com
    // ==========================================
    {
      id: "slide-3a",
      categoryId: "srinivasa-sep",
      domain: "sep.srinivasaacademy.com",
      tag: "PROPOSAL 3 • SEP PROGRAM",
      title: "sep.srinivasaacademy.com: Statutory Executive Program",
      subtitle: "Bridging the Gap Between Academic Theory and Practical Corporate Compliance",
      icon: "briefcase",
      layout: "sep-overview",
      content: {
        url: "https://sep.srinivasaacademy.com",
        programOverview: {
          name: "Statutory Executive Program (SEP)",
          tagline: "Real-World Practical Compliance Training for CA/CMA Articleship & Commerce Graduates",
          simulatedModules: [
            "GST Registration, Return Filing (GSTR-1, 3B, 9)",
            "Income Tax Return e-Filing (ITR 1-4) & AIS/TIS Review",
            "TDS / TCS Calculation, Deductions & TRACES Portals",
            "MCA Compliance, Director DIN Applications, ROC Filings",
            "Labour Law (EPF, ESI, Gratuity, Professional Tax)",
            "Digital Signature Certificates (DSC) & Financial Accounting"
          ],
          tracks: ["Track 1: Personal Finance", "Track 2: GST Executive", "Track 3: Statutory Executive Specialist"],
          currentFunnel: "sep.srinivasaacademy.com (Landing Page) → Redirects to srinivasaacademy.com (Register Form) → Enrolled students log into third-party app.nergyvidya.com LMS + Zoom Webinars."
        }
      },
      speakerNotes: "SEP is a high-margin practical training program. However, right now it funnels visitors across 3 different domains (sep.srinivasaacademy.com -> srinivasaacademy.com -> nergyvidya.com), causing massive drop-offs."
    },
    {
      id: "slide-3b",
      categoryId: "srinivasa-sep",
      domain: "sep.srinivasaacademy.com",
      tag: "PROPOSAL 3 • STRATEGIC FIXES",
      title: "6 Pillars of Improvement for the SEP Platform",
      subtitle: "Eliminating Friction, Unifying Domains & Establishing Industry Authority",
      icon: "shield-check",
      layout: "pillars-grid",
      content: {
        pillars: [
          {
            num: "1",
            title: "Content & Credibility Gaps",
            problem: "No pricing, course duration, downloadable syllabus PDF, or batch start dates. Founder quote displays a generic placeholder icon.",
            solution: "Add transparent batch calendar, instant syllabus download with lead capture, and verified video credentials of faculty."
          },
          {
            num: "2",
            title: "Fragmented Tech & Domain Experience",
            problem: "Students bounce between 4 disparate domains (sep, nergyvidya, srinivasaacademy, webinar). Feels disjointed and unverified.",
            solution: "Consolidate header/footer, unify brand styling with single sign-on feel, and showcase actual simulator UI previews."
          },
          {
            num: "3",
            title: "Conversion Friction Removal",
            problem: "CTA links to generic contact page rather than dedicated SEP registration. No WhatsApp or live chat.",
            solution: "Targeted landing page with 1-click WhatsApp counselor chat and role segmentation (Articleship Student vs Commerce Graduate vs Working Pro)."
          },
          {
            num: "4",
            title: "SEO & Technical Performance",
            problem: "Missing meta descriptions, thin title tags, heavy uncompressed WordPress/Elementor PNGs slowing load times, zero schema markup.",
            solution: "Implement Schema.org/Course rich snippets, optimize Core Web Vitals (<1.5s load), and target 'GST practical training Chennai'."
          },
          {
            num: "5",
            title: "Deep Curriculum Modules",
            problem: "Modules are just static labels with no breakdown of topics, duration, software tools used, or sample projects.",
            solution: "Create interactive module accordion showing simulated government portal walkthroughs (GSTN, TRACES, Income Tax)."
          },
          {
            num: "6",
            title: "Trust, Affiliations & Certifications",
            problem: "Lack of CA/CMA practitioner endorsements, corporate recruiter logos, or sample completion certificate preview.",
            solution: "Display verifiable digital certificate preview with QR code, alumni placement logos, and ICMAI practitioner badges."
          }
        ]
      },
      speakerNotes: "By resolving these 6 pillars, SEP becomes Chennai's undisputed leader in practical statutory compliance training. Notice how addressing schema markup allows Google to show course fees and dates directly on search results."
    },
    {
      id: "slide-3c",
      categoryId: "srinivasa-sep",
      domain: "sep.srinivasaacademy.com",
      tag: "PROPOSAL 3 • INTERACTIVE DEMO",
      title: "Interactive Prototype: Simulated Compliance Module Explorer",
      subtitle: "Experience how learners explore the hands-on simulated e-filing curriculum",
      icon: "cpu",
      layout: "demo-sep-modules",
      content: {
        demoType: "sep-modules"
      },
      speakerNotes: "Here is an interactive mockup of the SEP module explorer. Users can click through GST, Income Tax, TDS, and MCA modules to see real practical software simulators and download curriculum breakdowns."
    },

    // ==========================================
    // PROPOSAL 4: onlineclasses.srinivasaacademy.com
    // ==========================================
    {
      id: "slide-4a",
      categoryId: "srinivasa-online",
      domain: "onlineclasses.srinivasaacademy.com",
      tag: "PROPOSAL 4 • CRITICAL AUDIT",
      title: "onlineclasses.srinivasaacademy.com: Urgent Template Cleanup",
      subtitle: "Removing Leftover 'Edura' Theme Demo Content & Broken Outbound Links",
      icon: "alert-octagon",
      layout: "urgent-audit",
      content: {
        url: "https://onlineclasses.srinivasaacademy.com",
        severityLevel: "URGENT / REPUTATION DAMAGING",
        coreBusiness: "Recorded Video Classes for CMA Foundation, Inter (Groups 1 & 2), and Final (Groups 3 & 4). 2000+ hours of video lectures with shopping cart e-commerce.",
        criticalBugs: [
          {
            badge: "Severe Leak",
            title: "Third-Party Theme Links & Copy",
            desc: "Homepage still displays vendor demo copy '538+ Courses', 'Experts Advisors' and has active links pointing directly to 'themeholy.com/wordpress/edura/...', leaking paying visitors away to a foreign theme website."
          },
          {
            badge: "Dead Anchors",
            title: "Broken Feature Links & Nav Items",
            desc: "'2000+ Hours of Content', 'Value For Money', and 'Seamless Streaming' point to empty '<>' broken anchors. 'CMA Foundation' and 'CMA Final Group-4' menu items are dead '#' links."
          },
          {
            badge: "SEO Misrepresentation",
            title: "Generic Edura Meta Tags & Outdated Copyright",
            desc: "Meta descriptions and OpenGraph tags in Google describe generic Edura boilerplate instead of Srinivasa Academy CMA coaching. Footer displays 2024 copyright despite 2025 updates."
          },
          {
            badge: "Catalogue Omission",
            title: "Single Course Displayed on Homepage",
            desc: "Only CMA Inter Group II is featured on the landing page, hiding Foundation and Final courses from prospective buyers."
          }
        ]
      },
      speakerNotes: "This is the most urgent fix in the portfolio. The website is actively linking visitors to themeholy.com demo pages and features broken # links for Foundation and Final courses. We can clean this up and launch an e-commerce checkout in 48 hours."
    },
    {
      id: "slide-4b",
      categoryId: "srinivasa-online",
      domain: "onlineclasses.srinivasaacademy.com",
      tag: "PROPOSAL 4 • E-COMMERCE UPGRADE",
      title: "6 Strategic Fixes for the Online Classes Platform",
      subtitle: "Transforming Recorded Lecture Vault into a Seamless E-Commerce Revenue Stream",
      icon: "shopping-bag",
      layout: "online-solutions",
      content: {
        solutions: [
          {
            num: "01",
            title: "Eliminate Demo Content & Fix Dead Links",
            desc: "Replace all ThemeHoly dummy text and links with custom Srinivasa Academy CMA course catalogs and active checkout buttons."
          },
          {
            num: "02",
            title: "Transparent Group & Subject Pricing",
            desc: "Display clear prices (e.g. ₹12,999 for Group 1 with 12-month validity), multi-device access specs, and installment options on course cards."
          },
          {
            num: "03",
            title: "Promote Free Demo Video Lectures",
            desc: "Bring buried demo lectures (/demo-cma-inter-g1/) front and center as the primary Hero CTA: 'Watch 3 Free Trial Lectures Now'."
          },
          {
            num: "04",
            title: "Clarify Doubt Resolution Workflow",
            desc: "Explain how recorded students get doubts answered: WhatsApp doubt groups, weekly live Q&A webinars, and faculty portal ticketing."
          },
          {
            num: "05",
            title: "Unified Brand Identity & Cross-Linking",
            desc: "Harmonize styling with Srinivasa Academy main and SEP sites so students feel safe transacting on a trusted brand platform."
          },
          {
            num: "06",
            title: "Schema.org Course & E-Commerce SEO",
            desc: "Implement Course and Product structured data with star ratings, pricing, and video thumbnails to dominate Google search results."
          }
        ]
      },
      speakerNotes: "By putting the 3 Free Trial Lectures front-and-center in the hero section, course purchase conversions will surge. Students test lecture quality, hear the faculty, and immediately proceed to checkout."
    },
    {
      id: "slide-4c",
      categoryId: "srinivasa-online",
      domain: "onlineclasses.srinivasaacademy.com",
      tag: "PROPOSAL 4 • INTERACTIVE DEMO",
      title: "Interactive Prototype: CMA Video Course & Free Trial Player",
      subtitle: "Test the course group selector, instant video preview & high-converting checkout CTA",
      icon: "play-circle",
      layout: "demo-video-course",
      content: {
        demoType: "video-course"
      },
      speakerNotes: "Here is a live simulation of the revamped course card. Prospective students can switch between Foundation, Inter G1, Inter G2, and Final, watch a sample lecture, and see exact transparent pricing."
    },

    // ==========================================
    // PROPOSAL 5: techmaax.com
    // ==========================================
    {
      id: "slide-5a",
      categoryId: "techmaax-main",
      domain: "techmaax.com",
      tag: "PROPOSAL 5 • 21 BRANCHES",
      title: "techmaax.com: 21-Branch IT & SAP Growth Strategy",
      subtitle: "Maximizing Walk-In & Local Search Enquiries across Tamil Nadu, Pondicherry & Bangalore",
      icon: "map-pin",
      layout: "techmaax-overview",
      content: {
        url: "https://techmaax.com",
        overview: "TechMaax operates 21 premier training centres offering authorized SAP, Autodesk, Full-Stack IT, and AI Masterclasses with global vendor certifications.",
        locationsCount: "21 Centres across Chennai (Tambaram, Anna Nagar, Guindy, Velachery, T. Nagar), Coimbatore, Trichy, Pondicherry & Bangalore.",
        currentGaps: [
          "Animated counter stats on homepage freeze and show '0' instead of real alumni counts.",
          "Separate subdomain for recordings (record.techmaax.com) causes disconnected student UX.",
          "Long static list of branches makes it difficult for mobile users to quickly find their nearest center.",
          "FAQ answers are buried and not indexed for Google rich snippets.",
          "Lack of self-service CMS makes simple batch date and fee updates slow and dependent on developers."
        ]
      },
      speakerNotes: "TechMaax has an impressive 21-centre footprint. But prospective students browsing on mobile struggle to find their closest branch phone number. We will implement an instant location finder and local SEO pages for each branch."
    },
    {
      id: "slide-5b",
      categoryId: "techmaax-main",
      domain: "techmaax.com",
      tag: "PROPOSAL 5 • VALUE MATRIX",
      title: "Direct Business Value & Conversion Improvements",
      subtitle: "Measurable Revenue & Operational Enhancements for Multi-Branch Training",
      icon: "trending-up",
      layout: "value-table",
      content: {
        rows: [
          {
            area: "Homepage Trust Counters",
            action: "Fix animated counters (21+ Centres, 25,000+ Students, 15+ Years) to load reliably on all devices without showing '0'.",
            businessValue: "First impression trust boost; eliminates skepticism when deciding to enquire."
          },
          {
            area: "Unified Student Portal",
            action: "Bring recorded classes, notes, announcements, and fee status under single main domain login.",
            businessValue: "Reduces student confusion, eliminates duplicate platform overhead, improves retention."
          },
          {
            area: "Interactive Branch Locator",
            action: "Add searchable 'Find Your Nearest Centre' tool with GPS distance, map view & 1-tap Click-to-Call.",
            businessValue: "Immediate surge in mobile phone inquiries and branch walk-in footfalls."
          },
          {
            area: "Local SEO & Google Maps",
            action: "Create 21 individual location landing pages optimized for 'SAP training in Tambaram', 'Autodesk Trichy'.",
            businessValue: "Captures high-intent local organic searches with zero paid ad expenditure."
          },
          {
            area: "FAQ & Rich Snippet SEO",
            action: "Format syllabus and fee FAQs with FAQPage schema markup for Google Search dropdowns.",
            businessValue: "Dominates page-one search results for top IT certification queries."
          },
          {
            area: "Self-Service Course & Batch CMS",
            action: "Empower front-desk staff to update upcoming weekend/weekday batch start dates in real time.",
            businessValue: "Zero developer dependency; always shows accurate, fresh batch schedules."
          },
          {
            area: "CRM & WhatsApp Lead Routing",
            action: "Connect enquiry forms directly to regional WhatsApp counselors and central CRM tracking.",
            businessValue: "Reduces lead response time from hours to under 60 seconds, doubling conversion."
          }
        ]
      },
      speakerNotes: "Notice the local SEO opportunity: 21 dedicated branch landing pages targeting keywords like 'SAP training in Trichy' or 'Autodesk in Coimbatore' will capture thousands of high-intent students every month for free."
    },
    {
      id: "slide-5c",
      categoryId: "techmaax-main",
      domain: "techmaax.com",
      tag: "PROPOSAL 5 • INTERACTIVE DEMO",
      title: "Interactive Prototype: 21-Branch Interactive Locator",
      subtitle: "Filter centres by city, search by area, and trigger direct Click-to-Call & Map routes",
      icon: "compass",
      layout: "demo-branch-locator",
      content: {
        demoType: "branch-locator"
      },
      speakerNotes: "Here is an interactive mockup of the 21-branch locator. Filter by Chennai, Coimbatore, Trichy, Pondicherry, or Bangalore to see how easy it is for students to call or navigate."
    },

    // ==========================================
    // PROPOSAL 6: record.techmaax.com
    // ==========================================
    {
      id: "slide-6a",
      categoryId: "techmaax-record",
      domain: "record.techmaax.com",
      tag: "PROPOSAL 6 • SAP PORTAL",
      title: "record.techmaax.com: SAP Recorded Training Portal",
      subtitle: "Simplifying Technical Navigation & Communicating Clear Career Outcomes",
      icon: "database",
      layout: "sap-audit",
      content: {
        url: "https://record.techmaax.com",
        currentStatus: "SAP Training Portal offering modules like SAP FICO, MM, SD, SuccessFactors, and ABAP with cart, enrollment, and student login.",
        currentRoadblocks: [
          { title: "Complicated Technical UI", desc: "Interface feels dense and developer-centric rather than learner-friendly." },
          { title: "Missing Career Outcomes", desc: "Does not explain salary growth, job roles (Consultant vs End-User), or placement records." },
          { title: "No Free Demo Lectures", desc: "Requires blind trust before buying high-ticket enterprise SAP courses." },
          { title: "Absence of Placement Proof", desc: "Lacks testimonials, corporate alumni hiring logos, or trainer credentials." }
        ]
      },
      speakerNotes: "SAP courses are high-ticket investments. Students hesitate when a portal looks purely technical without showing career outcomes, placement salary packages, or sample demo classes."
    },
    {
      id: "slide-6b",
      categoryId: "techmaax-record",
      domain: "record.techmaax.com",
      tag: "PROPOSAL 6 • 8-STEP BLUEPRINT",
      title: "8-Step Modernization Framework for SAP Portal",
      subtitle: "Positioning TechMaax as the Top SAP Certification & Placement Destination",
      icon: "award",
      layout: "sap-solutions",
      content: {
        steps: [
          { step: "01", title: "Modern UI/UX", desc: "Clean, enterprise-grade look with intuitive module filtering (FICO, MM, SD, HCM, ABAP)." },
          { step: "02", title: "Clear Career Positioning", desc: "Explicitly highlight: Target salary (₹6L - ₹18L), who it is for, and global SAP certification pathway." },
          { step: "03", title: "Rich Course Pages", desc: "Display real-time server practice access, syllabus PDF, project simulations, and batch timing." },
          { step: "04", title: "Free Sample Demos", desc: "Provide 15-minute sample chapter videos on SAP GUI navigation and configuration." },
          { step: "05", title: "Verified Testimonials", desc: "Show video reviews of alumni placed at Accenture, TCS, Infosys, and Deloitte." },
          { step: "06", title: "High-Impact CTAs", desc: "Prominent 'Start Free Demo', 'Download Syllabus', and 'Talk to SAP Counselor' triggers." },
          { step: "07", title: "Empowered Student LMS", desc: "Progress tracking, real-world scenario assignments, quiz assessments, and completion badges." },
          { step: "08", title: "Mobile-First Accessibility", desc: "Flawless responsive video playback and LMS dashboard across iOS and Android smartphones." }
        ]
      },
      speakerNotes: "This 8-step framework turns a static recording portal into an enterprise career launchpad. Adding free 15-minute GUI navigation demos eliminates pre-purchase friction."
    },
    {
      id: "slide-6c",
      categoryId: "techmaax-record",
      domain: "record.techmaax.com",
      tag: "PROPOSAL 6 • INTERACTIVE DEMO",
      title: "Interactive Prototype: SAP Module Career & Demo Viewer",
      subtitle: "Explore SAP FICO, MM, SD career paths, salary benchmarks, and free trial video previews",
      icon: "trending-up",
      layout: "demo-sap-viewer",
      content: {
        demoType: "sap-viewer"
      },
      speakerNotes: "Here is an interactive mockup of the revamped SAP course explorer with career salary benchmarks and instant trial access."
    },

    // ==========================================
    // PROPOSAL 7: lucky-hostels.com
    // ==========================================
    {
      id: "slide-7a",
      categoryId: "lucky-hostels",
      domain: "lucky-hostels.com",
      tag: "PROPOSAL 7 • PG / HOSTEL",
      title: "lucky-hostels.com: High-Conversion Booking Redesign",
      subtitle: "Turning a Passive Brochure Site into an Instant Booking & Lead-Gen Platform",
      icon: "home",
      layout: "hostel-overview",
      content: {
        url: "https://lucky-hostels.com",
        targetAudience: "College students, IT/working professionals, job-seekers moving to Chennai requiring safe, affordable, and well-connected PG accommodation.",
        currentFourLocations: [
          { name: "Tambaram", type: "Lucky Men's Hostel", near: "Near Railway Station, MEPZ, Colleges" },
          { name: "Velachery", type: "Lucky Men's Hostel", near: "Near IT Corridor, Phoenix Mall, MRTS" },
          { name: "Puzhuthivakkam", type: "Lucky Women's Hostel", near: "Near Madipakkam, Velachery Bus Depot" },
          { name: "Ashok Nagar", type: "Lucky Women's Hostel", near: "Near Metro Station, Vadapalani Hub" }
        ],
        coreProblem: "A visitor needs to know in 5 seconds: Location, Price, Facilities, Safety, Room Availability, and How to Book. The current site fails to deliver this critical 5-second journey."
      },
      speakerNotes: "Lucky Hostels has 4 prime locations in Chennai for men and women. But hostel seekers decide in 5 to 10 seconds. If they can't instantly see price, photos, and available beds, they click back to Google."
    },
    {
      id: "slide-7b",
      categoryId: "lucky-hostels",
      domain: "lucky-hostels.com",
      tag: "PROPOSAL 7 • SITEMAP",
      title: "lucky-hostels.com: Booking-First Sitemap Comparison",
      subtitle: "Re-architecting the User Journey for Maximum Walk-Ins and Phone Bookings",
      icon: "git-commit",
      layout: "sitemap-compare",
      content: {
        currentTree: {
          name: "Current Sitemap (Generic)",
          children: [
            { name: "Home" },
            { name: "About" },
            { 
              name: "Hostels / Locations",
              children: [
                { name: "Tambaram (Men's)" },
                { name: "Puzhuthivakkam (Women's)" },
                { name: "Velachery (Men's)" },
                { name: "Ashok Nagar (Women's)" }
              ]
            },
            { name: "Gallery" },
            { name: "Facilities / Services" },
            { name: "Contact & Enquiry" }
          ]
        },
        proposedTree: {
          name: "Proposed Booking & SEO Sitemap",
          children: [
            { name: "HOME ('Find Your Hostel' Widget, Live Bed Status, Reviews)" },
            { name: "ABOUT US (Safety, Hygiene Standards, Management)" },
            { 
              name: "OUR HOSTELS (Dedicated SEO Location Pages)",
              children: [
                { name: "Tambaram Men's Hostel (Photos, Pricing, Google Map)" },
                { name: "Velachery Men's Hostel (IT Corridor Proximity)" },
                { name: "Puzhuthivakkam Women's Hostel (CCTV, Security)" },
                { name: "Ashok Nagar Women's Hostel (Metro Walking Distance)" }
              ]
            },
            { name: "ROOMS & PRICING (Single, 2-Sharing, 3-Sharing, 4-Sharing Matrix)" },
            { name: "FACILITIES (Wi-Fi, 3x Food, Laundry, Housekeeping, Power Backup)" },
            { name: "GALLERY (High-Res Bedroom, Dining & Washroom Photos)" },
            { name: "LOCATION & NEARBY HUBS (Colleges, IT Parks, Metro Stations)" },
            { name: "STUDENT & PROFESSIONAL REVIEWS (Google Review Widget)" },
            { name: "FAQ (Deposit rules, notice period, food timings, guest policy)" },
            { name: "BOOK NOW & INSTANT WHATSAPP (+91 78258 29272)" }
          ]
        }
      },
      speakerNotes: "The new sitemap adds dedicated location landing pages for SEO (like 'Hostel in Tambaram', 'Women's Hostel in Ashok Nagar') plus transparent room pricing and live availability."
    },
    {
      id: "slide-7c",
      categoryId: "lucky-hostels",
      domain: "lucky-hostels.com",
      tag: "PROPOSAL 7 • CORE FEATURES",
      title: "5 Breakthrough Growth Features for Lucky Hostels",
      subtitle: "From Instant Filter to Live Room Availability & Self-Service Admin",
      icon: "check-square",
      layout: "hostel-features",
      content: {
        features: [
          {
            num: "01",
            title: "'Find Your Perfect Hostel' Filter",
            desc: "Homepage search tool: Select Location (Tambaram, Velachery, etc.) + Gender (Men/Women) + Sharing (Single, 2, 3, 4) + Move-in Date → Instant filtered results."
          },
          {
            num: "02",
            title: "Live Room Availability Indicator",
            desc: "Urgency and clarity: '🟢 2-Sharing: 3 Beds Available' or '🔴 Single Room: Full'. Drives instant bookings before beds fill up."
          },
          {
            num: "03",
            title: "Transparent Monthly Pricing Matrix",
            desc: "Clear display of 'Starting from ₹6,500/month' with food, Wi-Fi, electricity included. Reduces repetitive phone calls and filters serious leads."
          },
          {
            num: "04",
            title: "Omnipresent Click-to-Call & WhatsApp (+91 78258 29272)",
            desc: "Sticky mobile action bar with 📞 Call Now, 💬 WhatsApp, and 🏠 Book a Room for instant conversions."
          },
          {
            num: "05",
            title: "Self-Service Hostel Admin Dashboard",
            desc: "Empowers the hostel warden/manager to update room availability (Vacant/Occupied), pricing, and photo galleries without developer assistance."
          }
        ]
      },
      speakerNotes: "The Live Room Availability feature is a huge game-changer. Displaying 3 beds left in Tambaram creates natural urgency and converts passive browsers into instant WhatsApp callers."
    },
    {
      id: "slide-7d",
      categoryId: "lucky-hostels",
      domain: "lucky-hostels.com",
      tag: "PROPOSAL 7 • INTERACTIVE DEMO",
      title: "Interactive Prototype: 'Find Your Hostel' & Live Availability",
      subtitle: "Test the hostel filter, check live bed counts, and simulate 1-tap WhatsApp booking",
      icon: "sliders",
      layout: "demo-hostel-finder",
      content: {
        demoType: "hostel-finder"
      },
      speakerNotes: "Here is an interactive mockup of the 'Find Your Perfect Hostel' tool. Test changing the location between Tambaram, Velachery, Ashok Nagar, and Puzhuthivakkam to see live bed counts update in real time."
    },

    // ==========================================
    // PROPOSAL 8: sa3dsolutions.com
    // ==========================================
    {
      id: "slide-8a",
      categoryId: "sa-3d",
      domain: "sa3dsolutions.com",
      tag: "PROPOSAL 8 • ARCHITECTURAL 3D AUDIT",
      title: "sa3dsolutions.com: Critical Template Cleanup & Positioning",
      subtitle: "Fixing Makeup Studio Demo Content & Establishing B2B Scale-Model Authority",
      icon: "box",
      layout: "audit",
      content: {
        url: "https://sa3dsolutions.com",
        currentSitemap: [
          { name: "Home", status: "Displays makeup studio template copy" },
          { name: "About", status: "Mentions 2015 establishment & 100+ clients" },
          { name: "Courses", status: "Confusing nav item unrelated to core model making" },
          { name: "Services", status: "Lists 8 model categories" },
          { name: "Portfolio", status: "Static pictures without specs" },
          { name: "Contact", status: "Basic form with New York placeholder address" }
        ],
        painPoints: [
          {
            title: "1. Residual Makeup Studio Demo Text",
            desc: "The homepage still contains unedited template text: 'Christina's Makeup Studio', 'Get Gorgeous', '25% OFF makeup promotion', and a 'New York' address.",
            severity: "Critical",
            badge: "Trust Destroyer"
          },
          {
            title: "2. Confusing 'Courses' Navigation",
            desc: "'Courses' appears in the top menu, diluting the core commercial proposition of B2B architectural scale-model fabrication for builders and architects.",
            severity: "High",
            badge: "Positioning Issue"
          },
          {
            title: "3. Absence of Interactive CAD / Quote Calculator",
            desc: "Model making is 100% custom/project-based. The site lacks a structured CAD/PDF drawing upload and project scope quotation tool.",
            severity: "High",
            badge: "Revenue Leak"
          },
          {
            title: "4. Static Portfolio Without Engineering Proof",
            desc: "Projects show flat images without model dimensions (e.g. 1:100 scale), completion turnaround, materials used, or client developer testimonials.",
            severity: "Medium",
            badge: "Under-marketed"
          }
        ]
      },
      speakerNotes: "SA 3D Solutions has real engineering capability since 2015 in Chennai. But visiting architects see 'Christina's Makeup Studio' and '25% OFF Makeup'. We will completely clean this up and install a high-converting CAD project quote tool."
    },
    {
      id: "slide-8b",
      categoryId: "sa-3d",
      domain: "sa3dsolutions.com",
      tag: "PROPOSAL 8 • NEW SITEMAP & PROCESS",
      title: "sa3dsolutions.com: Recommended B2B Sitemap & 6-Step Workflow",
      subtitle: "Positioning for Architects, Builders, Real Estate Developers & Interior Designers",
      icon: "git-branch",
      layout: "sitemap-compare",
      content: {
        currentTree: {
          name: "Current Sitemap (Confusing)",
          children: [
            { name: "Home (Makeup studio placeholder)" },
            { name: "About" },
            { name: "Courses (Unrelated to core fabrication)" },
            { name: "Services (Static list)" },
            { name: "Portfolio (Bare gallery)" },
            { name: "Contact (New York template address)" }
          ]
        },
        proposedTree: {
          name: "Proposed High-Conversion B2B Sitemap",
          children: [
            { name: "Home (Clear headline + Instant CAD Quote CTA + Portfolio Showcase)" },
            { name: "About Us (Chennai Facility, 100+ Real Estate Clients Since 2015)" },
            { 
              name: "Services (Scale Models & Prototyping)",
              children: [
                { name: "Residential & Township Scale Models" },
                { name: "Industrial & Factory Flow Models" },
                { name: "High-Rise Commercial & Villa Models" },
                { name: "Interior Sectional & Infrastructure Models" }
              ]
            },
            { 
              name: "Technology & Capabilities",
              children: [
                { name: "High-Precision 3D Printing (SLA / FDM)" },
                { name: "Laser Cutting & Acrylic Fabrication" },
                { name: "Architectural Lighting & Miniature Landscaping" }
              ]
            },
            { name: "Industries We Serve (Architects, Builders, Real Estate, Govt)" },
            { name: "Our 6-Step Process (Drawings → CAD → Fabrication → Delivery)" },
            { name: "Project Portfolio (Filtered by Residential, Industrial, High-Rise)" },
            { name: "Get Project Quote (Instant CAD/PDF Upload & Scope Form)" },
            { name: "Client Testimonials & Google Reviews" },
            { name: "Contact & Instant WhatsApp (+91 Chennai Helpline)" }
          ]
        }
      },
      speakerNotes: "The new sitemap positions SA 3D as Chennai's premier architectural model maker. It showcases their technology (Laser cutting, 3D printing) and gives clients a clear 6-step roadmap from drawing submission to delivery."
    },
    {
      id: "slide-8c",
      categoryId: "sa-3d",
      domain: "sa3dsolutions.com",
      tag: "PROPOSAL 8 • WORKFLOW & CAPABILITIES",
      title: "6-Step Production Workflow & 3 Visitor Conversion Choices",
      subtitle: "Eliminating Uncertainty and Guaranteeing Fast Project Turnarounds",
      icon: "cpu",
      layout: "flow-diagram",
      content: {
        architectureNodes: [
          { step: "01", title: "Submit Drawing / CAD", desc: "Client uploads AutoCAD DWG, Revit BIM, or architectural PDF drawings via the quote tool." },
          { step: "02", title: "Get Instant Quotation", desc: "Sales engineering team provides transparent cost estimate & turnaround timeline within 4 hours." },
          { step: "03", title: "3D Digital Prep", desc: "Scale optimization (1:50, 1:100, 1:200), slicing, and structural laser path modeling." },
          { step: "04", title: "Model Fabrication", desc: "Precision 3D printing, acrylic laser cutting, miniature landscaping, and LED illumination wiring." },
          { step: "05", title: "Quality & Scale Audit", desc: "Rigorous dimensional accuracy inspection, finish polishing, and acrylic dust-proof casing." },
          { step: "06", title: "Safe On-Site Delivery", desc: "Reinforced wooden crating and installation at client site / real estate sales pavilion." }
        ],
        businessImpact: [
          "GET A QUOTE: Instant CAD upload tool captures serious developer projects.",
          "WHATSAPP US: 1-tap WhatsApp consultation for fast architectural queries.",
          "VIEW PORTFOLIO: Filterable scale models proving craftsmanship & build quality."
        ]
      },
      speakerNotes: "Notice how every page will feature the 3 distinct choices: Get a Quote for serious projects, WhatsApp Us for quick questions, and View Portfolio to evaluate build quality."
    },
    {
      id: "slide-8d",
      categoryId: "sa-3d",
      domain: "sa3dsolutions.com",
      tag: "PROPOSAL 8 • INTERACTIVE DEMO",
      title: "Interactive Prototype: Architectural CAD Project Quote Calculator",
      subtitle: "Simulate project type selection, scale specs, drawing upload & instant quote submission",
      icon: "sliders",
      layout: "demo-sa3d-quote",
      content: {
        demoType: "sa3d-quote"
      },
      speakerNotes: "Here is an interactive mockup of the Project Quote Calculator. Try selecting High-Rise Commercial, 1:100 scale, and LED illumination to see the estimated turnaround and quotation trigger."
    },

    // ==========================================
    // PROPOSAL 9: selfie-miniature.com
    // ==========================================
    {
      id: "slide-9a",
      categoryId: "selfie-miniature",
      domain: "selfie-miniature.com",
      tag: "PROPOSAL 9 • E-COMMERCE ARCHITECTURE",
      title: "selfie-miniature.com: 4-Layer Enterprise E-Commerce Platform",
      subtitle: "Transforming Bags & Backpacks Store into a Data-Driven E-Commerce Engine",
      icon: "shopping-bag",
      layout: "pillars-grid",
      content: {
        pillars: [
          {
            num: "Layer 1",
            title: "Customer Storefront",
            problem: "Current site has standard pages but lacks rich dimensions, capacity guides, and dynamic bundles.",
            solution: "Modern storefront with categories: Backpacks, Duffel, Travel, Laptop, Gym, Bicycle bags + Live delivery estimate."
          },
          {
            num: "Layer 2",
            title: "Self-Service Admin Dashboard",
            problem: "Owner currently manages products and orders manually without unified inventory metrics.",
            solution: "Enterprise Admin Panel: Today's sales (₹82k), order status pipeline, abandoned carts & stock alerts."
          },
          {
            num: "Layer 3",
            title: "Google Analytics 4 & Marketing",
            problem: "No funnel visibility on where drop-offs happen between product views, cart additions and checkouts.",
            solution: "Full GA4 E-Com events (view_item, add_to_cart, begin_checkout, purchase) + GTM + Google Merchant feed."
          },
          {
            num: "Layer 4",
            title: "Unified Inventory & CRM Database",
            problem: "Stock and customer orders are siloed, leading to stockouts and missed repeat purchase marketing.",
            solution: "Real-time SKU stock tracking (DP-001-BLK, reserved vs available stock) + Customer CRM segmentation."
          }
        ]
      },
      speakerNotes: "Selfie Miniature already sells bags and backpacks, but the big opportunity is building a unified 4-layer architecture where the storefront, admin panel, inventory CRM, and GA4 analytics share the same database."
    },
    {
      id: "slide-9b",
      categoryId: "selfie-miniature",
      domain: "selfie-miniature.com",
      tag: "PROPOSAL 9 • PRODUCT PAGE UPGRADE",
      title: "High-Converting Product Page & AOV Recommendation Engine",
      subtitle: "Eliminating Pre-Purchase Uncertainty & Increasing Average Order Value",
      icon: "trending-up",
      layout: "feature-grid",
      content: {
        features: [
          { num: "01", title: "Complete Spec Hierarchy", desc: "Explicit dimensions (L x W x H in cm), dry weight (grams), volume (Liters), and compartment counts." },
          { num: "02", title: "Laptop Size Fit Indicator", desc: "Visual badge confirming exact laptop compatibility (e.g. 'Fits up to 16-inch MacBook Pro')." },
          { num: "03", title: "Material & Weatherproofing", desc: "Clear rating: Water-resistant 900D Oxford Fabric with YKK waterproof zippers & rain cover." },
          { num: "04", title: "Smart Delivery Estimator", desc: "Enter pincode for live transit time (e.g. 'Delivers to Chennai in 24 - 48 Hours')." },
          { num: "05", title: "Warranty & Return Clarity", desc: "Prominent '1-Year International Warranty' + '7-Day Hassle-Free Returns' trust badges." },
          { num: "06", title: "'Frequently Bought Together' (AOV Boost)", desc: "Duffel Bag + Travel Organizer + Toiletry Pouch bundle with 1-click 'Add Bundle (Save 15%)'." }
        ]
      },
      speakerNotes: "By adding detailed specs (waterproofing, capacity in liters, laptop fit) and 'Frequently Bought Together' bundles, returns drop by 30% while average order value (AOV) increases by over 25%."
    },
    {
      id: "slide-9c",
      categoryId: "selfie-miniature",
      domain: "selfie-miniature.com",
      tag: "PROPOSAL 9 • GA4 & GTM TRACKING",
      title: "Full-Funnel GA4 E-Commerce Measurement & GTM Architecture",
      subtitle: "Pinpointing Exact Drop-Off Points Across 10,000 Visitors to 300 Purchases",
      icon: "bar-chart-2",
      layout: "value-table",
      content: {
        rows: [
          {
            area: "1. Top of Funnel (10,000 Visitors → 4,000 Views)",
            action: "Track `page_view`, `view_item_list`, `select_item`, `view_item` via Google Tag Manager.",
            businessValue: "Measures 40% catalog engagement rate; highlights high-traffic vs low-traffic categories."
          },
          {
            area: "2. Cart Addition (4,000 Views → 1,000 Adds)",
            action: "Track `add_to_cart`, `remove_from_cart`, `view_cart` with product SKU, price, and color variant.",
            businessValue: "25% Add-to-Cart conversion; reveals which bags generate maximum buyer intent."
          },
          {
            area: "3. Checkout Initiation (1,000 Carts → 600 Checkouts)",
            action: "Track `begin_checkout`, `add_shipping_info`, `add_payment_info` step-by-step.",
            businessValue: "60% Checkout progression; identifies shipping cost friction or pincode drop-offs."
          },
          {
            area: "4. Final Purchase (600 Checkouts → 300 Sales)",
            action: "Track `purchase`, `refund` with revenue, tax, shipping, and coupon code metadata.",
            businessValue: "50% Checkout conversion; pinpoints payment gateway failures vs successful transactions."
          },
          {
            area: "5. Google Merchant & Search Console",
            action: "Sync product feed with Google Merchant Center (Google Shopping) and Product Schema.",
            businessValue: "Enables products to appear in Google Shopping tab with price, star ratings & stock status."
          }
        ]
      },
      speakerNotes: "Instead of saying 'the site is not selling', GA4 funnel measurement tells us exactly where the leak is—for example, if 600 start checkout but only 300 buy, we immediately know to optimize payment methods or shipping fees."
    },
    {
      id: "slide-9d",
      categoryId: "selfie-miniature",
      domain: "selfie-miniature.com",
      tag: "PROPOSAL 9 • ADMIN & INVENTORY CRM",
      title: "Admin Dashboard, SKU Inventory & Customer Segmentation",
      subtitle: "Real-Time Stock Alerts, Order Management Pipeline & Repeat Customer CRM",
      icon: "layout",
      layout: "flow-diagram",
      content: {
        architectureNodes: [
          { step: "01", title: "Live Sales Dashboard", desc: "Today's Sales (₹82,450), 127 Orders, 3.8% Conversion Rate, low-stock alerts & abandoned cart count." },
          { step: "02", title: "SKU Inventory Engine", desc: "SKU: DP-001-BLK (100 Total • 8 Reserved • 92 Available). Triggers automated 'Low Stock (10)' warnings." },
          { step: "03", title: "Order Pipeline Management", desc: "Status tracking: New → Confirmed → Processing → Packed → Shipped (with Tracking #) → Delivered." },
          { step: "04", title: "Customer CRM & Segments", desc: "Segment by New, Repeat (5+ orders), High-Value, Inactive & Wholesale for automated WhatsApp remarketing." }
        ],
        businessImpact: [
          "Zero code required for product catalog updates, pricing changes, or seasonal discount flash sales.",
          "Automatic stock reservation prevents overselling and out-of-stock cancellations.",
          "Segmented customer WhatsApp campaigns generate 3.5x higher repeat order rates."
        ]
      },
      speakerNotes: "The admin dashboard gives management real-time visibility into sales, inventory, and order fulfillment without touching code."
    },
    {
      id: "slide-9e",
      categoryId: "selfie-miniature",
      domain: "selfie-miniature.com",
      tag: "PROPOSAL 9 • INTERACTIVE DEMO",
      title: "Interactive Prototype: E-Commerce Admin & Live Funnel Analytics",
      subtitle: "Switch between Live Sales Dashboard, SKU Inventory Matrix & GA4 E-Com Funnel",
      icon: "monitor",
      layout: "demo-selfie-admin",
      content: {
        demoType: "selfie-admin"
      },
      speakerNotes: "Here is an interactive mockup of the Selfie Miniature Admin Dashboard and GA4 E-Commerce Funnel. Switch tabs to see Live Sales, Inventory SKU matrix, and Customer CRM segments."
    },

    // ==========================================
    // SUMMARY & ROADMAP
    // ==========================================
    {
      id: "slide-10a",
      categoryId: "summary",
      domain: "IMPLEMENTATION ROADMAP",
      tag: "EXECUTION • TECH STACK",
      title: "Recommended Modern Technology Architecture",
      subtitle: "Built for Ultra-Fast Loading, SEO Dominance, Mobile-First UX & Security",
      icon: "server",
      layout: "tech-stack",
      content: {
        pillars: [
          {
            title: "High-Performance Frontend",
            desc: "Next.js / Astro / Tailwind CSS for sub-second page loads, responsive mobile UI, and perfect 95+ Google Lighthouse scores.",
            tags: ["Next.js / React", "Tailwind CSS", "Lucide Icons", "Mobile-First PWA"]
          },
          {
            title: "Integrated Lead & Conversion Stack",
            desc: "WhatsApp Business API webhooks, Razorpay payment gateway, and automated CRM lead capture via Zoho or Google Sheets.",
            tags: ["WhatsApp Cloud API", "Razorpay Payment Gateway", "Zoho / CRM Sync", "Instant SMS Alerts"]
          },
          {
            title: "SEO & Rich Structured Data",
            desc: "Schema.org Course, Product, FAQPage, LocalBusiness, and BreadcrumbList markup for dominating Google rich search results.",
            tags: ["Course & Product Schema", "LocalBusiness Maps", "FAQ Rich Snippets", "GA4 + Google Tag Manager"]
          },
          {
            title: "Self-Service Admin Dashboard",
            desc: "Intuitive headless CMS allowing non-technical staff to update course fees, batch schedules, branch numbers, scale model quotes, and hostel beds.",
            tags: ["Sanity / Strapi CMS", "Role-Based Auth", "Image Optimization", "Daily Cloud Backups"]
          }
        ]
      },
      speakerNotes: "We recommend a modern frontend stack paired with WhatsApp Cloud API and Google Rich Snippet schema. This guarantees sub-second page speeds and top Google rankings."
    },
    {
      id: "slide-10b",
      categoryId: "summary",
      domain: "IMPLEMENTATION ROADMAP",
      tag: "ROADMAP & NEXT STEPS",
      title: "Phased Delivery Timeline & Action Plan",
      subtitle: "Structured Rollout from Emergency Fixes to Full Digital Transformation",
      icon: "calendar-check",
      layout: "roadmap",
      content: {
        phases: [
          {
            phase: "Phase 1 (Week 1 - 2)",
            title: "Emergency Cleanup & Quick Wins",
            items: [
              "Remove Edura theme dummy links on onlineclasses.srinivasaacademy.com",
              "Remove Makeup Studio text & NY address on sa3dsolutions.com",
              "Fix broken '00' trust counters on techmaax.com & record.srinivasaacademy.com",
              "Deploy WhatsApp chat buttons across all platforms & set up GA4 / GTM"
            ],
            badge: "Immediate Impact"
          },
          {
            phase: "Phase 2 (Week 3 - 5)",
            title: "Core Redesign & Interactive Tools",
            items: [
              "Launch 'Find Your Hostel' + Live Availability for Lucky Hostels",
              "Deploy CAD Project Quote Calculator for SA 3D Solutions",
              "Deploy Interactive 21-Branch Locator for TechMaax",
              "Implement new Course & Gated Study Material pages for Srinivasa Academy"
            ],
            badge: "High Conversion"
          },
          {
            phase: "Phase 3 (Week 6 - 8)",
            title: "Unified Portals & E-Commerce CRM",
            items: [
              "Deploy Selfie Miniature 4-Layer E-Commerce & Admin Inventory Dashboard",
              "Integrate single sign-on student dashboard (Attendance, Video Vault, Fees)",
              "Launch local SEO pages for 21 TechMaax branches & 4 Lucky Hostels locations",
              "Final end-to-end testing, speed optimization & official launch"
            ],
            badge: "Full Transformation"
          }
        ],
        callToAction: {
          headline: "Ready to Transform Your Digital Web Presence?",
          subtext: "Let's align on the priority phases and begin the development sprint.",
          actions: ["Approve Implementation Plan", "Schedule Architecture Deep-Dive", "Begin Phase 1 Cleanup Sprint"]
        }
      },
      speakerNotes: "This concludes our comprehensive proposal deck. We can execute Phase 1 emergency cleanups within 7 to 10 days, followed by the interactive tools and portal unification in Phase 2 and 3. Thank you!"
    }
  ]
};
