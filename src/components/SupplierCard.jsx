import React from 'react';

export default function SupplierCard({ supplier, onOrder }) {
  // Simple item images by category
  const images = {
    Vegetables: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80',
    Spices: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80',
    Dairy: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80',
    Default: 'https://images.unsplash.com/photo-1464306076886-debede6bbf94?auto=format&fit=crop&w=400&q=80',
  };
  const imgSrc = images[supplier.category] || images.Default;
  return (
    <div className="bg-white rounded shadow p-6 flex flex-col gap-2 items-center">
      <img src={imgSrc} alt={supplier.category} className="w-24 h-24 object-cover rounded-full mb-2 border-2 border-green-200 shadow" />
      <div className="font-bold text-lg text-indigo-600">{supplier.name}</div>
      <div className="text-slate-700">Category: {supplier.category}</div>
      <div className="text-slate-500">Distance: {supplier.distance} km</div>
      <div className="text-yellow-500">Rating: {supplier.rating} ⭐</div>
      <button onClick={onOrder} className="mt-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded font-semibold">Order Now</button>
    </div>
  );
}
