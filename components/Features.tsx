import React from 'react';
import { 
  BarChart3, 
  Box, 
  Users, 
  Smartphone, 
  WifiOff, 
  Zap
} from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: "Anti Ribet Club",
    description: "Tampilan simpel banget. Kasir baru training 5 menit langsung jago, gak perlu gelar sarjana IT.",
    icon: Zap
  },
  {
    title: "Laporan Tinggal Klik",
    description: "Gak perlu lembur ngitung laci. Sekali klik, laporan harian sampe bulanan langsung jadi. Rapi jali!",
    icon: BarChart3
  },
  {
    title: "Jualan Terus Walau Offline",
    description: "Internet mati lampu mati? Gas terus! Data bakal kesimpen dan sinkron otomatis pas online lagi.",
    icon: WifiOff
  },
  {
    title: "Pantau Sambil Rebahan",
    description: "Cek omzet real-time dari HP. Mau lagi di rumah, di cafe, atau lagi liburan, bisnis tetep terpantau kok.",
    icon: Smartphone
  },
  {
    title: "Stok Gak Bakal Boncos",
    description: "Peringatan otomatis kalo barang mau abis. Gak ada lagi cerita nolak pembeli gara-gara stok kosong.",
    icon: Box
  },
  {
    title: "Atur Banyak Cabang",
    description: "Punya banyak cabang? Kontrol semuanya dari satu dashboard. Gak perlu keliling kota buat ngecek satu-satu.",
    icon: Users
  }
];

const Features: React.FC = () => {
  return (
    <div id="features" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center">
          <h2 className="text-sm text-primary-600 font-bold tracking-widest uppercase">Kenapa Sae Pos?</h2>
          <p className="mt-3 text-4xl leading-tight font-black tracking-tight text-slate-900 sm:text-5xl">
            Bikin Hidup Kamu Lebih Santuy
          </p>
          <p className="mt-5 max-w-2xl text-xl text-slate-600 mx-auto leading-relaxed">
            Gak cuma sekedar aplikasi kasir, Sae Pos jadi asisten setia biar bisnis kamu makin laju tanpa bikin pusing kepala.
          </p>
        </div>

        <div className="mt-24">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition duration-500"></div>
                <div className="relative p-8 bg-white border-2 border-slate-100 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full hover:-translate-y-1">
                  <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 text-primary-600 mb-6 shadow-inner">
                    <feature.icon size={28} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl leading-7 font-bold text-slate-900">{feature.title}</h3>
                  <p className="mt-4 text-base text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;