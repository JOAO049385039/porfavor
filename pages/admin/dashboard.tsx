
import AdminLayout from '../../components/AdminLayout';

function AdminDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard Administrativo</h1>
      <p>Bem-vindo, administrador! Aqui você poderá gerenciar os produtos, categorias e famílias.</p>
    </div>
  );
}

export default function PageWrapper() {
  return (
    <AdminLayout>
      <AdminDashboard />
    </AdminLayout>
  );
}
