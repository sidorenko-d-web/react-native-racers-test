import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import api, { DEFAULT_LIMIT } from '../api'
import type { IDriverRacesResponse, IDriverRacesRaw, IDriverRacesRequest } from '../../types'

interface State {
  data?: IDriverRacesResponse
  isLoading: boolean
  error: string | null
}

const initialState: State = {
  data: undefined,
  isLoading: false,
  error: null,
}

export const fetchDriverRaces = createAsyncThunk(
  'driverRaces/fetchDriverRaces',
  async ({ offset, driverId }: IDriverRacesRequest, { rejectWithValue }) => {
    try {
      const response = await api.get<IDriverRacesRaw>(`/drivers/${driverId}/results.json`, {
        params: { offset, limit: DEFAULT_LIMIT },
      })

      return response.data.MRData
    } catch (error) {
      return rejectWithValue('Не удалось загрузить данные гонок')
    }
  },
)

const driverRacesSlice = createSlice({
  name: 'driverRaces',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchDriverRaces.pending, state => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchDriverRaces.fulfilled, (state, action) => {
        state.isLoading = false
        state.data = action.payload
      })
      .addCase(fetchDriverRaces.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
  },
})

export default driverRacesSlice.reducer

export const selectDriverRaces = (state: RootState) => state.driverRacesReducer
