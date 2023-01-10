import Layout from "../layout/Layout";
import { menu } from "../layout/menu";

const Dashboard = () => (
  <Layout title="Recargar tarjetas" menu={menu}>
    <h1 className="text-2xl font-bold text-gray-800 mb-4">Dashboard</h1>
    <p className="text-gray-700 mb-4">Recargar tarjetas</p>
  </Layout>
);

export default Dashboard;
