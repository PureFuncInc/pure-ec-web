import ky from 'ky'
import { SERVICE_API_URL } from './constants'

export const fetcher = ky
  .create({
    prefixUrl: SERVICE_API_URL,
  })
