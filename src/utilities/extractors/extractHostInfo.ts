import type { IncomingMessage } from 'http'

export interface ExtractHostInfoReturnType {
  host: string | undefined
}

export function extractHostInfo(req: IncomingMessage): ExtractHostInfoReturnType {
  return {
    host: req.headers.host,
  }
}
