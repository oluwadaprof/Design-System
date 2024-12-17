export type TPlan = {
  id: string
  name: string
  description: string
  stripeProductId: string
  defaultCredits: number
  features: TFeatures
  isDeleted: boolean
  isActive: boolean
  createdAt: string
  updatedAt: string
  order: number
  prices: TPrices
  icon: string
}

type TPrices = {
  year: TPriceDetails
  month: TPriceDetails
}

export type TPriceDetails = {
  priceId: string
  amount: number
  currency: string
}

export type TFeatures = {
  workspaces: {
    count: number
  }
  automations: {
    numberOfCredits: {
      count: number
    }
  }
  prospecting: {
    basicFilters: boolean
    advancedFilters: boolean
  }
  enrichment: {
    basicDataPoints: boolean
    advancedDataPoints: boolean
  }
  collaboration: {
    notes: boolean
    comments: boolean
    livePresence: boolean
  }
  notes: {
    count: number
    links: boolean
    privateLinks: boolean
    expireableLinks: boolean
  }
  tasks: {
    count: number
  }
  dataModel: {
    entities: {
      systemEntities: {
        count: number
      }
      customEntities: {
        count: number
      }
    }
    attributes: {
      count: number
    }
    lists: {
      count: number
    }
    views: {
      count: number
    }
    imports: {
      files: {
        count: number
      }
      rows: {
        count: number
      }
    }
  }
  admin: {
    mfa: boolean
    sso: boolean
  }
  support: {
    helpCenter: boolean
  }
  reporting: {
    dashboards: {
      count: number
    }
    reports: {
      count: number
    }
    types: {
      current: boolean
      historical: boolean
      funnel: boolean
      timeSeries: boolean
    }
    visualisation: {
      single: boolean
      bar: boolean
      pie: boolean
      line: boolean
      map: boolean
      calendar: boolean
    }
  }
  sequences: {
    blocks: {
      trigger: boolean
      record: boolean
      list: boolean
      ai: boolean
      task: boolean
      calc: boolean
      condition: boolean
      delay: boolean
      notification: boolean
      util: boolean
    }
    report: boolean
  }
  emailAndCalendar: {
    connectedAccounts: {
      count: number
    }
    bulkEmailSending: {
      count: number
      numberOfRecipients: {
        count: number
      }
    }
    emailSharing: {
      specificContacts: boolean
      bodyAndAttachment: boolean
      individualMetadata: boolean
    }
    bookings: {
      links: boolean
      advancedSettings: boolean
      paidBookings: boolean
      customForms: boolean
    }
    notetaker: {
      basicAnalysis: boolean
      advancedAnalysis: boolean
    }
  }
  chromeExtension: boolean
  copilot: boolean
}

type KeyPaths<T, Prefix extends string = ''> = T extends object
  ? {
      [K in keyof T]: `${Prefix}${K & string}` | KeyPaths<T[K], `${Prefix}${K & string}.`>
    }[keyof T]
  : never

export type TFeaturesKeys = KeyPaths<TFeatures>
