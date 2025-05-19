
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (password === 'admin123') {
      localStorage.setItem('isAdmin', 'true');
      router.push('/admin/dashboard');
    } else {
      alert('Senha incorreta');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-sm w-full bg-white p-6 rounded shadow">
        <h1 className="text-xl font-bold mb-4">Painel Administrativo</h1>
        <input
          type="password"
          placeholder="Digite a senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded w-full mb-4"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700"
        >
          Entrar
        </button>
      </div>
    </div>
  );
}
