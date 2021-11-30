import got from 'got';
import {SERVICE_API_URL} from './constants';

export const fetcher = got.extend({
  prefixUrl: SERVICE_API_URL,
  responseType: 'json',
  http2: true,
})
