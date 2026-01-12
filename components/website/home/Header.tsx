"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* Thin dark gray line at top - hide when scrolled */}
      {!isScrolled && <div className="h-0.5 bg-gray-900"></div>}
      
      {/* Gradient background */}
      <div 
        className={`${isScrolled ? "bg-white shadow-md" : ""} py-3 px-4 md:px-8 overflow-visible transition-all duration-1000`}
        style={!isScrolled ? { background: "linear-gradient(to right, #00C6EC, #0040EA)" } : {}}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between relative min-h-[63px]">
          {/* Logo on Left */}
          <Link href="/" className="flex items-center z-10">
            <Image
              src="/assets/images/logo.webp"
              alt="Mecarvi Technologies Logo"
              width={130}
              height={120}
              className="max-h-12 w-auto object-contain"
            />
          </Link>

          {/* Centered Navigation Panel */}
          <nav className={`absolute left-1/2 -translate-x-1/2 top-1/3 -translate-y-1/2 bg-white  rounded-none rounded-bl-2xl rounded-br-2xl px-8 py-8 md:py-10 flex items-center gap-6 z-20 whitespace-nowrap transition-all duration-1000 ${isScrolled ? "shadow-none" : "shadow-lg"}`} style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
            <Link 
              href="/" 
              className={`text-sm font-medium pt-1 transition-colors whitespace-nowrap ${
                pathname === "/" ? "text-orange-600 font-semibold" : "text-black hover:text-gray-700"
              }`}
            >
              Home
            </Link>

            <Link 
              href="/website/pages/about" 
              className={`text-sm font-medium pt-1 transition-colors whitespace-nowrap ${
                pathname === "/website/pages/about" ? "text-orange-600 font-semibold" : "text-black hover:text-gray-700"
              }`}
            >
              About us
            </Link>

            <Link 
              href="/website/pages/faq" 
              className={`text-sm font-medium pt-1 transition-colors whitespace-nowrap ${
                pathname === "/website/pages/faq" ? "text-orange-600 font-semibold" : "text-black hover:text-gray-700"
              }`}
            >
              FAQ
            </Link>

            <Link 
              href="/website/pages/quote" 
              className={`text-sm font-medium pt-1 transition-colors whitespace-nowrap ${
                pathname === "/website/pages/quote" ? "text-orange-600 font-semibold" : "text-black hover:text-gray-700"
              }`}
            >
              Quote
            </Link>

            <Link 
              href="/products" 
              className={`flex items-center pt-1 gap-1.5 text-sm font-medium transition-colors whitespace-nowrap ${
                pathname?.startsWith("/products") ? "text-orange-600 font-semibold" : "text-black hover:text-gray-700"
              }`}
            >
              Products
              <svg className={`w-4 h-4 ${pathname?.startsWith("/products") ? "text-orange-600" : "text-black"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            <Link 
              href="/service" 
              className={`flex items-center pt-1 gap-1.5 text-sm font-medium transition-colors whitespace-nowrap ${
                pathname === "/service" ? "text-orange-600 font-semibold" : "text-black hover:text-gray-700"
              }`}
            >
              Service
              <svg className={`w-4 h-4 ${pathname === "/service" ? "text-orange-600" : "text-black"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
          
            <Link 
              href="/technologies" 
              className={`text-sm font-medium pt-1 transition-colors whitespace-nowrap ${
                pathname === "/technologies" ? "text-orange-600 font-semibold" : "text-black hover:text-gray-700"
              }`}
            >
              Technologies
            </Link>

            <Link 
              href="/website/pages/career" 
              className={`text-sm font-medium pt-1 transition-colors whitespace-nowrap ${
                pathname === "/website/pages/career" ? "text-orange-600 font-semibold" : "text-black hover:text-gray-700"
              }`}
            >
              Career
            </Link>
         
            <Link 
              href="/contact" 
              className={`text-sm font-medium pt-1 transition-colors whitespace-nowrap ${
                pathname === "/contact" ? "text-orange-600 font-semibold" : "text-black hover:text-gray-700"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Side - CTA Button and Menu Icon */}
          <div className="flex items-center gap-6 z-10">
            {/* Try For Free Button */}
            <button className="hidden md:flex items-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity text-sm font-medium">
              Try For Free
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>

            {/* Login Button */}
            <button 
              onClick={() => router.push("/login")}
              className="px-4 py-2 rounded-full bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors ml-2"
            >
              Login
            </button>

            {/* Mobile Menu Button */}
            <button className="lg:hidden w-6 h-6 flex flex-col gap-1.5">
              <span className="w-full h-0.5 bg-black"></span>
              <span className="w-full h-0.5 bg-black"></span>
              <span className="w-full h-0.5 bg-black"></span>
              <span className="w-full h-0.5 bg-black"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}