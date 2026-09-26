import { Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from './components/layout/AppShell'
import { APP_ROUTES } from './core/constants/routes'
import { DashboardPage } from './modules/dashboard/pages/DashboardPage'
import { WateringPage } from './modules/watering/pages/WateringPage'
import './App.css'

export default function App() {
  return <Routes>
    <Route element={<AppShell />}>
      <Route path={APP_ROUTES.dashboard} element={<DashboardPage />} />
      <Route path={APP_ROUTES.watering} element={<WateringPage />} />
    </Route>
    <Route path="*" element={<Navigate to={APP_ROUTES.dashboard} replace />} />
  </Routes>
}
