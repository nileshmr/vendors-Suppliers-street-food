import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoaderButton from '../components/LoaderButton';

export default function SupplierLogin() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
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
        <div className="bg-white/90 shadow-2xl rounded-2xl p-10 w-full max-w-md flex flex-col items-center relative animate-fade-in">
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-indigo-600 text-white rounded-full p-4 shadow-lg text-3xl border-4 border-white">🏪</span>
          <h2 className="text-2xl font-extrabold mb-2 text-green-700 drop-shadow">Supplier Login</h2>
          <form className="w-full mt-4" onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block mb-1 font-semibold text-slate-700">Phone Number</label>
              <input type="tel" required value={phone} onChange={e => setPhone(e.target.value)} className="w-full border-2 border-green-200 rounded-lg px-4 py-2 focus:border-indigo-400 focus:outline-none transition" />
            </div>
            <div className="mb-6">
              <label className="block mb-1 font-semibold text-slate-700">Password</label>
              <input type="password" required value={password} onChange={e => setPassword(e.target.value)} className="w-full border-2 border-green-200 rounded-lg px-4 py-2 focus:border-indigo-400 focus:outline-none transition" />
            </div>
            <LoaderButton loading={loading} type="submit" className="w-full bg-gradient-to-r from-indigo-500 via-green-500 to-indigo-400 text-white py-3 rounded-lg font-bold shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200">Login</LoaderButton>
            <div className="mt-4 text-center">
              <a href="/supplier/register" className="text-green-600 hover:underline font-semibold">New Supplier? Register</a>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
