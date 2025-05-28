import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import api, { DEFAULT_LIMIT } from '../api'
import { IDriversRAW, IDriversRequest, IDriversResponse } from '../../types'

interface State {
  data?: IDriversResponse
  isLoading: boolean
  error: string | null
}


const initialState: State = {
  data: undefined,
  isLoading: false,
  error: null,
}

export const fetchDrivers = createAsyncThunk(
  'drivers/fetchDrivers',
  async ({ offset }: IDriversRequest, { rejectWithValue }) => {
    try {
      const response = await api.get<IDriversRAW>(`/drivers.json`, {
        params: { offset, limit: DEFAULT_LIMIT },
      })
      return response.data.MRData as IDriversResponse
    } catch (error) {
      return rejectWithValue('Не удалось загрузить данные гонок')
    }
  },
)

const driversSlice = createSlice({
  name: 'drivers',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchDrivers.pending, state => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchDrivers.fulfilled, (state, action) => {
        state.isLoading = false
        state.data = action.payload
      })
      .addCase(fetchDrivers.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
  },
})

export default driversSlice.reducer

export const selectDrivers = (state: RootState) => state.driversReducer
