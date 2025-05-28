import { combineReducers, configureStore } from '@reduxjs/toolkit'
import driversReducer from './slices/driversSlice'
import driverRacesReducer from './slices/driverRacesSlice'

const rootReducer = combineReducers({
  driversReducer: driversReducer,
  driverRacesReducer: driverRacesReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
