import React from 'react';
import Address from './Address';
import ContactUsForm from './ContactUsForm';
import ContactCard from './ContactCard';

// const contactCards = [
//   {
//     id: 1,
//     title: 'Email Address',
//     icon: 'mail',

//     lines: ['info@vmpvet.com'],
//   },
//   {
//     id: 2,
//     title: 'Phone Number',
//     icon: 'call',
//     lines: ['+1 (424) 332 3268'],
//   },
//   {
//     id: 3,
//     title: 'Office Address',
//     icon: 'location',
//     lines: ['22722 Lyons Ave #5', 'Newhall, CA 91321'],
//   },
// ];

export default function ContactUs({ contactUsData }: any) {
  const { contactCards, addressData } = contactUsData || {};
  const { mapSrc } = addressData;
  return (
    <>
      <div className="bg-color ">
        <div className="inner-wrapper m-auto py-14 px-6 lg:px-0">
          <div className="grid md:grid-cols-3 gap-8">
            {contactCards?.map((card: any) => (
              <ContactCard key={card.id} data={card} />
            ))}
          </div>
        </div>
      </div>

      <div className="inner-wrapper m-auto py-16 px-6 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center   ">
          <Address addressData={addressData} />
          <ContactUsForm />
        </div>
      </div>
      {mapSrc && (
        <div className="w-full h-[600px]  overflow-hidden py-16">
          <iframe
            src={mapSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      )}
    </>
  );
}
