import React, { useState } from 'react';

const WhyChooseSection = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(0);

  const industries = [
    "Expertise in multiple industries.",
    "Tailored solutions for unique challenges",
    "Proven success with leading organizations"
  ];

  return (
    <section className="bg-[rgba(220,220,209,1)] w-full overflow-hidden text-4xl font-bold tracking-[-1px] max-md:max-w-full">
      <div className="flex flex-col relative min-h-[458px] w-full items-center pt-[47px] px-20 max-md:max-w-full max-md:px-5">
        <img
          src="/bgImage.jpg"
          alt="Background pattern"
          className="absolute h-full w-full object-cover inset-0"
        />
        <div className="relative w-[683px] max-w-full">
          <h2 className="bg-clip-text bg-[linear-gradient(180deg,#294C3C_0%,#097484_100%)] ml-[60px] max-md:max-w-full">
            Why Choose Vontech for Your Industry?
          </h2>
          <img
            src="/industry show case.png"
            alt="Industry showcase"
            className="aspect-[1.83] object-contain w-[623px] max-w-full mt-[27px] rounded-[35px]"
          />
        </div>
      </div>
      
      <div className="w-full max-md:max-w-full">
        <div className="flex min-h-11 w-full items-center gap-3 text-xl text-[rgba(0,45,36,1)] font-medium text-center tracking-[-0.54px] leading-[1.4] flex-wrap max-md:max-w-full">
          {industries.map((industry, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndustry(index)}
              className={`items-center rounded self-stretch flex min-w-60 gap-2.5 overflow-hidden capitalize grow shrink w-[334px] my-auto px-4 py-2 transition-all ${
                selectedIndustry === index
                  ? 'text-white bg-[#097484]'
                  : 'text-[rgba(0,45,36,1)] border bg-[rgba(9,116,132,0.04)] border-solid border-[#097484] hover:bg-[rgba(9,116,132,0.1)]'
              }`}
            >
              <span className="self-stretch my-auto">
                {industry}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
