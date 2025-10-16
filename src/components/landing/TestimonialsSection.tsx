import React, { useState } from 'react';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const testimonials = [
    {
      text: "VonTech Group enabled my start-up company to rapidly scale our operations and bring innovative products to the market at a very fast rate.",
      name: "Richard Henry",
      role: "Growing Startup",
      avatar: "https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/4f1153f72cb453fe4c312ab00083a7f854900d7a?placeholderIfAbsent=true"
    },
    {
      text: "VonTech Group helped me optimize my company's cloud infrastructure, resulting in significant cost savings and improved efficiency.",
      name: "Daniel Billy",
      role: "Cloud Organisation",
      avatar: "https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/045ea588f8ed57dc36ad872e7a3d99f12b40acf9?placeholderIfAbsent=true"
    },
    {
      text: "My financial institution partnered with VonTech Group to implement robust security measures and ensure compliance in their cloud environment.",
      name: "Dora Florence",
      role: "Financial Institution",
      avatar: "https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/76dede8729494b93ff740f2ac085453836533e90?placeholderIfAbsent=true"
    }
  ];

  const StarRating = () => (
    <div className="self-stretch flex items-center gap-0.5 my-auto">
      {[...Array(4)].map((_, i) => (
        <img
          key={i}
          src="https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/85e6793790c808534406f93a9e34e544907da47f?placeholderIfAbsent=true"
          alt="Star"
          className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
        />
      ))}
      <img
        src="https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/621e208e29a2ab0ab98a4fe4d0449983e6e3a56f?placeholderIfAbsent=true"
        alt="Half star"
        className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
      />
    </div>
  );

  return (
    <section className="bg-[rgba(242,244,243,1)] z-0 w-full overflow-hidden pt-10 pb-[120px] px-20 max-md:max-w-full max-md:pb-[100px] max-md:px-5">
      <div className="flex w-full flex-col items-stretch max-md:max-w-full">
        <h2 className="text-center text-4xl font-bold tracking-[-0.1px] bg-clip-text self-center">
          Client success story
        </h2>
        
        <div className="flex w-full flex-col items-stretch mt-10 max-md:max-w-full">
          <div className="flex w-full items-center gap-5 justify-center flex-wrap max-md:max-w-full">
            {testimonials.map((testimonial, index) => (
              <article key={index} className="border self-stretch min-w-60 overflow-hidden w-[402px] my-auto px-[22px] py-8 rounded-[20px] border-solid border-[#E0E0E0] hover:shadow-lg transition-shadow max-md:px-5">
                <blockquote className="text-[#097484] text-base font-normal leading-6">
                  {testimonial.text}
                </blockquote>
                
                <div className="flex w-full items-center gap-4 mt-10">
                  <div className="self-stretch flex items-center gap-4 flex-1 shrink basis-[0%] my-auto">
                    <img
                      src={testimonial.avatar}
                      alt={`${testimonial.name} profile`}
                      className="aspect-[1] object-contain w-[60px] self-stretch shrink-0 my-auto rounded-[100px]"
                    />
                    <div className="self-stretch flex flex-col items-stretch justify-center flex-1 shrink basis-[0%] my-auto">
                      <div className="text-[#097484] text-xl font-medium">
                        {testimonial.name}
                      </div>
                      <div className="text-[#6A6C6B] text-lg font-normal">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <StarRating />
                </div>
              </article>
            ))}
          </div>
          
          <div className="self-center flex items-center gap-1 mt-4">
            {[...Array(4)].map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`aspect-[1/1] self-stretch flex w-3 shrink-0 h-3 my-auto rounded-[1000px] transition-colors ${
                  index === activeTestimonial ? 'bg-[#097484]' : 'bg-[rgba(215,209,209,1)]'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
