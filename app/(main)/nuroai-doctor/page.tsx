import InnerBanner from '@/components/common/InnerBanner';
import VetCtaStats from '@/components/nuroAiDoctor/VetCtaStats';
import AIClinicalAssistant from '@/components/nuroAiStudent/AIClinicalAssistant';
import ClinicalCasesSection from '@/components/nuroAiStudent/ClinicalCasesSection';
import HeroSection from '@/components/vmpFinance/HeroSection';
import { ServicesPageEndPoint } from '@/lib/services/ServicesPageEndPoint';
import React from 'react';

export default async function page() {
  const resp = await ServicesPageEndPoint.getNuroaiDoctor();
  const { hero, about, cta_section, aiAssistant, drug, medical } = resp || {};

  return (
    <div>
      <InnerBanner bannerInfo={hero} className="bg-color" />
      <HeroSection data={about} />
      <ClinicalCasesSection data={medical} />
      <AIClinicalAssistant data={aiAssistant} />
      <ClinicalCasesSection data={drug} />
      <VetCtaStats data={cta_section} />
    </div>
  );
}
