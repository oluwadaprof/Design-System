import { TPlan } from '@pulse-types/plan'

import { TRawStripeSubscriptionData } from './stripe'

export type TSubscription = {
  id: string
  stripeSubscriptionId: string
  amount: number
  status: 'active' | 'inactive' | 'canceled' | 'trialing'
  billingPeriod: 'month' | 'year'
  dateStarted: string
  seats: number
  isDeleted: boolean
  createdAt: string
  currentPeriodStart: string
  currentPeriodEnd: string
  updatedAt: string
  userId: string
  planId: string
  workspaceId: string
  cancelAtPeriodEnd: boolean
  plan: Omit<TPlan, 'prices'>
  raw: TRawStripeSubscriptionData
}
