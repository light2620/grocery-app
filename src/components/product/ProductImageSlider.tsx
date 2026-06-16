import { useState } from 'react'

interface ProductImageSliderProps {
  images: string[]
}

const ProductImageSlider = ({
  images,
}: ProductImageSliderProps) => {
  const [active, setActive] = useState(0)

  return (
    <div className="flex h-[370px] flex-col justify-center rounded-b-[25px] bg-[#F2F3F2] px-[25px]">
      <div className="flex flex-1 items-center justify-center">
        <img
          src={images[active]}
          alt="Product"
          className="max-h-[250px] object-contain"
        />
      </div>

      <div className="flex justify-center gap-2 pb-[25px]">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`
              h-[4px]
              rounded-full

              transition-all

              ${
                active === index
                  ? 'w-[18px] bg-[#53B175]'
                  : 'w-[5px] bg-[#B3B3B3]'
              }
            `}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductImageSlider