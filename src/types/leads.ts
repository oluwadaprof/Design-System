export type TWorkHistoryItem = {
  title: string
  current: boolean
  apolloId: string
  companyId: string | null
  startDate: string
  endDate: string | null
  companyName: string
}

export type TCompany = {
  id: string
  pdlId: string | null
  apolloId: string
  name: string
  domain: string
  size: string | null
  headline: string | null
  description: string | null
  employeeRange: string | null
  employeeCount: number | null
  founded: number
  industry: string | null
  industries: string[]
  type: string | null
  websiteUrl: string | null
  facebookUrl: string | null
  facebookId: string | null
  instagramUrl: string | null
  instagramId: string | null
  linkedinUrl: string | null
  linkedinId: string | null
  twitterUrl: string | null
  twitterId: string | null
  crunchbaseUrl: string | null
  crunchbaseId: string | null
  angellistUrl: string | null
  angellistId: string | null
  arr: number | null
  mrr: number | null
  logoUrl: string | null
  latestFundingRound: string | null
  latestFundingRoundDate: string | null
  totalFunding: number | null
  country: string | null
  state: string | null
  city: string | null
  locality: string | null
  metro: string | null
  continent: string | null
  phone: string | null
  technologies: string[]
  fundingHistory: {
    amount: string
    apolloId: string
    currency: string
    date: string
    investors: string
    type: string
  }[]
}

export type TPerson = {
  id: string
  pdlId: string
  apolloId: string | null
  fullName: string
  firstname: string
  lastname: string
  middleName: string | null
  headline: string | null
  gender: string | null
  birthYear: number | null
  birthDate: string | null
  linkedinUrl: string | null
  facebookUrl: string | null
  xUrl: string | null
  githubUrl: string | null
  email: string | null
  mobilePhone: string | null
  phoneNumbers: string[]
  industry: string | null
  departments: string[]
  subDepartments: string[]
  seniority: string | null
  functions: string[]
  skills: string[]
  country: string
  state: string
  city: string | null
  locality: string | null
  metro: string | null
  continent: string | null
  workHistory: TWorkHistoryItem[]
  jobCompanyId: string
  jobCompany: TCompany
}

export type TJobTitle = {
  id: string
  apolloId: string
  kind: string
  name: string
  apolloDowncase: string
}

export type TLocation = {
  id: string
  apolloId: string
  kind: string
  name: string
  apolloDowncase: string
}

export type TTechnology = {
  id: string
  apolloId: string
  kind: string
  name: string
  apolloDowncase: string
}

export type TIndustry = {
  id: string
  apolloId: string
  kind: string
  name: string
  apolloDowncase: string
}
