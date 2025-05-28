import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface props {
  errorMessage: string
}

export function ErrorMessage({ errorMessage }: props) {
  return (
    <View style={styles.contaner}>
      <Text style={styles.text}>{errorMessage}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  contaner: {
    borderColor: '#E14A4C',
    backgroundColor: '#E14A4C40',
    borderWidth: 2,
    borderStyle: 'solid',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    gap: 4,
  },
  text: { color: '#dE3A3C', fontWeight: 500, fontSize: 16 },
})
