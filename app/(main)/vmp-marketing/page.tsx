import InnerBanner from '@/components/common/InnerBanner';
import HeroSection from '@/components/vmpFinance/HeroSection';
import TechServicesSection from '@/components/vmpMarketing/TechServicesSection';
import VetMarketingSection from '@/components/vmpMarketing/VetMarketingSection';
import VetWebDesignSection from '@/components/vmpMarketing/VetWebDesignSection';
import React from 'react';
import {
  FaSearch,
  FaBullhorn,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaPalette,
  FaMobileAlt,
  FaCalendarCheck,
  FaChartLine,
  FaCog,
  FaBolt,
  FaSyncAlt,
  FaLock,
  FaPuzzlePiece,
  FaLifeRing,
} from 'react-icons/fa';

const bannerInfo = {
  bgImage: 'images/eycoSystembg.jpg',
  title: 'NuroVet App',
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
const vetWebData = {
  badge: 'Web Design & Development',
  title1: 'Professional Websites Built for Veterinary Practices',
  desc: 'Your website is often the first impression pet owners have of your practice. We create stunning, functional websites that convert visitors into loyal clients.',

  features: [
    {
      icon: FaPalette,
      title: 'Custom Design',
      desc: 'Unique to your brand',
      color: 'bg-cyan-500/20 text-cyan-400',
    },
    {
      icon: FaMobileAlt,
      title: 'Mobile-Friendly',
      desc: 'Perfect on all devices',
      color: 'bg-purple-500/20 text-purple-400',
    },
    {
      icon: FaCalendarCheck,
      title: 'Online Booking',
      desc: '24/7 appointments',
      color: 'bg-green-500/20 text-green-400',
    },
    {
      icon: FaChartLine,
      title: 'SEO-Ready',
      desc: 'Rank higher locally',
      color: 'bg-orange-500/20 text-orange-400',
    },
  ],

  image: '/images/bg.jpg',
};

const marketingData = {
  badge: 'Strategic Digital Marketing',
  title1: 'Reach More Pet Owners Online',
  desc: 'We use data-driven strategies to put your practice in front of pet owners actively searching for veterinary care in your area.',
  features: [
    {
      icon: FaSearch,
      title: 'Search Engine Optimization',
      desc: 'Dominate local search results',
      stat: '+78%',
      color: 'bg-cyan-500/20 text-cyan-400',
    },
    {
      icon: FaBullhorn,
      title: 'Paid Advertising',
      desc: 'Google & Facebook ads that convert',
      stat: '3.2x ROI',
      color: 'bg-purple-500/20 text-purple-400',
    },
    {
      icon: FaCheckCircle,
      title: 'Social Media Growth',
      desc: 'Build community & engagement',
      stat: '+156%',
      color: 'bg-pink-500/20 text-pink-400',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Local Search Visibility',
      desc: 'Google Maps & business listings',
      stat: 'Top 3',
      color: 'bg-green-500/20 text-green-400',
    },
  ],
  image: '/images/bg.jpg',
};
const techData = {
  badge: 'Technology & IT Services',
  title1: 'Technology That Supports Your Practice',
  desc: 'From reliable hosting to marketing automation, we provide the technical backbone your practice needs to run smoothly online.',
  services: [
    {
      icon: FaCog,
      title: 'Website Maintenance',
      desc: 'Regular updates, security patches, and content changes to keep your site running smoothly.',
      link: '',
    },
    {
      icon: FaBolt,
      title: 'Performance Optimization',
      desc: 'Lightning-fast load times that improve user experience and search rankings.',
      link: '',
    },
    {
      icon: FaSyncAlt,
      title: 'Marketing Automation',
      desc: 'Automated email campaigns, appointment reminders, and client follow-ups.',
      link: '',
    },
    {
      icon: FaLock,
      title: 'Secure Hosting',
      desc: 'Enterprise-grade hosting with SSL certificates and daily backups.',
      link: '',
    },
    {
      icon: FaPuzzlePiece,
      title: 'System Integrations',
      desc: 'Connect your website with practice management software and tools.',
      link: '',
    },
    {
      icon: FaLifeRing,
      title: 'Technical Support',
      desc: 'Dedicated support team ready to help with any technical issues.',
      link: '',
    },
  ],
};

export default function page() {
  return (
    <div>
      <InnerBanner bannerInfo={bannerInfo} className="bg-color" />
      <HeroSection data={heroData} />
      <VetWebDesignSection vetWebData={vetWebData} />
      <VetMarketingSection marketingData={marketingData} />
      <TechServicesSection techData={techData} />
    </div>
  );
}
