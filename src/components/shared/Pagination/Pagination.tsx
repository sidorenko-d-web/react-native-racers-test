import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface props {
  handlePrevPage: () => void
  handleNextPage: () => void
  totalPages: number
  page: number
}

export function Pagination({ handleNextPage, handlePrevPage, page, totalPages }: props) {
  return (
    <View style={styles.container}>
      <Button title="Назад" onPress={handlePrevPage} />
      <Text style={styles.text}>
        {page}/{totalPages}
      </Text>
      <Button title="Дальше" onPress={handleNextPage} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
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
