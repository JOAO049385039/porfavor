
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function AdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin');
    if (isAdmin !== 'true') {
      router.push('/admin');
    }
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard Administrativo</h1>
      <p>Bem-vindo, administrador! Aqui você poderá gerenciar os produtos, categorias e famílias.</p>
    </div>
  );
}
