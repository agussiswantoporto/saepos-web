import React from "react";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

interface ContactProps {
  company?: {
    companyName: string;
    whatsappNumber: string;
    phone?: string;
    address?: string;
    operatingHours?: string;
    googleMapsUrl?: string;
  };
}

const Contact: React.FC<ContactProps> = ({ company }) => {
  const companyData = company || {
    companyName: "Tasiklab",
    whatsappNumber: "6285703696988",
    phone: "+62 857-0369-6988",
    address: "Purbaratu Barat, Kota Tasikmalaya",
    operatingHours: "Senin - Sabtu: 09:00 - 17:00",
    googleMapsUrl: "https://maps.google.com",
  };
  return (
    <footer
      id="contact"
      className="bg-gradient-to-b from-slate-900 to-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-20 border-b border-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black mb-5">
              Siap Transformasi Bisnis Kamu?
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Konsultasikan kebutuhan sistem POS kamu dengan tim ahli dari
              Tasiklab sekarang yuk.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 justify-end">
            <a
              href={`https://wa.me/${companyData.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-transparent text-base font-bold rounded-2xl text-slate-900 bg-green-500 hover:bg-green-400 transition-all shadow-xl shadow-green-500/30 hover:shadow-2xl hover:-translate-y-1"
            >
              <Phone className="mr-2 h-5 w-5" strokeWidth={2.5} />
              Chat WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Image
                src="/logo-v2.png"
                alt="Sae POS"
                width={200}
                height={60}
                className="h-auto"
              />
            </div>
            <p className="text-slate-400 mb-8 max-w-md leading-relaxed">
              Kami adalah perusahaan teknologi yang berfokus pada pengembangan
              solusi digital terintegrasi untuk memajukan ekonomi lokal dan
              nasional. Sae Pos adalah salah satu produk unggulan kami.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin
                  className="h-6 w-6 text-primary-500 mt-1 flex-shrink-0"
                  strokeWidth={2.5}
                />
                <div className="ml-4">
                  <p className="text-white font-bold">Headquarters</p>
                  <p className="text-slate-400 mt-2 leading-relaxed">
                    Jalan Tagog, RT.019/RW.004, Raksajaya,
                    <br />
                    Kec. Sodonghilir, Kabupaten Tasikmalaya,
                    <br />
                    Jawa Barat 46473
                  </p>
                  <a
                    href="https://www.google.com/maps/place/Tasik+Lab/@-7.5020614,108.0842626,17z/data=!3m1!4b1!4m6!3m5!1s0x4b5a5a73cdf25337:0x682bb24aff594a28!8m2!3d-7.5020614!4d108.0868375"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary-400 hover:text-primary-300 text-sm mt-3 inline-flex items-center font-semibold"
                  >
                    Lihat di Google Maps{" "}
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <Phone
                  className="h-6 w-6 text-primary-500 flex-shrink-0"
                  strokeWidth={2.5}
                />
                <div className="ml-4">
                  <p className="text-white font-bold">Telepon / WhatsApp</p>
                  <p className="text-slate-400 mt-1">0857-0369-6988</p>
                </div>
              </div>

              <div className="flex items-center">
                <Clock
                  className="h-6 w-6 text-primary-500 flex-shrink-0"
                  strokeWidth={2.5}
                />
                <div className="ml-4">
                  <p className="text-white font-bold">Jam Operasional</p>
                  <p className="text-slate-400 mt-1">
                    Senin - Jumat: 08:00 - 17:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-96 rounded-3xl overflow-hidden bg-slate-800 border-2 border-slate-700 relative group shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center group-hover:from-slate-700 group-hover:to-slate-800 transition-all">
              <div className="text-center p-8">
                <MapPin
                  size={56}
                  className="mx-auto text-primary-500 mb-6 animate-bounce"
                  strokeWidth={2.5}
                />
                <h3 className="text-2xl font-black text-white mb-3">
                  Lokasi Tasiklab
                </h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  Klik untuk membuka peta dan petunjuk arah
                </p>
                <a
                  href="https://www.google.com/maps/place/Tasik+Lab/@-7.5020614,108.0842626,17z/data=!3m1!4b1!4m6!3m5!1s0x4b5a5a73cdf25337:0x682bb24aff594a28!8m2!3d-7.5020614!4d108.0868375"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-white text-slate-900 px-8 py-3 rounded-2xl font-bold hover:bg-primary-50 transition-all shadow-xl hover:-translate-y-1"
                >
                  Buka Google Maps
                </a>
              </div>
            </div>
            <img
              src="https://picsum.photos/800/600?blur=4"
              alt="Map Background"
              className="absolute inset-0 w-full h-full object-cover opacity-20 -z-10"
            />
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-10 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p className="font-medium">
            &copy; {new Date().getFullYear()} Sae Pos. All rights reserved.
          </p>
          <p className="mt-3 md:mt-0 flex items-center gap-2 font-medium">
            Powered by{" "}
            <span className="text-primary-400 font-bold">Tasiklab</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
