/** @format */

import BlogsSection from '@/components/Blog';
import AboutVMP from '@/components/home/AboutVmp';
import VMPEcosystem from '@/components/home/EcoSystemVmp';
import FAQ from '@/components/home/FAQ';
import HeroBanner from '@/components/home/HeroBanner';
import VirtualConsultations from '@/components/home/VirtualConsultations';
import VmpEcosystemWork from '@/components/home/VmpEcosystemWork';
import WhyChooseUs from '@/components/home/WhyUs';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <AboutVMP />
      <VMPEcosystem />
      <WhyChooseUs />
      <VmpEcosystemWork />
      <VirtualConsultations />
      <BlogsSection />
      <FAQ />
      <Footer />
    </div>
  );
}
