import type { ReactNode } from 'react'
import { Droplets, Leaf, Sprout, ThermometerSun, Wifi, Wind } from 'lucide-react'
import { Card } from '../../../components/ui/Card'
import { MoistureChart } from '../components/MoistureChart'
import { PlantList } from '../components/PlantList'
import { plants } from '../data/dashboard.mock'

const metrics = [
  { label: 'Tanaman dipantau', value: '12 tanaman', icon: Sprout },
  { label: 'Suhu udara', value: '27.4°C', icon: ThermometerSun },
  { label: 'Kelembapan tanah', value: '68%', icon: Droplets },
  { label: 'Kelembapan udara', value: '76%', icon: Wind },
]

export function DashboardPage() {
  return <div className="page-content">
    <div className="page-heading"><div><p className="eyebrow"><Leaf size={14}/> Ringkasan kebun</p><h2>Tanamanmu tumbuh dengan baik</h2><p>Pantau kondisi kebun dan kebutuhan tanaman dari satu tempat.</p></div></div>
    <section className="metric-grid">{metrics.map(({ label, value, icon: Icon }) => <Card className="metric-card" key={label}><div className="metric-icon"><Icon size={21}/></div><div><span>{label}</span><strong>{value}</strong></div></Card>)}</section>
    <div className="content-grid"><div>
      <Card className="section-card"><div className="section-head"><div><h3>Kondisi tanaman</h3><p>Pembaruan sensor terbaru</p></div><a className="text-link" href="#plants">Lihat semua</a></div><PlantList plants={plants}/></Card>
      <Card className="section-card chart-card"><div className="section-head"><div><h3>Kelembapan hari ini</h3><p>Rata-rata seluruh area tanam</p></div><span className="status status-healthy">Normal 68%</span></div><MoistureChart/></Card>
    </div><Card className="section-card"><div className="section-head"><div><h3>Aktivitas terbaru</h3><p>Pembaruan dari perangkat</p></div></div><div className="activity-list">
      <Activity icon={<Droplets size={15}/>} title="Penyiraman selesai" detail="Zona kebun belakang • 8 menit lalu"/>
      <Activity icon={<Wifi size={15}/>} title="Sensor terhubung" detail="ESP32-Teras • 24 menit lalu"/>
      <Activity icon={<ThermometerSun size={15}/>} title="Suhu meningkat" detail="Rumah kaca mencapai 29°C • 1 jam lalu"/>
    </div></Card></div>
  </div>
}

function Activity({ icon, title, detail }: { icon: ReactNode; title: string; detail: string }) {
  return <div className="activity-item"><div className="activity-icon">{icon}</div><div><h4>{title}</h4><p>{detail}</p></div></div>
}
