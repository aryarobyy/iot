import type { WateringZone } from '../types/watering'

export const wateringZones: WateringZone[] = [
  { id: 1, name: 'Kebun belakang', plantCount: 5, moisture: 42, status: 'Siap disiram' },
  { id: 2, name: 'Teras depan', plantCount: 3, moisture: 71, status: 'Cukup air' },
  { id: 3, name: 'Rumah kaca', plantCount: 4, moisture: 58, status: 'Cukup air' },
]
