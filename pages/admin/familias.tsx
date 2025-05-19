
import { useState } from 'react';
import AdminLayout from '../../components/AdminLayout';

function AdminFamilias() {
  const [familias, setFamilias] = useState([{ id: 1, name: 'Linha Profissional' }]);
  const [novaFamilia, setNovaFamilia] = useState('');

  const adicionarFamilia = () => {
    if (!novaFamilia) return;
    setFamilias([...familias, { id: Date.now(), name: novaFamilia }]);
    setNovaFamilia('');
  };

  const removerFamilia = (id: number) => {
    setFamilias(familias.filter(f => f.id !== id));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Famílias</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Nova família"
          value={novaFamilia}
          onChange={(e) => setNovaFamilia(e.target.value)}
          className="border p-2 rounded w-full max-w-sm"
        />
        <button
          onClick={adicionarFamilia}
          className="bg-pink-600 text-white px-4 py-2 rounded"
        >
          Adicionar
        </button>
      </div>
      <ul className="space-y-2">
        {familias.map(f => (
          <li key={f.id} className="flex justify-between bg-gray-100 p-2 rounded">
            <span>{f.name}</span>
            <button onClick={() => removerFamilia(f.id)} className="text-red-600">Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function PageWrapper() {
  return (
    <AdminLayout>
      <AdminFamilias />
    </AdminLayout>
  );
}
