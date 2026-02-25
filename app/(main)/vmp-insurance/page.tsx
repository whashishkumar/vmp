import InnerBanner from '@/components/common/InnerBanner';
import HeroSection from '@/components/vmpFinance/HeroSection';
import InsuranceHeroLight from '@/components/vmpInsurance/InsuranceHeroLight';
import InsuranceSection from '@/components/vmpInsurance/InsuranceSolutions';
import InvestmentSolutions from '@/components/vmpInsurance/InvestmentSolutions';
import PartnerNetworkSection from '@/components/vmpInsurance/PartnerNetworkSection';
import React from 'react';

const bannerInfo = {
  bgImage: 'images/eycoSystembg.jpg',
  title: 'VMP Insurance',
};
 const heroData = {
   badge: 'Trusted by 50,000+ families',
   title: 'Smart Protection and Financial Security for the Future',
   desc:'Access health insurance, life protection plans, and investment opportunities through our trusted insurance and broker network.',
   ctas: [
     { label: 'Get Insurance', href: '/partner', variant: 'primary' },
     { label: 'Partner With Us', href: '/apply', variant: 'outline' },
   ],
   image: '/images/why1.jpg',
 };

 const insuranceSectionData = {
  badge: 'Insurance Solutions',
  title: 'Comprehensive Insurance Coverage',
  description:
    'Protect what matters most with our range of health and life insurance plans designed for your peace of mind.',
  cards: [
    {
      icon: 'FiHeart',
      title: 'Health Insurance Plans',
      text: 'Comprehensive medical coverage including hospitalization, outpatient care, and preventive services.',
    },
    {
      icon: 'FiShield',
      title: 'Life Protection Policies',
      text: "Secure your family's future with term life, whole life, and universal life insurance options.",
    },
    {
      icon: 'FiDollarSign',
      title: 'Long-term Security',
      text: 'Build lasting financial security with retirement and savings-linked insurance products.',
    },
  ],
  points: ['Flexible coverage options', 'Support from trusted providers'],
};
 const investmentSectionData = {
  image:"/images/why1.jpg",
  badge: 'Investment Solutions',
  title: 'Grow Your Wealth with Smart Investments',
  description:
    'Build long-term wealth through our carefully curated investment opportunities, backed by expert guidance and risk management.',
  points: [
    {
      title: 'Investment Advisory Access',
      text: 'Get personalized advice from certified financial experts.',
    },
    {
      title: 'Diversified Financial Products',
      text: 'Access a wide range of stocks, bonds, and mutual funds.',
    },
    {
      title: 'Risk-Managed Opportunities',
      text: 'Strategic approaches to minimize risk and maximize returns.',
    },
  ],
  cta: 'Start Investing',
};

 const partnerNetworkData = {
  badge: 'Partnership Program',
  title: 'Partner with a Growing Insurance Network',
  description:
    'Join our network of licensed brokers and access multiple insurance providers, technology tools, and growth opportunities.',
  hub: {
    center: {
      title: 'VMP Network',
      subtitle: 'Your central hub',
    },
    left: {
      title: '500+ Brokers',
      subtitle: 'Active licensed partners',
    },
    right: {
      title: '25+ Providers',
      subtitle: 'Insurance partners',
    },
  },
  features: [
    {
      icon: 'FiShield',
      title: 'Licensed Brokers',
      text: 'Work with certified professionals',
    },
    {
      icon: 'FiTrendingUp',
      title: 'Business Growth',
      text: 'Expand your portfolio',
    },
    {
      icon: 'FiDollarSign',
      title: 'Fair Commissions',
      text: 'Transparent structures',
    },
    {
      icon: 'FiMonitor',
      title: 'Tech Support',
      text: 'Modern tools & platforms',
    },
  ],
};

const data = {
  title: {
    line1: 'Secure Protection and',
    highlight: 'Financial Growth',
    line2: 'in One Place',
  },
  description:
    'Join VMP Insurance to access trusted coverage, investment solutions, and strong broker partnerships.',
  primaryBtn: 'Explore Insurance Plans',
  secondaryBtn: 'Become a Partner',
  stats: ['SSL Secured', 'Licensed & Regulated', '50,000+ Customers'],
};
export default function page() {
  return (
    <div>
      <InnerBanner bannerInfo={bannerInfo} className="bg-color" />
      <HeroSection data={heroData} />
      <InsuranceSection data={insuranceSectionData} />
      <InvestmentSolutions data={investmentSectionData} />
      <PartnerNetworkSection data={partnerNetworkData} />
      <InsuranceHeroLight data={data}/>
    </div>
  );
}
