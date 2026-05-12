export type HrContact = {
  name: string;
  title: string;
  company: string;
  industry: string;
  email: string;
  alt_emails: string[];
  email_confidence: "high" | "medium" | "low";
  linkedin_url: string;
  context: string;
  subject: string;
  body: string;
};

const SIGNATURE = `Best,
Leigh-Ann Martin
CAP Certified | Salesforce Certified
linkedin.com/in/leigh-ann-martin`;

export const hrContacts: HrContact[] = [
  {
    name: "Rebecca Klouwers",
    title: "HR & Operations Manager",
    company: "OnCusp Therapeutics",
    industry: "Biotech",
    email: "rklouwers@oncusptx.com",
    alt_emails: ["rebecca@oncusptx.com", "rebecca.klouwers@oncusptx.com"],
    email_confidence: "medium",
    linkedin_url: "https://www.linkedin.com/company/oncusp-therapeutics",
    context: "$100M Series A. IND approval for CUSP06. Transitioning from pre-clinical to clinical.",
    subject: "Fractional EA support for OnCusp's clinical transition",
    body: `Hi Rebecca,

Congrats on the $100M Series A and the IND approval for CUSP06. The clinical transition is when ops gets harder fast: regulatory meetings multiply, board reporting goes quarterly, and EA hires feel both urgent and risky.

I'm a fractional Executive Assistant working with biotech CEOs in NYC. Quick intro because I'd rather come to you than around you.

Background: 5 years as Senior EA at Immunovant, supporting the C-suite through clinical-stage transitions, board governance, and 200+ stakeholder relationships. Public-company experience at Ascend Wellness (cannabis MSO). CAP and Salesforce certified.

If Bing or anyone on the leadership team is running their own calendar right now, or you're holding off on a full-time EA hire while headcount is tight, I work as a flexible alternative. No long commitment, just experienced operational infrastructure when you need it most.

Worth a 15-minute call?

${SIGNATURE}`,
  },
  {
    name: "Tess Bloch",
    title: "Co-Founder & Head of Operations (oversees People)",
    company: "Spade",
    industry: "Fintech",
    email: "tess@spade.com",
    alt_emails: ["tess@spade.dev"],
    email_confidence: "high",
    linkedin_url: "https://www.linkedin.com/company/spadedata",
    context: "YC-backed transaction data API. Tess oversees ops, finance, sales, and people teams.",
    subject: "Fractional EA support while Spade scales enterprise",
    body: `Hi Tess,

Saw your Wharton FinTech conversation about leading ops, finance, sales, and people at Spade. That spread is a lot, especially with enterprise onboarding heating up.

I'm a fractional Executive Assistant working with fintech CEOs in NYC. Quick intro because I'd rather come to you than around you.

Background: 5 years as Senior EA at Immunovant, supporting the C-suite through clinical-stage transitions, board governance, and 200+ stakeholder relationships. Public-company experience at Ascend Wellness (cannabis MSO). CAP and Salesforce certified, which maps directly to Spade's enterprise customer base.

If Oban is running his own calendar, or you're putting off an EA hire while Spade is still scaling, I'd be a flexible alternative. Drop in for the load you actually need, no full-time commitment.

Worth a 15-minute call?

${SIGNATURE}`,
  },
  {
    name: "Keshar Sheridan",
    title: "Head of People",
    company: "Grow Therapy",
    industry: "Healthtech",
    email: "keshar.sheridan@growtherapy.com",
    alt_emails: ["keshar@growtherapy.com"],
    email_confidence: "high",
    linkedin_url: "https://www.linkedin.com/company/growtherapy",
    context: "Series D, $3B valuation. Recent acquisitions of Neosync and Tenor. Three co-founders.",
    subject: "Fractional EA support during Grow's integration push",
    body: `Hi Keshar,

Congrats on the Series D and the Neosync and Tenor acquisitions. M&A integration is operationally demanding work, and three co-founders coordinating across acquired teams puts real strain on calendars.

I'm a fractional Executive Assistant working with healthtech CEOs in NYC. Quick intro because I'd rather come to you than around you.

Background: 5 years as Senior EA at Immunovant, supporting the C-suite through clinical-stage transitions, board governance, and 200+ stakeholder relationships. Public-company experience at Ascend Wellness (cannabis MSO), where I lived through cannabis consolidation. CAP and Salesforce certified.

If Jake or the other co-founders are running their own calendars, or your EA bench is stretched while Grow integrates, I work as a flexible alternative to a full-time hire. Plug-and-play during integration, no long commitment.

Worth a 15-minute call?

${SIGNATURE}`,
  },
  {
    name: "Karishma Patel Buford",
    title: "Chief People Officer",
    company: "Spring Health",
    industry: "Healthtech",
    email: "kbuford@springhealth.com",
    alt_emails: ["kpatelbuford@springhealth.com", "karishma.buford@springhealth.com", "karishma@springhealth.com"],
    email_confidence: "medium",
    linkedin_url: "https://www.linkedin.com/company/spring-health",
    context: "Series E, $3.3B valuation. Acquiring Alma (Q2 2026 close).",
    subject: "Fractional EA support during the Alma merger",
    body: `Hi Karishma,

Congrats on the Alma acquisition closing this quarter. Two enterprise mental health platforms merging is heavy ops work, especially when the People team is the spine holding both cultures together.

I'm a fractional Executive Assistant working with healthtech CEOs in NYC. Quick intro because I'd rather come to you than around you.

Background: 5 years as Senior EA at Immunovant, supporting the C-suite through clinical-stage transitions, board governance, and 200+ stakeholder relationships. Public-company experience at Ascend Wellness (cannabis MSO), including cannabis consolidation M&A. CAP and Salesforce certified.

If April or the integration leads are running their own calendars during the merger, or your EA hires are deferred while you're absorbing Alma, I'd be a flexible alternative. Drop in for the high-load months, no long-term commitment.

Worth a 15-minute call?

${SIGNATURE}`,
  },
  {
    name: "Kavya Jonnavithula",
    title: "Head of Talent Acquisition",
    company: "Sixfold AI",
    industry: "Insurtech",
    email: "kavya@sixfold.ai",
    alt_emails: ["kavya.jonnavithula@sixfold.ai"],
    email_confidence: "high",
    linkedin_url: "https://www.linkedin.com/in/kavya-jonnavithula-000911105/",
    context: "$30M Series B. Three co-founders. Expanding leadership team. Salesforce Ventures portfolio.",
    subject: "Fractional EA support for Sixfold's leadership team",
    body: `Hi Kavya,

Congrats on the $30M Series B and the leadership team buildout. Three co-founders plus enterprise insurer clients tends to be the moment EA needs spike.

I'm a fractional Executive Assistant working with insurtech and fintech CEOs in NYC. Quick intro because I'd rather come to you than around you.

Background: 5 years as Senior EA at Immunovant, supporting the C-suite through clinical-stage transitions, board governance, and 200+ stakeholder relationships. Public-company experience at Ascend Wellness (cannabis MSO). CAP and Salesforce certified, which lines up with the insurance enterprise sales motion.

If Alex or the other founders are running their own calendars while you're heads-down on TA, or you're deferring an EA hire to focus headcount on engineering, I work as a flexible alternative. Slot in for the load you actually need.

Worth a 15-minute call?

${SIGNATURE}`,
  },
  {
    name: "Jacob Wallenberg",
    title: "VP, People & Talent",
    company: "Ramp",
    industry: "Fintech",
    email: "jwallenberg@ramp.com",
    alt_emails: ["jacob@ramp.com", "jacob.wallenberg@ramp.com"],
    email_confidence: "high",
    linkedin_url: "https://www.linkedin.com/company/ramp",
    context: "$32B valuation. $1B annualized revenue. 110+ open roles. Hypergrowth fintech.",
    subject: "Fractional EA support for Ramp's leadership bench",
    body: `Hi Jacob,

Congrats on the $32B mark and Ramp's $1B annualized revenue run. Hypergrowth like this generally means EA capacity is the bottleneck nobody talks about, and bench gaps show up first when leaders are traveling.

I'm a fractional Executive Assistant working with fintech leadership teams in NYC. Quick intro because I'd rather come to you than around you.

Background: 5 years as Senior EA at Immunovant supporting the C-suite through clinical-stage transitions, board governance, and 200+ stakeholder relationships. Public-company experience at Ascend Wellness (cannabis MSO). CAP and Salesforce certified.

If you're carrying open EA reqs into 2026 or want overflow capacity for Eric and the executive team during peak travel, I work as a flexible alternative to a full-time hire. Drop in for short-term coverage or quarterly bursts, no long commitment.

Worth a 15-minute call?

${SIGNATURE}`,
  },
  {
    name: "Lindsay Beaupre",
    title: "SVP, People & Culture",
    company: "LB Pharmaceuticals",
    industry: "Biotech",
    email: "lindsay@lbpharma.us",
    alt_emails: ["lindsay.beaupre@lbpharma.us", "lbeaupre@lbpharma.us"],
    email_confidence: "high",
    linkedin_url: "https://www.linkedin.com/company/lb-pharmaceuticals-inc",
    context: "Just joined Jan 2026 as SVP People & Culture. $285M IPO (Sep 2025). Schizophrenia focus.",
    subject: "Fractional EA support for LB's pre-IPO push",
    body: `Hi Lindsay,

Welcome to LB. Joining right after the IPO means the People function gets to design the operational backbone for the public-company chapter, and EA capacity tends to be one of the first cracks that shows.

I'm a fractional Executive Assistant working with biotech CEOs in NYC. Quick intro because I'd rather come to you than around you.

Background: 5 years as Senior EA at Immunovant supporting the C-suite through clinical-stage transitions, board governance, and 200+ stakeholder relationships. Public-company experience at Ascend Wellness (cannabis MSO). CAP and Salesforce certified. I know what S-1 prep, board reporting cadence, and IR coordination actually demand from a calendar.

If Heather is running her own calendar, or you want experienced public-company EA support before you hire full-time, I work as a flexible alternative. Drop in for the public-company ramp, scale up or down as the workload shifts.

Worth a 15-minute call?

${SIGNATURE}`,
  },
];

export function buildMailto(email: string, subject: string, body: string): string {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
