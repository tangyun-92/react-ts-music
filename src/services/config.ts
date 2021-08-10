const devBaseURL: string = 'http://123.207.32.32:9001'
const proBaseURL: string = ''

export const BASE_URL: string = process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL

export const TIMEOUT: number = 8000