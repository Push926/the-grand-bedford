/**
 * Central data source for /investors page.
 * Update this file to change metrics, copy, and pipeline items.
 * Later: swap for CSV/API without touching section markup.
 */

export const investorMetrics = {
  artLedgerSales: "$86.5K",
  amountCollected: "$21.5K",
  openReceivables: "$65K",
  revenueForecast12Month: "$2.423M",
  partnershipOneTimeValue: "$168K",
  partnershipMonthlyValue: "$27.5K",
  partnershipPipelineAnnual: "$498K",
  partnershipInKindValue: "$32.5K",
  galleryRevenue: "$43.25K",
  artistPayable: "$43.25K",
  artworkInventoryValue: "$134K",
  worksSold: 10,
  artistsTracked: 7,
  grossAR: "$96K",
  arCollected: "$23.5K",
  arBalanceDue: "$72.5K",
  arGalleryRevenue: "$55.75K",
  arArtistPartnerPayable: "$40.25K",
  eventExpectedRevenue: "$83.975K",
  eventExpectedNetRevenue: "$50.475K",
  expectedAttendance: "1,570",
  weightedPartnershipPipeline: "$142.475K",
  capitalPipeline: "$2.475M",
  weightedCapitalPipeline: "$391.25K",
  capitalSoftCommitments: "$0",
  capitalHardCommitments: "$0",
  may2026Actual: "$50.5K",
  june2026Actual: "$69K",
  expenseForecast12Month: "$2.432M",
  rollingRevenue: "$2.542M",
  rollingExpenses: "$2.635M",
  artEstGalleryRevenue: "$67K",
  artEstArtistPayable: "$67K",
  eventsTracked: 9,
  eventDepositsReceived: "$5.25K",
  eventBalanceDue: "$78.725K",
  eventEstimatedCost: "$33.5K",
};

export const investorNav = [
  { id: "overview", label: "Overview" },
  { id: "financials", label: "Financials" },
  { id: "art-inventory", label: "Art" },
  { id: "events", label: "Events" },
  { id: "proof", label: "Proof" },
  { id: "capital", label: "Access" },
];

export const heroData = {
  headline:
    "A cultural platform with real traction, structured growth, and investor-ready transparency.",
  copy: [
    "The Grand Bedford is a Williamsburg art gallery, cultural venue, and event platform built around real sales, organized inventory, active receivables, programming, and partnerships.",
    "This investor portal provides a transparent view of traction, forecasts, operating data, and supporting materials.",
  ],
  primaryCta: {
    label: "Review Financial Snapshot",
    href: "#financials",
    icon: "chart",
  },
  secondaryCta: {
    label: "Request Data Room Access",
    href: "mailto:info@thegrandbedford.com?subject=Investor%20Data%20Room%20Access%20Request",
    icon: "lock",
  },
  image: {
    src: "../assets/rsvp-hero-event.png",
    alt: "Cultural event gathering at The Grand Bedford with warm lighting and active programming",
  },
  kpis: [
    {
      label: "Art Ledger Sales",
      key: "artLedgerSales",
      footnote: "Gross sales tracked",
      icon: "frame",
    },
    {
      label: "Collected to Date",
      key: "amountCollected",
      footnote: "Tracked collected amount",
      icon: "bank",
    },
    {
      label: "Open Receivables",
      key: "openReceivables",
      footnote: "Outstanding balance",
      icon: "ledger",
    },
    {
      label: "12-Month Revenue Forecast",
      key: "revenueForecast12Month",
      footnote: "Projected next 12 months",
      icon: "forecast",
    },
    {
      label: "Partnership Pipeline",
      key: "partnershipPipelineAnnual",
      footnote: "Estimated annual value",
      icon: "partners",
    },
  ],
  tagline:
    "The Grand Bedford | 165 Bedford Avenue, Brooklyn, NY 11211 | Culture. Community. Legacy.",
};

export const sections = {
  whatIs: {
    eyebrow: "Overview",
    title: "What The Grand Bedford Is.",
    copy: [
      "The Grand Bedford is a hybrid art gallery, event venue, cultural platform, and brand activation space in Williamsburg, Brooklyn.",
      "We operate at the intersection of art, community, and commerce — creating meaningful experiences that support artists, engage collectors, welcome partners, and build recurring cultural activity.",
      "More than a venue, The Grand Bedford is being organized as a living ecosystem for creativity and culture, supported by structured operating data, transparent financial visibility, and a growing pipeline of events and partnerships.",
    ],
    cards: [
      {
        title: "Gallery",
        description:
          "Curated exhibitions, artwork inventory, collector relationships, and sales activity.",
        href: "#art-inventory",
        icon: "gallery",
      },
      {
        title: "Events",
        description:
          "Openings, private events, talks, workshops, dinners, and cultural programming.",
        href: "#events",
        icon: "events",
      },
      {
        title: "Partnerships",
        description:
          "Brand, hospitality, media, artist, and community collaborations.",
        href: "#partnerships",
        icon: "handshake",
      },
      {
        title: "Location",
        description:
          "A Williamsburg setting that supports visibility, gathering, and multi-stream revenue.",
        href: "#location",
        icon: "location",
      },
    ],
    images: {
      main: {
        src: "../assets/Grand_Bedford_Front-a0e70409-7994-433a-bbf8-5802e04e6e1d.png",
        alt: "Street-level storefront of The Grand Bedford in Williamsburg, Brooklyn",
      },
      bottomLeft: {
        src: "../assets/rsvp-hero-event.png",
        alt: "Cultural event gathering in a warm, inviting venue space",
      },
      bottomRight: {
        src: "../assets/rsvp-haring-art.png",
        alt: "Artwork on display in the gallery setting",
      },
    },
    detail: {
      left: "The Grand Bedford | Williamsburg, Brooklyn",
      right: "Culture is our foundation. Community is our future.",
    },
  },
  engines: {
    brand: "The Grand Bedford",
    headline: "A cultural platform built from four connected engines.",
    intro:
      "The Grand Bedford brings together gallery sales, live programming, private events, and strategic partnerships into one organized operating platform.",
    items: [
      {
        number: "01",
        title: "Art Sales",
        description:
          "Curated exhibitions, artwork inventory, collector relationships, and primary and secondary art sales.",
        label: "Primary Sales Engine",
        icon: "art",
      },
      {
        number: "02",
        title: "Events & Programming",
        description:
          "Openings, private events, artist talks, workshops, dinners, and cultural programming that build audience and recurring activity.",
        label: "Recurring Engagement",
        icon: "column",
      },
      {
        number: "03",
        title: "Brand Partnerships",
        description:
          "Strategic collaborations with aligned brands, hospitality partners, media, artists, and community organizations.",
        label: "Strategic Upside",
        icon: "handshake",
      },
      {
        number: "04",
        title: "Location / Property",
        description:
          "A Williamsburg physical platform that supports gallery sales, events, partnerships, and long-term cultural value.",
        label: "Physical Platform",
        icon: "building",
      },
    ],
    footer: "Four engines. One platform. Compounded value.",
  },
  traction: {
    headline: "Early traction, organized into measurable proof.",
    intro:
      "Since launch, The Grand Bedford has generated meaningful early activity across sales, collections, inventory, and artist ecosystem growth.",
    kpis: [
      { label: "Total Art Ledger Sales", key: "artLedgerSales", icon: "ledger" },
      { label: "Gallery Revenue", key: "galleryRevenue", icon: "gallery" },
      { label: "Artist Payable", key: "artistPayable", icon: "artist" },
      { label: "Amount Collected", key: "amountCollected", icon: "bank" },
      { label: "Balance Due", key: "openReceivables", icon: "balance" },
      { label: "Artwork Inventory Value", key: "artworkInventoryValue", icon: "inventory" },
      { label: "Works Sold", key: "worksSold", icon: "tag" },
      { label: "Artists Tracked", key: "artistsTracked", icon: "artists" },
    ],
    chart: {
      title: "Financial Traction Overview",
      baseKey: "artLedgerSales",
      rows: [
        { label: "Gross Sales", key: "artLedgerSales" },
        { label: "Collected", key: "amountCollected" },
        { label: "Outstanding Receivables", key: "openReceivables" },
        { label: "Gallery Share", key: "galleryRevenue" },
        { label: "Artist Share", key: "artistPayable" },
      ],
      axis: ["0", "20K", "40K", "60K", "80K", "100K"],
    },
    note: {
      headline: "Building transparency. Creating lasting value.",
      copy:
        "Our model is designed to align incentives, reward artists fairly, and deliver clarity to our investors. This is just the beginning.",
      cta: { label: "View Full Financial Report", href: "#financials" },
    },
  },
  financials: {
    headline: "Actuals, forecasts, and operating visibility.",
    intro:
      "Transparent performance reporting across revenue and expenses — actuals to date and forecasts forward — so investors can review the operating model with clarity.",
    toggles: [
      { label: "Monthly View", icon: "calendar", active: false },
      { label: "Category View", icon: "grid", active: false },
      { label: "Actual vs Forecast", icon: "chart", active: true },
      { label: "Revenue vs Expenses", icon: "clock", active: false },
    ],
    actuals: [
      { month: "May 2026", type: "Actual", key: "may2026Actual" },
      { month: "June 2026", type: "Actual", key: "june2026Actual" },
    ],
    summary: [
      { label: "12-Month Revenue Forecast", key: "revenueForecast12Month" },
      { label: "12-Month Expense Forecast", key: "expenseForecast12Month" },
      { label: "Rolling Revenue", key: "rollingRevenue" },
      { label: "Rolling Expenses", key: "rollingExpenses" },
    ],
    revenueChart: {
      title: "Revenue | Actuals & Forecast",
      yMax: 130,
      points: [
        { label: "May", year: "2026", value: 50.5, type: "actual" },
        { label: "Jun", year: "2026", value: 69, type: "actual" },
        { label: "Jul", year: "2026", value: 74, type: "forecast" },
        { label: "Aug", year: "2026", value: 82, type: "forecast" },
        { label: "Sep", year: "2026", value: 88, type: "forecast" },
        { label: "Oct", year: "2026", value: 93, type: "forecast" },
        { label: "Nov", year: "2026", value: 97, type: "forecast" },
        { label: "Jan", year: "2027", value: 108, type: "forecast" },
        { label: "Feb", year: "2027", value: 112, type: "forecast" },
        { label: "Mar", year: "2027", value: 115, type: "forecast" },
        { label: "Apr", year: "2027", value: 118, type: "forecast" },
        { label: "May", year: "2027", value: 121, type: "forecast" },
        { label: "Jun", year: "2027", value: 124, type: "forecast" },
      ],
    },
    comparisonChart: {
      title: "Revenue Forecast vs Expense Forecast",
      yMax: 130,
      revenue: [
        { label: "Jul", value: 74 },
        { label: "Aug", value: 82 },
        { label: "Sep", value: 88 },
        { label: "Oct", value: 93 },
        { label: "Nov", value: 97 },
        { label: "Jan", value: 108 },
        { label: "Feb", value: 112 },
        { label: "Mar", value: 115 },
        { label: "Apr", value: 118 },
        { label: "May", value: 121 },
        { label: "Jun", value: 124 },
      ],
      expense: [
        { label: "Jul", value: 38 },
        { label: "Aug", value: 40 },
        { label: "Sep", value: 42 },
        { label: "Oct", value: 44 },
        { label: "Nov", value: 46 },
        { label: "Jan", value: 48 },
        { label: "Feb", value: 50 },
        { label: "Mar", value: 52 },
        { label: "Apr", value: 54 },
        { label: "May", value: 56 },
        { label: "Jun", value: 60 },
      ],
    },
    takeaways: [
      "Actuals are separated from forecast assumptions.",
      "Forecasts are working assumptions and will be updated as verified operating data replaces dummy data.",
      "Revenue and expense visibility supports clearer underwriting.",
    ],
    disclosures: [
      "Projections are management's current working estimates.",
      "Forecasts will be updated as verified data replaces dummy data.",
    ],
    download: {
      label: "Financial model available upon request",
      href: "mailto:info@thegrandbedford.com?subject=Financial%20Model%20Request",
    },
  },
  receivables: {
    breadcrumb: "Financials / Accounts Receivable",
    headline: "Clear separation between sales, cash collected, and outstanding balances.",
    intro:
      "A transparent breakdown of revenue performance, collections, and amounts outstanding — designed to give investors visibility and confidence in our financial discipline.",
    summaryLabel: "Revenue Summary USD",
    summary: [
      { label: "Gross Amount", key: "grossAR", tone: "gross" },
      { label: "Collected", key: "arCollected", tone: "collected" },
      { label: "Balance Due", key: "arBalanceDue", tone: "balance" },
      { label: "Gallery Revenue", key: "arGalleryRevenue", tone: "gallery" },
      { label: "Artist / Partner Payable", key: "arArtistPartnerPayable", tone: "payable" },
    ],
    barBaseKey: "grossAR",
    barAxis: ["$0", "$40K", "$60K", "$80K", "$100K"],
    rows: [
      {
        buyer: "Collector A",
        category: "Artwork Sale",
        grossAmount: "$18,000",
        collectedAmount: "$10,000",
        balanceDue: "$8,000",
        dueDate: "May 30, 2026",
        status: "partially-paid",
        statusLabel: "Partially Paid",
      },
      {
        buyer: "Private Client A",
        category: "Artwork Sale",
        grossAmount: "$12,500",
        collectedAmount: "$12,500",
        balanceDue: "$0",
        dueDate: "May 10, 2026",
        status: "paid-in-full",
        statusLabel: "Paid in Full",
      },
      {
        buyer: "Collector B",
        category: "Artwork Sale",
        grossAmount: "$15,000",
        collectedAmount: "$5,000",
        balanceDue: "$10,000",
        dueDate: "June 15, 2026",
        status: "partially-paid",
        statusLabel: "Partially Paid",
      },
      {
        buyer: "Brand Partner A",
        category: "Brand Partnership",
        grossAmount: "$20,000",
        collectedAmount: "$10,000",
        balanceDue: "$10,000",
        dueDate: "June 30, 2026",
        status: "partially-paid",
        statusLabel: "Partially Paid",
      },
      {
        buyer: "Private Client B",
        category: "Artwork Sale",
        grossAmount: "$8,500",
        collectedAmount: "$8,500",
        balanceDue: "$0",
        dueDate: "May 5, 2026",
        status: "paid-in-full",
        statusLabel: "Paid in Full",
      },
      {
        buyer: "Collector C",
        category: "Artwork Sale",
        grossAmount: "$22,000",
        collectedAmount: "$0",
        balanceDue: "$22,000",
        dueDate: "July 15, 2026",
        status: "pending",
        statusLabel: "Pending",
      },
    ],
    tableColumns: [
      { key: "buyer", label: "Buyer / Account" },
      { key: "category", label: "Revenue Category" },
      { key: "grossAmount", label: "Gross Amount" },
      { key: "collectedAmount", label: "Collected Amount" },
      { key: "balanceDue", label: "Balance Due" },
      { key: "dueDate", label: "Due Date" },
      { key: "statusLabel", label: "Payment Status" },
    ],
    footerNote:
      "All figures are in USD. Balances reflect agreed payment terms and are shown for investor diligence purposes.",
  },
  artInventory: {
    headline: "Art Inventory + Sales Engine",
    intro:
      "Every artwork is tracked as both a cultural asset and an operating data point — with status, pricing, collection visibility, gallery share, and artist payable information organized for review.",
    redactionNote:
      "Public-facing artwork records are anonymized for investor review. Full artist names, collector details, invoices, and supporting materials may be made available to approved investors during diligence where appropriate.",
    metrics: [
      { label: "Artwork Inventory Value", key: "artworkInventoryValue", icon: "inventory" },
      { label: "Sold Price Total", key: "artLedgerSales", icon: "tag" },
      { label: "Amount Collected", key: "amountCollected", icon: "ledger" },
      { label: "Balance Due", key: "openReceivables", icon: "balance" },
      { label: "Estimated Gallery Revenue", key: "artEstGalleryRevenue", icon: "gallery" },
      { label: "Estimated Artist Payable", key: "artEstArtistPayable", icon: "artist" },
    ],
    filters: [
      { id: "all", label: "All", active: true },
      { id: "sold", label: "Sold" },
      { id: "available", label: "Available" },
      { id: "reserved", label: "Reserved" },
      { id: "originals", label: "Originals" },
      { id: "prints", label: "Prints" },
      { id: "photography", label: "Photography" },
      { id: "sculpture", label: "Sculpture" },
      { id: "commission", label: "Commission" },
    ],
    artworks: [
      {
        title: "Artwork Record A",
        artist: "Artist Redacted",
        type: "Original",
        medium: "Mixed Media",
        dimensions: "24 × 36 in",
        year: "2024",
        listPrice: "$15,000",
        status: "sold-partial",
        statusLabel: "Sold - Partially Paid",
        soldPrice: "$15,000",
        amountCollected: "$10,000",
        balanceDue: "$5,000",
        image: "../assets/rsvp-haring-art.png",
        filterTags: ["sold", "originals"],
      },
      {
        title: "Artwork Record B",
        artist: "Artist Redacted",
        type: "Original",
        medium: "Acrylic on canvas",
        dimensions: "30 × 40 in",
        year: "2023",
        listPrice: "$12,000",
        status: "sold-open",
        statusLabel: "Sold - Open Balance",
        soldPrice: "$12,000",
        amountCollected: "$0",
        balanceDue: "$12,000",
        placeholderTone: "slate",
        imageLabel: "Image redacted",
        filterTags: ["sold", "originals"],
      },
      {
        title: "Photography Record A",
        artist: "Photographer Redacted",
        type: "Photography",
        medium: "Archival pigment print",
        dimensions: "20 × 24 in",
        year: "2025",
        listPrice: "$5,000",
        status: "sold-partial",
        statusLabel: "Sold - Partially Paid",
        soldPrice: "$5,000",
        amountCollected: "$3,000",
        balanceDue: "$2,000",
        placeholderTone: "bronze",
        imageLabel: "Image redacted",
        filterTags: ["sold", "photography"],
      },
      {
        title: "Limited Print Record A",
        artist: "Artist Record A",
        type: "Print",
        medium: "Limited edition print",
        dimensions: "18 × 24 in",
        year: "2024",
        listPrice: "$3,500",
        status: "sold-partial",
        statusLabel: "Sold - Partially Paid",
        soldPrice: "$3,500",
        amountCollected: "$2,000",
        balanceDue: "$1,500",
        placeholderTone: "ivory",
        imageLabel: "Image redacted",
        filterTags: ["sold", "prints"],
      },
      {
        title: "Artwork Record C",
        artist: "Artist Record B",
        type: "Original",
        medium: "Oil on canvas",
        dimensions: "36 × 48 in",
        year: "2022",
        listPrice: "$18,000",
        status: "sold-partial",
        statusLabel: "Sold - Partially Paid",
        soldPrice: "$18,000",
        amountCollected: "$12,000",
        balanceDue: "$6,000",
        placeholderTone: "ivory",
        imageLabel: "Image redacted",
        filterTags: ["sold", "originals"],
      },
      {
        title: "Sculpture Record A",
        artist: "Artist Record C",
        type: "Sculpture",
        medium: "Metal / found object",
        dimensions: "14 × 10 × 8 in",
        year: "2023",
        listPrice: "$6,500",
        status: "sold-partial",
        statusLabel: "Sold - Partially Paid",
        soldPrice: "$6,500",
        amountCollected: "$4,000",
        balanceDue: "$2,500",
        placeholderTone: "charcoal",
        imageLabel: "Image restricted",
        filterTags: ["sold", "sculpture"],
      },
      {
        title: "Available Work A",
        artist: "Artist Redacted",
        type: "Original",
        medium: "Acrylic on canvas",
        dimensions: "24 × 30 in",
        year: "2025",
        listPrice: "$7,500",
        status: "available",
        statusLabel: "Available",
        placeholderTone: "bronze",
        imageLabel: "Image pending",
        filterTags: ["available", "originals"],
      },
      {
        title: "Reserved Work A",
        artist: "Artist Record D",
        type: "Original",
        medium: "Oil on canvas",
        dimensions: "28 × 36 in",
        year: "2024",
        listPrice: "$9,500",
        status: "reserved",
        statusLabel: "Reserved",
        placeholderTone: "slate",
        imageLabel: "Image redacted",
        filterTags: ["reserved", "originals"],
      },
    ],
    note:
      "Inventory is tracked across sold, available, reserved, and open-balance works to support sales management, collector follow-up, and investor diligence. Public records are redacted to protect artists, collectors, and transaction details.",
  },
  events: {
    eyebrow: "Events. Programming. Revenue.",
    headline: "Programming turns the space into a repeatable revenue platform.",
    intro:
      "The Grand Bedford's event strategy is built around repeatable formats rather than one-off activity. Programming is designed to activate the gallery, bring people into the room, create buyer relationships, generate content, support private rentals, and convert attention into revenue opportunities.",
    thesis:
      "Events bring people into the room. Follow-up turns the room into revenue.",
    kpis: [
      { label: "Events Tracked", key: "eventsTracked", icon: "calendar", footnote: "This Period" },
      { label: "Expected Attendance", key: "expectedAttendance", icon: "artists", footnote: "Across All Events" },
      { label: "Expected Revenue", key: "eventExpectedRevenue", icon: "tag", footnote: "This Period" },
      { label: "Expected Net Revenue", key: "eventExpectedNetRevenue", icon: "forecast", footnote: "This Period" },
    ],
    revenueStreamChart: {
      title: "Expected Revenue by Stream (Annual)",
      disclaimer:
        "Revenue projections reflect pipeline assumptions and stabilized operating visibility — not guaranteed outcomes.",
      yMax: 28,
      yAxis: ["$0K", "$7K", "$14K", "$21K", "$28K"],
      streams: [
        { id: "ticket", label: "Ticket Revenue" },
        { id: "venue", label: "Venue Rental Revenue" },
        { id: "fnb", label: "Food & Beverage Revenue" },
        { id: "sponsor", label: "Sponsorship Revenue" },
        { id: "other", label: "Other Revenue" },
      ],
      quarters: [
        { label: "Q1", values: { ticket: 5, venue: 6, fnb: 3, sponsor: 2, other: 1 } },
        { label: "Q2", values: { ticket: 8, venue: 7, fnb: 4, sponsor: 3, other: 2 } },
        { label: "Q3", values: { ticket: 7, venue: 6, fnb: 5, sponsor: 2, other: 2 } },
        { label: "Q4", values: { ticket: 6, venue: 5, fnb: 4, sponsor: 3, other: 1 } },
      ],
    },
    supportingBreakdown: {
      label: "Pipeline collections & costs",
      items: [
        { label: "Deposits Received", key: "eventDepositsReceived" },
        { label: "Balance Due", key: "eventBalanceDue" },
        { label: "Estimated Cost", key: "eventEstimatedCost" },
      ],
      note: "Supporting figures are working pipeline estimates for investor diligence.",
    },
    proofNote:
      "Early programming and rental activity has already produced revenue, buyer conversations, artist relationships, content, and private-event interest.",
    proof: [
      {
        label: "Gallery openings",
        copy: "Early openings and exhibition activity have supported audience development, buyer conversations, content, and follow-up opportunities.",
      },
      {
        label: "Solo artist shows",
        copy: "Prior solo exhibition activity has demonstrated the space's ability to host artist-centered programming and gallery sales opportunities.",
      },
      {
        label: "Private / cultural rentals",
        copy: "The space has already supported private cultural use and rental conversations, demonstrating demand beyond traditional gallery hours.",
      },
      {
        label: "Content and activation interest",
        copy: "Photo, content, catered, and brand-style uses are part of the near-term opportunity set for monetizing the space across multiple dayparts.",
      },
    ],
    formatsHeadline: "Repeatable revenue formats.",
    formatsIntro:
      "Each format is designed with a revenue purpose, owner accountability, and follow-up path — not as isolated programming.",
    formats: [
      {
        title: "Art Sales & Exhibition Events",
        status: "Active / Repeatable",
        copy: "Gallery openings, solo artist shows, group exhibitions, artist talks, collector previews, and limited-edition releases create repeated exposure to artists and artwork. These events support buyer conversations, collector relationships, content creation, and art-sales follow-up.",
        revenueLogic: "Art sales, collector leads, limited editions, private previews",
        tags: ["Art Sales", "Exhibitions", "Collectors", "Content"],
      },
      {
        title: "Private Rentals & Celebrations",
        status: "Developing",
        copy: "The space can support private dinners, birthdays, receptions, founder gatherings, collector salons, cultural celebrations, and small galas. Private rentals create an independent revenue lane while introducing new guests to the gallery and its artwork.",
        revenueLogic: "Rental fees, staffing / coordination fees, vendor partnerships, art-sale follow-up",
        tags: ["Rentals", "Private Events", "Hospitality", "Leads"],
      },
      {
        title: "Brand Activations & Sponsorships",
        status: "Selective / Pipeline",
        copy: "Brand events may include product launches, lifestyle activations, fashion/art collaborations, sponsored programming, and premium private use where the concept fits the gallery's identity. Management should preserve brand discipline and avoid commercial uses that dilute the room.",
        discipline: "Not every dollar is worth taking if it damages the room.",
        revenueLogic: "Activation fees, sponsorship, content value, private dinners",
        tags: ["Brands", "Sponsorship", "Activations", "Content"],
      },
      {
        title: "Content, Podcast, Photo & Video Rentals",
        status: "Pipeline / Low-Overhead",
        copy: "The front gallery's natural light and visual character can support podcast sessions, interviews, photo shoots, video shoots, product content, and creator rentals during non-event hours. This creates a potential low-overhead revenue lane while introducing creators, brands, and media professionals to the space.",
        revenueLogic: "Hourly rentals, session packages, production add-ons, repeat creator use",
        tags: ["Content", "Photo / Video", "Podcast", "Daytime Use"],
      },
      {
        title: "Elevated Art-Social Programming",
        status: "Planned / Repeatable",
        copy: "Artist-led creative sessions, guided painting evenings, private creative events, drawing classes, and group art experiences can create recurring ticket revenue while introducing new guests to the space. The format should feel elevated and gallery-appropriate, not generic.",
        revenueLogic: "Tickets, private group bookings, corporate sessions, food/beverage partner upside",
        tags: ["Workshops", "Tickets", "Community", "Repeat Attendance"],
      },
      {
        title: "Hospitality, Food & Beverage Partner Events",
        status: "Partner-Based",
        copy: "Chef dinners, catered events, coffee or juice collaborations, food partners, and vendor-supported hospitality can improve guest experience and support event economics without The Grand Bedford operating as a restaurant or bar.",
        compliance:
          "Food and beverage should be handled through compliant outside partners where applicable.",
        revenueLogic: "Vendor fees, revenue share, rental premium, guest experience, sponsor value",
        tags: ["Hospitality", "Food Partners", "Vendors", "Events"],
      },
      {
        title: "Outdoor / Backyard Programming",
        status: "Phased / Subject to Approvals",
        copy: "As the rear outdoor area becomes usable, the backyard may support garden events, food truck partnerships, picnic-table formats, outdoor painting, wellness mornings, family programming, private gatherings, and seasonal activations. This should be activated in phases and remain subject to permitting, buildout, insurance, and operating approvals.",
        revenueLogic: "Tickets, vendor fees, private rentals, seasonal events, sponsorship",
        tags: ["Outdoor", "Backyard", "Food Trucks", "Seasonal"],
      },
    ],
    workflowHeadline: "From event activity to measurable follow-up.",
    workflowIntro:
      "Each major event should have an owner, a revenue purpose, a follow-up path, and a simple post-event record. The goal is to turn programming into measurable sales, rental, sponsorship, and patron opportunities.",
    workflow: [
      {
        step: "Program",
        copy: "Define event format, audience, owner, and revenue purpose.",
      },
      {
        step: "Capture",
        copy: "Collect attendance, contacts, photos, inquiries, and partner notes.",
      },
      {
        step: "Follow Up",
        copy: "Route buyers, private-event leads, sponsors, and collectors to the right owner.",
      },
      {
        step: "Report",
        copy: "Track revenue, costs, deposits, balances, attendance, and conversion notes.",
      },
      {
        step: "Repeat",
        copy: "Use results to improve pricing, calendar rhythm, staffing, and partner selection.",
      },
    ],
    systemsNote: {
      title: "Event operations are being systematized.",
      copy: "The operating model is designed around practical systems: master calendar, event owner, vendor records, sales and patron follow-up, event profitability tracking, payment tracking, and monthly reporting. This allows programming to be measured, improved, and connected back to the broader revenue model.",
    },
    hospitalityNote: {
      title: "Hospitality through outside partners.",
      copy: "Food, beverage, and alcohol-related event elements should be handled case-by-case through compliant outside partners, including chefs, caterers, vendors, food trucks, restaurants, licensed caterers, authorized bartenders, or properly licensed event partners where applicable. This allows the space to offer elevated hospitality experiences while reducing regulatory and operational complexity.",
    },
    footerLink: {
      label: "Review Event Proof",
      href: "#proof",
    },
  },
  partnerships: {
    title: "Partnership Ecosystem",
    eyebrow: "Strategic relationships",
    headline:
      "The partnership ecosystem expands the platform beyond the walls.",
    intro:
      "Building on event programming, a curated network of partners can support programming, hospitality, brand activations, media visibility, community engagement, and long-term platform value.",
    approach: {
      label: "Our approach",
      text: "We seek partnerships with brands, organizations, and institutions that align with our values and may contribute to a dynamic cultural ecosystem.",
      principles: [
        { icon: "star", label: "Curated partnerships" },
        { icon: "handshake", label: "Mutual value creation" },
        { icon: "location", label: "Rooted in community" },
        { icon: "leaf", label: "Sustainable impact" },
      ],
    },
    centerNode: {
      name: "The Grand Bedford",
      location: "Williamsburg Brooklyn",
      icon: "building",
    },
    categories: [
      {
        id: "food-beverage",
        name: "Food & Beverage",
        icon: "dining",
        position: 1,
        examples: [
          { name: "Impact Kitchen", status: "representative" },
          { name: "Wine / Beverage Partner", status: "target" },
          { name: "Coffee Partner", status: "target" },
        ],
      },
      {
        id: "brand-activations",
        name: "Brand Activations",
        icon: "megaphone",
        position: 2,
        examples: [
          { name: "Experiential campaigns", status: "aligned-category" },
          { name: "Product collaborations", status: "aligned-category" },
          { name: "Community engagement", status: "aligned-category" },
        ],
      },
      {
        id: "hospitality",
        name: "Hospitality",
        icon: "handshake",
        position: 3,
        examples: [
          { name: "Boutique hotel partners", status: "target" },
          { name: "Hospitality operators", status: "target" },
          { name: "Event & catering partners", status: "pipeline" },
        ],
      },
      {
        id: "real-estate",
        name: "Real Estate",
        icon: "building",
        position: 4,
        examples: [
          { name: "Local Real Estate Group", status: "in-discussion" },
        ],
      },
      {
        id: "media",
        name: "Media",
        icon: "newspaper",
        position: 5,
        examples: [{ name: "Media Partner", status: "target" }],
      },
      {
        id: "artists",
        name: "Artists",
        icon: "artist",
        position: 6,
        examples: [
          { name: "Artist / Curator Collective", status: "representative" },
        ],
      },
      {
        id: "sustainability",
        name: "Sustainability",
        icon: "leaf",
        position: 7,
        examples: [
          { name: "Sustainable design partners", status: "aligned-category" },
          { name: "Waste & resource management", status: "aligned-category" },
        ],
      },
      {
        id: "mobility",
        name: "Mobility",
        icon: "bike",
        position: 8,
        examples: [{ name: "Rivian", status: "in-discussion" }],
      },
      {
        id: "sponsors",
        name: "Sponsors",
        icon: "star",
        position: 9,
        examples: [{ name: "Pale Blue Dot", status: "representative" }],
      },
    ],
    strategyCards: [
      {
        title: "Programming Support",
        icon: "calendar",
        copy: "Partners can help deepen the calendar through dinners, panels, workshops, launches, and community experiences.",
      },
      {
        title: "Audience Expansion",
        icon: "partners",
        copy: "Strategic partners may introduce new guests, collectors, sponsors, and brand audiences into the platform.",
      },
      {
        title: "Hospitality Layer",
        icon: "handshake",
        copy: "Food, beverage, wellness, and service partners help elevate the visitor and event experience.",
      },
      {
        title: "Brand Value",
        icon: "star",
        copy: "Partnerships can create recurring visibility, sponsorship opportunities, and long-term cultural relevance.",
      },
    ],
    examplesNote:
      "Partner names and categories shown in this section are representative, target, pipeline, or in-discussion examples. They should not be read as confirmed commitments unless expressly identified as confirmed in diligence materials.",
    pipelineTeaser:
      "Quantified pipeline values, probability weighting, and stage tracking appear in the Partnership Pipeline section.",
    footer: "A cultural platform built for endurance.",
  },
  pipeline: {
    title: "Partnership Pipeline",
    headline:
      "The partnership pipeline converts relationships into measurable opportunity.",
    intro:
      "Partnership opportunities are tracked by category, estimated value, status, and probability so investors can understand both the upside and the uncertainty behind the pipeline.",
    kpis: [
      {
        label: "Estimated One-Time Value",
        key: "partnershipOneTimeValue",
        icon: "diamond",
      },
      {
        label: "Estimated Monthly Value",
        key: "partnershipMonthlyValue",
        icon: "calendar",
      },
      {
        label: "Estimated Annual Value",
        key: "partnershipPipelineAnnual",
        icon: "chart",
      },
      {
        label: "Weighted Pipeline Value",
        key: "weightedPartnershipPipeline",
        icon: "clock",
      },
      {
        label: "In-Kind Value",
        key: "partnershipInKindValue",
        icon: "gift",
      },
    ],
    tableColumns: [
      { id: "partner", label: "Partner / Opportunity" },
      { id: "category", label: "Category" },
      { id: "status", label: "Status" },
      { id: "oneTime", label: "Est. One-Time Value" },
      { id: "monthly", label: "Est. Monthly Value" },
      { id: "annual", label: "Est. Annual Value" },
      { id: "probability", label: "Probability" },
      { id: "weighted", label: "Weighted Value" },
      { id: "notes", label: "Notes" },
    ],
    rows: [
      {
        partner: "Impact Kitchen",
        category: "Food & Beverage",
        status: "in-discussion",
        oneTime: "$25K",
        monthly: "$5K",
        annual: "$60K",
        probability: "35%",
        weighted: "$21K",
        notes: "Potential hospitality / food collaboration",
      },
      {
        partner: "Pale Blue Dot",
        category: "Sustainability / Community",
        status: "target",
        oneTime: "$15K",
        monthly: "$2.5K",
        annual: "$30K",
        probability: "25%",
        weighted: "$7.5K",
        notes: "Values-aligned programming opportunity",
      },
      {
        partner: "Rivian",
        category: "Mobility / Brand Activation",
        status: "target",
        oneTime: "$75K",
        monthly: "$10K",
        annual: "$120K",
        probability: "20%",
        weighted: "$24K",
        notes: "Experiential activation concept",
      },
      {
        partner: "Wine / Beverage Partner",
        category: "Food & Beverage",
        status: "pipeline",
        oneTime: "$10K",
        monthly: "$3K",
        annual: "$36K",
        probability: "40%",
        weighted: "$14.4K",
        notes: "Event and bar program support",
      },
      {
        partner: "Coffee Partner",
        category: "Hospitality",
        status: "pipeline",
        oneTime: "$8K",
        monthly: "$2K",
        annual: "$24K",
        probability: "45%",
        weighted: "$10.8K",
        notes: "Daytime café / service layer",
      },
      {
        partner: "Local Real Estate Group",
        category: "Real Estate",
        status: "in-discussion",
        oneTime: "$20K",
        monthly: "$2.5K",
        annual: "$30K",
        probability: "30%",
        weighted: "$9K",
        notes: "Private events / neighborhood relationship",
      },
      {
        partner: "Media Partner",
        category: "Media",
        status: "target",
        oneTime: "$5K",
        monthly: "$1.5K",
        annual: "$18K",
        probability: "25%",
        weighted: "$4.5K",
        notes: "Content and visibility partner",
      },
      {
        partner: "Artist / Curator Collective",
        category: "Artists",
        status: "aligned-category",
        oneTime: "$10K",
        monthly: "$1K",
        annual: "$12K",
        probability: "50%",
        weighted: "$6K",
        notes: "Curated programming and exhibition support",
      },
    ],
    methodology: {
      headline: "Pipeline values are estimates, not commitments.",
      copy: "Estimated values reflect current working assumptions based on partner category, potential scope, and probability weighting. Weighted pipeline value adjusts opportunity value by status and likelihood, and will be updated as conversations progress.",
    },
    visualization: {
      title: "Probability-weighted opportunity value",
      disclaimer:
        "Bar lengths reflect estimated weighted value per opportunity — not confirmed revenue.",
    },
    footerNote:
      "Pipeline values are estimates and subject to change. Weighted pipeline value reflects probability-adjusted opportunity value.",
    networkCta: {
      label: "View Operating Network",
      href: "#people",
    },
  },
  people: {
    eyebrow: "People. Network. Execution.",
    headline: "The human infrastructure behind the platform.",
    intro:
      "The Grand Bedford is supported by a developing network of founders, curatorial leadership, gallery sales contributors, artists, creative collaborators, hospitality contacts, and buildout resources. The structure is designed to combine core accountability with flexible, relationship-driven execution capacity.",
    roleNote:
      "Roles vary by project, scope, compensation structure, and formal engagement. Network participation does not imply employment, equity ownership, exclusivity, formal partnership, or guaranteed revenue.",
    featuredLabel: "Core Leadership",
    networkHeadline: "Supporting operating network.",
    networkIntro:
      "Relationship-based contributors extend execution across sales, creative, hospitality, artists, and site development — with status and scope clearly distinguished.",
    featured: [
      {
        id: "brian-berger",
        initials: "BB",
        name: "Brian Berger",
        role: "Founder / Principal",
        status: "Core Leadership",
        summary:
          "Strategy, legal structure, capital, operations, and investor diligence",
        bio: "Brian Berger leads platform strategy, legal and commercial structure, investor materials, financial visibility, and long-term operating development for The Grand Bedford. An attorney by background, Brian brings litigation experience and six years as Chief Legal Officer of a digital marketing agency startup that grew to approximately $30 million in annual revenue during his tenure as a minority equity partner. His role combines legal discipline, operating structure, capital strategy, and a commitment to art, civic life, and community-centered cultural development.",
        contributions: [
          "Investor diligence",
          "Legal / commercial structure",
          "Capital strategy",
          "Risk controls",
          "Operating model",
          "Partnership strategy",
        ],
        engines: ["Capital", "Operations", "Legal", "Financials", "Strategy"],
      },
      {
        id: "francesca-guzman",
        initials: "FG",
        name: "Francesca Guzman",
        role: "Founder / Business Partner",
        status: "Core Leadership",
        summary:
          "Retail, relationships, community, programming, and guest experience",
        bio: "Francesca Guzman supports The Grand Bedford's retail strategy, relationship development, community engagement, programming, and guest experience. She brings significant retail experience and a strong relationship network across cultural, community, and creative circles. Her role helps connect the physical platform to artists, guests, collectors, events, partnerships, and neighborhood-facing opportunities.",
        contributions: [
          "Retail experience",
          "Community relationships",
          "Artist and cultural network",
          "Programming opportunities",
          "Guest experience",
          "Relationship-driven partnerships",
        ],
        engines: ["Retail", "Community", "Events", "Partnerships", "Hospitality"],
      },
      {
        id: "zach-presley",
        initials: "ZP",
        name: "Zach Presley",
        role: "Head Curator",
        status: "Curatorial Leadership",
        summary:
          "Curatorial strategy, art sourcing, exhibitions, programming, and collector network",
        bio: "Zach Presley supports The Grand Bedford as Head Curator, helping shape curatorial strategy, artwork sourcing, exhibition development, programming, and collector-facing opportunities. He brings long-standing art-world experience, including gallery operations, broad art-market knowledge, and relationships across artists, collectors, and high-net-worth networks. His role strengthens the platform's ability to source compelling work, develop exhibition programming, and connect the gallery to deeper art and collector ecosystems.",
        contributions: [
          "Curated exhibitions",
          "Artwork sourcing",
          "Artist relationships",
          "Collector introductions",
          "Programming opportunities",
          "Art sales pipeline",
          "Gallery credibility",
        ],
        engines: ["Art Sales", "Gallery", "Programming", "Collectors", "Artists"],
      },
    ],
    networkCategories: [
      {
        title: "Gallery Sales & Collector Network",
        status: "Commission-Aligned / Developing",
        description:
          "The Grand Bedford is supported by a developing gallery sales network that includes part-time and independent commission-based contributors with collector relationships, high-net-worth contacts, and in-gallery sales capacity. This structure helps expand outreach and store coverage while keeping compensation aligned with sales activity.",
        people: [
          "Johanna — part-time, commission-based gallery and art sales contributor",
          "Shiri Bobayeva — independent commission-based art sales contributor",
          "Breanna — curatorial and gallery operations support",
        ],
        tags: ["Art Sales", "Collectors", "Gallery", "Commission-Aligned"],
      },
      {
        title: "Curatorial & Gallery Operations Support",
        status: "Project-Based / Developing",
        description:
          "Curatorial and operations support extends the platform's ability to prepare exhibitions, coordinate artists, support installation logistics, and maintain day-to-day gallery activity. This layer gives the gallery practical execution capacity behind exhibitions, openings, and art sales.",
        tags: ["Operations", "Gallery", "Exhibitions", "Artists"],
      },
      {
        title: "Creative, Design & Media Network",
        status: "Contributor-Based",
        description:
          "The Grand Bedford has access to creative and design collaborators who may support brand presentation, visual identity, event materials, content, investor-facing presentation, and public-facing creative execution. This network includes creative design contacts such as Olivier Duong, with future roles dependent on project scope and formal engagement.",
        tags: ["Creative", "Design", "Media", "Brand"],
      },
      {
        title: "Artist & Exhibition Network",
        status: "Active / Developing",
        description:
          "The Grand Bedford's artist network includes exhibition relationships, emerging artist connections, photography programming, and sales arrangements that can support both cultural credibility and revenue activity. Early examples include exhibition programming and gallery-artist sales structures, with public details shown only where approved.",
        people: [
          "Alex Silver — prior solo photography exhibition; gallery-artist sales structure",
        ],
        tags: ["Artists", "Exhibitions", "Art Sales", "Programming"],
      },
      {
        title: "Hospitality, Food & Beverage Network",
        status: "Pipeline / Relationship-Based",
        description:
          "The platform is developing relationships with restaurateurs, beverage operators, coffee and juice companies, performers, and hospitality collaborators that may support private events, food and beverage activations, café-style partnerships, and neighborhood-facing programming.",
        tags: ["Hospitality", "Events", "Food & Beverage", "Partnerships"],
      },
      {
        title: "Outdoor / Backyard Activation Network",
        status: "Planned / Subject to Approvals",
        description:
          "A planned backyard conversion may create additional revenue opportunities through outdoor seating, food truck partnerships, private gatherings, picnic-table formats, and hospitality-driven programming, subject to permitting, buildout, and operating approvals.",
        tags: ["Outdoor", "Events", "Food Trucks", "Programming"],
      },
      {
        title: "Buildout, Architecture & Construction Support",
        status: "Available Where Applicable",
        description:
          "The Grand Bedford has access to construction, architecture, and buildout contacts who may support future site improvements, outdoor activation planning, and operational upgrades as project scope, approvals, and capital availability develop.",
        tags: ["Buildout", "Architecture", "Operations", "Site Planning"],
      },
      {
        title: "Relationship & Cultural Network",
        status: "Relationship-Based",
        description:
          "The broader network includes community contacts, cultural relationships, music and entertainment-adjacent connections, and relationship-based contributors who may support attendance, introductions, programming, event energy, and future partnership opportunities where appropriate.",
        tags: ["Community", "Culture", "Events", "Partnerships"],
      },
    ],
    proofRow: [
      {
        label: "Core leadership",
        value: "Founder, business partner, and curatorial lead",
      },
      {
        label: "Commission-aligned sales",
        value: "Part-time and independent contributors",
      },
      {
        label: "Creative and hospitality network",
        value: "Design, artists, vendors, performers, and event collaborators",
      },
      {
        label: "Flexible execution model",
        value: "Core accountability with variable-cost support",
      },
    ],
    ctas: [
      {
        label: "Review Investor Access Process",
        href: "#capital",
        icon: "lock",
        variant: "primary",
      },
      {
        label: "Review Partnership Pipeline",
        href: "#pipeline",
        icon: "handshake",
        variant: "secondary",
      },
    ],
  },
  capital: {
    title: "Investor Access / Capital Strategy",
    badge: "Private Diligence Path",
    headline: "Investor access is",
    headlineEmphasis: "structured and controlled.",
    intro:
      "Our capital strategy is designed with discipline, transparency, and long-term alignment. Access to confidential materials is granted intentionally, to the right partners, at the right time.",
    metricsLabel: "Capital Pipeline Summary",
    metricsNote: "Confidential",
    pipelineNote:
      "Capital pipeline values reflect potential interest and working assumptions, not commitments.",
    kpis: [
      {
        label: "Potential Capital Pipeline",
        key: "capitalPipeline",
        icon: "lock",
      },
      {
        label: "Weighted Capital Pipeline",
        key: "weightedCapitalPipeline",
        icon: "lock",
      },
      {
        label: "Soft Commitments",
        key: "capitalSoftCommitments",
        icon: "lock",
      },
      {
        label: "Hard Commitments",
        key: "capitalHardCommitments",
        icon: "lock",
      },
    ],
    overview: {
      headline: "A controlled path from interest to diligence.",
      copy: "The investor process is designed to protect confidential materials while giving serious investors a clear path to understand the business, review supporting documents, ask questions, and evaluate potential participation.",
      principles: [
        {
          icon: "lock",
          title: "Controlled Access",
          copy: "Confidential materials are shared with approved investors only.",
        },
        {
          icon: "ledger",
          title: "Organized Diligence",
          copy: "Financials, pipeline data, proof materials, and operating documents are grouped for review.",
        },
        {
          icon: "handshake",
          title: "Aligned Capital",
          copy: "The process is designed to prioritize serious, long-term, values-aligned partners.",
        },
      ],
    },
    timelineLabel: "Investor Access Workflow",
    timeline: [
      {
        step: 1,
        title: "Initial Review",
        copy: "Investor reviews the public portal and one-page summary.",
        icon: "search",
      },
      {
        step: 2,
        title: "Data Room Access",
        copy: "Approved investors may receive access to financials, supporting documents, proof materials, and diligence files.",
        icon: "lock",
      },
      {
        step: 3,
        title: "Investor Call",
        copy: "A private call allows discussion of the business model, operating plan, capital structure, and questions.",
        icon: "phone",
      },
      {
        step: 4,
        title: "Due Diligence",
        copy: "Investor reviews materials, asks follow-up questions, and evaluates the opportunity.",
        icon: "folder",
      },
      {
        step: 5,
        title: "Term Discussion",
        copy: "Potential structure, timing, amount, and rights are discussed.",
        icon: "message",
      },
      {
        step: 6,
        title: "Closing",
        copy: "Final documentation, funding, and investor onboarding occur if both sides proceed.",
        icon: "pen",
      },
    ],
    materialsLabel: "Investor Materials Access",
    materials: [
      {
        title: "Financial Snapshot",
        copy: "Revenue, expenses, forecasts, and supporting operating metrics.",
        icon: "chart",
        href: "#financials",
      },
      {
        title: "Sales & Receivables",
        copy: "Art sales ledger, accounts receivable, collections visibility, and payable tracking.",
        icon: "ledger",
        href: "#receivables",
      },
      {
        title: "Inventory & Programming",
        copy: "Artwork inventory, event pipeline, and programming activity.",
        icon: "inventory",
        href: "#art-inventory",
      },
      {
        title: "Partnerships & Capital",
        copy: "Partnership pipeline, capital pipeline, and strategic opportunity materials.",
        icon: "partners",
        href: "#pipeline",
      },
    ],
    ctas: [
      {
        label: "Request Data Room Access",
        href: "mailto:info@thegrandbedford.com?subject=Investor%20Data%20Room%20Access%20Request",
        icon: "lock",
        variant: "primary",
      },
      {
        label: "Schedule Investor Call",
        href: "mailto:info@thegrandbedford.com?subject=Investor%20Call%20Request",
        icon: "phone",
        variant: "secondary",
      },
      {
        label: "Request One-Page Summary",
        href: "mailto:info@thegrandbedford.com?subject=One-Page%20Investor%20Summary%20Request",
        icon: "ledger",
        variant: "secondary",
      },
    ],
    securityNote: "Investor inquiries and diligence materials are handled confidentially.",
  },
  location: {
    title: "Williamsburg / Location Story",
    headline: "Williamsburg as the operating context.",
    intro:
      "The Grand Bedford is positioned within a neighborhood shaped by art, hospitality, retail, design, and creative foot traffic — a setting that supports gallery sales, private events, brand partnerships, food and beverage, and recurring cultural programming.",
    narrative: [
      "Williamsburg offers a visible cultural and commercial context — walkable streets, creative businesses, and a steady rhythm of neighborhood activity that can support recurring programming.",
      "For The Grand Bedford, location is not decoration. It is part of how the platform attracts audiences, hosts events, welcomes partners, and builds long-term cultural relevance.",
    ],
    visual: {
      images: [
        {
          src: "../assets/Grand_Bedford_Front-a0e70409-7994-433a-bbf8-5802e04e6e1d.png",
          alt: "Street-level storefront in Williamsburg",
          caption: "Street-level presence — Williamsburg, Brooklyn",
        },
        {
          src: "../assets/Grand_Bedford_Interior.png",
          alt: "Flexible interior gallery and event space",
          caption: "Flexible interior — adaptable gallery and event setting",
        },
      ],
      mapLabel: "Williamsburg, Brooklyn",
      mapCaption: "Abstract neighborhood context — illustrative, not to scale",
    },
    advantagesLabel: "Location Advantages",
    advantages: [
      {
        title: "Street-Level Visibility",
        copy: "A visible, walkable setting that supports discovery, visits, and event awareness.",
        icon: "partners",
      },
      {
        title: "Cultural Density",
        copy: "Surrounded by galleries, retail, hospitality, and creative institutions.",
        icon: "gallery",
      },
      {
        title: "Retail Adjacency",
        copy: "Near design-forward stores, restaurants, cafés, and destination retail.",
        icon: "grid",
      },
      {
        title: "Event Demand",
        copy: "A strong context for private events, cultural programming, and brand activations.",
        icon: "calendar",
      },
      {
        title: "Brand Activation Potential",
        copy: "A compelling environment for experiential campaigns and partner-driven programming.",
        icon: "star",
      },
    ],
    thesis: {
      headline: "Place is part of the business model.",
      copy: "The location supports audience discovery, programming, partnerships, and the perception of long-term cultural value.",
    },
    revenueLabel: "Location supports multiple revenue streams",
    revenueStreams: [
      {
        title: "Art Sales",
        copy: "A visible cultural setting supports collector discovery and gallery visits.",
        icon: "art",
      },
      {
        title: "Private Events",
        copy: "The neighborhood context supports dinners, launches, rentals, and private gatherings.",
        icon: "events",
      },
      {
        title: "Brand Partnerships",
        copy: "Williamsburg's creative identity supports aligned sponsorship and activation opportunities.",
        icon: "handshake",
      },
      {
        title: "Food & Beverage",
        copy: "Hospitality partners can enhance events, openings, and daytime programming.",
        icon: "dining",
      },
      {
        title: "Outdoor Programming",
        copy: "The location story can support seasonal activations, sidewalk presence, and community experiences where permitted.",
        icon: "leaf",
      },
    ],
    footer: "Culture drives community. Community drives demand. Demand drives value.",
  },
  evidence: {
    title: "Evidence Behind the Story",
    eyebrow: "Transparency. Support. Confidence.",
    headline: "Evidence behind the story.",
    intro:
      "A curated library of supporting materials that substantiate the opportunity, mitigate risk, and support informed investment decisions.",
    supportingNote:
      "Materials are organized to support investor diligence while protecting private buyer, artist, and partner information.",
    categories: [
      {
        title: "Sales Proof",
        copy: "Sales ledger summaries, invoices, collector activity, payment status, and supporting transaction records.",
        icon: "ledger",
        accessBadge: "Redacted Summary",
        availabilityBadge: "Available Upon Review",
        href: "#receivables",
      },
      {
        title: "Event Proof",
        copy: "Event pipeline summaries, attendance assumptions, event recaps, programming materials, and supporting planning documents.",
        icon: "calendar",
        accessBadge: "Internal Working File",
        availabilityBadge: "Investor Access",
        href: "#events",
      },
      {
        title: "Inventory Proof",
        copy: "Artwork inventory, status tracking, list prices, sold works, open balances, and artist payable visibility.",
        icon: "inventory",
        accessBadge: "Redacted Summary",
        availabilityBadge: "Investor Access",
        href: "#art-inventory",
      },
      {
        title: "Partnership Proof",
        copy: "Partner pipeline summaries, outreach records, opportunity notes, status categories, and probability-weighted assumptions.",
        icon: "handshake",
        accessBadge: "Internal Working File",
        availabilityBadge: "Approved Investors",
        href: "#pipeline",
      },
      {
        title: "Financial Proof",
        copy: "Revenue, expenses, forecasts, operating assumptions, source data, and working financial models.",
        icon: "chart",
        accessBadge: "Redacted Summary",
        availabilityBadge: "Approved Investors",
        href: "#financials",
      },
      {
        title: "Legal / Site Control Proof",
        copy: "Lease, access rights, operating documents, insurance, permits, and other diligence materials where available.",
        icon: "shield",
        accessBadge: "Available Upon Review",
        availabilityBadge: "Approved Investors",
        href: "#capital",
      },
    ],
    protocol: {
      headline: "Organized for diligence. Protected by access control.",
      copy: "The evidence library is designed to give serious investors a clear path to inspect supporting materials while preserving confidentiality around buyers, artists, partners, legal documents, and private operating information.",
      steps: [
        {
          step: 1,
          title: "Public Summary",
          copy: "High-level portal materials available on this page.",
        },
        {
          step: 2,
          title: "Approved Access",
          copy: "Selected investors may receive access to redacted or private materials.",
        },
        {
          step: 3,
          title: "Diligence Review",
          copy: "Financial, legal, sales, inventory, event, and partnership materials can be reviewed in context.",
        },
        {
          step: 4,
          title: "Follow-Up Questions",
          copy: "Investors may request clarification, backup, or supporting documentation during diligence.",
        },
      ],
    },
    footer: "Transparency is most valuable when it is organized.",
  },
  proof: {
    title: "Visual Proof Archive",
    headline: "Visual Proof Archive",
    supportingLine:
      "Explore curated evidence of The Grand Bedford’s traction, milestones, and impact.",
    intro:
      "A visual archive helps investors understand the atmosphere, activity, artwork, events, and community around The Grand Bedford — supporting the numbers with real-world context.",
    privacyCallout: {
      label: "Curated. Confidential. Investor access.",
      copy: "Materials marked for investor access are shared with approved investors under appropriate confidentiality.",
    },
    archive: [
      {
        title: "Opening Photos",
        category: "Events",
        description:
          "Opening-night images, room atmosphere, attendance, installation views, and early community activity.",
        meta: "Photo archive",
        statusBadge: "Available",
        locked: false,
        image: {
          src: "../assets/Grand_Bedford_Front-a0e70409-7994-433a-bbf8-5802e04e6e1d.png",
          alt: "Storefront exterior at opening",
        },
      },
      {
        title: "Exhibition Opening Photos",
        category: "Exhibitions",
        description:
          "Event visuals, gallery presentation, guest engagement, and exhibition atmosphere.",
        meta: "Exhibition opening",
        statusBadge: "Available",
        locked: false,
        image: {
          src: "../assets/rsvp-haring-art.png",
          alt: "Gallery exhibition atmosphere",
        },
      },
      {
        title: "Artwork Catalog",
        category: "Art",
        description:
          "Visual catalog of works, status, artist information, inventory context, and sales support.",
        meta: "Visual catalog",
        statusBadge: "Investor Access",
        locked: true,
        image: {
          src: "../assets/Grand_Bedford_Interior.png",
          alt: "Gallery interior with artwork on display",
        },
      },
      {
        title: "Sales Ledger Summary",
        category: "Operations",
        description:
          "Visual summary of sold works, open balances, collected amounts, and gallery / artist splits.",
        meta: "Curated summary",
        statusBadge: "Investor Access",
        locked: true,
        icon: "ledger",
        placeholderTone: "charcoal",
      },
      {
        title: "Event Recaps",
        category: "Programming",
        description:
          "Images and summaries from openings, private events, workshops, and programming moments.",
        meta: "Event recaps",
        statusBadge: "Available",
        locked: false,
        image: {
          src: "../assets/rsvp-hero-event.png",
          alt: "Event programming in the gallery space",
        },
      },
      {
        title: "Partner Outreach Materials",
        category: "Partnerships",
        description:
          "Selected decks, proposals, concept visuals, and outreach materials used for partnership development.",
        meta: "Outreach materials",
        statusBadge: "Investor Access",
        locked: true,
        icon: "partners",
        placeholderTone: "bronze",
      },
      {
        title: "Testimonials",
        category: "Community",
        description:
          "Curated quotes or feedback from guests, artists, collectors, partners, or collaborators where approved.",
        meta: "Approved feedback",
        statusBadge: "Approved Use Only",
        locked: true,
        icon: "message",
        placeholderTone: "ivory",
      },
      {
        title: "Press Mentions",
        category: "Media",
        description:
          "Placeholder for legitimate press, media, or public mentions if and when verified.",
        meta: "Future / pending verification",
        statusBadge: "Pending Verification",
        locked: false,
        icon: "newspaper",
        placeholderTone: "ivory",
      },
    ],
    curation: {
      headline: "Curated for context. Protected for privacy.",
      copy: "The archive is designed to provide visual context while respecting the privacy of guests, collectors, artists, partners, and private event participants. Additional materials may be made available to approved investors during diligence.",
    },
  },
  risk: {
    title: "Risk + Mitigation",
    headline: "Confidence comes from visibility.",
    intro:
      "We believe transparency is a responsibility. We share what we know, how we manage risk, and where we are focused next — so you can invest with clarity.",
    columns: [
      {
        id: "known-risks",
        title: "Known Risks",
        icon: "warning",
        items: [
          {
            icon: "calendar",
            text: "Receivables tracked with due dates. Timing of payments may affect cash flow.",
          },
          {
            icon: "forecast",
            text: "Events probability-weighted. Demand and attendance carry inherent uncertainty.",
          },
          {
            icon: "balance",
            text: "Expenses forecast monthly. Operating costs may vary from projections.",
          },
        ],
      },
      {
        id: "active-controls",
        title: "Active Controls",
        icon: "shield",
        items: [
          {
            icon: "partners",
            text: "Partnerships weighted by probability. We assess counterparty reliability and scenario outcomes.",
          },
          {
            icon: "folder",
            text: "Diligence materials organized. Key documents are being maintained, updated, and prepared for controlled investor access.",
          },
          {
            icon: "check",
            text: "Investor materials updated as new operating data is verified.",
          },
        ],
      },
      {
        id: "next-improvements",
        title: "Next Improvements",
        icon: "trend",
        items: [
          {
            icon: "search",
            text: "Deeper scenario modeling. Expanding range of outcomes and sensitivities.",
          },
          {
            icon: "grid",
            text: "Enhanced data integrations. Improving timeliness and granularity of insights.",
          },
          {
            icon: "info",
            text: "Investor experience enhancements. Making information easier to find and understand.",
          },
        ],
      },
    ],
    footer: {
      copy: "We don't promise perfection. We promise diligence, discipline, and transparency.",
      emphasis: "That is how we protect value — together.",
    },
  },
};

export const closingData = {
  eyebrow: "Investor Close",
  headline: "A cultural platform investors can understand, inspect, and support.",
  intro:
    "The Grand Bedford is built on structured operating data, transparent financial visibility, organized proof, and controlled investor access — designed to support clear, confident diligence.",
  cards: [
    {
      icon: "folder",
      title: "Review Materials",
      text: "Access structured data, financials, and supporting documents.",
      href: "#evidence",
    },
    {
      icon: "message",
      title: "Ask Questions",
      text: "Get clarity on operations, financials, and investment structure.",
      href: "mailto:info@thegrandbedford.com?subject=Investor%20Question",
    },
    {
      icon: "phone",
      title: "Schedule Call",
      text: "Speak with the team for a private investor-level discussion.",
      href: "mailto:info@thegrandbedford.com?subject=Investor%20Call%20Request",
    },
  ],
  note: "Confidential information is provided to approved investors only.",
};

export const footerData = {
  brand: "The Grand Bedford",
  location: "Williamsburg, Brooklyn",
  address: "165 Bedford Avenue, Brooklyn, NY 11211",
  email: "info@thegrandbedford.com",
  contactLabel: "Investor Contact",
  privacyLabel: "Privacy & Access",
  privacyNote: "Confidential information is provided to approved investors only.",
  mainSiteHref: "../index.html",
  mainSiteLabel: "Main Site",
};
