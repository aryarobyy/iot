export const formatPercentage = (value: number) => `${Math.round(value)}%`
export const formatRelativeTime = (minutes: number) => minutes < 60 ? `${minutes} menit lalu` : `${Math.floor(minutes / 60)} jam lalu`
