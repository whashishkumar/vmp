import InnerBanner from '@/components/common/InnerBanner';
import HeroSection from '@/components/vmpFinance/HeroSection';
import React from 'react';

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

export default function page() {
  return (
    <div>
      <InnerBanner bannerInfo={bannerInfo} className="bg-color" />
      <HeroSection data={heroData} />
    </div>
  );
}
