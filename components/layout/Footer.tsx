'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { FaLongArrowAltRight } from 'react-icons/fa';
import { NewsletterEndPoints } from '@/lib/services/NewsletterEndPoints';

// const data = {
//   brand: {
//     name: 'VMP',
//     logo: '/images/vmpflogo.png',
//     description:
//       'Supporting veterinary practices through technology, growth, financial access, and pet protection.',
//     socials: [
//       { icon: <FaFacebookF />, href: '#' },
//       { icon: <FaTwitter />, href: '#' },
//       { icon: <FaYoutube />, href: '#' },
//       { icon: <FaLinkedinIn />, href: '#' },
//     ],
//   },
//   columns: [
//     {
//       title: 'Explore',
//       links: [
//         { label: 'Home', href: '/' },
//         { label: 'About', href: '/about' },
//         { label: 'Blog', href: '/blog' },
//         { label: 'Services', href: '/services' },
//         { label: 'Contacts', href: '/contact' },
//       ],
//     },
//     {
//       title: 'Services',
//       links: [
//         { label: 'Nuro Vet', href: '/nuroVet' },
//         { label: 'Nuro Vet App', href: 'nuroVet-app' },
//         { label: 'Nuro AI Doctor', href: '/' },
//         { label: 'Nuro AI Student', href: '/' },
//         { label: 'VMP Finance', href: '/' },
//         { label: 'VMP Marketing', href: '/' },
//         { label: 'VMP Insurance', href: '/' },
//       ],
//     },
//   ],
//   subscribe: {
//     placeholder: 'Your email ...',
//     consent: 'I have read and agree to the terms & conditions',
//   },
//   copyright: '© Copyright 2026  All Rights Reserved By VMP',
// };

const Footer = ({ footerData }: any) => {
  const { brand, columns, subscribe, copyright } = footerData || {};
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: any) => {
    setEmail(e.target.value);
    setStatus('idle');
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgreed(e.target.checked);
    setStatus('idle');
    setStatusMessage('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('idle');
    setStatusMessage('');

    if (!email.trim()) {
      setStatus('error');
      setStatusMessage('Please enter your email address.');
      return;
    }

    if (!agreed) {
      setStatus('error');
      setStatusMessage('Please accept the terms & conditions to subscribe.');
      return;
    }

    setLoading(true);
    try {
      await NewsletterEndPoints.subscribe(email.trim());
      setStatus('success');
      setStatusMessage('Thank you for subscribing!');
      setEmail('');
      setAgreed(false);
    } catch (err: any) {
      setStatus('error');
      setStatusMessage(err?.message || 'Subscription failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => {
        setStatus('idle');
        setStatusMessage('');
      }, 2000); // Hide after 2 seconds
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <footer className="relative bg-[#0a3f2a] text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 80" className="w-full h-20" preserveAspectRatio="none">
          <path
            fill="#ffffff"
            d="M0,40 C120,70 360,10 720,30 1080,50 1320,20 1440,0 L1440,0 L0,0 Z"
          />
        </svg>
      </div>
      <div className="relative z-10 inner-wrapper mx-auto px-6  lg:px-0 pt-32 pb-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          {brand?.logo && (
            <Image src={brand?.logo} height={60} width={90} alt="logo" className="object-contain" />
          )}
          <p className="text-base opacity-80 leading-relaxed">{brand?.description}</p>
          <div className="flex gap-3">
            {brand?.socials?.map((item: any, i: number) => (
              <a
                key={i}
                href={item.href}
                className="w-9 h-9 border border-white/40 rounded-full flex items-center justify-center  hover:text-[#0a3f2a] transition"
              >
                <Image
                  src={item?.icon}
                  alt={'icon'}
                  height={8}
                  width={8}
                  className="object-contain"
                />
              </a>
            ))}
          </div>
        </div>
        {columns.map((col: any, idx: number) => (
          <div key={idx}>
            <h4 className="font-semibold mb-4 text-base">{col.title}</h4>
            <ul className="space-y-3 text-base opacity-90">
              {col.links.map((link: any, i: number) => (
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
        <form onSubmit={handleSubmit} className="space-y-4">
          <h4 className="font-semibold text-base">Subscribe</h4>
          <div className="relative">
            <input
              onChange={handleChange}
              name="email"
              value={email}
              type="email"
              placeholder={subscribe?.placeholder || 'Your email ...'}
              className="w-full rounded-full px-5 py-3 text-black focus:outline-none bg-white"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading}
              className="absolute right-1 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#0a3f2a] rounded-full flex items-center justify-center text-white hover:opacity-90 transition disabled:opacity-60"
            >
              <FaLongArrowAltRight size={10} />
            </button>
          </div>
          <label className="flex items-start gap-2 text-base opacity-80 cursor-pointer">
            <input
              type="checkbox"
              className="mt-1"
              checked={agreed}
              onChange={handleCheckboxChange}
              disabled={loading}
            />
            {subscribe?.consent || 'I have read and agree to the terms & conditions'}
          </label>
          {status === 'success' && (
            <p className="text-green-300 text-sm">{statusMessage}</p>
          )}
          {status === 'error' && (
            <p className="text-red-300 text-sm">{statusMessage}</p>
          )}
        </form>
      </div>
      <div className="border-t border-white/20 py-6 text-left text-base opacity-80 inner-wrapper mx-auto px-6 lg:px-0">
        {copyright}
      </div>
    </footer>
  );
};

export default Footer;
