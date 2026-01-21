import { useState } from 'react'
import { Search, CheckCircle2 } from 'lucide-react'
import { runAuditLogic } from '../hooks/UseAudit'

export default function Auditoria() {
  const [code, setCode] = useState('// Pega tu código aquí')
  const [results, setResults] = useState([])

  const runAudit = () => {
    setResults(runAuditLogic(code))
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold">Linter Básico</h2>

      <textarea
        className="w-full h-64 p-4 font-mono bg-slate-900 text-emerald-400 rounded-xl"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      <button
        onClick={runAudit}
        className="bg-blue-600 text-white px-6 py-3 rounded-xl flex gap-2"
      >
        <Search /> Ejecutar Auditoría
      </button>

      {results.length === 0 && (
        <div className="text-slate-400 text-center">
          <CheckCircle2 size={40} className="mx-auto" />
          Sin hallazgos
        </div>
      )}
    </div>
  )
}
