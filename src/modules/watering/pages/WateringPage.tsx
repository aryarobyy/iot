import { Clock3, Droplets, Play, Plus } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../../../components/ui/Button'
import { Card } from '../../../components/ui/Card'
import { ZoneCard } from '../components/ZoneCard'
import { wateringZones } from '../data/watering.mock'

export function WateringPage() {
  const [watering, setWatering] = useState(false)
  const startWatering = () => { setWatering(true); window.setTimeout(() => setWatering(false), 2500) }

  return <div className="page-content">
    <div className="page-heading"><div><p className="eyebrow"><Droplets size={14}/> Kontrol penyiraman</p><h2>Siram tanaman</h2><p>Atur penyiraman berdasarkan kondisi kelembapan di setiap area tanam.</p></div><Button variant="secondary" icon={<Plus size={16}/>}>Buat jadwal</Button></div>
    <section className="watering-hero"><Card className="watering-control"><p className="eyebrow">Kontrol cepat</p><h3>Tanaman di kebun belakang membutuhkan air</h3><p>Kelembapan tanah berada di 42%, lebih rendah dari batas ideal 55%. Sistem menyarankan penyiraman selama 8 menit.</p><Button onClick={startWatering} disabled={watering} icon={watering ? <Droplets size={17}/> : <Play size={17}/>}>{watering ? 'Sedang menyiram...' : 'Mulai penyiraman'}</Button></Card><Card className="water-level"><div className="water-ring"><div><strong>78%</strong><span>tersedia</span></div></div><h3>Kapasitas tangki air</h3><p>Cukup untuk ± 4 kali penyiraman</p></Card></section>
    <Card className="section-card"><div className="section-head"><div><h3>Pilih area tanam</h3><p>Status kelembapan terbaru setiap zona</p></div></div><div className="zone-grid">{wateringZones.map((zone) => <ZoneCard zone={zone} key={zone.id}/>)}</div></Card>
    <Card className="section-card schedule"><div className="section-head"><div><h3>Jadwal berikutnya</h3><p>Penyiraman otomatis yang akan datang</p></div></div><Schedule time="Besok, 06.30" detail="Kebun belakang • Durasi 8 menit"/><Schedule time="Sabtu, 17.00" detail="Rumah kaca • Durasi 6 menit"/></Card>
  </div>
}

function Schedule({ time, detail }: { time: string; detail: string }) {
  return <div className="schedule-row"><div className="activity-icon"><Clock3 size={16}/></div><div><h4>{time}</h4><p>{detail}</p></div><span className="status status-healthy">Aktif</span></div>
}
