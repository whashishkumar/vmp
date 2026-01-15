'use client';
import { useState } from 'react';
import { FiMenu, FiX, FiArrowUpRight } from 'react-icons/fi';
import Button from '../ui/Button';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Platform', href: '#' },
    { name: 'Resources', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <>
      <header className="relative z-50 w-full ">
        <nav className="inner-wrapper mx-auto flex items-center justify-between px-4 py-4 lg:px-0">
          {/* Logo */}
          <div className="text-2xl font-bold text-white">VMP</div>
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

          {/* Desktop CTA */}
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
          <Button label="Book A Demo" className="w-full  justify-between" />
        </div>
      </aside>
    </>
  );
}
