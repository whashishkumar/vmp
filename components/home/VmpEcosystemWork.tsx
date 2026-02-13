import Image from 'next/image';

export default function VmpEcosystemWork({ data }: any) {
  const { background, center } = data || {};

  return (
    <div className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${background?.src})`,
        }}
      />
      {/* <div className="absolute inset-0" style={{ background: '#00522CE3' }} /> */}
      <section className={`inner-wrapper m-auto relative py-16 px-14 lg:px-0`}>
        <div className="flex justify-center items-center">
          <Image
            src={center.src}
            height={779}
            width={1101}
            alt="bg"
            className="object-contain w-full h-full"
          />
        </div>
      </section>
    </div>
  );
}
