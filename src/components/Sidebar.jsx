import {
  ShieldCheck,
  Settings,
  LayoutDashboard,
  BookOpen
} from 'lucide-react'

export default function Sidebar({ activeTab, setActiveTab }) {
  const btnClass = (tab) =>
    `w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all
     ${activeTab === tab
        ? 'bg-blue-50 text-blue-700 shadow-sm'
        : 'hover:bg-slate-100 text-slate-500'}`

  return (
    <nav className="fixed left-0 top-0 h-full w-64 bg-white border-r p-6 hidden md:block">
      <div className="flex items-center gap-2 mb-10">
        <Settings className="text-blue-600 w-8 h-8" />
        <span className="font-bold text-xl">Sistemas V</span>
      </div>

      <div className="space-y-2">
        <button onClick={() => setActiveTab('tutorial')} className={btnClass('tutorial')}>
          <BookOpen /> Tutorial Teórico
        </button>

        <button onClick={() => setActiveTab('auditoria')} className={btnClass('auditoria')}>
          <ShieldCheck /> Herramienta Auditoría
        </button>

        <button onClick={() => setActiveTab('dashboard')} className={btnClass('dashboard')}>
          <LayoutDashboard /> Gestión Mantenimiento
        </button>
      </div>
    </nav>
  )
}
