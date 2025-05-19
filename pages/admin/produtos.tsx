
import { useState } from 'react';

export default function AdminProducts() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Perfume Elegance', price: 29.9, category: 'Perfumes' }
  ]);
  const [form, setForm] = useState({ name: '', price: '', category: '' });

  const addProduct = () => {
    if (!form.name || !form.price || !form.category) return;
    setProducts([...products, { id: Date.now(), ...form, price: parseFloat(form.price) }]);
    setForm({ name: '', price: '', category: '' });
  };

  const deleteProduct = (id: number) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Produtos</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-4">
        <input
          className="border p-2 rounded"
          placeholder="Nome"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="border p-2 rounded"
          placeholder="Preço"
          type="number"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />
        <input
          className="border p-2 rounded"
          placeholder="Categoria"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />
        <button onClick={addProduct} className="bg-pink-600 text-white px-4 py-2 rounded">
          Adicionar
        </button>
      </div>
      <ul className="space-y-2">
        {products.map(prod => (
          <li key={prod.id} className="flex justify-between items-center bg-gray-100 p-2 rounded">
            <span>{prod.name} - €{prod.price.toFixed(2)} ({prod.category})</span>
            <button onClick={() => deleteProduct(prod.id)} className="text-red-600">Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
