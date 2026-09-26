const readEnv = (key: keyof ImportMetaEnv, fallback: string) => {
  const value = import.meta.env[key]
  return typeof value === 'string' && value ? value : fallback
}

export const env = Object.freeze({
  apiBaseUrl: readEnv('VITE_API_BASE_URL', 'http://localhost:8080/api'),
  appName: readEnv('VITE_APP_NAME', 'Tumbuh'),
})
