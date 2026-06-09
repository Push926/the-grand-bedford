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
  partnershipPipelineAnnual: "$498K",
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
};

export const investorNav = [
  { id: "overview", label: "Overview" },
  { id: "what-is", label: "What It Is" },
  { id: "engines", label: "Engines" },
  { id: "traction", label: "Traction" },
  { id: "financials", label: "Financials" },
  { id: "receivables", label: "Receivables" },
  { id: "art-inventory", label: "Art" },
  { id: "events", label: "Events" },
  { id: "partnerships", label: "Partners" },
  { id: "pipeline", label: "Pipeline" },
  { id: "capital", label: "Capital" },
  { id: "location", label: "Location" },
  { id: "evidence", label: "Evidence" },
  { id: "proof", label: "Proof" },
  { id: "risk", label: "Risk" },
  { id: "inquiry", label: "Inquire" },
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
    href: "#inquiry",
    icon: "lock",
  },
  image: {
    src: "../assets/Grand_Bedford_Interior.png",
    alt: "The Grand Bedford gallery interior with artwork, sculpture, and branded feature wall",
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
      footnote: "Verified collected amount",
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
    "The Grand Bedford | 343 Grand Street, Brooklyn, NY 11211 | Culture. Community. Legacy.",
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
        src: "../assets/Grand_Bedford_Interior.png",
        alt: "Bright gallery interior with white walls, track lighting, and polished floors",
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
    title: "Four Connected Engines",
    intro: "Each engine reinforces the others — shared foot traffic, shared brand, shared infrastructure.",
    items: [
      {
        name: "Gallery & Art Sales",
        description: "Consignment inventory, artist partnerships, and direct sales.",
        metricKey: "artworkInventoryValue",
        metricLabel: "Inventory Value",
      },
      {
        name: "Events & Activations",
        description: "Pop-ups, launches, workshops, and private gatherings.",
        metricKey: "eventExpectedRevenue",
        metricLabel: "Expected Revenue",
      },
      {
        name: "Partnership Ecosystem",
        description: "Brand collaborations, sponsorships, and co-marketing.",
        metricKey: "partnershipPipelineAnnual",
        metricLabel: "Annual Pipeline",
      },
      {
        name: "Capital & Investor Access",
        description: "Structured capital strategy for growth and scale.",
        metricKey: "capitalPipeline",
        metricLabel: "Capital Pipeline",
      },
    ],
  },
  traction: {
    title: "Early Traction",
    intro: "Operational proof points from the first phase of gallery and event activity.",
    kpis: [
      { label: "Works Sold", key: "worksSold" },
      { label: "Artists Tracked", key: "artistsTracked" },
      { label: "Amount Collected", key: "amountCollected" },
      { label: "Expected Attendance", key: "expectedAttendance" },
    ],
  },
  financials: {
    title: "Financial Overview",
    intro: "High-level snapshot of revenue, collections, and forward projections.",
    kpis: [
      { label: "12-Month Revenue Forecast", key: "revenueForecast12Month" },
      { label: "Gallery Revenue", key: "galleryRevenue" },
      { label: "Artist Payable", key: "artistPayable" },
      { label: "Open Receivables", key: "openReceivables" },
    ],
  },
  receivables: {
    title: "Accounts Receivable / Collections",
    intro: "Gallery sales ledger with collection status and outstanding balances.",
    kpis: [
      { label: "Gross A/R", key: "grossAR" },
      { label: "Collected", key: "arCollected" },
      { label: "Balance Due", key: "arBalanceDue" },
      { label: "Gallery Revenue", key: "arGalleryRevenue" },
    ],
  },
  artInventory: {
    title: "Art Inventory + Sales Engine",
    intro: "Current consignment inventory and sales performance.",
    kpis: [
      { label: "Inventory Value", key: "artworkInventoryValue" },
      { label: "Art Ledger Sales", key: "artLedgerSales" },
      { label: "Works Sold", key: "worksSold" },
      { label: "Artist Partner Payable", key: "arArtistPartnerPayable" },
    ],
  },
  events: {
    title: "Events Pipeline",
    intro: "Scheduled and projected events with revenue and attendance estimates.",
    kpis: [
      { label: "Expected Revenue", key: "eventExpectedRevenue" },
      { label: "Expected Net Revenue", key: "eventExpectedNetRevenue" },
      { label: "Expected Attendance", key: "expectedAttendance" },
    ],
    placeholderEvents: [
      { name: "Gallery Opening Series", date: "Q2 2026", status: "Confirmed" },
      { name: "Brand Pop-Up Activation", date: "Q2 2026", status: "In Discussion" },
      { name: "House of Beats Wellness Workshop", date: "Q3 2026", status: "Planned" },
    ],
  },
  partnerships: {
    title: "Partnership Ecosystem",
    intro: "Active and prospective brand, artist, and community partnerships.",
    partners: [
      { name: "Local Artist Collective", type: "Art", status: "Active" },
      { name: "Wellness Brand Partner", type: "Events", status: "Active" },
      { name: "National Beauty Brand", type: "Pop-Up", status: "Prospect" },
      { name: "Community Arts Org", type: "Programming", status: "Active" },
    ],
  },
  pipeline: {
    title: "Partnership Pipeline",
    intro: "Weighted pipeline of partnership opportunities by stage.",
    kpis: [
      { label: "Annual Pipeline", key: "partnershipPipelineAnnual" },
      { label: "Weighted Pipeline", key: "weightedPartnershipPipeline" },
    ],
    stages: [
      { stage: "Qualified", count: 4, value: "$180K" },
      { stage: "Proposal", count: 3, value: "$142K" },
      { stage: "Negotiation", count: 2, value: "$98K" },
      { stage: "Closed", count: 1, value: "$78K" },
    ],
  },
  capital: {
    title: "Investor Access / Capital Strategy",
    intro: "Structured approach to growth capital and investor participation.",
    kpis: [
      { label: "Capital Pipeline", key: "capitalPipeline" },
      { label: "Weighted Pipeline", key: "weightedCapitalPipeline" },
    ],
    bullets: [
      "Phase 1: Operational proof and revenue validation",
      "Phase 2: Gallery expansion and inventory scale",
      "Phase 3: Multi-venue partnership platform",
    ],
  },
  location: {
    title: "Williamsburg / Location Story",
    intro:
      "Street-level retail on a high-foot-traffic corridor in one of Brooklyn's most dynamic neighborhoods.",
    highlights: [
      "Prime Williamsburg retail corridor",
      "Street-level access with large storefront windows",
      "Walking distance to L train and ferry",
      "Surrounded by galleries, restaurants, and creative businesses",
    ],
  },
  evidence: {
    title: "Evidence Behind the Story",
    intro: "Documented operational activity supporting the investment thesis.",
    items: [
      { label: "Gallery sales ledger", status: "Documented" },
      { label: "Event booking pipeline", status: "Active" },
      { label: "Partnership agreements", status: "In progress" },
      { label: "Venue renovation complete", status: "Complete" },
    ],
  },
  proof: {
    title: "Visual Proof Archive",
    intro: "Photographic documentation of the venue, events, and artwork.",
    images: [
      {
        src: "../assets/Grand_Bedford_Front-a0e70409-7994-433a-bbf8-5802e04e6e1d.png",
        caption: "Street-level storefront",
      },
      {
        src: "../assets/127E76CC-0DE3-4BED-BC3C-7DEFEE53B818-36f97c9b-cba3-49cc-b6f0-3d91779fbc2b.png",
        caption: "Gallery interior",
      },
    ],
  },
  risk: {
    title: "Risk + Mitigation",
    intro: "Key risks and how The Grand Bedford addresses them.",
    items: [
      {
        risk: "Early-stage revenue concentration",
        mitigation: "Diversified four-engine model reduces single-stream dependency.",
      },
      {
        risk: "Receivables collection timing",
        mitigation: "Structured payment terms and active collection process.",
      },
      {
        risk: "Market competition in Williamsburg",
        mitigation: "Unique multi-engine positioning and partnership moat.",
      },
      {
        risk: "Operational scaling",
        mitigation: "Phased growth plan with capital milestones.",
      },
    ],
  },
  inquiry: {
    title: "Continue Diligence / Investor Inquiry",
    intro:
      "Request access to detailed financials, pipeline data, and investor materials.",
    cta: "Submit Investor Inquiry",
    fields: ["Name", "Email", "Organization", "Message"],
  },
};
