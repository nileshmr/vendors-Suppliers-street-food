import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const initialMaterials = [
  { name: 'Tomatoes', type: 'Vegetables', price: 20, quantity: 100 },
  { name: 'Milk', type: 'Dairy', price: 50, quantity: 50 },
];
const incomingOrders = [
  { vendor: 'Chaat Corner', material: 'Tomatoes', quantity: 10, total: 200, status: 'Pending', date: '2025-07-26' },
  { vendor: 'Dosa Stall', material: 'Milk', quantity: 5, total: 250, status: 'Accepted', date: '2025-07-25' },
];

export default function SupplierDashboard() {
  const [materials, setMaterials] = useState(initialMaterials);
  const [form, setForm] = useState({ name: '', type: '', price: '', quantity: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = e => {
    e.preventDefault();
    setMaterials([...materials, { ...form, price: Number(form.price), quantity: Number(form.quantity) }]);
    setForm({ name: '', type: '', price: '', quantity: '' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-100 via-green-100 to-white">
      <Navbar role="supplier" />
      <main className="flex-1 px-4 py-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-6 text-green-700 drop-shadow flex items-center gap-2"><span>🏪</span> Manage Products</h2>
        <form className="bg-white/90 shadow-2xl rounded-2xl p-8 mb-10 flex flex-col gap-4 max-w-lg mx-auto animate-fade-in" onSubmit={handleAdd}>
          <div>
            <label className="block mb-1 font-semibold text-slate-700">Material Name</label>
            <input name="name" required value={form.name} onChange={handleChange} className="w-full border-2 border-green-200 rounded-lg px-4 py-2 focus:border-indigo-400 focus:outline-none transition" />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-slate-700">Type</label>
            <select name="type" required value={form.type} onChange={handleChange} className="w-full border-2 border-green-200 rounded-lg px-4 py-2 focus:border-indigo-400 focus:outline-none transition">
              <option value="">Select Type</option>
              <option value="Vegetables">Vegetables</option>
              <option value="Spices">Spices</option>
              <option value="Dairy">Dairy</option>
              <option value="Grains">Grains</option>
              <option value="Oils">Oils</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 font-semibold text-slate-700">Price/unit (₹)</label>
            <input name="price" type="number" min="0" required value={form.price} onChange={handleChange} className="w-full border-2 border-green-200 rounded-lg px-4 py-2 focus:border-indigo-400 focus:outline-none transition" />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-slate-700">Quantity</label>
            <input name="quantity" type="number" min="0" required value={form.quantity} onChange={handleChange} className="w-full border-2 border-green-200 rounded-lg px-4 py-2 focus:border-indigo-400 focus:outline-none transition" />
          </div>
          <button type="submit" className="bg-gradient-to-r from-indigo-500 via-green-500 to-indigo-400 text-white py-3 rounded-lg font-bold shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200">Add Material</button>
        </form>
        <h3 className="text-2xl font-bold mb-4 text-indigo-700 flex items-center gap-2"><span>🧺</span> Your Materials</h3>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 mb-12">
          {materials.map((mat, idx) => {
            const images = {
              Vegetables: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80',
              Spices: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80',
              Dairy: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80',
              Grains: 'https://images.unsplash.com/photo-1464306076886-debede6bbf94?auto=format&fit=crop&w=400&q=80',
              Oils: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
              Other: 'https://images.unsplash.com/photo-1464306076886-debede6bbf94?auto=format&fit=crop&w=400&q=80',
              Default: 'https://images.unsplash.com/photo-1464306076886-debede6bbf94?auto=format&fit=crop&w=400&q=80',
            };
            const imgSrc = images[mat.type] || images.Default;
            return (
              <div key={idx} className="bg-white/90 rounded-2xl shadow-xl p-6 flex flex-col gap-2 items-center animate-fade-in">
                <img src={imgSrc} alt={mat.type} className="w-20 h-20 object-cover rounded-full mb-2 border-2 border-green-200 shadow" />
                <div className="font-bold text-lg text-green-700">{mat.name}</div>
                <div className="text-slate-700">Type: {mat.type}</div>
                <div className="text-slate-500">Price: ₹{mat.price}/unit</div>
                <div className="text-slate-500">Quantity: {mat.quantity}</div>
              </div>
            );
          })}
        </div>
        <h3 className="text-2xl font-bold mb-4 text-green-700 flex items-center gap-2"><span>📦</span> Incoming Orders</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border-2 border-green-100 rounded-xl shadow-lg">
            <thead>
              <tr className="bg-green-50">
                <th className="px-4 py-2">Vendor</th>
                <th className="px-4 py-2">Material</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Total</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {incomingOrders.map((order, idx) => (
                <tr key={idx} className="text-center">
                  <td className="px-4 py-2">{order.vendor}</td>
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
      </main>
      <Footer />
    </div>
  );
}
