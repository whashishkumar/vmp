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

export default function Home() {
  return (
    <>
      <HeroBanner />
      <AboutVMP />
      <VMPEcosystem />
      <WhyChooseUs />
      <VmpEcosystemWork />
      <VirtualConsultations />
      <BlogsSection />
      <FAQ />
      <Footer />
    </>
  );
}
