"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Testimonial } from '@/cosmic/blocks/testimonials/Testimonial';
import { TestimonialType } from '@/interfaces';

import 'swiper/css';
import 'swiper/css/navigation';

const SwiperComponent = ({ testimonials }: { testimonials: TestimonialType[] }) => {
  return (
    <div>
      <Swiper spaceBetween={50} slidesPerView={1} autoplay navigation modules={[Navigation, Autoplay]}>
        {testimonials?.map((testimonial: TestimonialType, index: number) => {
          return (
            <SwiperSlide key={index}>
              <Testimonial testimonial={testimonial} key={testimonial.slug} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
