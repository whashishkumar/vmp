/** @format */

import AboutVMP from '@/components/home/AboutVmp';
import VMPEcosystem from '@/components/home/EcoSystemVmp';
import HeroBanner from '@/components/home/HeroBanner';
import WhyChooseUs from '@/components/home/WhyUs';

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <AboutVMP />
      <VMPEcosystem />
      <WhyChooseUs />
    </div>
  );
}
