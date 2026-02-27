import InnerBanner from '@/components/common/InnerBanner';
import Reviews from '@/components/common/Review';
import { AllInOneAppSection } from '@/components/nuroVet/AllInOneAppSection';
import SimpleProcessSection from '@/components/nuroVet/ProcessSection';
import { PropertyManagersSection } from '@/components/nuroVet/PropertyManagersSection';
import { WhyVirtualCareSection } from '@/components/nuroVet/WhyVirtualCareSection';
import HeroSection from '@/components/vmpFinance/HeroSection';
import { ServicesPageEndPoint } from '@/lib/services/ServicesPageEndPoint';

const bannerInfo = {
  bgImage: 'images/eycoSystembg.jpg',
  title: 'Nuro Vet',
};
const heroData = {
  badge: 'Trusted by 500+ Veterinary Practices',
  title: 'Smarter Financing for Pet Owners and Veterinary Hospitals',
  desc: 'Flexible payment solutions and integrated merchant services that help veterinary practices deliver care without financial barriers.',
  ctas: [
    { label: 'Book virtual Vet', href: '/', variant: 'primary' },
    { label: 'Download App', href: '/', variant: 'outline' },
  ],
  image: '/images/why1.jpg',
};

const processData = {
  tag: 'Simple Process',
  title: 'Simple Care in Just a Few Steps',
  desc: "Get professional veterinary advice without leaving your home. It's quick, easy, and stress-free for both you and your pet.",
  steps: [
    {
      id: 1,
      title: 'Start a Consultation',
      desc: 'Open the app and request a virtual visit with just a few taps.',
      icon: 'mobile',
    },
    {
      id: 2,
      title: 'Talk to a Licensed Vet',
      desc: 'Video call or chat with an expert veterinarian within minutes.',
      icon: 'video',
    },
    {
      id: 3,
      title: 'Get Treatment Guidance',
      desc: 'Receive professional recommendations and clear next steps.',
      icon: 'file',
    },
    {
      id: 4,
      title: 'Keep Your Pet Healthy',
      desc: "Follow care plans and track your pet's wellbeing over time.",
      icon: 'heart',
    },
  ],
};

const appFeatureData = {
  tag: 'All-in-One App',
  title: 'Everything Your Pet Needs in One App',
  desc: 'A complete veterinary care solution designed to make pet parenting easier and more convenient than ever.',
  features: [
    {
      title: 'Instant Veterinary Consultations',
      desc: 'Connect with licensed vets in minutes, not hours or days.',
      icon: 'bolt',
      highlight: true,
    },
    {
      title: 'Quick Health Advice',
      desc: 'Get answers to common pet health questions anytime.',
      icon: 'question',
    },
    {
      title: 'Stress-Free Experience',
      desc: 'No travel, no waiting rooms — just calm, comfortable care.',
      icon: 'smile',
    },
    {
      title: 'Multi-Device Access',
      desc: 'Use from phone, tablet, or computer — whatever works for you.',
      icon: 'desktop',
    },
  ],
  image: '/images/bg.jpg',
};

const content = {
  sectionTag: 'For Property Managers',
  title: 'A Smart Amenity for Pet-Friendly Living',
  description:
    'Property owners and residential communities can offer digital veterinary services as a valuable amenity for residents with pets.',
  ctaText: 'Partner With Us →',
  colors: {
    // Original dark green for white text elements
    brandDark: '#00522C',
    // New light mint for black text elements (Replaces #00522CE3)
    brandLight: '#E6F0EB',
    brandAccent: '#22C55E', // green-500
  },
  features: [
    { icon: 'smile', title: 'Higher Satisfaction', desc: 'Residents love convenient pet care' },
    { icon: 'users', title: 'Better Retention', desc: 'Keep tenants happy and loyal' },
    { icon: 'shield', title: 'Fewer Issues', desc: 'Proactive pet health management' },
    { icon: 'bolt', title: 'Modern Amenity', desc: 'Stand out from competitors' },
  ],
  mockCard: {
    communityName: 'Oakwood Residences',
    communityType: 'Pet-Friendly Community',
    statsLabel: 'This Month',
    statsValue: '47 Consultations',
    statsTrend: '↑ 23%',
    activities: [
      { unit: 'Unit 4B – Consultation', time: 'Today, 2:30 PM', status: 'Active', isActive: true },
      { unit: 'Unit 7A – Follow-up', time: 'Yesterday', status: 'Completed', isActive: false },
      { unit: 'Unit 12C – Quick Check', time: '2 days ago', status: 'Completed', isActive: false },
    ],
  },
};
const comparisonData = {
  tag: 'Why Virtual Care',
  title: 'Better Care Without the Waiting Room',
  desc: "See how Nurovet's virtual vet care compares to traditional clinic visits.",
  clinic: {
    title: 'Clinic Visit',
    points: [
      'Long wait times (30min–2hrs)',
      'Stressful travel for pets',
      'Limited to clinic hours',
      'Higher costs overall',
      'Exposure to other sick pets',
    ],
  },
  virtual: {
    title: 'Nurovet Virtual Visit',
    points: [
      'Connect within minutes',
      'Zero stress for your pet',
      'Available 24/7, any day',
      'Affordable consultations',
      'Safe, comfortable at home',
    ],
  },
};

const reviewsData = [
  {
    id: 1,
    name: 'Mary Douglas',
    role: 'Pet Lover',
    avatar: '/images/whyCat.png',
    rating: 5,
    review:
      'The staff were incredibly friendly and professional. My dog came back clean, happy, and stress-free. Highly recommended!',
  },
  {
    id: 2,
    name: 'John Carter',
    role: 'Dog Owner',
    avatar: '/images/whyCat.png',
    rating: 4,
    review:
      'The staff were incredibly friendly and professional. My dog came back clean, happy, and stress-free. Highly recommended!',
  },
  {
    id: 3,
    name: 'Mary Douglas',
    role: 'Pet Lover',
    avatar: '/images/whyCat.png',
    rating: 5,
    review:
      'The staff were incredibly friendly and professional. My dog came back clean, happy, and stress-free. Highly recommended!',
  },
  {
    id: 4,
    name: 'John Carter',
    role: 'Dog Owner',
    avatar: '/images/whyCat.png',
    rating: 4,
    review:
      'The staff were incredibly friendly and professional. My dog came back clean, happy, and stress-free. Highly recommended!',
  },
];

export default async function page() {
  const resp = await ServicesPageEndPoint.getNurovet();
  const { hero, about, process, app, comparison, property } = resp || {};

  return (
    <div>
      <InnerBanner bannerInfo={hero} className="bg-color" />
      <HeroSection data={about} />
      <SimpleProcessSection processData={process} />
      <AllInOneAppSection appFeatureData={app} />
      <WhyVirtualCareSection comparisonData={comparison} />
      <PropertyManagersSection content={property} />
      {/* <Reviews reviewsData={reviewsData} /> */}
    </div>
  );
}
