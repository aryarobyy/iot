import { Leaf } from 'lucide-react'
import { StatusBadge } from '../../../components/ui/StatusBadge'
import { formatPercentage } from '../../../utils/format'
import type { PlantSummary } from '../types/dashboard'

export function PlantList({ plants }: { plants: PlantSummary[] }) {
  return <div className="plant-list">{plants.map((plant) => <div className="plant-row" key={plant.id}>
    <div className="plant-visual"><Leaf size={20}/></div>
    <div><h4>{plant.name}</h4><p>{plant.location}</p></div>
    <div className="plant-value"><strong>{formatPercentage(plant.moisture)}</strong><StatusBadge status={plant.status}>{plant.status === 'healthy' ? 'Sehat' : 'Perlu air'}</StatusBadge></div>
  </div>)}</div>
}
