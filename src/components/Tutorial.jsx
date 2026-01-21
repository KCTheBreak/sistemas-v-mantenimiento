import { Code, LayoutDashboard } from 'lucide-react'

export default function Tutorial() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-4xl font-extrabold">Tutorial de Implementación</h1>

      <section className="bg-white p-8 rounded-2xl border shadow-sm">
        <div className="flex items-center gap-3 mb-4 text-blue-600">
          <Code />
          <h2 className="text-2xl font-bold">Auditoría de Código</h2>
        </div>
        <p className="text-slate-600">
          La auditoría estática analiza el código sin ejecutarlo para detectar
          malas prácticas, riesgos de seguridad y deuda técnica.
        </p>
      </section>

      <section className="bg-white p-8 rounded-2xl border shadow-sm">
        <div className="flex items-center gap-3 mb-4 text-emerald-600">
          <LayoutDashboard />
          <h2 className="text-2xl font-bold">Mantenimiento de Software</h2>
        </div>
        <p className="text-slate-600">
          El mantenimiento puede ser correctivo, adaptativo, perfectivo o preventivo,
          y debe gestionarse mediante tickets.
        </p>
      </section>
    </div>
  )
}
