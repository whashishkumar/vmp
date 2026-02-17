import AboutBanner from '@/components/home/about/AboutBanner';
import AboutVMP from '@/components/common/AboutVmp';
import InnerBanner from '@/components/common/InnerBanner';
import VisionSection from '@/components/common/VisionSection';
import MissionSection from '@/components/common/MissionSection';
import FAQ from '@/components/home/FAQ';
import { AboutPageEndPoints } from '@/lib/services/AboutPageEndPoints';

const bannerInfo = {
  bgImage: 'images/aboutbg.jpg',
  title: 'About us Page',
};

// const aboutVMPData = {
//   bannerImage: '/images/inneraboutPage.jpg',

//   heading: {
//     tag: 'VMP',
//     title: 'A Unified Ecosystem Supporting Every Stage of Veterinary Practice Care and Growth',
//     description:
//       'VMP is the parent ecosystem behind Nurovet, VMP Marketing, VMP Finance, and VMP Insurance. Together, these solutions help veterinary clinics and hospitals manage operations, grow their practice, offer affordable care, and protect pets—through one connected ecosystem.',
//   },
//   features: [
//     'Professional & Corporate',
//     'Certified experts',
//     'Growth & Innovation Focused',
//     'Affordable prices',
//   ],
//   cta: {
//     primary: 'Read More',
//     phone: '+1 (424) 332-3268',
//     label: 'Emergency call',
//   },
//   services: [
//     {
//       title: 'Veterinary Telemedicine',
//       description: 'Healthy eating significantly boosts overall health and well-being',
//       icon: '/icons/about-icon1.svg',
//     },
//     {
//       title: 'Veterinary Hospitals',
//       description: 'A balanced diet includes a variety of foods from all food groups',
//       icon: '/icons/about-icon-2.svg',
//     },
//     {
//       title: 'Independent Veterinarians',
//       description: 'Complete Maintenance Services for Comfort and Peace of Mind',
//       icon: '/icons/about-icon3.png',
//     },
//     {
//       title: 'Pet-Friendly Atmosphere',
//       description: 'Trusted Handyman Help for All Those Small but Important Home Tasks',
//       icon: '/icons/about-icon4.svg',
//     },
//   ],
// };

export default async function page() {
  const rep = await AboutPageEndPoints.getAboutPage();
  const { aboutVMPData, content, faq, hero, missionData, visionData } = rep || {};
  return (
    <>
      <InnerBanner bannerInfo={hero} />
      <AboutBanner content={content} />
      <AboutVMP aboutVMPData={aboutVMPData} hideTag />
      <MissionSection missionData={missionData} />
      <VisionSection visionData={visionData} />
      {/* <FAQ/> */}
    </>
  );
}
