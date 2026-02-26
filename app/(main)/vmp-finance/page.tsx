import InnerBanner from '@/components/common/InnerBanner';
import BenefitsSection from '@/components/vmpFinance/BenefitsSection';
import CTASection from '@/components/vmpFinance/CTASection';
import FinancingSection from '@/components/vmpFinance/FinancingSolutions';
import HeroSection from '@/components/vmpFinance/HeroSection';
import MerchantServices from '@/components/vmpFinance/MerchantServices';
import { ServicesPageEndPoint } from '@/lib/services/ServicesPageEndPoint';

export default async function page() {
  const resp = await ServicesPageEndPoint.getVmpFinance();
  const { about, benefits_section, cta_section, finance, hero, merchant } = resp || {};

  return (
    <div>
      <InnerBanner bannerInfo={hero} className="bg-color" />
      <HeroSection data={about} />
      <FinancingSection data={finance} />
      <MerchantServices data={merchant} />
      <BenefitsSection data={benefits_section} />
      <CTASection data={cta_section} />
    </div>
  );
}
