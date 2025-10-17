import React from 'react';

const CTASection = () => {
  const handleGetStarted = () => {
    // Handle get started action
    console.log('Get started clicked');
  };

  return (
    <section className="justify-center items-stretch z-0 flex w-full flex-col overflow-hidden bg-[#097484] px-20 py-10 max-md:max-w-full max-md:px-5">
      <div className="flex w-full flex-col items-stretch justify-center max-md:max-w-full">
        <div className="flex w-full flex-col items-stretch text-center max-md:max-w-full">
          <h2 className="text-white text-4xl font-bold leading-none max-md:max-w-full">
            The cloud service you actually need
          </h2>
          <p className="text-[#C9C7C7] text-xl font-medium leading-[30px] mt-4 max-md:max-w-full text-center mx-auto max-w-[878px]">
            At Vontech Group, we offer a range of specialized cloud and
            technology services designed to drive innovation, enhance
            efficiency, and help businesses of all sizes achieve their goals.
          </p>
        </div>
        
        <button 
          onClick={handleGetStarted}
          className="justify-center items-center self-center flex gap-2 text-xl text-[#181818] font-semibold bg-[#FFE21B] mt-10 px-8 py-3 rounded-[20px] hover:bg-[#FFD700] transition-colors max-md:px-5"
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default CTASection;
