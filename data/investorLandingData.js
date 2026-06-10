export const landingData = {
  brand: {
    name: "The Grand Bedford",
    location: "165 Bedford Avenue, Williamsburg, Brooklyn",
    email: "info@thegrandbedford.com",
  },
  hero: {
    headline: "The Grand Bedford",
    subheadline: "A prime Williamsburg cultural platform entering its revenue launch phase.",
    copy: "The Grand Bedford is an active indoor/outdoor gallery, event, art-sales, and programming platform located in the heart of Williamsburg. The current investment opportunity is designed to stabilize the platform and activate its near-term revenue channels.",
    proof: [
      "Active gallery and event space",
      "Recent art-sales traction",
      "Three direct revenue channels",
      "$150,000 investment opportunity",
    ],
    dealStrip:
      "$150K investment · 15% passive economic interest · $1M post-money valuation",
    primaryCta: { label: "View the Investment Opportunity", href: "#offer" },
    secondaryCta: { label: "Schedule a Walkthrough", href: "#invest" },
    image: "../assets/Grand_Bedford_Front-a0e70409-7994-433a-bbf8-5802e04e6e1d.png",
  },
  offer: {
    title: "The Offer",
    summary:
      "Invest $150,000 for 15% passive participation in The Grand Bedford operating business.",
    terms: [
      { label: "Investment", value: "$150,000" },
      { label: "Investor receives", value: "15% passive economic interest" },
      { label: "Implied valuation", value: "$1,000,000 post-money" },
      { label: "Distributions", value: "15% of net operating distributions while outstanding" },
      { label: "Minimum hold", value: "12 months" },
      { label: "Company buyback right", value: "$300,000 after month 12" },
      { label: "Post-buyout tail", value: "2.5% of net operating distributions for six months after buyout" },
      { label: "Reporting", value: "Monthly investor updates" },
    ],
    plainEnglish:
      "Investor receives a passive economic interest in The Grand Bedford operating business. The company may not repurchase the interest during the first 12 months. After month 12, the company may repurchase the interest for $300,000. If repurchased, the investor also receives a 2.5% net operating distribution tail for six months.",
  },
  valuation: {
    title: "Why the Valuation Is Reasonable",
    points: [
      "Prime Williamsburg indoor/outdoor location",
      "Active cultural venue, not concept-stage",
      "Recent artist-show sales proof",
      "Private-event and programming upside",
      "Three direct revenue channels",
      "Path toward $1M+ annualized revenue across multiple channels",
    ],
    proof:
      "A recent artist-show structure generated approximately $50,000 in gross art sales, approximately $25,000 in Grand Bedford art revenue, plus a $7,500 show rental fee.",
    note: "Blue-chip and secondary-market art opportunities are treated as upside only unless documentation, authority, commission terms, and transaction status are confirmed.",
  },
  useOfFunds: {
    title: "Use of Funds",
    intro: "Capital protects the platform first, then activates the direct revenue channels in phases.",
    items: [
      { label: "Team activation runway", amount: 50000 },
      { label: "Back rent / lease stabilization", amount: 35000 },
      { label: "July rent", amount: 20000 },
      { label: "General overhead reserve", amount: 4000 },
      { label: "Security + insurance setup/reserve", amount: 4500 },
      { label: "Channel 1 — Space Revenue", amount: 19500 },
      { label: "Channel 2 — Art Revenue", amount: 10000 },
      { label: "Channel 3 — Programming Revenue", amount: 5500 },
      { label: "Activation contingency", amount: 1500 },
    ],
    total: 150000,
  },
  phases: {
    title: "Capital Is Released by Milestone",
    copy: "Funds are not deployed all at once. The first priority is platform stability: team runway, back rent, July rent, security, insurance, and overhead. Revenue-channel capital is then released in phases as bookings, art-sales activity, and programming demand validate the next spend.",
    items: [
      {
        title: "Phase 1 — Immediate / First 30 Days",
        purpose:
          "Stabilize the business, make the space bookable, support art-sales systems, and launch immediate programming.",
      },
      {
        title: "Phase 2 — 30–45+ Days / Revenue-Validated",
        purpose:
          "Release additional activation capital only after early revenue activity, bookings, collector interest, and event demand validate further spend.",
      },
    ],
  },
  channels: [
    {
      id: "space",
      number: 1,
      title: "Space Revenue",
      description:
        "Private events, indoor/outdoor rentals, backyard use, full-space takeovers, vendor-supported activations, and content shoots.",
      allocation: 19500,
      phase1: {
        label: "Phase 1 — Immediate",
        total: 11000,
        purpose: "Make the space private, bookable, and immediately event-ready.",
        items: [
          { label: "Privacy curtains / interior privacy", amount: 5000 },
          { label: "QR signage / booking materials", amount: 1250 },
          { label: "Event setup / cleaning / reset kit", amount: 1250 },
          { label: "Starter outdoor music / speakers", amount: 1000 },
          { label: "Space/event photography", amount: 750 },
          { label: "Backyard starter usability items", amount: 1250 },
          { label: "Miscellaneous install / hardware", amount: 500 },
        ],
      },
      phase2: {
        label: "Phase 2 — 30–45 Days",
        total: 8500,
        purpose: "Expand outdoor usability, power planning, and weather protection.",
        items: [
          { label: "Rear-yard electrical / power solution allowance", amount: 3500 },
          { label: "Front awning / weather protection contribution", amount: 2000 },
          { label: "Backyard furniture / lighting / usability expansion", amount: 2000 },
          { label: "Outdoor sound / lighting upgrade", amount: 1000 },
        ],
      },
      powerNote:
        "This allowance should be described as including electrician review, feasibility, limited implementation, and related permitting, engineering, architectural, or filing costs to the extent required. If permanent electrical work requires heavier filings or infrastructure, the company may phase the work or use temporary power solutions until booked revenue justifies further investment.",
      summary:
        "Channel 1 capital makes the space private, bookable, powered/planned, weather-aware, and event-ready.",
    },
    {
      id: "art",
      number: 2,
      title: "Art Revenue",
      description:
        "Artist shows, gallery sales, collector previews, sales pipeline, buyer follow-up, and high-upside art network opportunities.",
      allocation: 10000,
      phase1: {
        label: "Phase 1 — Immediate",
        total: 6500,
        purpose: "Equip buyer-facing sales tools, artwork tags, and floor coverage.",
        items: [
          { label: "Printer / quality paper / binders / sleeves / punch", amount: 1250 },
          { label: "NFC / QR artwork tags and wall-label materials", amount: 1250 },
          { label: "Art handling / install / protection supplies", amount: 1000 },
          { label: "CRM / SaaS / email tools", amount: 1000 },
          { label: "Initial sales floor / assistant coverage", amount: 2000 },
        ],
      },
      phase2: {
        label: "Phase 2 — 30–60 Days",
        total: 3500,
        purpose: "Support collector previews and art-sales contingency.",
        items: [
          { label: "Collector preview / membership series", amount: 3000 },
          { label: "Miscellaneous art-sales contingency", amount: 500 },
        ],
      },
      systemsNote:
        "Brian can build the inventory tracker, receivables tracker, CRM architecture, agreement templates, sales split calculator, QR/NFC data structure, buyer follow-up scripts, and investor reporting dashboard internally using legal and AI workflow. Therefore, investor capital is focused on buyer-facing conversion items.",
      summary:
        "Channel 2 capital turns the gallery into a trackable art-sales environment through binders, NFC/QR artwork cards, collector follow-up, sales floor coverage, and private collector experiences.",
    },
    {
      id: "programming",
      number: 3,
      title: "Programming Revenue",
      description:
        "Ticketed events, July 4 activation, salons, workshops, kids/family programming, music/culture events, sponsor-supported programming, and community-facing events.",
      allocation: 5500,
      phase1: {
        label: "Phase 1 — Immediate",
        total: 3500,
        purpose: "Launch immediate events, ticketing, and content documentation.",
        items: [
          { label: "July 4 / launch event support", amount: 1750 },
          { label: "Ticketing / RSVP / calendar setup", amount: 500 },
          { label: "Content capture / documentation", amount: 750 },
          { label: "Programming supplies / basic materials", amount: 500 },
        ],
      },
      phase2: {
        label: "Phase 2 — 30–60 Days",
        total: 2000,
        purpose: "Pilot family programming and sponsor-ready materials.",
        items: [
          { label: "Kids/family art pilot supplies", amount: 1000 },
          { label: "Sponsor / brand one-pagers", amount: 750 },
          { label: "Miscellaneous programming support", amount: 250 },
        ],
      },
      summary:
        "Channel 3 starts lean: immediate events, ticketing, documentation, and small repeatable program pilots before larger spending.",
    },
  ],
  launchPlan: {
    title: "90-Day Revenue Launch Plan",
    subtitle:
      "The first 90 days focus on converting the three direct revenue channels into booked events, collected art revenue, ticketed programming, and sponsor/partner pipeline.",
    channels: [
      {
        id: "space",
        title: "Space Revenue",
        description:
          "Private events, gallery rentals, backyard / indoor-outdoor bookings, content shoots, food truck/vendor-supported events, and full-space takeovers.",
        forecast: [
          {
            period: "Month 1",
            range: "$3K–$7.5K",
            note: "launch event packages, July 4 activation, private-event outreach",
          },
          {
            period: "Month 2",
            range: "$8K–$15K",
            note: "repeat private bookings, backyard/event use, vendor events",
          },
          {
            period: "Month 3",
            range: "$15K–$25K",
            note: "recurring event pipeline, full-space rental packages",
          },
          {
            period: "6 Months",
            range: "$25K–$50K/month",
            note: "formal private-event venue rhythm",
          },
          {
            period: "12 Months",
            range: "$450K–$800K annual target",
            note: "mature space revenue channel",
          },
        ],
        drivers: [
          "private events",
          "gallery rentals",
          "backyard use",
          "content shoots",
          "vendor-supported events",
          "full-space takeovers",
        ],
      },
      {
        id: "art",
        title: "Art Revenue",
        description:
          "Artist shows, gallery sales, collector previews, pending art-sale collections, show rental fees, buyer follow-up, and high-upside art network opportunities.",
        forecast: [
          {
            period: "Month 1",
            range: "$10K–$25K",
            note: "collect pending payments, organize inventory, push warm buyers",
          },
          {
            period: "Month 2",
            range: "$25K–$50K",
            note: "collector preview series, artist-show pipeline",
          },
          {
            period: "Month 3",
            range: "$40K–$75K",
            note: "repeatable art-sales/show rhythm",
          },
          {
            period: "6 Months",
            range: "$300K–$400K cumulative",
            note: "consistent shows plus collector follow-up",
          },
          {
            period: "12 Months",
            range: "$600K–$800K target",
            note: "gallery sales, show fees, and representation revenue",
          },
        ],
        proofNote:
          "A recent artist-show structure generated approximately $50K in gross art sales, approximately $25K in Grand Bedford art revenue, plus a $7.5K show rental fee.",
        blueChipNote:
          "Blue-chip and secondary-market opportunities are treated as upside only unless documentation, authority, commission terms, and transaction status are confirmed.",
        drivers: [
          "artist shows",
          "weekly show rental fees",
          "gallery commissions / revenue share",
          "collector previews",
          "pending receivables",
          "buyer follow-up",
        ],
      },
      {
        id: "programming",
        title: "Programming Revenue",
        description:
          "Ticketed events, July 4 activation, salons, workshops, kids/family art programs, music/culture events, sponsor-supported programming, and later sports-culture or World Cup-style events.",
        forecast: [
          {
            period: "Month 1",
            range: "$2K–$5K",
            note: "July 4 / launch events, ticketing, first RSVP list",
          },
          {
            period: "Month 2",
            range: "$5K–$12K",
            note: "workshops, salons, family/kids pilot, small sponsors",
          },
          {
            period: "Month 3",
            range: "$10K–$20K",
            note: "recurring ticketed formats and sponsor one-pagers",
          },
          {
            period: "6 Months",
            range: "$15K–$35K/month",
            note: "regular programming calendar",
          },
          {
            period: "12 Months",
            range: "$250K–$500K target",
            note: "ticketed events, workshops, sponsorships, and brand-supported programming",
          },
        ],
        drivers: [
          "ticket sales",
          "workshops",
          "kids/family programs",
          "salons",
          "sponsored events",
          "music/culture programming",
          "brand activations",
        ],
      },
    ],
    partnership: {
      title: "Community & Partnership Capital",
      copy: "In parallel, The Grand Bedford will pursue grants, fiscal-sponsor relationships, community arts partnerships, sponsored access programs, and strategic neighborhood partnerships. These are treated separately from ordinary operating revenue and are not relied on in the base-case direct revenue forecast.",
    },
  },
  roadmap: {
    title: "Revenue Roadmap",
    subtitle:
      "A phased view of how capital deployment converts into bookings, art sales, programming revenue, and repeatable operations.",
    periods: ["6 Months", "12 Months", "18 Months", "24 Months"],
    chartTitle: "Projected Annualized Revenue Run-Rate",
    yLabel: "Annualized revenue run-rate",
    disclaimer:
      "Illustrative annualized run-rate, not guaranteed revenue.",
    detailNote:
      "Forecasts depend on execution, bookings, sales activity, programming demand, and operating costs.",
    scenarios: {
      conservative: { label: "Conservative", values: [65, 140, 240, 380], color: "#7a7268" },
      base: { label: "Base Case", values: [110, 260, 480, 720], color: "#9a7b5a" },
      upside: { label: "Upside", values: [175, 420, 780, 1150], color: "#c9ad8a" },
    },
    defaultScenario: "base",
  },
  returns: {
    title: "Investor Return Path",
    intro:
      "The investor participates in 15% of net operating distributions while the 15% interest is outstanding. After month 12, the company may repurchase the interest for $300,000. If repurchased, the investor also receives a 2.5% tail participation for six months.",
    highlights: [
      { label: "Initial investment", value: "$150,000" },
      { label: "Passive economic interest", value: "15%" },
      { label: "Minimum hold", value: "12 months" },
      { label: "Buyback right", value: "$300,000 after month 12" },
      { label: "Tail after buyout", value: "2.5% for six months" },
    ],
    disclaimer:
      "Illustrative only. Actual returns depend on net operating distributions and whether the company elects to repurchase the interest.",
    periods: ["6 Months", "12 Months", "18 Months", "24 Months"],
    scenarios: [
      {
        label: "Conservative",
        twelveMonth: "~$24K estimated distributions",
        twentyFourMonth: "~$48K estimated distributions if not bought out",
        buyout: "$300K + six-month 2.5% tail",
      },
      {
        label: "Base Case",
        twelveMonth: "~$42K estimated distributions",
        twentyFourMonth: "~$85K estimated distributions if not bought out",
        buyout: "$300K + six-month 2.5% tail",
      },
      {
        label: "Upside",
        twelveMonth: "~$68K estimated distributions",
        twentyFourMonth: "~$120K estimated distributions if not bought out",
        buyout: "$300K + six-month 2.5% tail",
      },
    ],
  },
  people: {
    title: "People & Execution",
    note: "Additional support may include sales floor coverage, event staffing, photography, installation help, security, and vendor/contractor support.",
    team: [
      {
        name: "Brian",
        role: "Founder / legal / finance / operations",
        focus: [
          "investor documents",
          "payment/deposit controls",
          "event agreements",
          "inventory and receivables systems",
          "CRM and reporting",
          "lease/vendor stabilization",
          "monthly investor updates",
        ],
      },
      {
        name: "Fran",
        role: "Business development / relationships / community",
        focus: [
          "investor outreach",
          "sponsor conversations",
          "community and guest relationships",
          "collector and event guest introductions",
          "partnership pipeline",
        ],
      },
      {
        name: "Zach",
        role: "Curator / art sales / artist pipeline",
        focus: [
          "art inventory priorities",
          "artist show pipeline",
          "collector previews",
          "buyer follow-up",
          "art-sales pipeline",
          "blue-chip opportunity tracking / diligence",
        ],
      },
      {
        name: "Sony/Soni",
        role: "Programming / music / culture / network activation",
        focus: [
          "July programming",
          "music/culture events",
          "community activation",
          "partner outreach",
          "audience growth",
        ],
      },
    ],
  },
  proof: {
    title: "Visual Proof: Space, Events & Art",
    items: [
      {
        role: "exterior",
        category: "Property",
        caption: "Exterior / storefront — prime Williamsburg visibility",
        src: "../assets/Grand_Bedford_Front-a0e70409-7994-433a-bbf8-5802e04e6e1d.png",
      },
      {
        role: "interior",
        category: "Property",
        caption: "Clean interior gallery and flexible event setting",
        src: "../assets/Grand_Bedford_Interior.png",
      },
      {
        role: "events",
        category: "Events",
        caption: "Event / crowd activation in the gallery",
        src: "../assets/rsvp-hero-event.png",
      },
      {
        role: "art",
        category: "Art",
        caption: "Art wall and sales environment",
        src: "../assets/rsvp-haring-art.png",
      },
      {
        role: "backyard",
        category: "Backyard / activation potential",
        caption: "Backyard / outdoor activation potential",
        src: "../assets/127E76CC-0DE3-4BED-BC3C-7DEFEE53B818-36f97c9b-cba3-49cc-b6f0-3d91779fbc2b.png",
      },
    ],
  },
  risk: {
    title: "How We Protect the Investment",
    items: [
      "Phased spending instead of all-at-once deployment",
      "July rent and overhead reserve protected",
      "Security and insurance accounted for",
      "Payment/deposit controls for events",
      "Event agreements and rules",
      "Art inventory and receivables tracking",
      "Collector CRM and sales follow-up",
      "Monthly investor reporting",
      "Blue-chip upside excluded from base case unless documented",
      "Passive investor structure with no operating burden",
      "Founder-built legal, reporting, and operating systems",
    ],
  },
  invest: {
    title: "Request Investment Documents or Schedule a Walkthrough",
    disclaimer:
      "I understand this is a private investment opportunity and not a public offering.",
    primaryCta: "Request Investor Call",
    secondaryCta: "Schedule a Walkthrough",
    fields: {
      nextSteps: [
        "Investor call",
        "Walkthrough",
        "Receive documents",
      ],
      accredited: ["Yes", "No", "Unsure"],
    },
  },
};
