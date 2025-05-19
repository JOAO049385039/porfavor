
import { useState } from 'react';

export default function AdminCategories() {
  const [categories, setCategories] = useState([{ id: 1, name: 'Perfumes' }]);
  const [newCategory, setNewCategory] = useState('');

  const addCategory = () => {
    if (!newCategory) return;
    setCategories([...categories, { id: Date.now(), name: newCategory }]);
    setNewCategory('');
  };

  const deleteCategory = (id: number) => {
    setCategories(categories.filter(cat => cat.id !== id));
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Categorias</h1>
      <div className="flex mb-4 gap-2">
        <input
          className="border p-2 rounded w-full max-w-xs"
          placeholder="Nova categoria"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <button onClick={addCategory} className="bg-pink-600 text-white px-4 py-2 rounded">
          Adicionar
        </button>
      </div>
      <ul className="space-y-2">
        {categories.map(cat => (
          <li key={cat.id} className="flex justify-between bg-gray-100 p-2 rounded">
            <span>{cat.name}</span>
            <button onClick={() => deleteCategory(cat.id)} className="text-red-600">Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
