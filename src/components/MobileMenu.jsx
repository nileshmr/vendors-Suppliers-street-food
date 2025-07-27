import React, { useState } from 'react';

export default function MobileMenu({ role }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="sm:hidden">
      <button onClick={() => setOpen(!open)} className="text-xl" aria-label="Open menu">☰</button>
      {open && (
        <div className="absolute top-14 left-0 w-full bg-white shadow z-40 flex flex-col gap-2 p-4">
          {role === 'vendor' && (
            <>
              <a href="/vendor/dashboard" className="text-slate-700 hover:text-indigo-600">Home</a>
              <a href="/vendor/dashboard#orders" className="text-slate-700 hover:text-indigo-600">Orders</a>
              <a href="/" className="text-slate-700 hover:text-red-500">Logout</a>
            </>
          )}
          {role === 'supplier' && (
            <>
              <a href="/supplier/dashboard" className="text-slate-700 hover:text-indigo-600">Home</a>
              <a href="/supplier/dashboard#products" className="text-slate-700 hover:text-indigo-600">Manage Products</a>
              <a href="/supplier/dashboard#orders" className="text-slate-700 hover:text-indigo-600">Orders</a>
              <a href="/" className="text-slate-700 hover:text-red-500">Logout</a>
            </>
          )}
          {!role && (
            <>
              <a href="/vendor/login" className="text-slate-700 hover:text-indigo-600">Vendor Login</a>
              <a href="/supplier/login" className="text-slate-700 hover:text-indigo-600">Supplier Login</a>
            </>
          )}
        </div>
      )}
    </div>
  );
}
