'use client'

import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
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

  return (
    <div id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50/80 backdrop-blur-sm border border-primary-200/50 text-primary-700 text-xs font-bold uppercase tracking-wide mb-6 shadow-sm">
              <span className="w-2 h-2 bg-primary-600 rounded-full mr-2 animate-pulse"></span>
              Pilihan Wargi Tasik & Indonesia
            </div>
            <h1 className="text-5xl tracking-tight font-black text-slate-900 sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl leading-tight">
              <span className="block">Urus Bisnis Jadi</span>
              <span className="block bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">Lebih Santuy & Cuan</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 sm:mt-7 sm:text-xl sm:max-w-xl sm:mx-auto md:mt-8 md:text-2xl lg:mx-0 leading-relaxed">
              Sae Pos bantuin kamu ngurus kasir, stok, sampe laporan keuangan sambil rebahan. Gak pake ribet, cocok buat UMKM sampe bisnis gede.
            </p>
            <div className="mt-10 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="space-y-4 sm:space-y-0 sm:flex sm:gap-4">
                <a 
                  href="#contact" 
                  onClick={(e) => handleScroll(e, 'contact')}
                  className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-2xl text-white bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 md:py-5 md:text-lg md:px-12 shadow-xl shadow-primary-500/40 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary-500/50 cursor-pointer"
                >
                  Cobain Gratis
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a 
                  href="#pricing" 
                  onClick={(e) => handleScroll(e, 'pricing')}
                  className="w-full flex items-center justify-center px-8 py-4 border-2 border-slate-200 text-base font-bold rounded-2xl text-slate-700 bg-white/80 backdrop-blur-sm hover:bg-slate-50 hover:border-slate-300 md:py-5 md:text-lg md:px-12 transition-all hover:-translate-y-0.5 shadow-lg cursor-pointer"
                >
                  Cek Paket Hemat
                </a>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-5 text-sm text-slate-600 sm:justify-center lg:justify-start font-semibold">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-green-500" strokeWidth={2.5} />
                  <span>Free Tier Selamanya</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-green-500" strokeWidth={2.5} />
                  <span>Bisa Offline</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-green-500" strokeWidth={2.5} />
                  <span>Support Gercep</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-3xl shadow-2xl lg:max-w-md overflow-hidden bg-slate-900 p-3 transform hover:scale-105 transition-all duration-500">
                <div className="rounded-2xl overflow-hidden bg-slate-800 border border-slate-700/50 relative backdrop-blur-xl">
                     <div className="bg-gradient-to-b from-slate-800 to-slate-900 p-5 border-b border-slate-700/50 flex justify-between items-center">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500 shadow-lg"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-lg"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500 shadow-lg"></div>
                        </div>
                        <div className="h-2 w-24 bg-slate-600/50 rounded-full"></div>
                     </div>
                     <div className="p-5 grid grid-cols-2 gap-4">
                        <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-5 rounded-2xl h-36 animate-pulse backdrop-blur-sm"></div>
                        <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-5 rounded-2xl h-36 animate-pulse backdrop-blur-sm"></div>
                        <div className="col-span-2 bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-5 rounded-2xl h-52 animate-pulse backdrop-blur-sm"></div>
                     </div>
                     
                     <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl text-center shadow-2xl">
                            <h3 className="text-white font-black text-3xl">Omzet Naik 🚀</h3>
                            <p className="text-slate-200 text-base mt-3 font-medium">Pantau jualan tanpa ribet!</p>
                        </div>
                     </div>
                </div>
            </div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;