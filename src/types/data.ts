export type TCountry = {
  id: string
  name: string
  flag: string
  code: string
  dialCode: string
  code2: string
  code3: string
  capital: string
  currencyCode: string
  continent: string
  subContinent: string
}

export type TIndustry = {
  id: string
  apolloId: string
  name: string
  kind: string
  hasChildren: boolean
  apolloDowncase: string
  numOfCompanies: number
  numOfPeople: number
}
