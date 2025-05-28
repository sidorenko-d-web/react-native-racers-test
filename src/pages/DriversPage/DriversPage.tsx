import { ActivityIndicator, FlatList, RefreshControl, StyleSheet, View } from 'react-native'
import React, { memo, useState } from 'react'

import { DriverItem, ErrorMessage, Pagination } from '../../components'
import { useGetDrivers, usePagination, useRefresh } from '../../hooks'

export function DriversPage() {
  const [offset, setOffset] = useState(0)

  const { refreshing, onRefresh } = useRefresh()
  const { data, isLoading, error } = useGetDrivers({ offset }, refreshing)

  const pagination = usePagination({ totalItems: Number(data?.total), setOffset })

  const Header = memo((pagination: ReturnType<typeof usePagination>) => <Pagination {...pagination} />)

  return (
    <FlatList
      contentContainerStyle={styles.flatList}
      data={data?.DriverTable?.Drivers}
      renderItem={({ item }) => <DriverItem item={item} />}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      ListHeaderComponent={<Header {...pagination} />}
      ListEmptyComponent={
        <View>
          {isLoading && <ActivityIndicator size={40} style={styles.loader} />}

          {error && <ErrorMessage errorMessage={error} />}

          {data?.DriverTable.Drivers.length === 0 && <ErrorMessage errorMessage="Гонщики не найдены" />}
        </View>
      }
    />
  )
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
  },
  flatList: {
    paddingHorizontal: 24,
    gap: 12,
    paddingTop: 12,
    paddingBottom: 60,
  },
  paginationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  text: {
    fontSize: 16,
    fontWeight: 600,
  },
})
