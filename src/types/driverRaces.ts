import { Driver } from "./drivers"

export interface Location {
  lat: string
  long: string
  locality: string
  country: string
}

export interface Circuit {
  circuitId: string
  url: string
  circuitName: string
  Location: Location
}


export interface Constructor {
  constructorId: string
  url: string
  name: string
  nationality: string
}

export interface Time {
  millis?: string
  time: string
}

export interface LapTime {
  time: string
}

export interface AverageSpeed {
  units: string
  speed: string
}

export interface FastestLap {
  rank: string
  lap: string
  Time: LapTime
  AverageSpeed: AverageSpeed
}

export interface Result {
  number: string
  position: string
  positionText: string
  points: string
  Driver: Driver
  Constructor: Constructor
  grid: string
  laps: string
  status: string
  Time?: Time
  FastestLap?: FastestLap
}

export interface Race {
  season: string
  round: string
  url: string
  raceName: string
  Circuit: Circuit
  date: string
  time: string
  Results: Result[]
}

export interface RaceTable {
  season: string
  round: string
  driverId: string
  Races: Race[]
}

export interface IDriverRacesResponse {
  xmlns: string
  series: string
  url: string
  limit: string
  offset: string
  total: string
  RaceTable: RaceTable
}

export interface IDriverRacesRaw {
  MRData: IDriverRacesResponse
}

export interface IDriverRacesRequest {
  offset?: number
  driverId: string
}

export type TypeRaceResultItem = { value: string | Time | undefined; title: string }
