
import vivoEnergyImage from '../assets/images/VivoEnergy - Outstanding-Performance-Award-Recognition.png';
import engenImage from '../assets/images/Engen_Petroleum_logo.png';

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
        role: 'Head of HSE & Sites',
        company: 'KOKO Networks',
        period: 'Jan 2024 – Present · Kenya',
        desc: 'Enterprise leadership role overseeing HSE, ESG monitoring, infrastructure, and facilities across a rapidly growing clean-energy platform serving over 1.5M customers. Leads governance, operational safety, and infrastructure optimization across thousands of fuel dispenser points, fleet assets, and operational sites while supporting scalable growth.',
        current: true,
    },
    {
        role: 'Head of Engineering & HSSE',
        company: 'Lexo Energy',
        period: 'Feb 2019 – Jul 2023 · Nairobi',
        desc: 'Led Engineering, HSSE, and ESG strategy across retail fuels and LPG infrastructure. Drove sustainability and growth initiatives including EV charging, solarisation of stations, and cross-border expansion into Tanzania while enabling major financing through ESG compliance initiatives.',
    },
    {
        role: 'Engineering Lead – Retail Automation',
        company: 'Vivo Energy (Shell Licensee in Africa)',
        period: 'Sep 2017 – Jan 2019',
        desc: 'Led engineering delivery for Project Quantum retail automation, improving operational efficiency and reducing downtime. Managed infrastructure design, supplier sourcing, and deployment strategy to significantly improve project delivery speed and reduce implementation costs.',
    },
    {
        role: 'Projects Engineer',
        company: 'TBL',
        period: 'Aug 2013 – Aug 2015 · Nairobi',
        desc: 'Managed construction and engineering projects including scheduling, budgeting, contractor coordination, and compliance. Ensured projects met regulatory standards while delivering operational improvements and strong project execution outcomes.',
    },
    {
        role: 'Projects and Maintenance Assistant Engineer',
        company: 'Engen',
        period: 'Dec 2010 – Aug 2013 · Nairobi',
        desc: 'Supported engineering project delivery and site maintenance operations while aligning engineering activities with company performance targets. Managed project progress, maintenance operations, and compliance with safety and environmental standards.',
    },
];

export const PROJECTS = [
    {
        category: 'Performance Award',
        title: '2016 Outstanding Performance Award Recognition – Vivo Energy Kenya',
        desc: 'December 2016 – Present\nRecognized for outstanding performance in engineering project delivery and operational execution.',
        outcomes: [
            '6 Knock Down Repair Retail Service Stations',
            '12 Company Owned New To Industry Retail Stations',
            '22 Dealer Owned New To Industry Stations',
            '8 Dealer Owned NTVs',
            'Ridgeways Site Automation Project',
            'Delivered projects within planned CAPEX budgets',
            'Maintained strong HSSE compliance and PTW system management',
            'Oversaw contractor performance and compliance through structured reviews',
            'Supported B2B projects including BAT Fuel Storage, Simba Corp Workshops, and SGR Fueling',
            'Contributed to commercial projects including Karen, St. Austin, Bellevue and Links Road sites',
        ],
        lead: 'Eng. Humphrey Indire',
        role: 'Engineering Lead',
        company: 'VIVO ENERGY (Shell licensee in Africa)',
        link: '#',
        imageBg: 'bg-primary-dark',
        image: vivoEnergyImage,
    },
    {
        category: 'Infrastructure Rollout',
        title: 'Delivery of 44 New Shell Petrol Stations',
        desc: 'September 2015 – Present\nLed engineering delivery for large-scale fuel retail infrastructure rollout including construction, upgrades, and automation of multiple retail service stations across the region while ensuring HSSE compliance and CAPEX control.',
        outcomes: [],
        lead: 'Eng. Humphrey Indire',
        role: 'Engineering Lead',
        company: 'VIVO ENERGY (Shell licensee in Africa)',
        link: '#',
        imageBg: 'bg-primary',
        image: vivoEnergyImage,
    },
    {
        category: 'Construction',
        title: 'Construction of 2NK Commercial Oil Station – Nairobi-Nakuru Highway',
        desc: 'July 2013 – Present\nOversaw the construction of a commercial fuel outlet including tank farm installation and forecourt plumbing systems for fuel dispensers.',
        outcomes: [],
        lead: 'Eng. Humphrey Indire',
        role: 'Projects Engineer',
        company: 'Engen',
        link: '#',
        imageBg: 'bg-primary-dark',
        image: engenImage,
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
        tag: 'ENERGY TRANSITION',
        date: 'February 8, 2024',
        readTime: '3 min',
        title: 'The Critical Impact of HSE Leadership in the Energy Transition',
        excerpt: 'Exploring the critical impact of HSE leadership in the energy transition.',
        link: 'https://www.linkedin.com/pulse/critical-impact-hse-leadership-energy-transition-indire-t8htf/?trackingId=GVM650XnSX2nmpybspq3Ow%3D%3D',
    },
    list: [
        {
            tag: 'Carbon Credits',
            title: 'Understanding Carbon Credits: Unlocking Opportunities for Kenyan Enterprises',
            link: 'https://www.linkedin.com/pulse/understanding-carbon-credits-unlocking-opportunities-kenyan-indire-j9xrf/?trackingId=GVM650XnSX2nmpybspq3Ow%3D%3D',
            date: 'July 26, 2024',
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
            tag: 'ESG Strategy',
            title: 'ESG: Emerging Trends and Practices Shaping Sustainable Business',
            link: 'https://www.linkedin.com/pulse/esg-emerging-trends-practices-shaping-sustainable-business-indire-kdjlf/?trackingId=nFI%2BrId1Q9abFR%2Fgwnw%2FHQ%3D%3D',
            date: 'December 4, 2024',
            readTime: '3 min',
        },
        {
            tag: 'Renewable Energy',
            title: 'Renewable Energy Policies: Global and Local Perspectives',
            link: 'https://www.linkedin.com/pulse/renewable-energy-policies-global-local-perspectives-indire-olenc/?trackingId=nFI%2BrId1Q9abFR%2Fgwnw%2FHQ%3D%3D',
            date: 'December 10, 2024',
            readTime: '3 min',
        },
        {
            tag: 'Biofuels',
            title: 'COP29 Outcomes on Biofuels: Unlocking Africa’s Potential',
            link: 'https://www.linkedin.com/pulse/cop29-outcomes-biofuels-unlocking-africas-potential-indire-hfvif/?trackingId=nFI%2BrId1Q9abFR%2Fgwnw%2FHQ%3D%3D',
            date: 'Mar 2025',
            readTime: '3 min',
        },
        {
            tag: 'ESG Strategy',
            title: 'ESG: Emerging Trends & Practices Shaping the Future',
            link: 'https://www.linkedin.com/pulse/esg-emerging-trends-practices-shaping-future-eng-humphrey-m-indire-ehrzc/?trackingId=nFI%2BrId1Q9abFR%2Fgwnw%2FHQ%3D%3D',
            date: 'October 3, 2024',
            readTime: '4 min',
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
