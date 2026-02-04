import React from 'react';

export default function SectionHeading({ title, subTitle, cssClass, subHeadingCss ,titleCss}: any) {
  return (
    <div className={cssClass || 'text-center'}>
      {title && (
        <h2 className={`text-2xl lg:text-[3rem] text-black font-semibold fredoka capitalize ${titleCss}`}>
          {title}
        </h2>
      )}
      {subTitle && (
        <p className={`${subHeadingCss} font-normal text-lg text-[#6C6D71] mt-2 onest`}>
          {subTitle}
        </p>
      )}
    </div>
  );
}