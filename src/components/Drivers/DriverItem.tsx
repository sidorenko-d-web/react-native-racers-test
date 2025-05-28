import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

import type { AppRouterTypes, Driver } from '../../types'

interface props {
  item: Driver
}

export function DriverItem({ item }: props) {
  const navigate = useNavigation<NativeStackNavigationProp<AppRouterTypes, 'Details'>>()

  const handleOpenDetails = () => {
    const driverFullName = [item.givenName, item.familyName].join(' ')
    navigate.navigate('Details', { driverId: item.driverId, name: driverFullName })
  }

  return (
    <Pressable onPress={handleOpenDetails}>
      <View style={styles.contaner}>
        <Text style={styles.name}>
          {item.givenName} {item.familyName}
        </Text>
        <Text>Страна: {item.nationality}</Text>
        <Text>Дата рождения: {item.dateOfBirth}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  contaner: {
    borderColor: '#D1CADC',
    backgroundColor: '#D1CADC40',
    borderWidth: 2,
    borderStyle: 'solid',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    gap: 4,
  },
  name: { fontWeight: 700, fontSize: 18 },
})
