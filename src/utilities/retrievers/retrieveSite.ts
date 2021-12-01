import { fetcher } from '@/utilities/fetcher'

export function retrieveSite(): unknown {
  return fetcher('api/v1.0/sites')
}
