import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Search } from 'lucide-react'

import ProductSection from '../../components/common/home/ProductSection'
import Categories from '../../components/common/home/Categories'

import { useProductStore } from '../../stores/productStore'

import carrot from '../../assets/images/carrot-color.svg'

const Home = () => {
  const { products, fetchProducts } = useProductStore()

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  const exclusiveProducts = products.filter(
    product => product.isExclusive
  )

  const bestSellingProducts = products.filter(
    product => product.isBestSelling
  )

  const groceryProducts = products.filter(
    product => !product.isBestSelling && !product.isExclusive
  )

  return (
    <main className="min-h-screen bg-white pb-[90px] lg:px-8">
      <div className="mx-auto max-w-7xl px-[25px]">
        {/* Header */}
        <header className="flex flex-col items-center pt-[55px]">
          <img
            src={carrot}
            alt="Carrot logo"
            className="w-[26px]"
          />

          <div className="mt-2 flex items-center gap-2 font-semibold text-[#4C4F4D]">
            <MapPin size={18} />
            Dhaka, Banassre
          </div>
        </header>

        {/* Search */}
        <div className="mt-5 flex h-[52px] items-center gap-3 rounded-[15px] bg-[#F2F3F2] px-4">
          <Search />

          <span className="text-[#7C7C7C]">
            Search Store
          </span>
        </div>

        {/* Screens Button */}
        <Link
          to="/screens"
          className="mt-5 flex h-[50px] items-center justify-center rounded-[15px] bg-[#53B175] font-semibold text-white"
        >
          View All Screens
        </Link>

        {/* Banner */}
        <img
          src="/images/home-banner.png"
          alt="Fresh grocery banner"
          className="mt-8 h-auto w-full rounded-[15px] object-cover"
        />

        {/* Products */}
        <ProductSection
          title="Exclusive Offer"
          products={exclusiveProducts}
        />

        <ProductSection
          title="Best Selling"
          products={bestSellingProducts}
        />

        <Categories />

        <ProductSection
          title=""
          products={groceryProducts}
        />
      </div>
    </main>
  )
}

export default Home