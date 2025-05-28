import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { type AppDispatch, fetchDrivers, selectDrivers } from '../../store'
import type { IDriversRequest } from '../../types'

//useGet query
export const useGetDrivers = (params: IDriversRequest, refreshing?: boolean) => {
  const { data, isLoading, error } = useSelector(selectDrivers)

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    //handlig props to prevent refetch on mount
    const isOffsetChanged = Number(data?.offset) !== params.offset
    const isDataFetched = data || isLoading

    if (isDataFetched && !refreshing && !isOffsetChanged) return

    dispatch(fetchDrivers(params))
  }, [!!data, params.offset, refreshing])

  return { data: !isLoading ? data : undefined, isLoading, error }
}
