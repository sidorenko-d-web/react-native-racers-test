import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import type { TypeRaceResultItem } from '../../../types'

interface itemProps {
  item: TypeRaceResultItem
}

export const ResultItem = ({ item }: itemProps) => {
  const stringOrTimeValue = typeof item?.value === 'string' ? item.value : item.value?.time
  return (
    <View style={styles.resultItem}>
      <Text style={styles.title}>{item?.title}</Text>
      <Text style={styles.value}>{stringOrTimeValue || 'Нет данных'}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  resultItem: {
    borderColor: '#D1CADC',
    backgroundColor: '#D1CADC40',
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 6,
    padding: 8,
    alignItems: 'center',
  },
  title: { fontWeight: 700, fontSize: 16 },
  value: {},
})
