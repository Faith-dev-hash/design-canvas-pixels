import React from 'react';

const MetricsSection = () => {
  const metrics = [
    {
      value: "+20%",
      title: "Customers Served",
      description: "We've proudly served over 20 customers, delivering cloud solutions that are tailored to their unique needs and business goals."
    },
    {
      value: "+30%",
      title: "Cloud Solutions Deployed",
      description: "We've proudly served over 20 customers, delivering cloud solutions that are tailored to their unique needs and business goals."
    },
    {
      value: "+5%",
      title: "Average Customer Satisfaction",
      description: "Our customers consistently rate us highly, with an average satisfaction score reflecting our dedication to quality, reliability, and exceptional support."
    }
  ];

  return (
    <section className="z-0 w-full text-center bg-white pt-[60px] pb-[120px] px-20 max-md:max-w-full max-md:pb-[100px] max-md:px-5">
      <div className="flex w-full flex-col items-stretch max-md:max-w-full">
        <h2 className="text-4xl font-bold leading-none bg-clip-text max-md:max-w-full">
          Memory in number
        </h2>
        
        <div className="flex w-full items-center gap-[40px_100px] md:gap-8 justify-center flex-nowrap mt-10 max-md:max-w-full max-md:flex-wrap max-md:justify-between">
          {metrics.map((metric, index) => (
            <article key={index} className="self-stretch flex min-w-60 flex-col items-stretch justify-center w-[342px] md:w-[280px] md:flex-1 my-auto p-4">
              <div className="text-[#008000] text-5xl md:text-4xl font-bold leading-[1.2] self-center max-md:text-[40px]">
                {metric.value}
              </div>
              
              <div className="flex w-full flex-col items-stretch justify-center mt-5">
                <h3 className="text-[#181818] text-2xl md:text-xl font-semibold leading-[1.3]">
                  {metric.title}
                </h3>
                <p className="text-[#393C3D] text-lg md:text-base font-normal leading-[27px] md:leading-6 mt-4">
                  {metric.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
