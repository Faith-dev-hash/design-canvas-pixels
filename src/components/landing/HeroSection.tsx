import React from 'react';

const HeroSection = () => {
  const handleConsultationClick = () => {
    // Handle consultation form or navigation
    console.log('Free consultation requested');
  };

  return (
    <section className="flex flex-col overflow-hidden relative z-0 min-h-[739px] w-full px-20 py-[227px] max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <img
        src="https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/51f871efe09395b3229980b7f61b2791a58903aa?placeholderIfAbsent=true"
        alt="Cloud technology background"
        className="absolute h-full w-full object-cover inset-0"
      />
      
      <div className="relative z-0 flex w-[630px] max-w-full flex-col items-stretch">
        <div className="w-full text-white">
          <h1 className="text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-[40px] max-md:leading-[54px]">
            Empowering Businesses with Innovative Cloud Solutions
          </h1>
          <p className="text-xl font-medium leading-[30px] mt-4 max-md:max-w-full">
            VonTech Group delivers tailored cloud strategies and services to
            optimize your operations, enhance security, and drive growth.
          </p>
        </div>
        
        <button 
          onClick={handleConsultationClick}
          className="justify-center items-center bg-[#FFE21B] flex gap-2 text-xl text-[#181818] font-semibold mt-10 px-8 py-3 rounded-[20px] hover:bg-[#FFD700] transition-colors max-md:px-5 w-fit"
        >
          Free Consultation
        </button>
      </div>
      
      <img
        src="https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/bea0d2baa510d7bbfcf0c021155da3ddfa3b03c5?placeholderIfAbsent=true"
        alt="Decorative wave pattern"
        className="aspect-[7.35] object-contain w-[1440px] absolute z-0 -translate-x-2/4 translate-y-[0%] h-[382px] left-2/4 bottom-0 max-md:max-w-full"
      />
    </section>
  );
};

export default HeroSection;
