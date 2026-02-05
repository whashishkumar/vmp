import React from 'react';
import Address from './Address';
import ContactUsForm from './ContactUsForm';
import ContactCard from './ContactCard';

const contactCards = [
  {
    id: 1,
    title: 'Email Address',
    icon: 'mail',

    lines: ['info@webmail.com', 'jobs@webmail.com'],
  },
  {
    id: 2,
    title: 'Phone Number',
    icon: 'call',
    lines: ['+91 98765 43210', '+91 91234 56789'],
  },
  {
    id: 3,
    title: 'Office Address',
    icon: 'location',
    lines: ['VisionPlus Healthcare', '3rd Floor, Tech Park', 'Bangalore, India 560001'],
  },
];

export default function ContactUs() {
  return (
    <>
      <div className="bg-color">
        <div className="inner-wrapper m-auto py-14">
          <div className="grid md:grid-cols-3 gap-8">
            {contactCards.map((card) => (
              <ContactCard key={card.id} data={card} />
            ))}
          </div>
        </div>
      </div>
      <div className="inner-wrapper m-auto py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center ">
          <Address />
          <ContactUsForm />
        </div>
      </div>
    </>
  );
}
