import React from 'react';

const AboutSection = () => {
  return (
    <section className="justify-center items-stretch z-0 flex w-full flex-col overflow-hidden bg-[#FBFBFB] px-20 py-[60px] max-md:max-w-full max-md:px-5">
      <div className="flex w-full items-center gap-[40px_60px] justify-center flex-wrap md:flex-row-reverse max-md:max-w-full">
        <div className="self-stretch min-w-60 w-[676px] my-auto max-md:max-w-full">
          <div className="w-full max-md:max-w-full">
            <div className="flex w-full flex-col items-stretch justify-center max-md:max-w-full">
              <div className="text-[#181818] text-left text-sm font-medium leading-[1.4]">
                About Us
              </div>
              <div className="w-full text-4xl font-bold leading-none mt-6 max-md:max-w-full">
                <div className="bg-clip-text max-md:max-w-full">
                  Built for success
                </div>
                <div className="bg-clip-text mt-2 max-md:max-w-full">
                  Born in the cloud
                </div>
                <div className="min-h-0.5 w-[90px] bg-[#181818] mt-2 border-[rgba(24,24,24,1)] border-solid border-2" />
              </div>
            </div>
            
            <p className="text-[#393C3D] text-xl font-medium leading-[30px] mt-8 max-md:max-w-full">
              At Vontech, we specialize in helping businesses of all sizes
              <br />
              achieve their cloud goals. With deep expertise in cloud
              <br />
              technologies, we design strategies that create new
              <br />
              opportunities, optimize operations, and transform experiences.
              <br />
              Whether you're in healthcare, finance, retail, or manufacturing,
              <br />
              our proven track record speaks volumes.
            </p>
          </div>
          
          <div className="flex w-full gap-[40px_58px] justify-between flex-wrap mt-10 max-md:max-w-full">
            <article className="flex min-w-60 flex-col w-[352px]">
              <h3 className="text-center text-4xl font-bold leading-none bg-clip-text">
                Vision
              </h3>
              <p className="flex w-[274px] max-w-full gap-2.5 text-xl text-[#393C3D] font-medium leading-[30px] mt-4">
                To be the premier cloud solutions provider, recognized for
                our expertise, and unwavering commitment to customer
                success.
              </p>
            </article>
            
            <article className="min-w-60 w-[264px]">
              <h3 className="text-4xl font-bold leading-none bg-clip-text">
                Mission
              </h3>
              <p className="flex max-w-full w-[264px] items-center gap-2.5 text-xl text-[#393C3D] font-medium leading-[30px] justify-center mt-4">
                To empower businesses with cutting-edge cloud solutions,
                enabling them to achieve greater agility, efficiency, and
                growth.
              </p>
            </article>
          </div>
        </div>
        
        <div className="justify-center items-stretch self-stretch flex min-w-60 flex-col overflow-hidden w-[392px] bg-white my-auto rounded-[99999997952px]">
          <img
            src="https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/d388d146a8bd8c909eefa0214e2b879682d3b6b7?placeholderIfAbsent=true"
            alt="VonTech team collaboration"
            className="aspect-[0.81] object-contain w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
