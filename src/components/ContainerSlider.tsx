"use client";
import React, { ComponentProps } from "react";
import Button from "./form/Button";
import SliderBanner from "./SliderBanner";
import CardSide from "./CardSlide";
import { FaArrowCircleLeft, FaArrowCircleRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { Product } from "@/types/apiTypes";

interface Props extends ComponentProps<"div"> {
  products: Product[];
  type: "moreDiscount" | "moreSale";
}

const ContainerSlider = ({ products, type, ...rest }: Props) => {
  // const swiper = useSwiper();
  const findTopOff = products
    .map(
      (productItem) =>
        productItem.colors
          .sort((a, b) => a.off - b.off)
          .map((x) => x.off)
          .reverse()[0]
    )
    .sort((a, b) => a - b)
    .reverse()[0];
  return (
    <div
      className={`container-slider container-wrapper rounded-lg flex px-3 overflow-hidden ${type === "moreSale"
        ? "!bg-[rgb(190,24,93)]"
        : "!bg-[rgb(255,26,64)]"
        } `}
      {...rest}
    >
      <div className="w-72 relative">
        <SliderBanner type={type} topOff={findTopOff} />
        <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-end py-8">
          <button className="btn btn-primary">
            مشاهده همه
          </button>
        </div>
      </div>
      <Swiper
        spaceBetween={10}
        centeredSlides={false}
        slidesPerView={"auto"}
        loop={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        // onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="slides-wrapper h-full w-full grid-rows-[200px] relative after:absolute after:left-0 after:top-0 after:bottom-0 after:h-full after:w-1 after:-translate-x-2 after:z-50"
      >
        {products.map((productItem) => (
          <SwiperSlide key={productItem._id} className="w-[200px] py-8">
            <CardSide {...productItem} isHasTime={type === "moreDiscount"} />
          </SwiperSlide>
        ))}
        <div className="absolute w-28 h-12 bottom-8 left-4 z-[60] flex gap-2 items-center">
          <button className="btn btn-circle btn-primary"
          // onClick={() => swiper?.slidePrev()}
          >
            <FaChevronRight />
          </button>
          <button className="btn btn-circle btn-primary"
          // onClick={() => swiper?.slideNext()}
          >
            <FaChevronLeft />
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default ContainerSlider;
