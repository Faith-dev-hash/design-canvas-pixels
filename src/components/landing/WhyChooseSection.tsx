import React from 'react';

const WhyChooseSection = () => {
  const features = [
    "Expertise in multiple industries.",
    "Tailored solutions for unique challenges",
    "Proven success with leading organizations"
  ];

  return (
    <section className="items-stretch relative z-0 flex h-[528px] w-full flex-col overflow-hidden bg-[#B9BBBA] pt-10 px-20 max-md:max-w-full max-md:px-5">
      <div className="z-0 flex w-full flex-col items-stretch max-md:max-w-full">
        <h2 className="text-center text-4xl font-bold leading-none bg-clip-text max-md:max-w-full">
          Why Choose Vontech for Your Industry?
        </h2>
        
        <div className="self-center w-[577px] max-w-full mt-[60px] rounded-[0px_0px_0px_0px] max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-[38%] max-md:w-full max-md:ml-0">
              <div className="justify-center border shadow-[0_9px_9px_0_rgba(0,0,0,0.25)] bg-white z-10 flex mr-[-74px] min-h-[90px] gap-[11px] self-stretch text-xs my-auto pl-3 pr-2 pt-4 pb-[25px] rounded-[20px] border-solid border-[#6A6C6B] max-md:mt-10">
                <img
                  src="https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/08f17aad079004a3d79b276b71a46eb6b3509c07?placeholderIfAbsent=true"
                  alt="Solutions icon"
                  className="aspect-[1] object-contain w-6 shrink-0"
                />
                <div className="min-h-[49px] flex-1 shrink basis-[0%]">
                  <div className="text-[#181818] font-bold flex-1">
                    We craft sector-specific solutions to meet your goals.
                  </div>
                  <div className="text-[#262727] font-medium mt-2">
                    our track record speaks volumes.
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-[38%] ml-5 max-md:w-full max-md:ml-0">
              <div className="bg-white flex w-full flex-col overflow-hidden items-stretch mx-auto pt-1.5 pb-7 rounded-[35px] border-black border-solid border-[3px]">
                <div className="w-full pb-2.5 rounded-[38px]">
                  <div className="flex w-full gap-5 overflow-hidden justify-between pr-[25px] py-2 max-md:pr-5">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/6edcf91edb4809bd8c6f972f1d48e83664319418?placeholderIfAbsent=true"
                      alt="Phone status"
                      className="aspect-[3.69] object-contain w-12 self-stretch shrink-0 rounded-[13px]"
                    />
                    <div className="flex w-[60px] shrink-0 h-2.5 bg-[#262727] rounded-lg" />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/197d1e97c4c107e0125acead2e51141382aae091?placeholderIfAbsent=true"
                      alt="Battery indicator"
                      className="aspect-[4.88] object-contain w-11 shrink-0"
                    />
                  </div>
                </div>
                
                <div className="self-center flex items-center text-[6px] text-black font-semibold whitespace-nowrap tracking-[-0.34px] mt-[7px]">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/d9929d64c9a8e60fc9f247e9fb4a10c60ecbc654?placeholderIfAbsent=true"
                    alt="Lock icon"
                    className="aspect-[1] object-contain w-2.5 self-stretch shrink-0 my-auto"
                  />
                  <div className="self-stretch my-auto">
                    https/VonTech.com
                  </div>
                </div>
                
                <div className="bg-[rgba(248,247,243,1)] overflow-hidden mt-1.5 pt-3.5 pb-[53px] px-4">
                  <div className="text-[13px] text-black font-semibold whitespace-nowrap tracking-[-0.34px] leading-[1.4]">
                    <div>VonTech</div>
                    <img
                      src="https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/7798b87532aaec48977b47c2f57299de0b3b290c?placeholderIfAbsent=true"
                      alt="VonTech website preview"
                      className="aspect-[1.83] object-contain w-[216px] mt-[13px] rounded-[6px_6px_0px_0px]"
                    />
                  </div>
                  
                  <div className="w-[190px] max-w-full mt-2.5">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/908d391dd0d617e8bf0be669a559f63df2b2d0d4?placeholderIfAbsent=true"
                      alt="Rating stars"
                      className="aspect-[4.33] object-contain w-[26px]"
                    />
                    <div className="text-black text-[13px] font-semibold leading-[1.4] tracking-[-0.34px] mt-[5px]">
                      Welcome to VonTech!
                    </div>
                    <p className="text-[#393C3D] text-[8px] font-medium capitalize mt-[5px]">
                      we specialize in helping businesses of all sizes
                      <br />
                      achieve their cloud goals. With deep expertise in cloud
                      <br />
                      technologies,
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-[24%] ml-5 max-md:w-full max-md:ml-0">
              <div className="justify-between items-stretch border shadow-[0_9px_9px_0_rgba(0,0,0,0.12)] bg-white flex min-h-[173px] flex-col overflow-hidden w-full mt-[140px] px-[21px] py-[17px] rounded-[20px] border-solid border-[#6A6C6B] max-md:mt-10 max-md:px-5">
                <div className="flex w-full flex-col items-stretch">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/c25d77258500c60f508a5002b7be7b9c72884b1d?placeholderIfAbsent=true"
                    alt="VonTech logo"
                    className="aspect-[4.5] object-contain w-[45px] self-center"
                  />
                  <div className="flex w-full flex-col items-stretch mt-3">
                    <div className="text-[#181818] text-center text-[15px] font-semibold leading-[1.4]">
                      VonTech
                    </div>
                    <div className="text-[#262727] text-xs font-medium self-center">
                      The real master of cloud
                    </div>
                  </div>
                </div>
                
                <div className="self-center flex w-[54px] flex-col items-center text-[8px] text-black font-medium justify-center mt-[31px]">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/095074f8f9debf2d267cfa71b5d80a5249a235c9?placeholderIfAbsent=true"
                    alt="Rating visualization"
                    className="aspect-[3.04] object-contain w-full min-h-[23px] gap-[-11px]"
                  />
                  <button className="justify-center items-center flex gap-2.5 overflow-hidden bg-[#FFE21B] mt-2 px-2 py-1 rounded-[10px] hover:bg-[#FFD700] transition-colors">
                    Get In Touch
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="items-center absolute z-0 flex gap-3 text-xl text-[#181818] font-medium flex-nowrap bg-white right-0 bottom-0 max-md:max-w-full max-md:flex-wrap md:flex-col md:w-full md:relative md:mt-10">
        <div className="items-center rounded self-stretch flex min-w-60 gap-2.5 overflow-hidden text-white w-[472px] bg-[#097484] my-auto px-4 py-2 max-md:max-w-full md:w-full">
          <div className="text-white self-stretch flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
            {features[0]}
          </div>
        </div>
        
        {features.slice(1).map((feature, index) => (
          <div key={index} className="items-center rounded border bg-[rgba(9,116,132,0.04)] self-stretch flex min-w-60 gap-2.5 overflow-hidden w-[472px] my-auto px-4 py-2 border-solid border-[#097484] max-md:max-w-full md:w-full">
            <div className="text-[#181818] self-stretch flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
              {feature}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseSection;
