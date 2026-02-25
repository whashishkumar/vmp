import InnerBanner from '@/components/common/InnerBanner';
import BenefitsSection from '@/components/vmpFinance/BenefitsSection';
import CTASection from '@/components/vmpFinance/CTASection';
import FinancingSection from '@/components/vmpFinance/FinancingSolutions';
import HeroSection from '@/components/vmpFinance/HeroSection';
import MerchantServices from '@/components/vmpFinance/MerchantServices';
import React from 'react';

const bannerInfo = {
  bgImage: 'images/eycoSystembg.jpg',
  title: 'Vmp Finance',
};

const heroData = {
  badge: 'Trusted by 500+ Veterinary Practices',
  title: 'Smarter Financing for Pet Owners and Veterinary Hospitals',
  desc: 'Flexible payment solutions and integrated merchant services that help veterinary practices deliver care without financial barriers.',
  ctas: [
    { label: 'Partner With Us', href: '/partner', variant: 'primary' },
    { label: 'Apply for Financing', href: '/apply', variant: 'outline' },
  ],
  image: '/images/why1.jpg',
};

const financingData = {
  tag: 'Financing Solutions',
  title: 'Flexible Payment Solutions for Better Pet Care',
  description:
    'Helping veterinary practices and pet owners overcome financial barriers to ensure every pet gets the care they deserve.',
  features: [
    {
      icon: 'FaBolt',
      title: 'Instant Treatment Financing',
      text: 'Quick approvals so pets can receive immediate care without delay or financial stress.',
      bg: 'from-emerald-100 to-emerald-50',
      iconBg: 'bg-emerald-500',
    },
    {
      icon: 'FaCheck',
      title: 'Simple Approval Process',
      text: 'Streamlined applications with fast decisions, making financing accessible for all pet owners.',
      bg: 'from-cyan-100 to-cyan-50',
      iconBg: 'bg-cyan-500',
    },
    {
      icon: 'FaPlus',
      title: 'Flexible Repayment Plans',
      text: 'Customizable payment schedules that fit any budget, from 3 to 24 months.',
      bg: 'from-blue-100 to-blue-50',
      iconBg: 'bg-blue-500',
    },
    {
      icon: 'FaHeart',
      title: 'Emergency Support',
      text: 'Dedicated financing options for unexpected emergencies and urgent treatments.',
      bg: 'from-indigo-100 to-indigo-50',
      iconBg: 'bg-indigo-500',
    },
  ],
};

const merchantServicesData = {
  tag: 'Merchant Services',
  title: 'Integrated Payment & Merchant Services',
  description:
    "Streamline your clinic's payment operations with our comprehensive merchant solutions designed specifically for veterinary practices.",
  features: [
    {
      icon: 'FiLock',
      title: 'Secure Payment Processing',
      text: 'PCI-compliant transactions with advanced fraud protection for every payment.',
      bg: 'bg-emerald-100',
      iconColor: 'text-emerald-600',
    },
    {
      icon: 'FiCreditCard',
      title: 'Multiple Payment Options',
      text: 'Accept cards, digital wallets, ACH transfers, and contactless payments.',
      bg: 'bg-cyan-100',
      iconColor: 'text-cyan-600',
    },
    {
      icon: 'FiDollarSign',
      title: 'Subscription & Installment Payments',
      text: 'Set up recurring payments for wellness plans and treatment installments.',
      bg: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      icon: 'FiClock',
      title: 'Faster Transactions',
      text: 'Next-day deposits and real-time transaction tracking for better cash flow.',
      bg: 'bg-indigo-100',
      iconColor: 'text-indigo-600',
    },
  ],
  image: '/images/eycoSystembg.jpg',
};
const benefitsData = {
  tag: 'Why Choose VMP',
  title: 'Benefits for Hospitals and Pet Owners',
  description:
    'A win-win solution that empowers veterinary practices while giving pet owners the financial flexibility they need.',

  columns: [
    {
      title: 'Veterinary Hospitals',
      icon: 'FiPlus',
      theme: 'green',
      items: [
        {
          icon: 'FiTrendingUp',
          title: 'Higher Treatment Acceptance',
          text: 'Patients say yes to recommended treatments more often',
        },
        {
          icon: 'FiDollarSign',
          title: 'Faster Payments',
          text: 'Get paid upfront while clients pay over time',
        },
        {
          icon: 'FiSmile',
          title: 'Better Client Experience',
          text: 'Build loyalty with flexible payment options',
        },
        {
          icon: 'FiFileText',
          title: 'Streamlined Billing',
          text: 'Integrated invoicing and payment tracking',
        },
      ],
    },
    {
      title: 'Pet Owners',
      icon: 'FiHeart',
      theme: 'orange',
      items: [
        {
          icon: 'FiDollarSign',
          title: 'Affordable Treatment Options',
          text: 'Access quality care without upfront financial burden',
        },
        {
          icon: 'FiCalendar',
          title: 'Flexible Monthly Payments',
          text: 'Choose payment plans that fit your budget',
        },
        {
          icon: 'FiCheckCircle',
          title: 'Transparent Pricing',
          text: 'Clear terms with no hidden fees or surprises',
        },
        {
          icon: 'FiShield',
          title: 'Peace of Mind',
          text: "Focus on your pet's health, not financial stress",
        },
      ],
    },
  ],
};
const ctaData = {
  title: 'Make Veterinary Care More Accessible with Smarter Financing',
  description:
    'Join hundreds of veterinary practices already transforming their payment experience and helping more pets receive the care they need.',
  primaryBtn: 'Partner With VMP Finance',
  secondaryBtn: 'Get Started',
  points: ['No setup fees', 'Quick integration', '24/7 support'],
  image: '/images/whyCat.png',
};

export default function page() {
  return (
    <div>
      <InnerBanner bannerInfo={bannerInfo} className="bg-color" />
      <HeroSection data={heroData} />
      <FinancingSection data={financingData} />
      <MerchantServices data={merchantServicesData} />
      <BenefitsSection data={benefitsData} />
      <CTASection data={ctaData} />
    </div>
  );
}
