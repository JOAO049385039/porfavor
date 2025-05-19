
import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-pink-100 p-4 space-y-4">
        <h2 className="text-xl font-bold mb-6">Painel Admin</h2>
        <nav className="flex flex-col space-y-2">
          <Link href="/admin/dashboard" className="hover:underline">Dashboard</Link>
          <Link href="/admin/produtos" className="hover:underline">Produtos</Link>
          <Link href="/admin/categorias" className="hover:underline">Categorias</Link>
          <Link href="/admin/familias" className="hover:underline">Famílias</Link>
          <button onClick={() => { localStorage.removeItem('isAdmin'); window.location.href = '/admin'; }} className="text-red-600 mt-4 text-left">
            Sair
          </button>
        </nav>
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
