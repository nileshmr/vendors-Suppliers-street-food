import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoaderButton from '../components/LoaderButton';

export default function VendorRegister() {
  const [form, setForm] = useState({
    name: '',
    stall: '',
    phone: '',
    password: '',
    confirm: ''
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
      window.location.href = '/vendor/dashboard';
    }, 1200);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-100 via-indigo-100 to-white">
      <Navbar />
      <main className="flex-1 flex items-center justify-center">
        <div className="bg-white/90 shadow-2xl rounded-2xl p-10 w-full max-w-lg flex flex-col items-center relative animate-fade-in">
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-green-500 text-white rounded-full p-4 shadow-lg text-4xl border-4 border-white">🍲</span>
          <h2 className="text-3xl font-extrabold mb-2 text-indigo-700 drop-shadow">Vendor Registration</h2>
          <p className="mb-6 text-slate-500 text-center">Create your vendor account and start sourcing raw materials easily!</p>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-1 font-semibold text-slate-700">Full Name</label>
              <input name="name" required value={form.name} onChange={handleChange} className="w-full border-2 border-indigo-200 rounded-lg px-4 py-2 focus:border-green-400 focus:outline-none transition" />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-semibold text-slate-700">Stall Name</label>
              <input name="stall" required value={form.stall} onChange={handleChange} className="w-full border-2 border-indigo-200 rounded-lg px-4 py-2 focus:border-green-400 focus:outline-none transition" />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-semibold text-slate-700">Phone Number</label>
              <input name="phone" type="tel" required value={form.phone} onChange={handleChange} className="w-full border-2 border-indigo-200 rounded-lg px-4 py-2 focus:border-green-400 focus:outline-none transition" />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-semibold text-slate-700">Password</label>
              <input name="password" type="password" required value={form.password} onChange={handleChange} className="w-full border-2 border-indigo-200 rounded-lg px-4 py-2 focus:border-green-400 focus:outline-none transition" />
            </div>
            <div className="mb-6">
              <label className="block mb-1 font-semibold text-slate-700">Confirm Password</label>
              <input name="confirm" type="password" required value={form.confirm} onChange={handleChange} className="w-full border-2 border-indigo-200 rounded-lg px-4 py-2 focus:border-green-400 focus:outline-none transition" />
            </div>
            <LoaderButton loading={loading} type="submit" className="w-full bg-gradient-to-r from-green-500 via-indigo-500 to-green-400 text-white py-3 rounded-lg font-bold shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200">Register</LoaderButton>
            <div className="mt-4 text-center">
              <a href="/vendor/login" className="text-indigo-600 hover:underline font-semibold">Already registered? Login</a>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
