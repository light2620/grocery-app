import { Plus } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import type { Product } from '../../types/product'

interface ProductCardProps {
  product: Product
}

const ProductCard = ({
  product,
}: ProductCardProps) => {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="
        min-w-[173px]

        rounded-[18px]
        border
        border-[#E2E2E2]

        p-[15px]
      "
    >
      <img
        src={product.images[0]}
        alt={product.name}
        className="mx-auto h-[90px] object-contain"
      />

      <h3 className="mt-[20px] text-[16px] font-semibold text-[#181725]">
        {product.name}
      </h3>

      <p className="mt-[5px] text-[14px] text-[#7C7C7C]">
        {product.quantity}
      </p>

      <div className="mt-[20px] flex items-center justify-between">
        <strong className="text-[18px]">
          ${product.price}
        </strong>

        <button className="flex h-[45px] w-[45px] items-center justify-center rounded-[17px] bg-[#53B175] text-white">
          <Plus />
        </button>
      </div>
    </div>
  )
}

export default ProductCard