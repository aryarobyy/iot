import { MapPin } from 'lucide-react'
import { Card } from '../../../components/ui/Card'
import type { WateringZone } from '../types/watering'

export function ZoneCard({ zone }: { zone: WateringZone }) {
  return <Card className="zone-card"><div className="zone-top"><div><h4>{zone.name}</h4><p><MapPin size={11}/> {zone.plantCount} tanaman</p></div><span className={`status status-${zone.moisture < 50 ? 'warning' : 'healthy'}`}>{zone.status}</span></div><div className="moisture-bar"><span style={{ width: `${zone.moisture}%` }}/></div><div className="zone-meta"><span>Kelembapan tanah</span><strong>{zone.moisture}%</strong></div></Card>
}
