'use client';
import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Button from '../ui/Button';
import Image from 'next/image';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Platform', href: '#' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  //  Scroll Detection
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 700);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={isSticky ? 'h-[80px]' : 'h-0'} />
      <header
        className={`z-50 w-full transition-all duration-300
        ${isSticky ? 'fixed top-0 left-0 bg-[#0a3f2a]/95 shadow-xl z-100' : 'relative bg-transparent'}`}
      >
        <nav className="inner-wrapper mx-auto flex items-center justify-between px-4 py-4 lg:px-0">
          <Image
            src={'/images/vmpflogo.png'}
            height={40}
            width={80}
            alt="logo"
            className="object-contain"
          />

          {/* Desktop Menu */}
          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-sm font-medium text-white hover:opacity-80">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex">
            <Button label="Book A Demo" />
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="text-white lg:hidden"
            aria-label="Open menu"
          >
            <FiMenu size={26} />
          </button>
        </nav>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Side Drawer */}
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-[70%] bg-[#2E7D5A]/95
        transform transition-transform duration-300 ease-in-out
        ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setOpen(false)} className="text-white">
            <FiX size={26} />
          </button>
        </div>

        {/* Menu Items */}
        <ul className="space-y-6 px-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="block text-base font-medium text-white"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-8 px-6 w-60">
          <Button label="Book A Demo" className="w-full justify-between" />
        </div>
      </aside>
    </>
  );
}
