import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      icon: "https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/5d4a267c4c1f715d5754c51d8e4d23ea0e8654f0?placeholderIfAbsent=true",
      title: "Cloud Consult",
      description: "We craft a cloud roadmap uniquely tailored to your business goals, ensuring every step supports your growth, enhances efficiency, and delivers maximum ROI."
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/c7c2fb0255192f659daf8b571a109c2ed9094ad8?placeholderIfAbsent=true",
      title: "Cloud Security",
      description: "We safeguard your data and applications with advanced security strategies, keeping you protected, compliant, and confident every step of the way."
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/5302faad3a6319d2e90582b66909a453da1744b1?placeholderIfAbsent=true",
      title: "Cloud Transition",
      description: "We handle your cloud migration smoothly, moving your infrastructure with care and optimizing management so you can focus on what matters most."
    }
  ];

  return (
    <section className="justify-center items-stretch z-0 flex w-full flex-col overflow-hidden bg-[#FBFBFB] pt-[60px] pb-[120px] px-20 max-md:max-w-full max-md:pb-[100px] max-md:px-5">
      <div className="w-full max-md:max-w-full">
        <h2 className="text-center text-4xl font-bold leading-none bg-clip-text max-md:max-w-full">
          Explore Our Work
        </h2>
        
        <div className="flex w-full items-center gap-[40px_60px] justify-center flex-wrap mt-20 max-md:max-w-full max-md:mt-10">
          <button className="aspect-[1/1] object-contain w-[50px] self-stretch shrink-0 my-auto hover:scale-110 transition-transform">
            <img
              src="https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/5b18a16f8fb742f20653d00ccd48f3cbb25d80bd?placeholderIfAbsent=true"
              alt="Previous services"
              className="w-full h-full object-contain"
            />
          </button>
          
          <div className="self-stretch flex min-w-60 items-center gap-[40px_60px] flex-wrap my-auto max-md:max-w-full">
            {services.map((service, index) => (
              <article key={index} className="self-stretch relative flex min-w-60 gap-[-67px] w-[262px] my-auto">
                <div className="absolute z-0 flex w-[137px] shrink-0 h-[114px] bg-[#294C3C] rounded-[6px_30px] -right-2.5 -top-2.5" />
                <div className="absolute z-0 flex w-[137px] shrink-0 h-[114px] bg-[#294C3C] rounded-[6px_30px] -left-2.5 -bottom-2.5" />
                
                <div className="border shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] z-0 min-w-60 min-h-[360px] w-[262px] bg-white p-[38px] rounded-[30px] border-solid border-[#E0E0E0] hover:shadow-lg transition-shadow max-md:px-5">
                  <div className="justify-center items-center flex min-h-[54px] w-[54px] flex-col overflow-hidden h-[54px] bg-[#097484] px-3 rounded-[10px]">
                    <img
                      src={service.icon}
                      alt={`${service.title} icon`}
                      className="aspect-[1.25] object-contain w-full fill-white"
                    />
                  </div>
                  
                  <div className="w-full flex-1 mt-6">
                    <h3 className="text-[#181818] text-xl font-medium">
                      {service.title}
                    </h3>
                    <p className="text-[#393C3D] text-base font-normal leading-6 mt-2">
                      {service.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <button className="aspect-[1/1] object-contain w-[50px] self-stretch shrink-0 my-auto hover:scale-110 transition-transform">
            <img
              src="https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/5e128ac95a7d7d0bfcc37bb9d163c727bf567b51?placeholderIfAbsent=true"
              alt="Next services"
              className="w-full h-full object-contain"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
