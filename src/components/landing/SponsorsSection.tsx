import React from 'react';

const SponsorsSection = () => {
  const topLogos = [
    {
      src: "https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/1885b050932aae71f7d11c10973bc3ae9f5917c0?placeholderIfAbsent=true",
      alt: "Partner logo 1",
      className: "aspect-[2.58] object-contain w-20"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/589c1ef8e31e475470422a2d022e9b908b24f87c?placeholderIfAbsent=true",
      alt: "Partner logo 2",
      className: "aspect-[1.67] object-contain w-[60px]"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/d6ea61fd5496a5d958e3c699850be5f1b8e9dfff?placeholderIfAbsent=true",
      alt: "Partner logo 3",
      className: "aspect-[3.19] object-contain w-20"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/ce44600e751e318e9814aa6bbd6daa636dc3a772?placeholderIfAbsent=true",
      alt: "Partner logo 4",
      className: "aspect-[3.33] object-contain w-[90px]"
    }
  ];

  const bottomLogos = [
    {
      src: "https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/bd19a860ba9be372bb747d120d085d3dd11e55b0?placeholderIfAbsent=true",
      alt: "Partner logo 5",
      className: "aspect-[4.83] object-contain w-[150px]"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/3e8fc9179e9776c355a4707aa2f2488965a6c847?placeholderIfAbsent=true",
      alt: "Partner logo 6",
      className: "aspect-[3.85] object-contain w-[150px]"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/36cf90f1479647547803f455dbd34aefaaee66e9?placeholderIfAbsent=true",
      alt: "Partner logo 7",
      className: "aspect-[4.83] object-contain w-[150px]"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/9086aa97603dff251c042157b1babbd63ffa598f?placeholderIfAbsent=true",
      alt: "Partner logo 8",
      className: "aspect-[3.13] object-contain w-[150px]"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/f818bb1b3516b60fc8d2190e57b6aa21798a5717?placeholderIfAbsent=true",
      alt: "Partner logo 9",
      className: "aspect-[2.94] object-contain w-[150px]"
    }
  ];

  return (
    <section className="justify-center items-center z-0 flex w-full flex-col overflow-hidden bg-white px-20 pt-0 pb-[60px] max-md:max-w-full max-md:px-5 max-md:pt-0">
      <div className="flex w-[992px] max-w-full flex-col items-center justify-center">
        <div className="flex w-[619px] max-w-full items-center gap-[40px_100px] justify-between flex-wrap">
          {topLogos.map((logo, index) => (
            <img
              key={`top-${index}`}
              src={logo.src}
              alt={logo.alt}
              className={`${logo.className} self-stretch shrink-0 my-auto`}
            />
          ))}
        </div>
        
        <div className="flex w-full items-center gap-[40px_58px] justify-between flex-wrap mt-2">
          {bottomLogos.map((logo, index) => (
            <img
              key={`bottom-${index}`}
              src={logo.src}
              alt={logo.alt}
              className={`${logo.className} self-stretch shrink-0 my-auto`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
