import mtKenyaImg from '../assets/images/mount-kenya-conservancy.jpg';
import evChargingImg from '../assets/images/East-Africa-EV-charging.jpg';
import energyHubImg from '../assets/images/industrial-renewable-energy-hub.webp';
import carbonCreditImg from '../assets/images/carbon-credit.jpg';

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Projects', href: '#projects' },
  { label: 'Book', href: '#booking' },
  { label: 'Insights', href: '#insights' },
];

export const HERO_STATS = [
  { num: '15+', label: 'Years' },
  { num: '4', label: 'Countries' },
  { num: '$2B+', label: 'Projects' },
  { num: '3', label: 'Board Seats' },
];

export const TRUST_LOGOS = [
  'KIBO Motorcycles',
  'Dalbit Petroleum',
  'KOKO Networks',
  'StarCharge Africa',
  'IFC / World Bank',
  'UNFCCC',
];

export const ABOUT_PILLARS = [
  {
    icon: '⚡',
    title: 'Energy Transition',
    desc: "Designing Africa's shift from fossil to renewable infrastructure",
  },
  {
    icon: '🌿',
    title: 'Carbon Markets',
    desc: 'Structuring VCS and Gold Standard carbon offset frameworks',
  },
  {
    icon: '🚗',
    title: 'EV Mobility',
    desc: 'Deploying electric mobility ecosystems across emerging markets',
  },
  {
    icon: '📊',
    title: 'ESG Strategy',
    desc: 'Integrating governance and sustainability into corporate strategy',
  },
];

export const BOOKING_CARDS = [
  {
    icon: '🎙️',
    type: 'Virtual Event',
    title: 'Webinar & Masterclass',
    desc: 'Deep-dive sessions on climate finance, carbon markets, energy transition, and ESG strategy for organizations and professional communities.',
    meta: [
      { icon: '⏱', text: '60–90 min' },
      { icon: '👥', text: 'Up to 500' },
    ],
    price: '$2,500',
    priceSub: '/ session',
    cta: 'Book Webinar →',
    href: '#contact',
  },
  {
    icon: '🏛️',
    type: 'In-Person / Hybrid',
    title: 'Conference & Keynote',
    desc: 'Commanding keynote presentations and panel participation at industry conferences, summits, and forums across Africa and globally.',
    meta: [
      { icon: '📍', text: 'Global' },
      { icon: '📅', text: 'Flexible dates' },
    ],
    price: '$8,500',
    priceSub: '/ engagement',
    cta: 'Book Keynote →',
    href: '#contact',
    featured: true,
  },
  {
    icon: '🧭',
    type: '1:1 Executive Session',
    title: 'Strategy Advisory',
    desc: 'Focused advisory sessions for executives, investors, and project developers navigating climate finance, infrastructure deals, or ESG positioning.',
    meta: [
      { icon: '⏱', text: '2 hours' },
      { icon: '🔒', text: 'Confidential' },
    ],
    price: '$1,200',
    priceSub: '/ session',
    cta: 'Book Advisory →',
    href: '#contact',
  },
  {
    icon: '🏢',
    type: 'Long-Term Engagement',
    title: 'Board / NED Role',
    desc: 'Non-executive director or board advisory roles providing strategic governance, climate expertise, and industry network access on an ongoing basis.',
    meta: [
      { icon: '📅', text: 'Quarterly' },
      { icon: '📋', text: 'Governance' },
    ],
    price: 'Custom',
    priceSub: '/ annually',
    cta: 'Enquire →',
    href: '#contact',
  },
  {
    icon: '⚡',
    type: 'Fractional Executive',
    title: 'Fractional C-Suite Leadership',
    desc: 'Embedded fractional Chief Sustainability Officer, Chief Climate Officer, or VP-level energy leadership for 3–12 month engagements. Strategy + execution.',
    meta: [
      { icon: '📅', text: '3–12 months' },
      { icon: '⚡', text: 'High Impact' },
    ],
    price: '$15,000',
    priceSub: '/ month',
    cta: 'Apply Now →',
    href: '#contact',
    featured: true,
    theme: 'teal',
  },
  {
    icon: '🧑‍🏫',
    type: 'Training',
    title: 'Corporate Workshop',
    desc: 'Half-day or full-day workshops for corporate teams on climate risk, ESG integration, carbon credit markets, or energy transition planning.',
    meta: [
      { icon: '⏱', text: '4–8 hours' },
      { icon: '👥', text: 'Up to 50' },
    ],
    price: '$6,000',
    priceSub: '/ day',
    cta: 'Book Workshop →',
    href: '#contact',
  },
];

export const EXPERIENCES = [
  {
    role: 'Chief Officer — Climate Finance & EV Transition',
    company: 'KIBO Motorcycles',
    period: '2026 – Present · 1 yr',
    desc: 'Leading strategic initiatives in electric mobility and climate finance to drive sustainable transportation solutions across emerging markets.',
    current: true,
  },
  {
    role: 'Non-Executive Director — Carbon Markets & Climate Strategy',
    company: 'Dalbit Petroleum',
    period: '2026 – Present · 1 yr',
    desc: 'Advising on carbon markets and ESG integration, focusing on climate strategy and sustainable energy infrastructure development.',
    current: true,
  },
  {
    role: 'Advisor — EV Infrastructure & Energy Transition',
    company: 'StarCharge (Africa Advisory)',
    period: '2025 – Present · 2 yrs',
    desc: 'Supporting EV charging infrastructure deployment and market entry strategy across the African mobility ecosystem.',
  },
  {
    role: 'Head of HSE & Sites',
    company: 'KOKO Networks',
    period: '2023 – Present · 3 yrs',
    desc: 'Responsible for operational infrastructure and safety management across a network serving over 1.2 million customers in Kenya.',
  },
  {
    role: 'Senior Energy Engineer — Upstream',
    company: 'TotalEnergies (East Africa)',
    period: '2018 – 2023 · 5 yrs',
    desc: 'Led upstream oil & gas engineering projects, transitioning into renewable energy feasibility studies and carbon accounting frameworks.',
  },
];

export const ESG_INDEX = [
  { label: 'Environmental', value: 92, color: '#0B7B6E' },
  { label: 'Carbon Markets', value: 88, color: '#0FA492' },
  { label: 'EV / Mobility', value: 85, color: '#C9A84C' },
  { label: 'Governance', value: 90, color: '#0A1628' },
  { label: 'Infrastructure', value: 95, color: '#1a3a5c' },
];

export const PROJECTS = [
  {
    category: 'Conservation & Carbon',
    title: 'Mount Kenya Wildlife Conservancy Carbon & Biodiversity Project',
    desc: 'A pioneering initiative preserving biodiversity while generating high-quality carbon offsets through ecosystem restoration, integrating community development with large-scale environmental protection.',
    outcomes: [
      'Restoration of 50,000 hectares of critical mountain habitat',
      'Implementation of Verified Carbon Standard (VCS) methodologies',
      'Direct employment for over 200 local rangers and conservationists',
      '$12M in carbon credit revenue projected over 10-year crediting period',
    ],
    lead: 'Eng. Humphrey Indire',
    role: 'Project Lead',
    link: '#',
    imageBg: 'bg-navy',
    image: mtKenyaImg,
  },
  {
    category: 'Mobility & Finance',
    title: 'East Africa EV Charging Infrastructure Rollout',
    desc: 'End-to-end market entry strategy and infrastructure deployment for electric vehicle charging networks across Kenya, Rwanda, and Uganda.',
    outcomes: [
      '200+ charging stations across 3 countries in Phase 1',
      '$45M private equity financing structured and closed',
      'Policy framework co-authored with Kenya Energy Regulatory Authority',
      '30,000 EV fleet electrification target enabled',
    ],
    lead: 'Eng. Humphrey Indire',
    role: 'Strategy Advisor',
    link: '#',
    imageBg: 'bg-gradient-to-br from-[#1a3a5c] to-teal',
    image: evChargingImg,
  },
  {
    category: 'Energy Infrastructure',
    title: 'Industrial Renewable Energy Hub — Mombasa SEZ',
    desc: 'Design and financing of a 180MW hybrid solar-storage industrial energy hub to power a Special Economic Zone, displacing diesel generation and reducing operational carbon intensity.',
    outcomes: [
      '180MW solar + 40MWh battery storage system',
      '85% reduction in diesel dependency for 60 industrial tenants',
      'IFC co-investment of $120M secured',
      'Carbon-neutral certification pathway established',
    ],
    lead: 'Eng. Humphrey Indire',
    role: 'Technical Lead',
    link: '#',
    imageBg: 'bg-gradient-to-br from-[#2d1b00] to-gold',
    image: energyHubImg,
  },
  {
    category: 'Climate Finance',
    title: 'Pan-African Carbon Credit Aggregation Platform',
    desc: 'A structured finance vehicle aggregating small-scale community carbon projects across 8 African nations into investment-grade portfolios accessible to international buyers.',
    outcomes: [
      '85 community projects aggregated into 3 credit tranches',
      '2.4M verified carbon tonnes issued in first cycle',
      'Direct income to 45,000 smallholder farmers and forest communities',
      'Partnership with Gold Standard and Verra established',
    ],
    lead: 'Eng. Humphrey Indire',
    role: 'Architect & Advisor',
    link: '#',
    imageBg: 'bg-gradient-to-br from-[#0a2818] to-teal',
    image: carbonCreditImg,
  },
];

export const EXPERTISE_AREAS = [
  {
    icon: '🌍',
    title: 'Climate Finance & Carbon Markets in Africa',
    desc: 'Structuring carbon offset frameworks, VCS/Gold Standard certification, blended finance vehicles, and carbon credit aggregation for African project developers.',
    categories: ['Carbon Markets', 'Climate Finance'],
  },
  {
    icon: '⚡',
    title: 'Electric Mobility Transition',
    desc: 'Analyzing infrastructure requirements and policy frameworks needed to accelerate EV adoption in developing economies, including grid readiness and supply chain localization.',
    categories: ['EV Mobility', 'Energy Transition'],
  },
  {
    icon: '🏭',
    title: 'Sustainable Energy Infrastructure',
    desc: 'Best practices for designing and financing renewable energy hubs, industrial microgrids, and hybrid systems that power economic growth while minimizing carbon footprint.',
    categories: ['Infrastructure', 'Energy Transition'],
  },
  {
    icon: '📋',
    title: 'ESG Integration & Governance',
    desc: 'Embedding ESG frameworks into corporate governance, board-level reporting, investor relations, and operational systems for energy and infrastructure companies.',
    categories: ['ESG Strategy'],
  },
  {
    icon: '🛡️',
    title: 'Safety Leadership & Risk Management',
    desc: 'Building industry-leading HSE systems for large-scale energy operations, regulatory compliance, and operational resilience in high-risk African energy environments.',
    categories: ['Risk Management'],
  },
  {
    icon: '🤝',
    title: 'Policy & Regulatory Strategy',
    desc: 'Engaging government, development banks, and multilateral organizations to shape energy policy, attract FDI, and unlock climate finance at national and continental scale.',
    categories: ['Policy'],
  },
];

export const INSIGHTS = {
  featured: {
    tag: 'POLICY & PERSPECTIVES',
    date: 'December 10, 2024',
    readTime: '3 min',
    title: 'Renewable Energy Policies: Global and Local Perspectives',
    excerpt: 'Exploring the intersection of global energy standards and local implementation strategies to accelerate the transition to sustainable power across Africa.',
    link: 'https://www.linkedin.com/pulse/renewable-energy-policies-global-local-perspectives-indire-olenc/?trackingId=nFI%2BrId1Q9abFR%2Fgwnw%2FHQ%3D%3D',
  },
  list: [
    {
      tag: 'ESG Strategy',
      title: 'ESG: Emerging Trends and Practices Shaping Sustainable Business',
      link: 'https://www.linkedin.com/pulse/esg-emerging-trends-practices-shaping-sustainable-business-indire-kdjlf/?trackingId=nFI%2BrId1Q9abFR%2Fgwnw%2FHQ%3D%3D',
      date: 'December 4, 2024',
      readTime: '3 min',
    },
    {
      tag: 'Biofuels',
      title: 'COP29 Outcomes on Biofuels: Unlocking Africa’s Potential',
      link: 'https://www.linkedin.com/pulse/cop29-outcomes-biofuels-unlocking-africas-potential-indire-hfvif/?trackingId=nFI%2BrId1Q9abFR%2Fgwnw%2FHQ%3D%3D',
      date: 'November 2024',
      readTime: '3 min',
    },
    {
      tag: 'ESG Strategy',
      title: 'ESG: Emerging Trends & Practices Shaping the Future',
      link: 'https://www.linkedin.com/pulse/esg-emerging-trends-practices-shaping-future-eng-humphrey-m-indire-ehrzc/?trackingId=nFI%2BrId1Q9abFR%2Fgwnw%2FHQ%3D%3D',
      date: 'October 3, 2024',
      readTime: '4 min',
    },
    {
      tag: 'Clean Energy',
      title: 'Driving Clean Energy and Sustainability: Community Insights',
      link: 'https://www.linkedin.com/pulse/driving-clean-energy-sustainability-community-insights-indire-fu2df/?trackingId=GVM650XnSX2nmpybspq3Ow%3D%3D',
      date: 'August 5, 2024',
      readTime: '3 min',
    },
    {
      tag: 'Carbon Credits',
      title: 'Understanding Carbon Credits: Unlocking Opportunities for Kenyan Enterprises',
      link: 'https://www.linkedin.com/pulse/understanding-carbon-credits-unlocking-opportunities-kenyan-indire-j9xrf/?trackingId=GVM650XnSX2nmpybspq3Ow%3D%3D',
      date: 'July 26, 2024',
      readTime: '4 min',
    },
    {
      tag: 'Energy Transition',
      title: 'The Critical Impact of HSE Leadership in the Energy Transition',
      link: 'https://www.linkedin.com/pulse/critical-impact-hse-leadership-energy-transition-indire-t8htf/?trackingId=GVM650XnSX2nmpybspq3Ow%3D%3D',
      date: 'February 8, 2024',
      readTime: '3 min',
    },
  ],
};

export const MERCHANDISE = [
  {
    icon: '📘',
    name: 'Climate Finance Playbook',
    tagline: 'The definitive guide to structuring climate investments in Africa. Digital + Print.',
    price: '$49',
    cta: 'Add to Cart',
  },
  {
    icon: '👔',
    name: 'Signature Executive Polo',
    tagline: 'Premium branded polo — navy & gold. Worn by HI at every keynote.',
    price: '$75',
    cta: 'Add to Cart',
  },
  {
    icon: '🗒️',
    name: 'ESG Strategy Workbook',
    tagline: '12-week structured workbook for embedding ESG into your organization. Physical notebook.',
    price: '$35',
    cta: 'Add to Cart',
  },
  {
    icon: '☕',
    name: 'Climate Leader Mug',
    tagline: '"Engineer the Transition" ceramic mug. Limited edition, dishwasher safe.',
    price: '$28',
    cta: 'Add to Cart',
  },
];

export const TESTIMONIALS = [
  {
    text: '"The depth of expertise Humphrey brought transformed our approach to large-scale climate infrastructure projects. Truly exceptional leadership — he sees around corners."',
    name: 'James M.',
    role: 'Senior Executive · Global Infrastructure Group',
    initials: 'JM',
  },
  {
    text: '"A rare combination of strategic foresight and technical proficiency. Humphrey is the gold standard for industry guidance on African energy transition."',
    name: 'Amara N.',
    role: 'Managing Director · Sustainability Council',
    initials: 'AN',
  },
  {
    text: '"Navigating complex policy landscapes requires precision, and that is exactly what Humphrey delivers. A vital and trusted partner for our climate mission."',
    name: 'Sarah K.',
    role: 'Policy Advisor · Strategic Energy Initiative',
    initials: 'SK',
  },
];

export const REFERRAL_REWARDS = [
  { icon: '💰', title: '10% Cash Commission', desc: 'On advisory & keynote bookings' },
  { icon: '🎁', title: 'Free Masterclass Access', desc: 'For webinar referrals' },
  { icon: '📚', title: 'Digital Resource Bundle', desc: 'Climate Finance Toolkit + Workbook' },
  { icon: '🏆', title: 'Top Referrer Recognition', desc: 'Featured in monthly newsletter' },
];

export const REFERRAL_STATS = [
  { num: '47', label: 'Referrals This Year', desc: 'From professionals across Africa and the global climate finance community.' },
  { num: '$38K', label: 'Paid Out in Commissions', desc: 'Referral rewards distributed in the last 12 months to community members.' },
  { num: '92%', label: 'Referral Conversion Rate', desc: 'Of referred organizations go on to book an engagement within 30 days.' },
];
