import { ActivityIndicator, FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native'
import type { RouteProp } from '@react-navigation/native'
import React, { memo, useState } from 'react'

import { ErrorMessage, Pagination } from '../../components'
import { usePagination, useRefresh } from '../../hooks'
import type { AppRouterTypes } from '../../types'
import { useGetDriverRaces } from '../../hooks'
import { RaceItem } from '../../components/'

interface props {
  route: RouteProp<AppRouterTypes, 'Details'>
}

export function DriverDetailsPage({ route }: props) {
  const [offset, setOffset] = useState(0)
  const { refreshing, onRefresh } = useRefresh()

  const { data, error, isLoading } = useGetDriverRaces({ driverId: route.params.driverId, offset }, refreshing)

  const pagination = usePagination({ totalItems: Number(data?.total), setOffset })

  const Header = memo((pagination: ReturnType<typeof usePagination>) => (
    <>
      <Text style={styles.headline}>{route.params.name}</Text>
      <Pagination {...pagination} />
    </>
  ))

  return (
    <FlatList
      contentContainerStyle={styles.flatList}
      data={data?.RaceTable?.Races}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      renderItem={({ item }) => <RaceItem item={item} />}
      ListHeaderComponent={() => <Header {...pagination} />}
      ListEmptyComponent={
        <View>
          {isLoading && <ActivityIndicator size={40} style={styles.loader} />}

          {error && <ErrorMessage errorMessage={error} />}

          {data?.RaceTable.Races.length === 0 && <ErrorMessage errorMessage="Заездов не найдено" />}
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
  headline: { fontSize: 20, fontWeight: 700, marginBottom: 16, textAlign: 'center' },
})
