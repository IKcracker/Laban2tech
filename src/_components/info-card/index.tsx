import Image, { StaticImageData } from "next/image";
import React from "react";

type Cart = {
  title: string;
  paragraph: string;
  image: StaticImageData;
  width?: string;
  height?: string;
};
export default function Index({ title, paragraph, image }: Cart) {
  return (
    <div className="rounded-md overflow-hidden">
      <div className="w-full  ">
        <Image alt="" src={image} className={`bg-black   rounded-md`} />
      </div>
      <div>
        <h5 className="text-4xl mb-2">{title}</h5>
        <p className="text-gray-600">{paragraph}</p>
      </div>
    </div>
  );
}
