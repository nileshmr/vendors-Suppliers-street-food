import React from 'react';

export default function WhatsAppButton({ phone }) {
  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
    >
      <span>WhatsApp</span>
      <span className="text-lg">📱</span>
    </a>
  );
}
