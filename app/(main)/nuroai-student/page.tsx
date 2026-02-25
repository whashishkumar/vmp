import InnerBanner from '@/components/common/InnerBanner';
import AIClinicalAssistant from '@/components/nuroAiStudent/AIClinicalAssistant';
import AIFeaturesSection from '@/components/nuroAiStudent/AIFeaturesSection';
import ClinicalCasesSection from '@/components/nuroAiStudent/ClinicalCasesSection';
import FinalCTA from '@/components/nuroAiStudent/FinalCTA';
import HeroBannerStudent from '@/components/nuroAiStudent/HeroBannerStudent';
import React from 'react';

const bannerInfo = {
  bgImage: 'images/eycoSystembg.jpg',
  title: 'Nuro AI Student',
};

const aiLearningHeroData = {
  badge: 'AI-Powered Learning Platform',
  title: {
    line1: 'AI-Powered Academic Learning for',
    highlight: 'Future Veterinary Professionals',
  },
  description:
    'Learn smarter with AI-driven study tools, real clinical case studies, and an intelligent veterinary advisor designed for students.',
  primaryBtn: 'Start Learning',
  secondaryBtn: 'Explore Case Studies',
  students: '10,000+ Students',
  sub: 'Already learning smarter',
  dashboardImage: '/images/bg.jpg',
};

const aiFeaturesData = {
  badge: 'AI-Powered Learning',
  title: 'Smarter Veterinary Education with AI',
  description:
    'Transform your study experience with intelligent tools that adapt to your learning style and help you master complex veterinary concepts.',
  features: [
    {
      icon: 'FiBookOpen',
      title: 'AI–Assisted Study Materials',
      text: 'Personalized content that adapts to your progress and identifies knowledge gaps automatically.',
      theme: 'teal',
    },
    {
      icon: 'FiZap',
      title: 'Simplified Medical Concepts',
      text: 'Complex veterinary topics broken down into easy-to-understand explanations with visual aids.',
      theme: 'purple',
    },
    {
      icon: 'FiFlash',
      title: 'Smart Summaries',
      text: 'AI-generated key points and revision notes for faster, more effective exam preparation.',
      theme: 'blue',
    },
    {
      icon: 'FiMousePointer',
      title: 'Interactive Learning Modules',
      text: 'Engaging quizzes, simulations, and hands-on exercises to reinforce your understanding.',
      theme: 'green',
    },
    {
      icon: 'FiCheckCircle',
      title: 'Curriculum–Aligned Resources',
      text: 'Content mapped to veterinary school curricula worldwide for relevant, targeted learning.',
      theme: 'pink',
    },
    {
      icon: 'FiLayout',
      title: 'Learning Dashboard',
      text: 'Track your progress, set goals, and get AI-powered recommendations for optimal learning paths.',
      theme: 'dark',
    },
  ],
};

const clinicalCasesData = {
  tag: 'Clinical Case Studies',
  title: {
    normal: 'Learn from',
    highlight: 'Real Veterinary Cases',
  },
  description:
    'Bridge the gap between theory and practice with our extensive library of real-world clinical cases, complete with diagnostic workflows and treatment outcomes.',
  points: [
    {
      title: 'Real–World Diagnosis Examples',
      text: 'Learn from actual patient cases with complete medical histories.',
      color: 'teal',
      icon: '',
    },
    {
      title: 'Step–by–Step Case Explanations',
      text: 'Follow the diagnostic process from presentation to resolution.',
      color: 'purple',
      icon: '',
    },
    {
      title: 'Treatment Planning Insights',
      text: 'Understand treatment decisions and their clinical rationale.',
      color: 'cyan',
      icon: '',
    },
    {
      title: 'Clinical Decision Training',
      text: 'Practice making diagnostic decisions in a safe environment.',
      color: 'green',
      icon: '',
    },
  ],
  sectionImage: '/images/why2.jpg',
};
const aiAssistantData = {
  badge: 'AI Clinical Advisor',
  title: {
    line1: 'Your Intelligent',
    highlight: 'Veterinary Study Assistant',
  },
  description:
    'Get instant answers to your clinical questions, explore diagnostic pathways, and deepen your understanding with our AI-powered study companion.',
  features: [
    {
      icon: 'FiHelpCircle',
      title: 'Ask Clinical Questions',
      text: 'Get detailed answers to any veterinary query.',
      theme: 'teal',
    },
    {
      icon: 'FiZap',
      title: 'AI-Powered Explanations',
      text: 'Complex concepts made simple.',
      theme: 'purple',
    },
    {
      icon: 'FiCheckSquare',
      title: 'Diagnostic Guidance',
      text: 'Learn diagnostic reasoning skills.',
      theme: 'pink',
    },
    {
      icon: 'FiClock',
      title: '24/7 Study Companion',
      text: 'Always available when you need help.',
      theme: 'green',
    },
  ],
  rightImage: '/images/why1.jpg',
};

const finalCtaData = {
  badge: 'Start Your Journey Today',
  title: {
    normal: 'Upgrade Your Veterinary Learning with',
    highlight: 'NURO AI',
  },
  description:
    'Join the next generation of veterinary professionals using AI-powered academic tools to accelerate their learning and clinical skills.',
  primaryBtn: 'Start Free Access',
  secondaryBtn: 'Request Demo',
  points: [
    { icon: 'FiShield', text: 'Secure & Private' },
    { icon: 'FiClock', text: '24/7 Availability' },
    { icon: 'FiCheckCircle', text: 'Curriculum Aligned' },
    { icon: 'FiUsers', text: '10,000+ Students' },
  ],
};
export default function page() {
  return (
    <div>
      <InnerBanner bannerInfo={bannerInfo} className="bg-color" />
      <HeroBannerStudent data={aiLearningHeroData} />
      <AIFeaturesSection data={aiFeaturesData} />
      <ClinicalCasesSection data={clinicalCasesData} />
      <AIClinicalAssistant data={aiAssistantData} />
      <FinalCTA data={finalCtaData} />
    </div>
  );
}
