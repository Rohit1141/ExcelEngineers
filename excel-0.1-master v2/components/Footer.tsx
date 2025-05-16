"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import dynamic from "next/dynamic";

// Create a dynamic import for the Map component to avoid SSR issues
const LeafletMap = dynamic(() => import("@/components/LeafletMap"), {
  ssr: false,
  loading: () => (
    <div className="h-48 rounded-lg bg-gray-800 flex items-center justify-center">
      <p className="text-gray-400">Loading map...</p>
    </div>
  ),
});

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Image
              src="/logoee.png?height=52&width=140"
              alt="Excel Engineers"
              width={140}
              height={52}
              className="mb-6"
            />
            <p className="text-gray-400 mb-6">
              Excel Engineers is a leading manufacturer of high-pressure boiler
              parts and components, serving industries worldwide since 2005.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/projects"
                  className="text-gray-400 hover:text-white"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/components?category=boiler"
                  className="text-gray-400 hover:text-white"
                >
                  Boiler Components
                </Link>
              </li>
              <li>
                <Link
                  href="/components?category=pressure"
                  className="text-gray-400 hover:text-white"
                >
                  Pressure Parts
                </Link>
              </li>
              <li>
                <Link
                  href="/components?category=heat"
                  className="text-gray-400 hover:text-white"
                >
                  Heat Exchangers
                </Link>
              </li>
              <li>
                <Link
                  href="/components?category=custom"
                  className="text-gray-400 hover:text-white"
                >
                  Custom Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start space-x-3">
                <MapPin className="w-6 h-6 text-gray-400 flex-shrink-0" />
                <span className="text-gray-400">
                  Gat No. 79, Bhalekar Chowk, Jyotiba Nagar, Talwade, Pune,
                  Maharashtra 412114
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-6 h-6 text-gray-400" />
                <a
                  href="tel:+919067273011"
                  className="text-gray-400 hover:text-white"
                >
                  +91 90672 73011
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-6 h-6 text-gray-400" />
                <a
                  href="mailto:info@excelengineers.com"
                  className="text-gray-400 hover:text-white"
                >
                  info@excelengineers.com
                </a>
              </li>
            </ul>
            <LeafletMap />
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Excel Engineers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
