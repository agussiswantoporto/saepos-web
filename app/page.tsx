"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import { useWebContent } from "@/hooks/api/useWebContent";
import { Loader2 } from "lucide-react";

export default function Home() {
  const { data: webContent, isLoading, error } = useWebContent();

  if (isLoading) {
    return (
      <div className="flex bg-slate-50 items-center justify-center min-h-screen">
        <Loader2 className="w-10 h-10 animate-spin text-primary-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex bg-slate-50 items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-500 mb-2">
            Error Loading Content
          </h1>
          <p className="text-slate-600">Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 selection:bg-primary-500 selection:text-white">
      <Navbar navigation={webContent?.navigation || []} />
      <main>
        <Hero data={webContent?.hero} />
        <Features features={webContent?.features || []} />
        <Pricing plans={webContent?.pricing || []} />
      </main>
      <Contact company={webContent?.company} />
    </div>
  );
}
