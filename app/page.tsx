/** @format */
import BlogsSection from '@/components/Blog';
import AboutVMP from '@/components/common/AboutVmp';
import VMPEcosystem from '@/components/common/EcoSystemVmp';
import FAQ from '@/components/home/FAQ';
import HeroBanner from '@/components/home/HeroBanner';
import VirtualConsultations from '@/components/home/VirtualConsultations';
import VmpEcosystemWork from '@/components/home/VmpEcosystemWork';
import WhyChooseUs from '@/components/home/WhyUs';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { CommonPageEndPoints } from '@/lib/services/CommonEndPoints';


const aboutVMPData = {
  badge: {
    title: 'More Than 1000+ Happy Pet Owners',
    icons: [
      { id: 1, src: '/images/Border.svg' },
      { id: 2, src: '/images/Border.svg' },
      { id: 3, src: '/images/Border.svg' },
      { id: 4, src: '/images/Border.svg' },
    ],
  },
  experience: {
    value: '10+',
    label: 'Years Of Experience',
  },
  heading: {
    tag: 'About VMP',
    title: 'A Unified Ecosystem Supporting Every Stage of Veterinary Practice Care and Growth',
    description:
      'VMP is the parent ecosystem behind Nurovet, VMP Marketing, VMP Finance, and VMP Insurance. Together, these solutions help veterinary clinics and hospitals manage operations, grow their practice, offer affordable care, and protect pets—through one connected ecosystem.',
  },
  features: [
    'Professional & Corporate',
    'Certified experts',
    'Growth & Innovation Focused',
    'Affordable prices',
  ],
  cta: {
    primary: 'Read More',
    phone: '+1 (424) 332-3268',
    label: 'Emergency call',
  },
  services: [
    {
      title: 'Veterinary Telemedicine',
      description: 'Healthy eating significantly boosts overall health and well-being',
      icon: '/icons/about-icon1.svg',
    },
    {
      title: 'Veterinary Hospitals',
      description: 'A balanced diet includes a variety of foods from all food groups',
      icon: '/icons/about-icon-2.svg',
    },
    {
      title: 'Independent Veterinarians',
      description: 'Complete Maintenance Services for Comfort and Peace of Mind',
      icon: '/icons/about-icon3.png',
    },
    {
      title: 'Pet-Friendly Atmosphere',
      description: 'Trusted Handyman Help for All Those Small but Important Home Tasks',
      icon: '/icons/about-icon4.svg',
    },
  ],
};
const vmpEcosystemData = {
  introCard: {
    title: 'The Complete VMP Ecosystem for Veterinary Growth',
  },
  cards: [
    {
      title: 'Nurovet',
      description:
        'Veterinary Management system powered by AI',
      image: '/images/why1.jpg',
    },
    {
      title: 'Nurovet App',
      description:
        'Mobile App for Pet Parents',
      image: '/images/why1.jpg',
    },
    {
      title: 'VMP Marketing',
      description:
        'Marketing and IT Development',
      image: '/images/why4.jpg',
    },
    {
      title: 'VMP Insurance',
      description:
        'VMP Insurance and Investment',
      image: '/images/why2.jpg',
    },
    {
      title: 'VMP Finance',
      description:
        'VMP Finance and Merchant Service',
      image: '/images/why3.jpg',
    },

    {
      title: 'Nuro Ai Doctor',
      description: 'AI Boat For Doctors',
      image: '/icons/span_.svg',
    },
    {
      title: 'Nuro Ai Student',
      description: 'AI Boat For Students',
      image: '/icons/span_.svg',
    },
  ],
};
export const ecosystemData = {
  background: {
    image: "/images/eycoSystembg.jpg",
  },
  centerImage: {
    src: "/images/works.png",
    alt: "Ecosystem workflow"
  }
};

export default async function Home() {
  const navBarResp = await CommonPageEndPoints.navBar()


  return (
    <>
      <Navbar navBarData={navBarResp} />
      <HeroBanner />
      <AboutVMP aboutVMPData={aboutVMPData} />
      <VMPEcosystem vmpEcosystemData={vmpEcosystemData} />
      <WhyChooseUs />
      <VmpEcosystemWork data={ecosystemData} />
      <VirtualConsultations />
      <BlogsSection />
      <FAQ />
      <Footer />
    </>
  );
}
