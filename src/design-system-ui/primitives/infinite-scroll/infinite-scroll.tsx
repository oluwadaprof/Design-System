'use client'

import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'



import { Spinner } from '../loaders'
import { Box, HStack } from '../layout'
import { Text } from '../text'
import { JsxStyleProps } from '@design-system-ui/styled-system/types'

type Props = {
  dataLength?: number
  hasMore: boolean
  isLoading: boolean
  loader?: React.ReactNode
  loadMore: () => Promise<any>
  children: React.ReactNode
} & JsxStyleProps

export const InfiniteScroll = (props: Props) => {
  const {
    hasMore,
    isLoading,
    loader = <FetchingMore />,
    loadMore,
    children,
    dataLength,
    ...rest
  } = props
  const { ref, inView } = useInView()

  useEffect(() => {
    dataLength
    if (inView && hasMore && !isLoading) {
      loadMore()
    }
  }, [loadMore, inView])

  return (
    <Box {...rest}>
      {children}
      <Box ref={ref}>{isLoading && loader}</Box>
    </Box>
  )
}

export const FetchingMore = () => {
  return (
    <HStack>
      <Text>Loading...</Text>
      <Spinner />
    </HStack>
  )
}
