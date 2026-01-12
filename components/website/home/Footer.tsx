import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 md:pt-16 pb-0 w-full">
      <div className="w-full pl-0 pr-4 sm:pr-6 md:pr-8 lg:pr-12">
        {/* Main Footer Content - 5 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 mb-0">
          {/* Column 1 - CONTACT INFO */}
          <div className="bg-[#252525] p-6 rounded lg:col-span-3 min-w-[280px]">
            <h3 className="text-lg md:text-xl font-bold mb-6 uppercase">
              CONTACT INFO
            </h3>
            <div className="text-sm md:text-base">
              {/* Phone with Business Hours */}
              <div className="flex items-start gap-3 mb-4">
                <svg
                  className="w-5 h-5 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div>
                  <p className="font-semibold">(877) 853-3484</p>
                  <div className="space-y-1 mt-1">
                    <p>Mon - Fri: 8am - 8pm</p>
                    <p>Sat: 10am-6pm</p>
                    <p>Sun & Public Holidays: CLOSED</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 mb-4">
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="font-semibold">contact@mecarviprints.com</span>
              </div>

              {/* Chat Support */}
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <p className="font-semibold">Chat With Us</p>
                  <p className="text-gray-300 text-xs">24/7 Customer Support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 - COMPANY */}
          <div className="lg:col-span-2">
            <h3 className="text-lg md:text-xl font-bold mb-6 uppercase">
              COMPANY
            </h3>
            <ul className="space-y-2 text-sm md:text-base text-gray-300">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/scholarship" className="hover:text-white transition-colors">
                  Scholarship
                </Link>
              </li>
              <li>
                <Link href="/sponsorship" className="hover:text-white transition-colors">
                  Sponsorship
                </Link>
              </li>
              <li>
                <Link href="/mecarvi-cares" className="hover:text-white transition-colors">
                  Mecarvi Cares
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - POLICY CENTER */}
          <div className="lg:col-span-2">
            <h3 className="text-lg md:text-xl font-bold mb-6 uppercase">
              POLICY CENTER
            </h3>
            <ul className="space-y-2 text-sm md:text-base text-gray-300">
              <li>
                <Link href="/shipping-policy" className="hover:text-white transition-colors">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="/return-refund-policy" className="hover:text-white transition-colors">
                  Return & Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/membership-policy" className="hover:text-white transition-colors">
                  Membership Policy
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - OUR BRANDS */}
          <div className="lg:col-span-2">
            <h3 className="text-lg md:text-xl font-bold mb-6 uppercase">
              OUR BRANDS
            </h3>
            <ul className="space-y-2 text-sm md:text-base text-gray-300">
              <li>
                <Link href="/brands/mecarvi" className="hover:text-white transition-colors">
                  Mecarvi
                </Link>
              </li>
              <li>
                <Link href="/brands/mecarvi-signs" className="hover:text-white transition-colors">
                  Mecarvi Signs
                </Link>
              </li>
              <li>
                <Link href="/brands/mecarvi-technologies" className="hover:text-white transition-colors">
                  Mecarvi Technologies
                </Link>
              </li>
              <li>
                <Link href="/brands/mecarvi-wear" className="hover:text-white transition-colors">
                  Mecarvi Wear
                </Link>
              </li>
              <li>
                <Link href="/brands/mecarvi-consulting" className="hover:text-white transition-colors">
                  Mecarvi Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5 - SOCIAL LINKS & PAYMENT METHODS */}
          <div className="lg:col-span-3">
            {/* Social Links */}
            <div className="mb-8">
              <h3 className="text-lg md:text-xl font-bold mb-6 uppercase">
                SOCIAL LINKS
              </h3>
              <div className="flex gap-4">
                {/* Facebook */}
                <Link
                  href="#"
                  className="w-8 h-8 flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </Link>

                {/* Twitter */}
                <Link
                  href="#"
                  className="w-8 h-8 flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </Link>

                {/* Instagram */}
                <Link
                  href="#"
                  className="w-8 h-8 flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Link>

                {/* LinkedIn */}
                <Link
                  href="#"
                  className="w-8 h-8 flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Link>

                {/* TikTok */}
                <Link
                  href="#"
                  className="w-8 h-8 flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="TikTok"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Payment Methods */}
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-6 uppercase">
                PAYMENT METHODS
              </h3>
              <div className="flex gap-3">
                {/* Visa */}
                <div className="w-14 h-9 bg-white rounded flex items-center justify-center p-1">
                  <svg className="w-full h-full" viewBox="0 0 84 26" fill="none">
                    <path d="M35.417 8.5h-5l-3.5 9h4.5l1.5-4h3l1.5 4h4.5l-3.5-9zm-5.5 5l1-2.5h2l1 2.5h-4z" fill="#1434CB"/>
                    <path d="M49.667 8.5l-3.5 9h4l.5-1.5h2.5l.5 1.5h4.5l-2.5-6c-.3-.5-.8-.5-1.3-.5zm-2.5 5l.5-1.5h1.5l.5 1.5h-2.5z" fill="#1434CB"/>
                    <path d="M63 8.5h-4l-3.5 9h5l.5-2h3l.5 2h4.5l-2-6c-.3-.5-.8-.5-1.3-.5zm-1.5 4l.5-1.5h1.5l.5 1.5h-2.5z" fill="#1434CB"/>
                    <path d="M77 8.5h-3.5c-.7 0-1.5.7-1.5 1.5l-2 6c-.3.7.3 1.5 1 1.5h3.5l1.5-2h3l1.5 2h3.5l-3.5-9h-2l-2-1h-2l-1.5 1z" fill="#1434CB"/>
                    <path d="M28.5 8.5h-3.5l-4.5 9h3.5l.5-1.5h3l.5 1.5h3.5l2.5-9zm-4.5 5l1-2.5h2l1 2.5h-4z" fill="#1434CB"/>
                  </svg>
                </div>

                {/* Mastercard */}
                <div className="w-14 h-9 bg-white rounded flex items-center justify-center p-1">
                  <svg className="w-full h-full" viewBox="0 0 84 52" fill="none">
                    <circle cx="28" cy="26" r="18" fill="#EB001B"/>
                    <circle cx="56" cy="26" r="18" fill="#F79E1B"/>
                    <path d="M42 18c4.4 3.5 7 9 7 8s-2.6 7.5-7 9" stroke="#FF5F00" strokeWidth="3" fill="none"/>
                  </svg>
                </div>

                {/* Discover */}
                <div className="w-14 h-9 bg-[#FF6000] rounded flex items-center justify-center p-1">
                  <svg className="w-full h-full" viewBox="0 0 84 52" fill="none">
                    <rect width="84" height="52" rx="6" fill="#FF6000"/>
                    <circle cx="42" cy="26" r="14" fill="white"/>
                    <path d="M42 14c7.7 0 14 6.3 14 12s-6.3 12-14 12" fill="#FF6000"/>
                  </svg>
                </div>

                {/* American Express */}
                <div className="w-14 h-9 bg-[#006FCF] rounded flex items-center justify-center p-1">
                  <span className="text-white text-[10px] font-bold">AMEX</span>
                </div>

                {/* PayPal */}
                <div className="w-14 h-9 bg-white rounded flex items-center justify-center p-1">
                  <svg className="w-full h-full" viewBox="0 0 84 52" fill="none">
                    <path d="M28 17h-7v21h7c3.9 0 7-3.1 7-7v-7c0-3.9-3.1-7-7-7z" fill="#003087"/>
                    <path d="M49 17h-7v21h7c3.9 0 7-3.1 7-7v-7c0-3.9-3.1-7-7-7z" fill="#009CDE"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 h-[46px] flex items-center justify-center">
          <p className="text-center text-sm md:text-base text-gray-400">
            Copyright © 2015-2025 by Mecarvi Holdings Group. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
