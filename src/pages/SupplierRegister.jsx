import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoaderButton from '../components/LoaderButton';

const materialTypes = [
  'Vegetables',
  'Spices',
  'Dairy',
  'Grains',
  'Oils',
  'Other'
];

export default function SupplierRegister() {
  const [form, setForm] = useState({
    shop: '',
    address: '',
    type: '',
    phone: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      window.location.href = '/supplier/dashboard';
    }, 1200);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-100 via-green-100 to-white">
      <Navbar />
      <main className="flex-1 flex items-center justify-center">
        <div className="bg-white/90 shadow-2xl rounded-2xl p-10 w-full max-w-lg flex flex-col items-center relative animate-fade-in">
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-indigo-600 text-white rounded-full p-4 shadow-lg text-4xl border-4 border-white">🏪</span>
          <h2 className="text-3xl font-extrabold mb-2 text-green-700 drop-shadow">Supplier Registration</h2>
          <p className="mb-6 text-slate-500 text-center">Register your shop and connect with vendors looking for quality materials!</p>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-1 font-semibold text-slate-700">Shop Name</label>
              <input name="shop" required value={form.shop} onChange={handleChange} className="w-full border-2 border-green-200 rounded-lg px-4 py-2 focus:border-indigo-400 focus:outline-none transition" />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-semibold text-slate-700">Address</label>
              <input name="address" required value={form.address} onChange={handleChange} className="w-full border-2 border-green-200 rounded-lg px-4 py-2 focus:border-indigo-400 focus:outline-none transition" />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-semibold text-slate-700">Material Types</label>
              <select name="type" required value={form.type} onChange={handleChange} className="w-full border-2 border-green-200 rounded-lg px-4 py-2 focus:border-indigo-400 focus:outline-none transition">
                <option value="">Select Type</option>
                {materialTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-semibold text-slate-700">Phone Number</label>
              <input name="phone" type="tel" required value={form.phone} onChange={handleChange} className="w-full border-2 border-green-200 rounded-lg px-4 py-2 focus:border-indigo-400 focus:outline-none transition" />
            </div>
            <div className="mb-6">
              <label className="block mb-1 font-semibold text-slate-700">Password</label>
              <input name="password" type="password" required value={form.password} onChange={handleChange} className="w-full border-2 border-green-200 rounded-lg px-4 py-2 focus:border-indigo-400 focus:outline-none transition" />
            </div>
            <LoaderButton loading={loading} type="submit" className="w-full bg-gradient-to-r from-indigo-500 via-green-500 to-indigo-400 text-white py-3 rounded-lg font-bold shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200">Register</LoaderButton>
            <div className="mt-4 text-center">
              <a href="/supplier/login" className="text-green-600 hover:underline font-semibold">Already registered? Login</a>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
