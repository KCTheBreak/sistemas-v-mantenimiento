import { useEffect, useState } from 'react'
import { PlusCircle, Trash2, CheckCircle2 } from 'lucide-react'
import { db } from '../firebase'
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  onSnapshot
} from 'firebase/firestore'

export default function Dashboard() {
  const [tickets, setTickets] = useState([])
  const [title, setTitle] = useState('')

  const ticketsRef = collection(db, 'tickets')

  // 🔄 Leer tickets en tiempo real
  useEffect(() => {
    const unsub = onSnapshot(ticketsRef, (snapshot) => {
      setTickets(
        snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
      )
    })
    return () => unsub()
  }, [])

  // ➕ Crear ticket
  const addTicket = async () => {
    if (!title) return
    await addDoc(ticketsRef, {
      title,
      status: 'Abierto',
      date: new Date().toLocaleDateString()
    })
    setTitle('')
  }

  // ✅ Resolver / Reabrir
  const toggleStatus = async (ticket) => {
    const ref = doc(db, 'tickets', ticket.id)
    await updateDoc(ref, {
      status: ticket.status === 'Abierto' ? 'Resuelto' : 'Abierto'
    })
  }

  // 🗑 Eliminar
  const deleteTicket = async (id) => {
    await deleteDoc(doc(db, 'tickets', id))
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold">Gestión de Mantenimiento</h2>

      <div className="flex gap-4">
        <input
          className="flex-1 p-3 border rounded-xl"
          placeholder="Descripción del ticket"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          onClick={addTicket}
          className="bg-blue-600 text-white px-4 rounded-xl flex gap-2"
        >
          <PlusCircle /> Crear
        </button>
      </div>

      {tickets.length === 0 && (
        <p className="text-slate-400 text-center">No hay tickets</p>
      )}

      {tickets.map(t => (
        <div key={t.id} className="bg-white p-4 rounded-xl border flex justify-between">
          <span className={t.status === 'Resuelto' ? 'line-through text-slate-400' : ''}>
            {t.title}
          </span>
          <div className="flex gap-2">
            <button onClick={() => toggleStatus(t)}>
              <CheckCircle2 />
            </button>
            <button onClick={() => deleteTicket(t.id)}>
              <Trash2 />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
