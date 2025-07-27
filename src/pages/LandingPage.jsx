import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <section className="bg-indigo-600 text-white py-16 px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Raw Material Sourcing for Indian Street Food Vendors</h1>
          <p className="text-lg mb-6">Affordable materials, trusted suppliers, and location-based search for your food stall.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/vendor/register"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded font-semibold shadow-lg transition-all duration-300 animate-bounce animate-vendor-bg"
              style={{ animationDuration: '1.2s, 2s', animationIterationCount: 'infinite, infinite' }}
            >
              Register as Vendor
            </a>
            <a href="/supplier/register" className="bg-white hover:bg-slate-100 text-indigo-600 px-6 py-3 rounded font-semibold border border-indigo-600">Register as Supplier</a>
          </div>
        </section>
        <section className="py-12 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto grid gap-8 sm:grid-cols-3">
            <div className="bg-white rounded shadow p-6 flex flex-col items-center">
              <span className="text-3xl mb-2">💸</span>
              <h3 className="font-bold mb-2">Affordable Materials</h3>
              <p className="text-slate-600 text-center">Get the best prices for all your raw materials.</p>
            </div>
            <div className="bg-white rounded shadow p-6 flex flex-col items-center">
              <span className="text-3xl mb-2">🤝</span>
              <h3 className="font-bold mb-2">Trusted Suppliers</h3>
              <p className="text-slate-600 text-center">Source from verified and reliable suppliers.</p>
            </div>
            <div className="bg-white rounded shadow p-6 flex flex-col items-center">
              <span className="text-3xl mb-2">📍</span>
              <h3 className="font-bold mb-2">Location-based Search</h3>
              <p className="text-slate-600 text-center">Find suppliers near your stall for quick delivery.</p>
            </div>
          </div>
        </section>
      </main>
      {/* Why Choose Us Section */}
      <section className="py-12 px-4 bg-white border-t">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-extrabold text-indigo-700 mb-6 text-center">Why Choose Us?</h2>
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center">
              <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=M3w5NjA2fDB8MHxzZWFyY2h8Mnx8ZnJlc2glMjBzcGljZXN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=300&q=80" alt="Fresh Spices" className="w-24 h-24 object-cover rounded-full mb-3 border-2 border-green-200 shadow" />
              <h3 className="font-bold mb-2 text-green-700">Fresh & Affordable</h3>
              <p className="text-slate-600 text-center">We connect you to suppliers offering the freshest ingredients at the best prices.</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixid=M3w5NjA2fDB8MHxzZWFyY2h8Mnx8aGFuZHNha2V8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=300&q=80" alt="Handshake Trust" className="w-24 h-24 object-cover rounded-full mb-3 border-2 border-indigo-200 shadow" />
              <h3 className="font-bold mb-2 text-indigo-700">Trusted Network</h3>
              <p className="text-slate-600 text-center">All suppliers are verified for quality and reliability, so you can order with confidence.</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://images.unsplash.com/photo-1602524815918-6c2f7b6a6a5a?ixid=M3w5NjA2fDB8MHxzZWFyY2h8Mnx8ZmFzdCUyMGRlbGl2ZXJ5fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=300&q=80" alt="Fast Delivery Symbol" className="w-24 h-24 object-cover rounded-full mb-3 border-2 border-slate-200 shadow" />
              <h3 className="font-bold mb-2 text-slate-700">Fast Delivery</h3>
              <p className="text-slate-600 text-center">Location-based search ensures you get your materials quickly from nearby suppliers.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
