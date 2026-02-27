import InnerBanner from '@/components/common/InnerBanner';
import { AppointmentSection } from '@/components/nuroVetApp/AppointmentSection';
import { HealthInsightsSection } from '@/components/nuroVetApp/HealthInsightsSection';
import { MedicalRecordsSection } from '@/components/nuroVetApp/MedicalRecordsSection';
import { PetManagementSection } from '@/components/nuroVetApp/PetManagementSection';
import { SmartChatSection } from '@/components/nuroVetApp/SmartChatSection';
import { WhyLoveSection } from '@/components/nuroVetApp/WhyLoveSection';
import HeroSection from '@/components/vmpFinance/HeroSection';
import { ServicesPageEndPoint } from '@/lib/services/ServicesPageEndPoint';

import React from 'react';
import {
  FaBolt,
  FaPaperclip,
  FaLightbulb,
  FaHistory,
  FaComments,
  FaPhone,
  FaVideo,
  FaHospital,
  FaHeart,
  FaSyringe,
  FaChartLine,
  FaClipboardCheck,
  FaMobileAlt,
  FaClipboardList,
  FaCalendarCheck,
  FaChartBar,
  FaApple,
  FaGooglePlay,
  FaNotesMedical,
  FaPills,
  FaFlask,
  FaCalendarAlt,
  FaPlus,
  FaPaw,
  FaPen,
} from 'react-icons/fa';

// const bannerInfo = {
//   bgImage: 'images/eycoSystembg.jpg',
//   title: 'NuroVet App',
// };
// const heroData = {
//   badge: 'Smart Pet Care Platform',
//   title: 'Nurovet Mobile App for Modern Pet Parents',
//   desc: `Manage your pet's health, appointments, medical records, and vet communication — all from one intelligent mobile app.

// `,
//   ctas: [
//     { label: 'Download for ios', href: '/', variant: 'primary' },
//     { label: 'Download for Ios Android', href: '/', variant: 'outline' },
//   ],
//   image: '/images/why1.jpg',
// };
// const petMgmtData = {
//   tag: 'Pet Management',
//   title: 'Create & Manage Complete Pet Profiles',
//   desc: 'Pet parents can easily add and manage multiple pets with detailed health information and records.',
//   image: '/images/bg.jpg',
//   features: [
//     {
//       icon: FaPlus,
//       title: 'Add New Pets',
//       desc: 'Breed, birthdate & images',
//       color: 'bg-green-100 text-[#00522C]',
//     },
//     {
//       icon: FaChartBar,
//       title: 'Track Details',
//       desc: 'Health info & records',
//       color: 'bg-blue-100 text-blue-600',
//     },
//     {
//       icon: FaPaw,
//       title: 'Multiple Pets',
//       desc: 'One dashboard',
//       color: 'bg-purple-100 text-purple-600',
//     },
//     {
//       icon: FaPen,
//       title: 'Easy Updates',
//       desc: 'Anytime, anywhere',
//       color: 'bg-orange-100 text-orange-600',
//     },
//   ],
// };
// const appointmentData = {
//   tag: 'Easy Scheduling',
//   title: 'Simple & Fast Veterinary Appointments',
//   desc: 'Schedule consultations with trusted veterinarians quickly with flexible options for every situation.',
//   options: [
//     { icon: FaHospital, label: 'In-person' },
//     { icon: FaVideo, label: 'Video Call' },
//     { icon: FaPhone, label: 'Audio Call' },
//     { icon: FaComments, label: 'Chat' },
//   ],
//   points: [
//     'Flexible date & time scheduling',
//     'Select pet before booking',
//     'Instant booking confirmations',
//   ],
//   image: '/images/why1.jpg',
// };
// const chatData = {
//   tag: 'Smart Chat',
//   title: 'Instant Chat with Veterinarians',
//   desc: "Get quick advice from vets and stay informed about your pet's health anytime, anywhere.",
//   features: [
//     { icon: FaBolt, label: 'Real-time chat', color: 'bg-purple-100 text-purple-600' },
//     { icon: FaPaperclip, label: 'Share reports', color: 'bg-blue-100 text-blue-600' },
//     { icon: FaLightbulb, label: 'Instant advice', color: 'bg-green-100 text-[#00522C]' },
//     { icon: FaHistory, label: 'Chat history', color: 'bg-orange-100 text-orange-600' },
//   ],
//   image: '/images/bg.jpg',
// };
// const healthData = {
//   tag: 'Health Insights',
//   title: "Track Your Pet's Health Progress",
//   desc: 'Stay updated with vaccination status, wellness scores, and health trends with intelligent monitoring.',
//   cards: [
//     {
//       icon: FaHeart,
//       title: 'Health Scorecard',
//       desc: 'Overall wellness score based on multiple health factors.',
//       bg: 'bg-green-50',
//       iconBg: 'bg-green-500',
//     },
//     {
//       icon: FaSyringe,
//       title: 'Vaccination Tracking',
//       desc: 'Never miss an important vaccination with smart reminders.',
//       bg: 'bg-blue-50',
//       iconBg: 'bg-blue-500',
//     },
//     {
//       icon: FaChartLine,
//       title: 'Weight Monitoring',
//       desc: 'Track weight trends and get nutritional guidance.',
//       bg: 'bg-purple-50',
//       iconBg: 'bg-purple-500',
//     },
//     {
//       icon: FaClipboardCheck,
//       title: 'Care Plan Adherence',
//       desc: 'Follow personalized care recommendations from your vet.',
//       bg: 'bg-orange-50',
//       iconBg: 'bg-orange-500',
//     },
//   ],
//   image: '/images/why1.jpg',
// };
// const medicalData = {
//   tag: 'Medical Records',
//   title: 'All Veterinary Records in One Place',
//   desc: 'Access prescriptions, visit summaries, vaccination records, and upcoming appointments anytime.',
//   items: [
//     {
//       icon: FaNotesMedical,
//       title: 'Visit History',
//       desc: 'Complete record of all vet visits',
//       bg: 'bg-green-50',
//       iconBg: 'bg-green-500',
//     },
//     {
//       icon: FaPills,
//       title: 'Prescriptions',
//       desc: 'All medications and dosages',
//       bg: 'bg-blue-50',
//       iconBg: 'bg-blue-500',
//     },
//     {
//       icon: FaFlask,
//       title: 'Lab Tests',
//       desc: 'Results and reports at fingertips',
//       bg: 'bg-purple-50',
//       iconBg: 'bg-purple-500',
//     },
//     {
//       icon: FaCalendarAlt,
//       title: 'Upcoming Visits',
//       desc: 'Scheduled appointments overview',
//       bg: 'bg-orange-50',
//       iconBg: 'bg-orange-500',
//     },
//   ],
//   image: '/images/bg.jpg',
// };
// const whyLoveData = {
//   title: 'Why Pet Parents Love Nurovet',
//   desc: 'Everything you need to keep your furry family members happy and healthy.',

//   features: [
//     {
//       icon: FaMobileAlt,
//       title: 'One App',
//       desc: 'Complete pet care',
//     },
//     {
//       icon: FaBolt,
//       title: 'Instant Access',
//       desc: 'Connect with vets',
//     },
//     {
//       icon: FaClipboardList,
//       title: 'Organized Records',
//       desc: 'All in one place',
//     },
//     {
//       icon: FaCalendarCheck,
//       title: 'Easy Booking',
//       desc: 'Quick appointments',
//     },
//     {
//       icon: FaChartBar,
//       title: 'Smart Tracking',
//       desc: 'Health insights',
//     },
//   ],

//   cta: {
//     title: 'Ready to give your pets the best care?',
//     desc: "Join thousands of happy pet parents who trust Nurovet for their pet's health and wellness.",
//     buttons: [
//       {
//         icon: FaApple,
//         label: 'Download for iOS',
//         variant: 'light' as const,
//       },
//       {
//         icon: FaGooglePlay,
//         label: 'Get on Android',
//         variant: 'outline' as const,
//       },
//     ],
//   },
// };

export default async function page() {
  const resp = await ServicesPageEndPoint.getNurovetApp();
  const { hero, about, appointment, chat, health, medical, pet, whylove } = resp;

  return (
    <div>
      <InnerBanner bannerInfo={hero} className="bg-color" />
      <HeroSection data={about} />
      <PetManagementSection petMgmtData={pet} />
      <AppointmentSection appointmentData={appointment} />
      <SmartChatSection chatData={chat} />
      <HealthInsightsSection healthData={health} />
      <MedicalRecordsSection medicalData={medical} />
      <WhyLoveSection whyLoveData={whylove} />
    </div>
  );
}
