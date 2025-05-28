export interface Driver {
  driverId: string
  permanentNumber?: string
  code: string
  url: string
  givenName: string
  familyName: string
  dateOfBirth: string
  nationality: string
}

export interface DriverTable {
  circuitId: string
  constructorId: string
  Drivers: Driver[]
}

export interface IDriversResponse {
  xmlns: string
  series: string
  limit: string
  offset: string
  total: string
  DriverTable: DriverTable
}

// Основной тип для всего ответа API
export interface IDriversRAW {
  MRData: IDriversResponse
}

export interface IDriversRequest {
  offset: number
}
