import { useState } from "react";

interface Props {
  images: string[];
}

const ProductImageSlider = ({ images }: Props) => {
  const [active, setActive] = useState(0);

  return (
    <div
      className="
bg-[#F2F3F2]

rounded-b-[25px]

h-[370px]

flex
flex-col
justify-center

px-[25px]
"
    >
      <div
        className="
flex-1

flex
items-center
justify-center
"
      >
        <img
          src={images[active]}
          alt="product"
          className="
max-h-[250px]
object-contain
"
        />
      </div>

      <div
        className="
flex
justify-center
gap-2

pb-[25px]
"
      >
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`
h-[4px]
rounded-full

transition-all

${active === index ? "w-[18px] bg-[#53B175]" : "w-[5px] bg-[#B3B3B3]"}

`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImageSlider;
