import InnerBanner from '@/components/common/InnerBanner';
import VetCtaStats from '@/components/nuroAiDoctor/VetCtaStats';
import AIClinicalAssistant from '@/components/nuroAiStudent/AIClinicalAssistant';
import ClinicalCasesSection from '@/components/nuroAiStudent/ClinicalCasesSection';
import HeroSection from '@/components/vmpFinance/HeroSection';
import React from 'react';

const bannerInfo = {
  bgImage: 'images/eycoSystembg.jpg',
  title: 'Vmp Nuro AI Doctor',
};
const vetAiHeroData = {
  badge: 'Powered by Advanced AI',
  title: 'Upgrade Your Veterinary Learning with NURO AI',
  desc: 'Automate documentation, generate treatment plans, and calculate drug dosages instantly with NURO AI.',
  ctas: [
    { label: 'Get Insurance', href: '/partner', variant: 'primary' },
    { label: 'Partner With Us', href: '/apply', variant: 'outline' },
  ],
  image: '/images/why1.jpg',
};

const clinicalCasesData = {
  tag: 'AI Medical Scribe',
  title: {
    highlight: 'Automatic Clinical Documentation',
  },
  description:
    'Let AI handle your documentation while you focus on patient care. Our intelligent scribe converts conversations into structured medical records instantly.',
  points: [
    {
      title: 'Converts conversations into medical notes',
      text: 'Speak naturally during consultations and get accurate documentation',
      color: 'teal',
      icon: '',
    },
    {
      title: 'Saves consultation time',
      text: 'Reduce documentation time by up to 70% per patient visit',
      color: 'purple',
      icon: '',
    },
    {
      title: 'Structured patient records',
      text: 'Automatically formats notes with proper medical terminology',
      color: 'cyan',
      icon: '',
    },
  ],
  sectionImage: '/images/why1.jpg',
};
const aiAssistantData = {
  badge: 'Smart Treatment',
  title: {
    highlight: 'AI-Assisted Treatment Recommendations',
  },
  description:
    'Make informed decisions faster with AI-powered treatment suggestions based on patient history, symptoms, and evidence-based veterinary medicine.',
  features: [
    {
      icon: 'FiHelpCircle',
      title: 'Suggests treatment options',
      text: 'Get multiple treatment pathways ranked by efficacy',
      theme: 'teal',
    },
    {
      icon: 'FiZap',
      title: 'Clinical decision support',
      text: 'Reduce diagnostic errors with AI-backed insights',
      theme: 'purple',
    },
    {
      icon: 'FiCheckSquare',
      title: 'Faster diagnosis workflow',
      text: 'Accelerate patient care with intelligent recommendations',
      theme: 'pink',
    },
  ],
  rightImage: '/images/why1.jpg',
};

const drugCalculatorData = {
  tag: 'Drug Calculato',
  title: {
    highlight: 'Accurate Drug Calculations in Seconds',
  },
  description:
    'Eliminate dosage errors with our precision calculator. Get species-specific recommendations with safety alerts and administration guidance.',
  points: [
    {
      title: 'Weight-based dosage calculations',
      text: 'Get accurate drug dosages based on patient weight and species',
      color: 'teal',
      icon: '',
    },
    {
      title: 'Species-specific guidance',
      text: 'Get accurate dosages for different animal species with built-in safety checks',
      color: 'purple',
      icon: '',
    },
    {
      title: 'Reduces medication errors',
      text: 'Built-in safety checks and contraindication alerts',
      color: 'cyan',
      icon: '',
    },
  ],
  sectionImage: '/images/why1.jpg',
};

const vetCtaStatsData = {
  stats: [
    { value: '70%', label: 'Documentation Time Saved' },
    { value: '500+', label: 'Veterinary Clinics' },
    { value: '99.2%', label: 'Dosage Accuracy' },
    { value: '24/7', label: 'AI Support Available' },
  ],
  badge: 'Ready to Transform Your Practice?',
  title: 'Work Smarter with AI in Your Veterinary Practice',
  description: 'NURO AI Doctor helps veterinarians focus more on care and less on paperwork.',
  primaryBtn: 'Request Demo',
  secondaryBtn: 'Start Using NURO AI',
  compliance: ['HIPAA Compliant', 'SOC 2 Certified', 'Cloud-Based'],
};
const heroData = {
  badge: 'Trusted by 50,000+ families',
  title: 'Smart Protection and Financial Security for the Future',
  desc: 'Access health insurance, life protection plans, and investment opportunities through our trusted insurance and broker network.',
  ctas: [
    { label: 'Get Insurance', href: '/partner', variant: 'primary' },
    { label: 'Partner With Us', href: '/apply', variant: 'outline' },
  ],
  image: '/images/why1.jpg',
};

export default function page() {
  return (
    <div>
      <InnerBanner bannerInfo={bannerInfo} className="bg-color" />
      <HeroSection data={vetAiHeroData} />
      <ClinicalCasesSection data={clinicalCasesData} />
      <AIClinicalAssistant data={aiAssistantData} />
      <ClinicalCasesSection data={drugCalculatorData} />
      <VetCtaStats data={vetCtaStatsData} />
    </div>
  );
}
