import React, { useState } from 'react';
import { useToast } from './ToastProvider';

export default function OrderModal({ supplier, onClose }) {
  const [material, setMaterial] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState('');
  const toast = useToast();

  const total = Number(price) * Number(quantity) || 0;

  const handleConfirm = (e) => {
    e.preventDefault();
    toast.showToast('Order placed successfully!');
    setTimeout(onClose, 1200);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <form className="bg-white rounded shadow-lg p-8 w-full max-w-sm relative" onSubmit={handleConfirm}>
        <button type="button" onClick={onClose} className="absolute top-2 right-2 text-slate-500 text-xl">×</button>
        <h3 className="text-xl font-bold mb-4 text-indigo-600">Order from {supplier?.name}</h3>
        <div className="mb-3">
          <label className="block mb-1 font-medium">Material Name</label>
          <input required value={material} onChange={e => setMaterial(e.target.value)} className="w-full border rounded px-3 py-2" />
        </div>
        <div className="mb-3">
          <label className="block mb-1 font-medium">Quantity</label>
          <input type="number" min="1" required value={quantity} onChange={e => setQuantity(e.target.value)} className="w-full border rounded px-3 py-2" />
        </div>
        <div className="mb-3">
          <label className="block mb-1 font-medium">Price (per unit)</label>
          <input type="number" min="0" required value={price} onChange={e => setPrice(e.target.value)} className="w-full border rounded px-3 py-2" />
        </div>
        <div className="mb-4 font-semibold">Total: ₹{total}</div>
        <div className="flex gap-4">
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded font-semibold">Confirm</button>
          <button type="button" onClick={onClose} className="bg-slate-200 text-slate-700 px-4 py-2 rounded font-semibold">Cancel</button>
        </div>
      </form>
    </div>
  );
}
