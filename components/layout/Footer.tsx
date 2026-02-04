import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

const data = {
  brand: {
    name: 'VMP',
    logo: '/images/vmpflogo.png',
    description:
      'Supporting veterinary practices through technology, growth, financial access, and pet protection.',
    socials: [
      { icon: <FaFacebookF />, href: '#' },
      { icon: <FaTwitter />, href: '#' },
      { icon: <FaYoutube />, href: '#' },
      { icon: <FaLinkedinIn />, href: '#' },
    ],
  },
  columns: [
    {
      title: 'Explore',
      links: [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Blog', href: '/blog' },
        { label: 'Services', href: '/services' },
        { label: 'Contacts', href: '/contact' },
      ],
    },
    {
      title: 'Services',
      links: [
        { label: 'Nuro Vet', href: '#' },
        { label: 'Nuro Vet App', href: '/' },
        { label: 'Nuro AI Doctor', href: '/' },
        { label: 'Nuro AI Student', href: '/' },
        { label: 'VMP Finance', href: '/' },
        { label: 'VMP Marketing', href: '/' },
        { label: 'VMP Insurance', href: '/' },
      ],
    },
  ],
  subscribe: {
    placeholder: 'Your email ...',
    consent: 'I have read and agree to the terms & conditions',
  },
  copyright: '© Copyright 2026  All Rights Reserved By VMP',
};

const Footer = () => {
  return (
    <footer className="relative bg-[#0a3f2a] text-white overflow-hidden">
      {/* WAVE TOP */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 80" className="w-full h-20" preserveAspectRatio="none">
          <path
            fill="#ffffff"
            d="M0,40 C120,70 360,10 720,30 1080,50 1320,20 1440,0 L1440,0 L0,0 Z"
          />
        </svg>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 inner-wrapper mx-auto px-6  lg:px-0 pt-32 pb-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Image
            src={data.brand.logo}
            height={60}
            width={90}
            alt="logo"
            className="object-contain"
          />
          <p className="text-base opacity-80 leading-relaxed">{data.brand.description}</p>
          <div className="flex gap-3">
            {data.brand.socials.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="w-9 h-9 border border-white/40 rounded-full flex items-center justify-center hover:bg-white hover:text-[#0a3f2a] transition"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* LINKS */}
        {data.columns.map((col, idx) => (
          <div key={idx}>
            <h4 className="font-semibold mb-4 text-base">{col.title}</h4>
            <ul className="space-y-3 text-base opacity-90">
              {col.links.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2  hover:opacity-100 transition"
                  >
                    <span className="text-white">+</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* SUBSCRIBE */}
        <div className="space-y-4">
          <h4 className="font-semibold text-base">Subscribe</h4>

          <div className="relative">
            <input
            required
              type="email"
              placeholder={data.subscribe.placeholder}
              className="w-full rounded-full px-5 py-3 text-black focus:outline-none bg-white"
            />
            <button className="absolute right-1 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#0a3f2a] rounded-full flex items-center justify-center text-white">
              →
            </button>
          </div>
          <label className="flex items-start gap-2 text-base opacity-80">
            <input type="checkbox" className="mt-1" />
            {data.subscribe.consent}
          </label>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/20 py-6 text-center text-base opacity-80">
        {data.copyright}
      </div>
    </footer>
  );
};

export default Footer;
