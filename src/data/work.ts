// Projects, services, teaching and skills. Images refer to files in src/assets/photos.

export type Project = {
  slug: string;
  title: string;
  status: 'Ongoing' | 'Completed';
  period: string;
  area: string;
  location: string;
  image?: string;
  imageAlt?: string;
  summary: string;
  role: string[];
  methods: string[];
};

export const projects: Project[] = [
  {
    slug: 'karamoja-crva',
    title: 'Climate Risk & Vulnerability Assessment, Karamoja',
    status: 'Completed',
    period: 'August 2026',
    area: 'Climate change',
    location: 'Moroto, Kotido and Nakapiripirit',
    image: 'karamoja-map',
    imageAlt: 'District hazard map of Kotido annotated with coloured sticky notes during a participatory risk-mapping session',
    summary:
      'A UNCDF-supported climate risk and vulnerability assessment implemented by MUCCRI with Oiko across three Karamoja districts, combining household interviews with key informant interviews and focus group discussions.',
    role: [
      'Field consultant resident in the study districts for the 24-day collection period',
      'Administered KoboCollect household interviews; supported KIIs and FGDs',
      'Led community entry and consent; ran daily completeness and consistency checks',
    ],
    methods: ['Household survey', 'KIIs and FGDs', 'Participatory mapping', 'KoboToolbox'],
  },
  {
    slug: 'kampala-kasese-flood-health',
    title: 'Climate, Health & Neighbourhood Wellbeing: Floods and Health in Kampala and Kasese',
    status: 'Ongoing',
    period: '2025 – 2026',
    area: 'Climate & health',
    location: 'Kampala and Kasese',
    image: 'kampala-flooding',
    imageAlt: 'Floodwater running through a narrow passage between houses in a Kampala informal settlement',
    summary:
      'A household study of how flood exposure and severity relate to health outcomes in urban and peri-urban neighbourhoods, part of MUCCRI and Urban Action Lab climate–health research.',
    role: [
      'Built and maintained the household database',
      'Village household listing and selection by protocol',
      'Modelled climate–health associations in R and Stata',
    ],
    methods: ['Household survey', 'Regression and GLMs', 'R', 'Stata'],
  },
  {
    slug: 'kisoro-heat-wave',
    title: 'Heat-Wave Study, Kisoro',
    status: 'Ongoing',
    period: '2025 – 2026',
    area: 'Climate & health',
    location: 'Kisoro District',
    image: 'kisoro-terraces',
    imageAlt: 'Terraced hillside farmland in Kisoro, south-western Uganda',
    summary:
      'Research on community exposure and responses to extreme heat in the highland district of Kisoro.',
    role: ['Village household listing and selection by protocol', 'Household interviews and data quality checks'],
    methods: ['Household listing', 'Sampling', 'Household survey'],
  },
  {
    slug: 'urban-futures',
    title: 'Urban Futures: Co-design in Kampala’s Informal Settlements',
    status: 'Ongoing',
    period: '2025 – present',
    area: 'Urban resilience',
    location: 'Kampala',
    image: 'workshop-facilitation',
    imageAlt: 'Muruhukye Jacob facilitating a community co-design workshop, pointing to prioritised issues on a flip chart',
    summary:
      'Urban Action Lab work with informal-settlement communities on waste, drainage and energy, combining household surveys with photovoice, asset mapping and community systems-mapping workshops.',
    role: [
      'Facilitated community co-design and systems-mapping workshops',
      'Designed mixed-methods data collection and supervised field data capture',
      'Supported qualitative analysis and research outputs',
    ],
    methods: ['Systems mapping', 'Photovoice', 'Asset mapping', 'KIIs and FGDs', 'NVivo'],
  },
  {
    slug: 'vbf-household-survey',
    title: 'Victoria Basin Facility Household Survey, Cattle Corridor',
    status: 'Completed',
    period: 'October 2026',
    area: 'Climate change',
    location: 'Uganda’s cattle corridor',
    image: 'vbf-household',
    imageAlt: 'Rural homestead with a water tank and maize garden in the cattle corridor',
    summary:
      'A household survey in Uganda’s cattle corridor for which a paper questionnaire was converted into a validated electronic tool.',
    role: [
      'Converted the paper tool into a KoboToolbox XLSForm with relevance, constraints and validation',
      'Deployed the form on tablets and quality-checked submissions',
    ],
    methods: ['XLSForm design', 'KoboToolbox', 'Data quality assurance'],
  },
  {
    slug: 'kafu-nbs',
    title: 'Nature-Based Solutions, Kafu Catchment',
    status: 'Ongoing',
    period: '2025 – 2026',
    area: 'Climate change',
    location: 'Hoima',
    summary:
      'Household survey research on nature-based solutions in the Kafu catchment, analysed within MUCCRI’s nature-based-solutions portfolio.',
    role: ['Statistical analysis and reporting', 'Field data supervision in Hoima'],
    methods: ['Household survey', 'R', 'Stata'],
  },
  {
    slug: 'maternal-health-udhs',
    title: 'Maternal and Reproductive Health Using National Surveys',
    status: 'Ongoing',
    period: '2024 – present',
    area: 'Public health',
    location: 'Uganda (national)',
    summary:
      'Secondary analyses of Uganda Demographic and Health Survey and Malaria Indicator Survey data on antenatal care, birth intervals and modern contraceptive use, including the Master of Biostatistics dissertation.',
    role: ['First author and co-author of published and submitted manuscripts', 'Survey-weighted, multilevel and causal-inference analysis'],
    methods: ['Complex survey weights', 'Modified Poisson GLM', 'Multilevel models', 'Propensity score matching'],
  },
  {
    slug: 'african-trials-evidence',
    title: 'Evidence Synthesis on Clinical Trials and Genomics in Africa',
    status: 'Completed',
    period: '2026',
    area: 'Evidence synthesis',
    location: 'Africa (registry-based)',
    summary:
      'A series of registry-based analyses and systematic reviews on genomic readiness, zoonoses, antimicrobial resistance, digital trials, sickle cell disease and community advisory structures in African clinical trials.',
    role: ['First author of the precision-medicine review; co-author of six further papers', 'Data extraction and analysis of ClinicalTrials.gov records'],
    methods: ['Systematic review', 'Registry analysis', 'Rayyan screening'],
  },
];

export const services = [
  {
    title: 'Statistical analysis',
    icon: 'chart',
    text: 'Regression and GLMs, multilevel and survival models, propensity score matching, difference-in-differences, time series and Bayesian methods, with clear tables, figures and interpretation.',
  },
  {
    title: 'Research design & sample size',
    icon: 'design',
    text: 'Study design, sampling strategies, sample size and power calculations, analysis plans and protocol methodology sections.',
  },
  {
    title: 'Survey & electronic data tools',
    icon: 'form',
    text: 'KoboToolbox, ODK and SurveyCTO tools built from paper questionnaires, with skip logic, constraints, validation and pretesting.',
  },
  {
    title: 'Data management & quality',
    icon: 'database',
    text: 'Same-day quality checks, back-checks, data dictionaries, de-identification and reproducible, documented cleaning scripts in R and Stata.',
  },
  {
    title: 'Qualitative & mixed methods',
    icon: 'people',
    text: 'KII and FGD guides, photovoice and participatory mapping, transcription and coding in NVivo and MAXQDA.',
  },
  {
    title: 'Monitoring, evaluation & learning',
    icon: 'target',
    text: 'Household surveys, vulnerability assessments and impact analysis for development and climate programmes.',
  },
  {
    title: 'Scientific writing & reviews',
    icon: 'pen',
    text: 'Manuscript development, systematic reviews and meta-analysis, revisions and point-by-point responses to reviewers.',
  },
  {
    title: 'Dissertation & thesis support',
    icon: 'cap',
    text: 'Methodology, analysis and structuring support for Master’s and PhD students — more than 30 supported to date.',
  },
  {
    title: 'Training & capacity building',
    icon: 'teach',
    text: 'Hands-on training in R, Stata, SPSS, electronic data collection and qualitative analysis for students, researchers and field teams.',
  },
];

export const teaching = {
  modules: [
    'Statistical Programming (R, Stata, SPSS, C++)',
    'Statistical Modelling',
    'Intermediate Statistical Methods',
    'Ethics for Statisticians',
    'Actuarial Mathematics',
  ],
  trainings: [
    {
      title: 'ASCA 10-day R & Stata training',
      role: 'Lead Trainer, R Programming',
      period: 'March – April 2026',
      image: 'r-stata-lab',
      imageAlt: 'Participants working on computers during an R and Stata training session',
    },
    {
      title: 'Urban Action Lab Training Programme',
      role: 'Trainer in R, Stata, SPSS, electronic data collection and qualitative analysis',
      period: '2025 – present',
      image: 'training-laptop',
      imageAlt: 'Muruhukye Jacob preparing training material on a laptop',
    },
    {
      title: 'Graduate Training in Research, RineCynth Advisory',
      role: 'Participant — epidemiology, Stata, MAXQDA and manuscript writing',
      period: 'July – August 2026',
      image: 'graduate-training',
      imageAlt: 'Small-group work during a graduate research training session',
    },
  ],
};

export const skillGroups = [
  {
    title: 'Programming & statistical software',
    items: ['R', 'Stata', 'Python', 'SQL', 'SPSS', 'C++', 'PHP', 'HTML & JavaScript', 'Excel with VBA', 'Git & GitHub'],
  },
  {
    title: 'Statistical methods',
    items: [
      'GLMs (logistic, Poisson, negative binomial)',
      'Multilevel models',
      'Survival analysis',
      'Propensity score matching',
      'Difference-in-differences',
      'Time series',
      'Bayesian methods',
      'Sample size & power',
      'Complex survey weights (DHS/MIS)',
    ],
  },
  {
    title: 'Data collection & quality',
    items: ['KoboToolbox / KoboCollect', 'ODK', 'SurveyCTO', 'Epi Info', 'ONA', 'DHIS2', 'XLSForm design', 'Back-checks & audit trails', 'De-identification'],
  },
  {
    title: 'Qualitative research',
    items: ['NVivo', 'MAXQDA', 'KIIs & FGDs', 'Photovoice', 'Participatory mapping', 'Otter.ai transcription'],
  },
  {
    title: 'Evidence synthesis',
    items: ['Systematic reviews', 'Meta-analysis', 'Rayyan', 'EndNote', 'Mendeley'],
  },
  {
    title: 'AI in research workflows',
    items: ['ChatGPT', 'Claude', 'Gemini', 'NotebookLM', 'Consensus', 'Prompt design', 'AI-assisted coding with independent verification'],
  },
  {
    title: 'Communication & digital',
    items: ['Web development', 'Research applications', 'Canva', 'Video editing', 'Social media for research dissemination', 'Microsoft 365'],
  },
];

export const gallery = [
  { image: 'workshop-presenting', alt: 'Muruhukye Jacob presenting during an Urban Futures workshop', caption: 'Urban Futures workshop, Kampala' },
  { image: 'systems-mapping', alt: 'Muruhukye Jacob leading a systems-mapping discussion with workshop participants', caption: 'Community systems-mapping workshop' },
  { image: 'conference-serena', alt: 'Muruhukye Jacob at a renewable energy conference at the Kampala Serena Hotel', caption: 'Renewable energy conference, Kampala Serena Hotel' },
  { image: 'karamoja-landscape', alt: 'Dry landscape and earth dam in Karamoja', caption: 'Fieldwork, Karamoja' },
  { image: 'kisoro-community', alt: 'Community meeting held outdoors during the Kisoro heat-wave study', caption: 'Community engagement, Kisoro' },
  { image: 'graduate-training-group', alt: 'Group photograph of participants at a graduate research training, RineCynth Advisory', caption: 'Graduate research training, RineCynth Advisory' },
];
