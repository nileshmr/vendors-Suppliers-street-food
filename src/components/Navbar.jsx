import React from 'react';

export default function Navbar({ role }) {
  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-green-500 to-slate-700 shadow-lg px-4 py-3 flex justify-between items-center relative">
      <a href="/" className="flex items-center gap-2">
        <span className="bg-white rounded-full p-2 shadow text-indigo-600 text-2xl">🍲</span>
        <span className="text-white font-extrabold text-2xl tracking-wide drop-shadow">StreetFood Sourcing</span>
      </a>
      <div className="hidden sm:flex gap-4 items-center">
        {role === 'vendor' && (
          <>
            <a href="/vendor/dashboard" className="text-white hover:bg-indigo-700 px-3 py-2 rounded transition font-semibold">Home</a>
            <a href="/vendor/dashboard#orders" className="text-white hover:bg-indigo-700 px-3 py-2 rounded transition font-semibold">Orders</a>
            <a href="/" className="text-white hover:bg-red-600 px-3 py-2 rounded transition font-semibold">Logout</a>
          </>
        )}
        {role === 'supplier' && (
          <>
            <a href="/supplier/dashboard" className="text-white hover:bg-green-600 px-3 py-2 rounded transition font-semibold">Home</a>
            <a href="/supplier/dashboard#products" className="text-white hover:bg-green-600 px-3 py-2 rounded transition font-semibold">Manage Products</a>
            <a href="/supplier/dashboard#orders" className="text-white hover:bg-green-600 px-3 py-2 rounded transition font-semibold">Orders</a>
            <a href="/" className="text-white hover:bg-red-600 px-3 py-2 rounded transition font-semibold">Logout</a>
          </>
        )}
        {!role && (
          <>
            <a href="/vendor/login" className="bg-white text-indigo-600 px-4 py-2 rounded-full shadow hover:bg-indigo-100 font-bold border-2 border-indigo-600 transition-all duration-200">Vendor Login</a>
            <a href="/supplier/login" className="bg-white text-green-600 px-4 py-2 rounded-full shadow hover:bg-green-100 font-bold border-2 border-green-500 transition-all duration-200">Supplier Login</a>
          </>
        )}
      </div>
      <button className="sm:hidden text-2xl text-white" aria-label="Open menu">☰</button>
    </nav>
  );
}
