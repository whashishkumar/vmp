import React from 'react';
import Accordion from '../ui/Accordian';
import Button from '../ui/Button';
import Link from 'next/link';

export const faqData = [
  {
    id: 1,
    question: 'How can I track critical and emergency patients in real time?',
    answer:
      'You can track critical and emergency patients in real time through Nurovet’s centralized dashboard, which highlights urgent cases with priority alerts, live status updates, and detailed patient profiles—ensuring faster decisions and timely care.',
  },
  {
    id: 2,
    question: 'Does the system provide alerts for urgent cases?',
    answer:
      'Yes, the system provides real-time alerts and notifications for all urgent and high-priority cases.',
  },
  {
    id: 3,
    question: 'How can I track critical and emergency patients in real time?',
    answer:
      'You can track critical and emergency patients in real time through Nurovet’s centralized dashboard, which highlights urgent cases with priority alerts, live status updates, and detailed patient profiles—ensuring faster decisions and timely care.',
  },
  {
    id: 4,
    question: 'Does the system provide alerts for urgent cases?',
    answer:
      'Yes, the system provides real-time alerts and notifications for all urgent and high-priority cases.',
  },
  {
    id: 5,
    question: 'How can I track critical and emergency patients in real time?',
    answer:
      'You can track critical and emergency patients in real time through Nurovet’s centralized dashboard, which highlights urgent cases with priority alerts, live status updates, and detailed patient profiles—ensuring faster decisions and timely care.',
  },
];

export const FAQHeader = ({ heading }: any) => {
  const { eyebrow, title, subtitle } = heading || {};
  const data = {
    eyebrow: "Faq's",
    title: 'Frequently Asked Questions About the VMP Ecosystem',
    subtitle: "We're here to assist you.",
  };

  return (
    <div className="w-full mb-12 text-center">
      <p className="text-[#1F2021] text-base mb-2">{eyebrow}</p>
      <h2 className="text-[1.5rem] md:text-[2.5rem] md:text-5xl font-normal text-[#000000]">
        {title}
      </h2>
      <p className="text-[#434448] mt-4 text-lg">{subtitle}</p>
    </div>
  );
};

export default function FAQ({ faqProps }: any) {
  const { button, items, heading } = faqProps || {};
  const middle = Math.ceil(items.length / 2);
  const firstHalf = items.slice(0, middle);
  const secondHalf = items.slice(middle);

  return (
    <div className="inner-wrapper m-auto py-16 px-6 lg:px-0">
      <FAQHeader heading={heading} />
      <div className="grid grid-cols-1 md:grid-cols-2  gap-6 md:gap-12">
        <Accordion data={firstHalf} />
        <Accordion data={secondHalf} />
      </div>
      <div className="flex items-center mt-14 justify-center">
        <Link
          href={button.href}
          className="bg-[#00522C] hover:bg-[#00522C]/80 text-white px-12 py-3 rounded-full font-medium transition-all min-w-45 text-base"
        >
          {button.label}
        </Link>
      </div>
    </div>
  );
}
