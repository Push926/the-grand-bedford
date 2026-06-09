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
    headline: "The space is designed to convert culture into recurring activity.",
    eyebrow: "A diversified event revenue engine built for Brooklyn's creative economy.",
    intro:
      "A diversified event pipeline designed to support attendance, revenue, partnerships, and collector engagement.",
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
    categoriesDivider: "Diverse format. Recurring demand.",
    categoriesFormatNote:
      "Event formats are shown as operating categories. Visuals may include approved photos or conceptual format placeholders.",
    categories: [
      {
        name: "Private Events",
        description:
          "Intimate celebrations, dinners, private gatherings, and hosted experiences.",
        icon: "handshake",
        placeholderTone: "slate",
      },
      {
        name: "Corporate Events",
        description: "Panels, offsites, product launches & retreats.",
        icon: "building",
        placeholderTone: "ivory",
      },
      {
        name: "Paint & Sip",
        description: "Creative experiences that drive recurring attendance.",
        icon: "art",
        image: "../assets/rsvp-hero-event.png",
      },
      {
        name: "Brand Activations",
        description: "Immersive activations that build brand and community.",
        icon: "partners",
        placeholderTone: "charcoal",
      },
      {
        name: "Collector Previews",
        description: "Private previews and curated collector experiences.",
        icon: "frame",
        placeholderTone: "bronze",
      },
      {
        name: "Vendor Markets",
        description: "Curated markets that celebrate local makers.",
        icon: "events",
        placeholderTone: "ivory",
      },
    ],
    footer: "Culture drives people. People drive revenue.",
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
          { name: "Experiential campaigns", status: "aligned" },
          { name: "Product collaborations", status: "aligned" },
          { name: "Community engagement", status: "aligned" },
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
          { name: "Sustainable design partners", status: "aligned" },
          { name: "Waste & resource management", status: "aligned" },
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
        copy: "Aligned partners may introduce new guests, collectors, sponsors, and brand audiences into the platform.",
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
      "Representative aligned partners and categories — illustrative examples, not confirmed commitments unless noted in the Partnership Pipeline.",
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
        status: "aligned",
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
    eyebrow: "People / Network",
    headline: "Team, advisors, and strategic network.",
    intro:
      "A cultural platform is only as strong as the people who activate it. The Grand Bedford is supported by a growing network of leadership, operators, creative contributors, advisors, partners, and relationship-based collaborators across sales, events, partnerships, hospitality, media, and community.",
    supportingText:
      "The network is designed to support a lean operating model while expanding the platform's ability to generate collector activity, private events, brand activations, sponsorship opportunities, hospitality collaborations, and strategic introductions.",
    roleNote:
      "Roles vary by project, scope, and formal engagement. Network participation does not imply employment, equity ownership, exclusivity, or guaranteed revenue.",
    featuredLabel: "Featured Contributors",
    networkHeadline: "Operating coverage across the platform.",
    networkIntro:
      "The Grand Bedford's network is organized around the functions required to convert a physical cultural space into recurring activity, revenue, and investor-visible proof.",
    opportunitiesHeadline: "What the network helps unlock through the storefront.",
    opportunitiesIntro:
      "The Bedford Avenue storefront is more than a room. It can function as a sales floor, venue, brand platform, hospitality node, content engine, and community hub — with the people network serving as the mechanism that activates each opportunity.",
    featured: [
      {
        id: "founder",
        initials: "FP",
        name: "Founder / Principal",
        role: "Platform Strategy, Capital, and Operations",
        status: "Core Leadership",
        image: "",
        alt: "",
        bio: "Leads the platform strategy, investor materials, commercial structure, diligence organization, and long-term operating model for The Grand Bedford.",
        contributions: [
          "Investor strategy and diligence organization",
          "Legal, commercial, and operating structure",
          "Financial visibility and risk controls",
          "Partnership and capital strategy",
        ],
        engines: ["Capital", "Operations", "Partnerships", "Financials"],
      },
      {
        id: "gallery",
        initials: "GO",
        name: "Gallery & Operations Partner",
        role: "Gallery Activity, Sales, and Guest Experience",
        status: "Core / Operating Partner",
        image: "",
        alt: "",
        bio: "Supports gallery activity, artist coordination, collector experience, opening events, and day-to-day cultural programming.",
        contributions: [
          "Gallery presentation and visitor experience",
          "Artist and collector coordination",
          "Exhibition and opening support",
          "Sales follow-up and relationship management",
        ],
        engines: ["Art Sales", "Events", "Gallery", "Community"],
      },
      {
        id: "programming",
        initials: "PP",
        name: "Programming & Partnerships Partner",
        role: "Events, Activations, and Relationship Development",
        status: "Strategic / Project-Based",
        image: "",
        alt: "",
        bio: "Supports event concepts, partner outreach, brand activation opportunities, and relationship-based growth across the platform.",
        contributions: [
          "Event and activation development",
          "Partner and sponsor outreach",
          "Creative programming concepts",
          "Relationship-based opportunity development",
        ],
        engines: ["Events", "Partnerships", "Sponsorship", "Media"],
      },
    ],
    networkCategories: [
      {
        title: "Core Leadership",
        icon: "shield",
        description:
          "Founder-led strategy, operating structure, financial visibility, and investor communication.",
        unlocks: "Diligence, capital strategy, execution discipline.",
        status: "Active",
      },
      {
        title: "Gallery & Art Sales",
        icon: "gallery",
        description:
          "Artists, curators, sales support, collector relationships, inventory presentation, and follow-up.",
        unlocks: "Art sales, collector previews, exhibition activity.",
        status: "Active / Developing",
      },
      {
        title: "Events & Production",
        icon: "calendar",
        description:
          "Event producers, vendors, hosts, production contributors, and programming support.",
        unlocks: "Private rentals, openings, workshops, brand nights.",
        status: "Developing",
      },
      {
        title: "Hospitality & Vendors",
        icon: "dining",
        description:
          "Food, beverage, café, catering, and guest-experience partners.",
        unlocks:
          "Longer dwell time, better event experience, vendor revenue, hospitality sponsorship.",
        status: "Partner-Based",
      },
      {
        title: "Brand Partnerships",
        icon: "handshake",
        description:
          "Relationship-based contributors who can support sponsor outreach, activations, and aligned collaborations.",
        unlocks: "Brand activation fees, sponsorships, in-kind support.",
        status: "Pipeline",
      },
      {
        title: "Creative / Content / Media",
        icon: "newspaper",
        description:
          "Photographers, videographers, designers, writers, and media connectors.",
        unlocks: "Event recaps, sponsor decks, proof archive, investor updates.",
        status: "Contributor-Based",
      },
      {
        title: "Advisors & Specialists",
        icon: "shield",
        description:
          "Legal, finance, hospitality, real estate, marketing, technology, and operating specialists.",
        unlocks: "Better diligence, execution support, risk management.",
        status: "Available Where Applicable",
      },
      {
        title: "Relationship / Commission Network",
        icon: "partners",
        description:
          "Commission-aligned and relationship-based contributors who may support introductions, sales, sponsorships, or event opportunities.",
        unlocks:
          "Deal flow, bookings, collector introductions, partnership conversations.",
        status: "Commission-Aligned",
      },
    ],
    opportunities: [
      {
        title: "Collector Sales",
        icon: "art",
        supportedBy:
          "Artists, curators, sales contributors, collector relationships.",
        revenueRelevance:
          "Artwork sales, commissions, previews, repeat collector follow-up.",
        status: "Active / Developing",
      },
      {
        title: "Private Events",
        icon: "calendar",
        supportedBy:
          "Event producers, hospitality partners, vendors, programming contributors.",
        revenueRelevance:
          "Venue rental fees, deposits, catering partnerships, recurring programming.",
        status: "Active Pipeline",
      },
      {
        title: "Brand Activations",
        icon: "megaphone",
        supportedBy:
          "Partnership contributors, creative producers, media/content support, hospitality partners.",
        revenueRelevance:
          "Activation fees, sponsorships, in-kind support, audience growth.",
        status: "Pipeline / Target",
      },
      {
        title: "Hospitality Partnerships",
        icon: "dining",
        supportedBy: "Food, beverage, coffee, catering, and service partners.",
        revenueRelevance:
          "Better guest experience, event upsells, vendor fees, partner revenue share.",
        status: "Partner-Based",
      },
      {
        title: "Artist & Curator Pipeline",
        icon: "gallery",
        supportedBy:
          "Artists, curators, art advisors, installers, photographers, writers.",
        revenueRelevance:
          "Exhibition calendar, inventory expansion, collector engagement.",
        status: "Developing",
      },
      {
        title: "Sponsorship & Media",
        icon: "newspaper",
        supportedBy:
          "Content producers, designers, media connectors, brand relationship network.",
        revenueRelevance:
          "Sponsor recap decks, proof archive, marketing visibility, sponsor renewals.",
        status: "Developing",
      },
      {
        title: "Strategic Introductions",
        icon: "handshake",
        supportedBy:
          "Relationship-based contributors, advisors, founder network, aligned partners.",
        revenueRelevance:
          "Investor conversations, sponsor conversations, partner opportunities.",
        status: "Where Applicable",
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
        label: "Review One-Page Summary",
        href: "#evidence",
        icon: "ledger",
        variant: "secondary",
      },
    ],
    securityNote: "Your information is always protected.",
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
          src: "../assets/Grand_Bedford_Interior.png",
          alt: "Gallery interior with artwork on display",
          caption: "Gallery interior — cultural programming setting",
        },
        {
          src: "../assets/Grand_Bedford_Front-a0e70409-7994-433a-bbf8-5802e04e6e1d.png",
          alt: "Street-level storefront in Williamsburg",
          caption: "Street-level presence — Williamsburg, Brooklyn",
        },
      ],
      mapLabel: "Williamsburg, Brooklyn",
      mapCaption: "Abstract neighborhood context — illustrative, not to scale",
    },
    advantagesLabel: "Location Advantages",
    advantages: [
      {
        title: "High Foot Traffic",
        copy: "Strong pedestrian and neighborhood visibility.",
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
      copy: "The location supports audience, programming, partnerships, and the perception of long-term cultural value.",
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
    eyebrow: "Transparency. Verification. Confidence.",
    headline: "Evidence behind the story.",
    intro:
      "A curated library of verifiable materials that substantiate the opportunity, mitigate risk, and support informed investment decisions.",
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
        title: "Grand Opening Photos",
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
        title: "Alex Silver Opening Photos",
        category: "Exhibitions",
        description:
          "Event visuals, gallery presentation, guest engagement, and exhibition atmosphere.",
        meta: "Opening exhibition",
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
            text: "Data room maintained. Key documents organized, current, and accessible.",
          },
          {
            icon: "check",
            text: "Investor materials updated. Performance, forecasts, and reports kept up to date.",
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
