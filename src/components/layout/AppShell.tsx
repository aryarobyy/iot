import { Bell, Droplets, LayoutDashboard, Leaf, Wifi } from 'lucide-react'
import { NavLink, Outlet } from 'react-router-dom'
import { env } from '../../core/config/env'
import { APP_ROUTES } from '../../core/constants/routes'

const navigation = [
  { label: 'Dashboard', path: APP_ROUTES.dashboard, icon: LayoutDashboard },
  { label: 'Siram Tanaman', path: APP_ROUTES.watering, icon: Droplets },
]

function Navigation() {
  return <nav className="nav-list">{navigation.map(({ label, path, icon: Icon }) =>
    <NavLink key={path} to={path} end={path === '/'} className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}>
      <Icon size={18} /><span>{label}</span>
    </NavLink>)}</nav>
}

export function AppShell() {
  return <div className="app-shell">
    <aside className="sidebar">
      <div className="brand"><div className="brand-mark"><Leaf size={22}/></div><div><strong>{env.appName}</strong><span>Smart Plant Monitor</span></div></div>
      <p className="nav-label">Menu utama</p><Navigation />
      <div className="sidebar-footer"><div><Wifi size={14}/> Semua perangkat aktif</div><p>4 sensor terhubung dan mengirim data secara real-time.</p></div>
    </aside>
    <main className="app-main">
      <header className="topbar"><div className="topbar-title"><p>Jumat, 26 September</p><h1>Selamat pagi, Roby</h1></div><div className="topbar-actions"><button className="icon-button" aria-label="Notifikasi"><Bell size={18}/></button><div className="avatar">RA</div></div></header>
      <Outlet />
    </main>
    <div className="mobile-nav"><Navigation /></div>
  </div>
}
