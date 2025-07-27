import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-100 border-t text-slate-600 py-6 mt-auto">
      <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="font-bold text-indigo-600">StreetFood Sourcing &copy; 2025</div>
        <div className="flex gap-4 mt-2 sm:mt-0 text-sm">
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
        </div>
      </div>
    </footer>
  );
}
