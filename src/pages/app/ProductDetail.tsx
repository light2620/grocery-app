import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import {
  ArrowLeft,
  ChevronDown,
  ChevronRight,
  Heart,
  Minus,
  Plus,
  Share2,
  Star,
} from 'lucide-react'

import ProductImageSlider from '../../components/product/ProductImageSlider'

import { useCartStore } from '../../stores/cartStore'
import { useProductStore } from '../../stores/productStore'
import { useFavoriteStore } from '../../stores/favoriteStore'

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [qty, setQty] = useState(1)

  const addToCart = useCartStore(state => state.addToCart)

  const { toggleFavorite, isFavorite } = useFavoriteStore()

  const product = useProductStore(state =>
    state.products.find(item => item.id === Number(id))
  )

  const liked = product ? isFavorite(product.id) : false

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        Product not found
      </main>
    )
  }

  const decreaseQty = () => {
    setQty(prev => Math.max(1, prev - 1))
  }

  const increaseQty = () => {
    setQty(prev => Math.min(product.stock, prev + 1))
  }

  const handleAddCart = () => {
    addToCart(product, qty)
    navigate('/cart')
  }

  return (
    <main className="min-h-screen bg-white pb-[30px] md:flex md:justify-center">
      <div className="w-full md:max-w-[430px]">
        {/* IMAGE SECTION */}
        <div className="relative">
          <ProductImageSlider images={product.images} />

          <button
            onClick={() => navigate(-1)}
            className="absolute left-[25px] top-[55px]"
          >
            <ArrowLeft />
          </button>

          <button className="absolute right-[25px] top-[55px]">
            <Share2 />
          </button>
        </div>

        <section className="px-[25px]">
          {/* TITLE */}
          <div className="mt-[25px] flex justify-between gap-4">
            <div>
              <h1 className="text-[24px] font-semibold text-[#181725]">
                {product.name}
              </h1>

              <p className="mt-[5px] text-[#7C7C7C]">
                {product.quantity}
              </p>
            </div>

            <button onClick={() => toggleFavorite(product)}>
              <Heart
                fill={liked ? '#53B175' : 'none'}
                className={
                  liked ? 'text-[#53B175]' : 'text-[#7C7C7C]'
                }
              />
            </button>
          </div>

          {/* QUANTITY */}
          <div className="mt-[35px] flex items-center justify-between">
            <div className="flex items-center gap-5">
              <button
                onClick={decreaseQty}
                disabled={qty === 1}
                className="transition active:scale-90 disabled:opacity-40"
              >
                <Minus className="text-[#B3B3B3]" />
              </button>

              <span className="flex h-[45px] w-[45px] items-center justify-center rounded-[12px] border border-[#E2E2E2] text-[18px] font-semibold">
                {qty}
              </span>

              <button
                onClick={increaseQty}
                disabled={qty === product.stock}
                className="transition active:scale-90 disabled:opacity-40"
              >
                <Plus className="text-[#53B175]" />
              </button>
            </div>

            <strong className="text-[24px] font-semibold">
              ${product.price}
            </strong>
          </div>

          {/* DETAILS */}
          <div className="mt-[30px] border-t border-[#E2E2E2]">
            <div className="flex justify-between py-[18px]">
              <strong>Product Detail</strong>
              <ChevronDown />
            </div>

            <p className="leading-[22px] text-[#7C7C7C]">
              {product.description}
            </p>
          </div>

          {/* NUTRITION */}
          <div className="mt-[20px] flex justify-between border-t border-[#E2E2E2] py-[18px]">
            <strong>Nutritions</strong>

            <div className="flex items-center gap-3">
              <span className="rounded bg-gray-100 px-2 text-xs">
                {product.nutrition}
              </span>

              <ChevronRight />
            </div>
          </div>

          {/* REVIEW */}
          <div className="flex justify-between border-t border-[#E2E2E2] py-[18px]">
            <strong>Review</strong>

            <div className="flex items-center gap-1">
              {Array(product.rating)
                .fill(null)
                .map((_, index) => (
                  <Star
                    key={index}
                    size={16}
                    fill="#F3603F"
                    className="text-[#F3603F]"
                  />
                ))}

              <ChevronRight />
            </div>
          </div>

          {/* CART BUTTON */}
          <button
            onClick={handleAddCart}
            className="mt-[20px] h-[67px] w-full rounded-[19px] bg-[#53B175] text-[18px] font-semibold text-white transition active:scale-95"
          >
            Add To Basket
          </button>
        </section>
      </div>
    </main>
  )
}

export default ProductDetail