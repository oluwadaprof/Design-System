import { NextApiResponse } from 'next'

import { toastV2 } from '@design-system-ui/primitives/toast'

export const handleAxiosError = async (error: any): Promise<void> => {
  if (error.response?.status === 401) {
    toastV2.error('Session expired', {
      description: 'Please sign in to your account again',
      action: {
        label: 'Sign in',
        onClick: () => {
          window.location.href = '/auth/signin'
        }
      }
    })

    window.location.href = '/auth/signin'
    return
  }

  if (error.response?.status === 403 && error?.response?.data?.message === 'Workspace not found') {
    toastV2.error('Access denied', {
      description: 'You do not have access to this workspace',
      action: {
        label: 'Select workspace',
        onClick: () => {
          window.location.href = '/select-workspace'
        }
      }
    })

    window.location.href = '/select-workspace'
    return
  }

  const errors = [error?.response?.data?.message]

  errors.flat().forEach((msg) => {
    toastV2.error(msg)
  })
}

export const handleNextAPIError = (error: any, res: NextApiResponse) => {
  const response = error.response?.data || {
    statusCode: 500,
    message: error.message
  }

  res.status(response.statusCode).json(response)
}
