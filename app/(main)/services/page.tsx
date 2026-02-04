import InnerBanner from '@/components/common/InnerBanner';
import VMPEcosystem from '@/components/common/EcoSystemVmp';
import ServicesHero from '@/components/common/ServicesHero';
import Reviews from '@/components/common/Review';

const bannerInfo = {
  bgImage: 'images/bg.jpg',
  title: 'Services Page',
};

const vmpEcosystemData = {
  title: 'our Sercives',
  subTitle: 'The Complete VMP Ecosystem for Veterinary Growth',
  cards: [
    {
      title: 'Nurovet',
      description: 'Veterinary Management system powered by AI',
      image: '/images/why1.jpg',
    },
    {
      title: 'Nurovet App',
      description: 'Mobile App for Pet Parents',
      image: '/images/why1.jpg',
    },
    {
      title: 'VMP Marketing',
      description: 'Marketing and IT Development',
      image: '/images/why4.jpg',
    },
    {
      title: 'VMP Insurance',
      description: 'VMP Insurance and Investment',
      image: '/images/why2.jpg',
    },
    {
      title: 'VMP Finance',
      description: 'VMP Finance and Merchant Service',
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

export default function page() {
  return (
    <>
      <InnerBanner bannerInfo={bannerInfo} className="bg-color" />
      <ServicesHero/>
      <VMPEcosystem vmpEcosystemData={vmpEcosystemData} />
      <Reviews/>
    </>
  );
}
