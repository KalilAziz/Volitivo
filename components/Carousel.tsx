"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as CarouselComponent } from "react-responsive-carousel";
import Image from "next/image";

export const Carousel = () => {
  return (
    <CarouselComponent autoPlay infiniteLoop className="-z-10">
      <div>
        <Image
          className="w-full max-h-[600px] object-cover"
          src="https://images.alphacoders.com/943/thumb-1920-943148.jpg"
          alt=""
          width={1920}
          height={600}
        />
        <p className="legend">Coneça nossos bebefícios</p>
      </div>
      <div>
        <Image
          className="w-full max-h-[600px] object-cover"
          src="https://images.alphacoders.com/943/thumb-1920-943148.jpg"
          alt=""
          width={1920}
          height={600}
        />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <Image
          className="w-full max-h-[600px] object-cover"
          src="https://images.alphacoders.com/943/thumb-1920-943148.jpg"
          alt=""
          width={1920}
          height={600}
        />
        <p className="legend">Legend 3</p>
      </div>
    </CarouselComponent>
  );
};
