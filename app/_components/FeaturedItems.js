"use client";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade"; // Import fade effect styles

// Import required modules
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Button } from "@chakra-ui/react";

const featuredItem = [
  {
    src: "/featured-1.jpg",
    alt: "Makeup",
    promo_top_right: "New Collection",
    promo_middle_left_main: "24/25",
    promo_middle_left_sub: "Winter Summer Collection",
    class: "object-cover object-top",
  },
  {
    src: "/featured-2.jpg",
    alt: "Makeup",
    promo_top_right: "Free shipping on orders over Rs.5000",
    class: "object-cover ",
  },
  {
    src: "/featured-3.jpg",
    alt: "Makeup",
    promo_top_right: "Buy two, get one 50% off on any purchase",
    class: "object-cover ",
  },
];

export default function FeaturedItems() {
  return (
    <div className="h-[85%] w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={50}
        // navigation={false}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
        effect="fade"
        loop
        className="h-full"
      >
        {featuredItem.map((item, index) => (
          <SwiperSlide key={index} className="relative">
            <Image src={item.src} alt={item.alt} fill className={item.class} />
            {item.promo_top_right && (
              <div className="absolute inset-0 top-10 left-0 pl-12 text-white p-4 uppercase w-96 flex flex-col gap-12">
                <p className="text-feature">{item.promo_top_right}</p>
                <Button
                  variant="solid"
                  bg="black" // Directly sets the background to black
                  color="white" // Sets the text color to white for contrast
                  className="w-40"
                >
                  Shop Now
                </Button>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
