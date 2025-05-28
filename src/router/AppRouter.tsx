import * as React from 'react'
import { NavigationContainer, RouteProp } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { DriverDetailsPage, DriversPage } from '../pages'
import { AppRouterTypes } from '../types'

const AppRouter = () => {
  const Stack = createNativeStackNavigator<AppRouterTypes>()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={DriversPage} options={{ title: 'Гонщики F1' }} />
        <Stack.Screen name="Details" component={DriverDetailsPage}  options={{ title: 'Заезды' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppRouter
