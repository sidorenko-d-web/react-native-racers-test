import { type Dispatch, type SetStateAction, useCallback, useEffect, useState } from 'react'
import { useDebounce } from './useDebounce'
import { DEFAULT_LIMIT } from '../store'

interface args {
  totalItems?: number
  setOffset: Dispatch<SetStateAction<number>>
}

export const usePagination = ({ totalItems, setOffset }: args) => {
  const [totalItemsState, setTotalItemsState] = useState(DEFAULT_LIMIT)
  const [page, setPage] = useState(1)

  const handleNextPage = useCallback(() => {
    setPage(p => (numberOfPages(totalItemsState) > p ? p + 1 : p))
  }, [totalItemsState])

  const handlePrevPage = useCallback(() => {
    setPage(p => (1 < p ? p - 1 : p))
  }, [])

  const deboucedPage = useDebounce(page, 200)

  useEffect(() => {
    setOffset(deboucedPage * DEFAULT_LIMIT - DEFAULT_LIMIT)
  }, [deboucedPage])

  useEffect(() => {
    if (totalItems && !isNaN(totalItems)) setTotalItemsState(totalItems)
  }, [totalItems])

  return {
    totalPages: numberOfPages(totalItemsState),
    page,
    handleNextPage,
    handlePrevPage,
  }
}

const numberOfPages = (items: number) => {
  const pages = Math.ceil(items / (DEFAULT_LIMIT || 1))
  return pages
}
