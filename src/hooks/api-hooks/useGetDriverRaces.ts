import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { fetchDriverRaces, selectDriverRaces, type AppDispatch } from '../../store'
import type { IDriverRacesRequest } from '../../types'

//useGet query
export const useGetDriverRaces = (params: IDriverRacesRequest, refreshing?: boolean) => {
  const { data, isLoading, error } = useSelector(selectDriverRaces)

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    //handlig props to prevent refetch on mount
    const isOffsetChanged = Number(data?.offset) !== params.offset
    const isDriverIdChanged = data?.RaceTable.driverId !== params.driverId

    const isDataFetched = data || isLoading

    if (isDataFetched && !refreshing && !isOffsetChanged && !isDriverIdChanged) return

    dispatch(fetchDriverRaces(params))
  }, [!!data, params.offset, params.driverId, refreshing])

  return { data: !isLoading ? data : undefined, isLoading, error }
}
