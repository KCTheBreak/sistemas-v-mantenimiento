import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Tutorial from './components/Tutorial'
import Auditoria from './components/Auditoria'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'

export default function App() {
  const [activeTab, setActiveTab] = useState('tutorial')

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="md:ml-64 p-10">
        {activeTab === 'tutorial' && <Tutorial />}
        {activeTab === 'auditoria' && <Auditoria />}
        {activeTab === 'dashboard' && <Dashboard />}
      </main>

      <Footer />
    </div>
  )
}
