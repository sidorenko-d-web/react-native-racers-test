import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import type { Race, TypeRaceResultItem } from '../../types'
import { RESULTS_MAP } from '../../constants'
import { ResultItem } from './ResultItem'

interface props {
  item: Race
}

export function RaceItem({ item }: props) {
  const titles = Object.keys(RESULTS_MAP)
  const results: TypeRaceResultItem[] = titles.map(_item => ({
    title: RESULTS_MAP[_item as keyof typeof RESULTS_MAP],
    value: item.Results[0][_item as keyof typeof RESULTS_MAP],
  }))

  return (
    <View style={styles.contaner}>
      <Text style={styles.name}>
        {item.raceName}, Раунд {item.round}
      </Text>

      <Text>Дата: {item.date}</Text>

      <View style={styles.resultsWrapper}>
        {results.map(item => (
          <ResultItem item={item} />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contaner: {
    borderColor: '#D1CADC',
    backgroundColor: '#D1CADC40',
    borderWidth: 2,
    borderStyle: 'solid',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    gap: 24,
  },

  name: {
    fontWeight: 700,
    fontSize: 20,
  },

  resultsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'center',
  },
})
