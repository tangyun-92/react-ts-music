const devBaseURL: string = 'http://localhost:3000'
const proBaseURL: string = ''

export const BASE_URL: string = process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL

export const TIMEOUT: number = 8000