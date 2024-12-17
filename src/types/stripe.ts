type Plan = {
  id: string
  meter: string | null
  active: boolean
  amount: number
  object: string
  created: number
  product: string
  currency: string
  interval: string
  livemode: boolean
  metadata: Record<string, unknown>
  nickname: string | null
  tiers_mode: string | null
  usage_type: string
  amount_decimal: string
  billing_scheme: string
  interval_count: number
  aggregate_usage: string | null
  transform_usage: string | null
  trial_period_days: number | null
}

type Price = {
  id: string
  type: string
  active: boolean
  object: string
  created: number
  product: string
  currency: string
  livemode: boolean
  metadata: Record<string, unknown>
  nickname: string | null
  recurring: {
    meter: string | null
    interval: string
    usage_type: string
    interval_count: number
    aggregate_usage: string | null
    trial_period_days: number | null
  }
  lookup_key: string | null
  tiers_mode: string | null
  unit_amount: number
  tax_behavior: string
  billing_scheme: string
  custom_unit_amount: string | null
  transform_quantity: string | null
  unit_amount_decimal: string
}

type SubscriptionItem = {
  id: string
  plan: Plan
  price: Price
  object: string
  created: number
  metadata: Record<string, unknown>
  quantity: number
  discounts: unknown[]
  tax_rates: unknown[]
  subscription: string
  billing_thresholds: string | null
}

type SubscriptionItems = {
  url: string
  data: SubscriptionItem[]
  object: string
  has_more: boolean
  total_count: number
}

type AutomaticTax = {
  enabled: boolean
  liability: string | null
}

type TrialSettings = {
  end_behavior: {
    missing_payment_method: string
  }
}

type InvoiceSettings = {
  issuer: {
    type: string
  }
  account_tax_ids: string | null
}

type PaymentSettings = {
  payment_method_types: string | null
  payment_method_options: string | null
  save_default_payment_method: string
}

type CancellationDetails = {
  reason: string | null
  comment: string | null
  feedback: string | null
}

export type TRawStripeSubscriptionData = {
  id: string
  plan: Plan
  items: SubscriptionItems
  object: string
  status: string
  created: number
  currency: string
  customer: string
  discount: string | null
  ended_at: number | null
  livemode: boolean
  metadata: Record<string, unknown>
  quantity: number
  schedule: string | null
  cancel_at: number | null
  discounts: unknown[]
  trial_end: number
  start_date: number
  test_clock: string | null
  application: string | null
  canceled_at: number | null
  description: string | null
  trial_start: number
  on_behalf_of: string | null
  automatic_tax: AutomaticTax
  transfer_data: string | null
  days_until_due: number | null
  default_source: string | null
  latest_invoice: string
  pending_update: string | null
  trial_settings: TrialSettings
  invoice_settings: InvoiceSettings
  pause_collection: string | null
  payment_settings: PaymentSettings
  collection_method: string
  default_tax_rates: unknown[]
  billing_thresholds: string | null
  current_period_end: number
  billing_cycle_anchor: number
  cancel_at_period_end: boolean
  cancellation_details: CancellationDetails
  current_period_start: number
  pending_setup_intent: string
  default_payment_method: string | null
  application_fee_percent: string | null
  billing_cycle_anchor_config: string | null
  pending_invoice_item_interval: string | null
  next_pending_invoice_item_invoice: string | null
}
