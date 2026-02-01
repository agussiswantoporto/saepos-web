'use client'

import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  // Helper to calculate discount or show price
  const getPrice = (monthly: number) => {
    if (monthly === 0) return 'Gratis';
    if (monthly === -1) return 'Hubungi Kami';
    return isYearly 
      ? `Rp ${(monthly * 10).toLocaleString('id-ID')}` // Pay for 10 months get 12
      : `Rp ${monthly.toLocaleString('id-ID')}`;
  };

  const getPeriod = (monthly: number) => {
    if (monthly <= 0) return '';
    return isYearly ? '/tahun' : '/bulan';
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
  };

  const tiers = [
    {
      name: '🌱 Wargi',
      description: 'POS Dasar untuk usaha keluarga',
      priceRaw: 0,
      features: [
        '1 Outlet',
        '1 User Staff',
        'Unlimited Transaksi',
        'Laporan Harian',
        'Struk Digital (WA/Email)',
        'Support Komunitas'
      ],
      notIncluded: [
        'Manajemen Stok',
        'Laporan Laba Rugi',
        'Export Excel'
      ],
      cta: 'Mulai Gratis',
      popular: false,
    },
    {
      name: '🔥 Sadulur',
      description: 'POS lengkap untuk usaha berkembang',
      priceRaw: 49000,
      features: [
        'Hingga 2 Outlet',
        '3 User Staff',
        'Manajemen Stok & Opname',
        'Laporan Lengkap (Laba/Rugi)',
        'Export Excel/PDF',
        'Support Prioritas WA'
      ],
      notIncluded: [
        'API Access',
        'Custom Domain'
      ],
      cta: 'Pilih Sadulur',
      popular: true,
    },
    {
      name: '🚀 Batur',
      description: 'POS profesional untuk multi outlet',
      priceRaw: 99000,
      features: [
        'Unlimited Outlet',
        'Unlimited User',
        'Manajemen Meja (F&B)',
        'Manajemen Bahan Baku (Resep)',
        'Integrasi QRIS Statis',
        'Akses API (Beta)'
      ],
      notIncluded: [],
      cta: 'Gaspol Batur',
      popular: false,
    },
    {
      name: '🏔 Pangadeg',
      description: 'Solusi enterprise & custom',
      priceRaw: -1, // Special code for custom
      features: [
        'Custom Dashboard',
        'Private Server',
        'White Label App',
        'Dedicated Account Manager',
        'On-site Training',
        'SLA Support 99.9%'
      ],
      notIncluded: [],
      cta: 'Kontak Tim',
      popular: false,
    }
  ];

  return (
    <div id="pricing" className="bg-gradient-to-b from-slate-50 to-white py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center">
          <h2 className="text-4xl font-black text-slate-900 sm:text-5xl">
            Pilih Paket Pas di Kantong
          </h2>
          <p className="mt-5 text-xl text-slate-600 leading-relaxed">
            Mulai dari gratisan sampe yang sultan, bebas pilih sesuai kebutuhan kamu.
          </p>

          <div className="mt-10 flex justify-center items-center gap-5">
            <span className={`text-sm font-semibold ${!isYearly ? 'text-slate-900' : 'text-slate-500'}`}>Bayar Bulanan</span>
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className="relative inline-flex h-8 w-14 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none bg-primary-600 shadow-lg"
            >
              <span 
                className={`pointer-events-none inline-block h-7 w-7 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${isYearly ? 'translate-x-6' : 'translate-x-0'}`}
              />
            </button>
            <span className={`text-sm font-semibold ${isYearly ? 'text-slate-900' : 'text-slate-500'}`}>
              Bayar Tahunan 
              <span className="ml-2 inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-800">
                Hemat 2 Bulan!
              </span>
            </span>
          </div>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-4 lg:gap-6 xl:gap-8 items-start">
          {tiers.map((tier) => (
            <div 
              key={tier.name} 
              className={`relative flex flex-col p-8 bg-white rounded-3xl shadow-xl border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                tier.popular 
                  ? 'border-primary-500 ring-4 ring-primary-500/20 scale-105 z-10' 
                  : 'border-slate-200'
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 inset-x-0 -mt-4 flex justify-center">
                    <span className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
                        Paling Laris
                    </span>
                </div>
              )}
              
              <div className="flex-1">
                <h3 className="text-2xl font-black text-slate-900">{tier.name}</h3>
                <p className="text-sm text-slate-600 mt-2 h-10 font-medium">{tier.description}</p>
                
                <div className="mt-6 flex items-baseline text-slate-900">
                  <span className="text-4xl font-black tracking-tight">
                    {getPrice(tier.priceRaw)}
                  </span>
                  <span className="ml-2 text-sm font-bold text-slate-500">
                    {getPeriod(tier.priceRaw)}
                  </span>
                </div>

                <ul className="mt-8 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5" strokeWidth={2.5} aria-hidden="true" />
                      <span className="ml-3 text-sm text-slate-700 font-medium">{feature}</span>
                    </li>
                  ))}
                  {tier.notIncluded.map((feature) => (
                    <li key={feature} className="flex items-start opacity-40">
                      <X className="flex-shrink-0 w-5 h-5 text-slate-400 mt-0.5" strokeWidth={2.5} aria-hidden="true" />
                      <span className="ml-3 text-sm text-slate-500 line-through">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, 'contact')}
                className={`mt-10 block w-full py-4 px-6 border-2 border-transparent rounded-2xl text-center font-bold text-base cursor-pointer transition-all ${
                  tier.popular
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 shadow-xl shadow-primary-500/40 hover:shadow-2xl hover:-translate-y-1'
                    : 'bg-slate-100 text-slate-900 hover:bg-slate-200 border-slate-200'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <p className="text-slate-600 text-sm font-medium leading-relaxed">
                * Harga belum termasuk PPN 11% (kalo ada). <br/>
                Butuh demo dulu? <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="text-primary-600 font-bold hover:underline cursor-pointer">Kontak tim kami yuk.</a>
            </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;