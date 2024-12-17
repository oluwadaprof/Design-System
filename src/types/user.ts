import { TFile } from './files'
import { TWorkspace } from './workspace'

export type TUser = {
  id: string
  authIdentifier: string
  email: string
  firstname: string
  lastname: string
  fullname: string
  username: string
  verified: boolean
  createdAt: string
  lastSignin: string
  workspaces: TUserWorkspace[]
  profilePictureId?: string | null
  profilePicture?: TFile | null
}

export type TUserWorkspace = {
  role?: any
  userId: string
  user: TUser
  workspaceId: string
  typesenseSearchKey: string
  workspace: TWorkspace
  isSuspended?: boolean
  inviteToken?: string | null
  notificationsPreferences: {
    mentions: {
      email: boolean
      app: boolean
      push: boolean
    }
    replies: {
      email: boolean
      app: boolean
      push: boolean
    }
    accessRequests: {
      email: boolean
      app: boolean
      push: boolean
    }
    tasks: {
      email: boolean
      app: boolean
      push: boolean
    }
    accessGrants: {
      email: boolean
      app: boolean
      push: boolean
    }
  }
  billingInfo?: {
    city: string
    companyName: string
    countryCode: string
    emailAddress: string
    line1: string
    line2?: string
    postalCode: string
    state: string
  }
}
