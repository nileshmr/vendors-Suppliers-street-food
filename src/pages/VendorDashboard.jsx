import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SupplierCard from '../components/SupplierCard';
import OrderModal from '../components/OrderModal';

const suppliers = [
  { name: 'FreshVeg Mart', category: 'Vegetables', distance: 2.1, rating: 4.7 },
  { name: 'SpiceHub', category: 'Spices', distance: 3.5, rating: 4.5 },
  { name: 'DairyBest', category: 'Dairy', distance: 1.2, rating: 4.8 },
];

const orderHistory = [
  { supplier: 'FreshVeg Mart', material: 'Potatoes', quantity: 20, total: 400, status: 'Delivered', date: '2025-07-20' },
  { supplier: 'SpiceHub', material: 'Chili Powder', quantity: 5, total: 250, status: 'Pending', date: '2025-07-25' },
];

export default function VendorDashboard() {
  const [filter, setFilter] = useState({ location: '', type: '' });
  const [showOrder, setShowOrder] = useState(false);
  const [selectedSupplier, setSelectedSupplier] = useState(null);

  const filteredSuppliers = suppliers.filter(s =>
    (!filter.type || s.category === filter.type)
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-100 via-indigo-100 to-white">
      <Navbar role="vendor" />
      <main className="flex-1 px-4 py-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-6 text-indigo-700 drop-shadow flex items-center gap-2"><span>🍲</span> Find Suppliers</h2>
        <div className="flex gap-4 mb-8 flex-wrap">
          <input placeholder="Location" value={filter.location} onChange={e => setFilter({ ...filter, location: e.target.value })} className="border-2 border-indigo-200 rounded-lg px-4 py-2 focus:border-green-400 focus:outline-none transition" />
          <select value={filter.type} onChange={e => setFilter({ ...filter, type: e.target.value })} className="border-2 border-indigo-200 rounded-lg px-4 py-2 focus:border-green-400 focus:outline-none transition">
            <option value="">All Types</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Spices">Spices</option>
            <option value="Dairy">Dairy</option>
          </select>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 mb-12">
          {filteredSuppliers.map(supplier => (
            <SupplierCard key={supplier.name} supplier={supplier} onOrder={() => { setSelectedSupplier(supplier); setShowOrder(true); }} />
          ))}
        </div>
        <h3 className="text-2xl font-bold mb-4 text-green-700 flex items-center gap-2"><span>📦</span> Order History</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border-2 border-green-100 rounded-xl shadow-lg">
            <thead>
              <tr className="bg-green-50">
                <th className="px-4 py-2">Supplier</th>
                <th className="px-4 py-2">Material</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Total</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {orderHistory.map((order, idx) => (
                <tr key={idx} className="text-center">
                  <td className="px-4 py-2">{order.supplier}</td>
                  <td className="px-4 py-2">{order.material}</td>
                  <td className="px-4 py-2">{order.quantity}</td>
                  <td className="px-4 py-2">₹{order.total}</td>
                  <td className="px-4 py-2">{order.status}</td>
                  <td className="px-4 py-2">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {showOrder && <OrderModal supplier={selectedSupplier} onClose={() => setShowOrder(false)} />}
      </main>
      <Footer />
    </div>
  );
}
