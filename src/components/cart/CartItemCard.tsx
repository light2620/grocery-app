import {
  Minus,
  Plus,
  X,
} from 'lucide-react'

import type { CartItem } from '../../types/cart'

interface CartItemCardProps {
  item: CartItem
  increase: () => void
  decrease: () => void
  remove: () => void
}

const CartItemCard = ({
  item,
  increase,
  decrease,
  remove,
}: CartItemCardProps) => {
  const { product, quantity } = item

  return (
    <div className="flex gap-[25px] border-b border-[#E2E2E2] py-[30px]">
      {/* Image */}
      <img
        src={product.images[0]}
        alt={product.name}
        className="h-[75px] w-[75px] self-center object-contain"
      />

      <div className="flex-1">
        {/* Title */}
        <div className="flex justify-between gap-3">
          <div>
            <h3 className="text-[16px] font-semibold text-[#181725]">
              {product.name}
            </h3>

            <p className="mt-[5px] text-[14px] text-[#7C7C7C]">
              {product.quantity}
            </p>
          </div>

          <button onClick={remove}>
            <X className="text-[#B3B3B3]" />
          </button>
        </div>

        {/* Bottom */}
        <div className="mt-[20px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              disabled={quantity === 1}
              onClick={decrease}
              className="transition active:scale-90 disabled:opacity-30"
            >
              <Minus
                size={20}
                className="text-[#B3B3B3]"
              />
            </button>

            <span className="min-w-[25px] text-center text-[16px] font-medium text-[#181725]">
              {quantity}
            </span>

            <button
              disabled={quantity === product.stock}
              onClick={increase}
              className="transition active:scale-90 disabled:opacity-30"
            >
              <Plus
                size={20}
                className="text-[#53B175]"
              />
            </button>
          </div>

          <strong className="text-[18px] text-[#181725]">
            ${(product.price * quantity).toFixed(2)}
          </strong>
        </div>
      </div>
    </div>
  )
}

export default CartItemCard