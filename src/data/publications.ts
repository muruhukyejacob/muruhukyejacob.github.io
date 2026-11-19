// Publications. Verified against the publisher records (Crossref / journal pages), November 2026.
// type: 'article' | 'short' | 'working-paper' | 'under-review'
// To add a publication, copy one entry and edit it. Newest first within a year.
export type Publication = {
  title: string;
  authors: string[]; // full author list in published order
  venue: string;
  details?: string; // volume, issue, article number
  year: number;
  date?: string; // ISO date of first online publication
  type: 'article' | 'short' | 'working-paper' | 'under-review';
  role: string; // Jacob's authorship position
  url: string;
  doi?: string;
  summary?: string;
  topics: string[];
};

export const typeLabels: Record<Publication['type'], string> = {
  article: 'Full-length article',
  short: 'Short paper',
  'working-paper': 'Working paper',
  'under-review': 'Under review',
};

const ME = 'Jacob Muruhukye';

export const publications: Publication[] = [
  {
    title:
      'Factors associated with experiencing sub optimal birth intervals among Ugandan women of reproductive age using national surveys of 2000 to 2022',
    authors: ['Kelly Taremwa', ME, 'Christopher Tibamwenda'],
    venue: 'Discover Public Health',
    details: '23, 1797',
    year: 2026,
    date: '2026-11-14',
    type: 'article',
    role: 'Second author',
    doi: '10.1186/s12982-026-03218-w',
    url: 'https://doi.org/10.1186/s12982-026-03218-w',
    topics: ['Maternal health', 'Survey data'],
  },
  {
    title:
      'Determinants of optimal number of ANC visits among women of reproductive age in Uganda using modified poisson GLM regression analysis',
    authors: [ME, 'Kelly Taremwa', 'Christopher Tibamwenda'],
    venue: 'Maternal Health, Neonatology and Perinatology',
    details: '12, 61',
    year: 2026,
    date: '2026-11-03',
    type: 'article',
    role: 'First author',
    doi: '10.1186/s40748-026-00308-0',
    url: 'https://doi.org/10.1186/s40748-026-00308-0',
    topics: ['Maternal health', 'Survey data'],
  },
  {
    title:
      'Effect of SP110 single nucleotide polymorphisms on expression of selected cytokines in a Ugandan population with pulmonary tuberculosis',
    authors: [
      'Denis S. Kyabaggu',
      'Anna Ritah Namuganga',
      ME,
      'Eric Katagirya',
      'Bernard S. Bagaya',
      'Rose Nabatanzi',
      'David Patrick Kateete',
      'Irene Andia-Biraro',
      'Harriet Mayanja-Kizza',
      'Lydia Nakiyingi',
    ],
    venue: 'BMC Medical Genomics',
    year: 2026,
    date: '2026-08-10',
    type: 'article',
    role: 'Third and corresponding author',
    doi: '10.1186/s12920-026-02441-3',
    url: 'https://doi.org/10.1186/s12920-026-02441-3',
    topics: ['Genomics', 'Tuberculosis'],
  },
  {
    title:
      'Strengthening Urban Land Conflict Management and Tenure Security in Post-Covid Land Governance: Experiences and lessons from Lusanja and Lusanja informal settlements in Kampala City Region, Uganda',
    authors: ['Hakimu Sseviiri', ME, 'Disan Byarugaba'],
    venue: 'Global Development Network',
    details: 'Working Paper No. 119',
    year: 2026,
    date: '2026-06-01',
    type: 'working-paper',
    role: 'Second author',
    doi: '10.69814/wp/2026119',
    url: 'https://doi.org/10.69814/wp/2026119',
    summary:
      'Examines how the COVID-19 pandemic affected land conflicts and tenure security in two informal settlements in the Kampala City Region, drawing on a survey of 211 residents, and recommends inclusive, responsive land governance.',
    topics: ['Urban resilience', 'Land governance'],
  },
  {
    title: 'Precision Medicine in Africa: A Systematic Review of Genomic Resilience and Structural Gaps',
    authors: [
      ME,
      'Eleanor Sabuka',
      'Anna Nakhabi',
      'Mukisa Paul Brian',
      'Nanono Gloria Margaret',
      'Nabateregga Prossy',
      'Eyong Peter Ebot',
    ],
    venue: 'Synthesis',
    details: '2(5)',
    year: 2026,
    type: 'short',
    role: 'First author',
    url: 'https://synthesis-medicine.org/index.php/journal/article/view/43',
    summary:
      'Registry-based review of genomic and biomarker trials in Africa (ClinicalTrials.gov to March 2026), set against biobank and H3Africa capacity; argues for investment in infrastructure, skills and data governance.',
    topics: ['Genomics', 'Clinical trials', 'Systematic review'],
  },
  {
    title: 'Dynamics of Zoonotic Disease at the One Health Interface: Evidence from a Systematic Review',
    authors: [
      'Anna Nakhabi',
      ME,
      'Eleanor Sabuka',
      'Christopher Tibamwenda',
      'Lauritta Chinazaekpere Ndufeiya',
      'Gloria Margaret Nanono',
      'Olive Ebere Nwanja',
    ],
    venue: 'Synthesis',
    details: '2(5)',
    year: 2026,
    type: 'short',
    role: 'Second author',
    url: 'https://synthesis-medicine.org/index.php/journal/article/view/53',
    summary:
      'Re-examines zoonotic-disease trial activity in Africa using ClinicalTrials.gov; the corrected analysis locates the real gaps in the global shortage of zoonotic trials, outbreak-driven research and neglect of endemic zoonoses.',
    topics: ['One Health', 'Clinical trials', 'Systematic review'],
  },
  {
    title:
      'The Antimicrobial-Resistance “Trial Deficit” in Africa, Re-examined: Why the Headline Statistic Fails and What the Real Gap Is',
    authors: [
      'Gloria Margaret Nanono',
      'Christopher Tibamwenda',
      ME,
      'Grace Kemigisa',
      'Peter Ebot Eyong',
      'Fiona Obbo',
      'Prossy Nabateregga',
    ],
    venue: 'Synthesis',
    details: '2(5)',
    year: 2026,
    type: 'short',
    role: 'Third author',
    url: 'https://synthesis-medicine.org/index.php/journal/article/view/54',
    summary:
      'Tests a widely cited claim of an AMR “trial deficit” in Africa and identifies the actual gaps: too few AMR trials globally relative to burden, no novel-agent trials in Africa, and concentration in South Africa and MDR-TB.',
    topics: ['Antimicrobial resistance', 'Clinical trials'],
  },
  {
    title: 'Community advisory structure in African clinical trials: A registry-based analysis',
    authors: [],
    venue: 'Synthesis',
    details: '2(5)',
    year: 2026,
    type: 'short',
    role: 'Second author',
    url: 'https://synthesis-medicine.org/index.php/journal/article/view/37',
    topics: ['Clinical trials', 'Research ethics'],
  },
  {
    title: 'Research Archetypes and Cluster Mapping Narratives: A Semantic Comparison of Africa and Europe',
    authors: [],
    venue: 'Synthesis',
    details: '2(6)',
    year: 2026,
    type: 'short',
    role: 'Third author',
    url: 'https://synthesis-medicine.org/index.php/journal/article/view/56',
    topics: ['Research systems', 'Text analysis'],
  },
  {
    title: 'The Bio-Digital Divide: Digital trial adoption and the Bio-digital gap in Africa',
    authors: [
      'Peter Ebot Eyong',
      ME,
      'Rita Ewah Mbah',
      'Endurance Lum Ambe',
      'Vahid Esangaya Ntoung-Mbi',
      'Spritney Nashua Ninpa',
      'Gloria Margaret Nanono',
    ],
    venue: 'Synthesis',
    details: '2(7)',
    year: 2026,
    type: 'short',
    role: 'Second author',
    url: 'https://synthesis-medicine.org/index.php/journal/article/view/75',
    summary:
      'Compares digital, wearable, virtual and decentralised trial features in African and US trial registrations, finding far lower adoption in Africa and a risk of exclusion from future decentralised research.',
    topics: ['Digital health', 'Clinical trials'],
  },
  {
    title: 'Sickle Cell Disease Neglect: A Mismatch Between Burden and Research in Africa',
    authors: [
      'Peter Eyong Ebot',
      'Randolf Fuanghene Wefuan',
      ME,
      'Rita Ewah Mbah',
      'Enu-Ma Obi-Asu',
      'Spritney Nashua Ninpa',
      'Ebere Olive Nwanja',
    ],
    venue: 'Synthesis',
    details: '2(7)',
    year: 2026,
    type: 'short',
    role: 'Third author',
    url: 'https://synthesis-medicine.org/index.php/journal/article/view/78',
    summary:
      'Audits sickle cell disease trial registrations and shows that research activity in Africa is poorly matched to the disease burden borne by African populations.',
    topics: ['Sickle cell disease', 'Clinical trials'],
  },
];

// Manuscripts under review are listed without titles until accepted.
export const underReview = [
  'Two co-authored analyses of antenatal care using the 2018 Uganda Malaria Indicator Survey (under review, Discover Public Health).',
];
