export type TCompany = {
  id: string
  workspaceId: string
  name: string
  headline: string
  domain: string
  description: string
  city: string
  connectionStrength: number
  country: string
  employeeCount: string
  facebook: string
  firstCalendarInteraction: string | Date
  firstEmailInteraction: string | Date
  founded: string
  industries: string
  instagram: string
  lastCalendarInteraction: string | Date
  lastEmailInteraction: string | Date
  linkedin: string
  nextCalendarInteraction: string | Date
  state: string
  twitter: string
  recordType: 'company' | 'person'
  // [x: string]: TFieldEntry | string
  _count: {
    comments: number
    threads: number
    events: number
    notes: number
    tasks: number
  }
}

export type TCompanyStore = {
  companiesQuery: {
    filter: string | undefined
    filterMode: string | undefined
    sort: string
    limit: number
    skip: number
  }
  companiesTableSettings: {
    tableColumnsOrder: string[]
    tableColumnsVisibility: Record<string, boolean>
  }
  setCompaniesQuery: (query: Partial<TCompanyStore['companiesQuery']>) => void
  setCompaniesTableSettings: (settings: Partial<TCompanyStore['companiesTableSettings']>) => void
}

export type ECompanySearchInputs = {
  website: string
  location: string
  employees: string
  industries: string
  keywords: string
  funding: string
  revenue: string
}

export enum EEmployeeSize {
  '1-10' = '1-10',
  '11-50' = '11-50',
  '51-200' = '51-200',
  '201-500' = '201-500',
  '501-1000' = '501-1000'
}

export enum IHearAboutUs {
  'Through a friend' = 'Through a friend',
  'Website' = 'Website',
  'LinkedIn' = 'LinkedIn',
  'Twitter' = 'Twitter',
  'Instagram' = 'Instagram',
  'Facebook' = 'Facebook',
  'Others' = 'Others'
}

export enum EIndustry {
  accounting = 'Accounting',
  airlinesAviation = 'Airlines/Aviation',
  alternativeDisputeResolution = 'Alternative Dispute Resolution',
  alternativeMedicine = 'Alternative Medicine',
  animation = 'Animation',
  apparelFashion = 'Apparel & Fashion',
  architecturePlanning = 'Architecture & Planning',
  artsCrafts = 'Arts and Crafts',
  automotive = 'Automotive',
  aviationAerospace = 'Aviation & Aerospace',
  banking = 'Banking',
  biotechnology = 'Biotechnology',
  broadcastMedia = 'Broadcast Media',
  buildingMaterials = 'Building Materials',
  businessSuppliesEquipment = 'Business Supplies and Equipment',
  capitalMarkets = 'Capital Markets',
  chemicals = 'Chemicals',
  civicSocialOrganization = 'Civic & Social Organization',
  civilEngineering = 'Civil Engineering',
  commercialRealEstate = 'Commercial Real Estate',
  computerNetworkSecurity = 'Computer & Network Security',
  computerGames = 'Computer Games',
  computerHardware = 'Computer Hardware',
  computerNetworking = 'Computer Networking',
  computerSoftware = 'Computer Software',
  construction = 'Construction',
  consumerElectronics = 'Consumer Electronics',
  consumerGoods = 'Consumer Goods',
  consumerServices = 'Consumer Services',
  cosmetics = 'Cosmetics',
  dairy = 'Dairy',
  defenseSpace = 'Defense & Space',
  design = 'Design',
  eLearning = 'E-Learning',
  educationManagement = 'Education Management',
  electricalElectronicManufacturing = 'Electrical/Electronic Manufacturing',
  entertainment = 'Entertainment',
  environmentalServices = 'Environmental Services',
  eventsServices = 'Events Services',
  executiveOffice = 'Executive Office',
  facilitiesServices = 'Facilities Services',
  farming = 'Farming',
  financialServices = 'Financial Services',
  fineArt = 'Fine Art',
  fishery = 'Fishery',
  foodBeverages = 'Food & Beverages',
  foodProduction = 'Food Production',
  fundraising = 'Fund-Raising',
  furniture = 'Furniture',
  gamblingCasinos = 'Gambling & Casinos',
  glassCeramicsConcrete = 'Glass, Ceramics, & Concrete',
  governmentAdministration = 'Government Administration',
  governmentRelations = 'Government Relations',
  graphicDesign = 'Graphic Design',
  healthWellnessFitness = 'Health, Wellness and Fitness',
  higherEducation = 'Higher Education',
  hospitalHealthCare = 'Hospital & Health Care',
  hospitality = 'Hospitality',
  humanResources = 'Human Resources',
  importExport = 'Import and Export',
  individualFamilyServices = 'Individual & Family Services',
  industrialAutomation = 'Industrial Automation',
  informationServices = 'Information Services',
  informationTechnologyServices = 'Information Technology and Services',
  insurance = 'Insurance',
  internationalAffairs = 'International Affairs',
  internationalTradeDevelopment = 'International Trade and Development',
  internet = 'Internet',
  investmentBanking = 'Investment Banking',
  investmentManagement = 'Investment Management',
  judiciary = 'Judiciary',
  lawEnforcement = 'Law Enforcement',
  lawPractice = 'Law Practice',
  legalServices = 'Legal Services',
  legislativeOffice = 'Legislative Office',
  leisureTravelTourism = 'Leisure, Travel, & Tourism',
  libraries = 'Libraries',
  logisticsSupplyChain = 'Logistics and Supply Chain',
  luxuryGoodsJewelry = 'Luxury Goods & Jewelry',
  machinery = 'Machinery',
  managementConsulting = 'Management Consulting',
  maritime = 'Maritime',
  marketResearch = 'Market Research',
  marketingAdvertising = 'Marketing and Advertising',
  medicalDevices = 'Medical Devices',
  medicalPractice = 'Medical Practice',
  mentalHealthCare = 'Mental Health Care',
  military = 'Military',
  miningMetals = 'Mining & Metals',
  motionPicturesFilm = 'Motion Pictures and Film',
  museumsInstitutions = 'Museums and Institutions',
  music = 'Music',
  nanotechnology = 'Nanotechnology',
  newspapers = 'Newspapers',
  nonProfitOrganizationManagement = 'Non-Profit Organization Management',
  oilEnergy = 'Oil & Energy',
  onlineMedia = 'Online Media',
  outsourcingOffshoring = 'Outsourcing/Offshoring',
  packageFreightDelivery = 'Package/Freight Delivery',
  packagingContainers = 'Packaging and Containers',
  paperForestProducts = 'Paper & Forest Products',
  performingArts = 'Performing Arts',
  pharmaceuticals = 'Pharmaceuticals',
  philanthropy = 'Philanthropy',
  photography = 'Photography',
  plastics = 'Plastics',
  politicalOrganization = 'Political Organization',
  primarySecondaryEducation = 'Primary/Secondary Education',
  printing = 'Printing',
  professionalTrainingCoaching = 'Professional Training & Coaching',
  programDevelopment = 'Program Development',
  publicPolicy = 'Public Policy',
  publicRelationsCommunications = 'Public Relations and Communications',
  publicSafety = 'Public Safety',
  publishing = 'Publishing',
  railroadManufacture = 'Railroad Manufacture',
  ranching = 'Ranching',
  realEstate = 'Real Estate',
  recreationalFacilitiesServices = 'Recreational Facilities and Services',
  religiousInstitutions = 'Religious Institutions',
  renewablesEnvironment = 'Renewables & Environment',
  research = 'Research',
  restaurants = 'Restaurants',
  retail = 'Retail',
  securityInvestigations = 'Security and Investigations',
  semiconductors = 'Semiconductors',
  shipbuilding = 'Shipbuilding',
  sportingGoods = 'Sporting Goods',
  sports = 'Sports',
  staffingRecruiting = 'Staffing and Recruiting',
  supermarkets = 'Supermarkets',
  telecommunications = 'Telecommunications',
  textiles = 'Textiles',
  thinkTanks = 'Think Tanks',
  tobacco = 'Tobacco',
  translationLocalization = 'Translation and Localization',
  transportationTruckingRailroad = 'Transportation/Trucking/Railroad',
  utilities = 'Utilities',
  ventureCapitalPrivateEquity = 'Venture Capital & Private Equity',
  veterinary = 'Veterinary',
  warehousing = 'Warehousing',
  wholesale = 'Wholesale',
  wineSpirits = 'Wine and Spirits',
  wireless = 'Wireless',
  writingEditing = 'Writing and Editing'
}

export enum ERevenueRange {
  '$0-$1M' = '$0-$1M',
  '$1M-$10M' = '$1M-$10M',
  '$10M-$25M' = '$10M-$25M',
  '$25M-$50M' = '$25M-$50M',
  '$50M-$100M' = '$50M-$100M',
  '$100M-$250M' = '$100M-$250M',
  '$250M-$500M' = '$250M-$500M',
  '$500M-$1B' = '$500M-$1B',
  '$1B-$10B' = '$1B-$10B',
  '$10B+' = '$10B+'
}
