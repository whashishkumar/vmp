import SectionHeading from '@/components/common/SectionHeading';
import Image from 'next/image';

export default function AboutBanner({ content }: any) {
  const { title, subTitle, image } = content || {};
  return (
    <div className="inner-wrapper m-auto px-6 lg:px-0 py-12 md:py-0 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-[70%_28%] gap-[2%] items-center">
        <SectionHeading
          cssClass="text-left"
          title={title}
          subTitle={subTitle}
          subHeadingCss="!text-xl !text-black leading-relaxed"
        />

        <Image
          src={image.src}
          height={90}
          width={250}
          alt={image.alt}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
