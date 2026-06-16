import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import {
  ArrowLeft,
  SlidersHorizontal,
} from 'lucide-react'

import ProductCard from '../../components/product/ProductCard'

import { useProductStore } from '../../stores/productStore'
import { useFilterStore } from '../../stores/filterStore'

import categories from '../../data/categories.json'

const CategoryProducts = () => {
  const navigate = useNavigate()

  const { category } = useParams()

  const products = useProductStore(state => state.products)

  const selectedCategories = useFilterStore(
    state => state.categories
  )

  const setCategories = useFilterStore(
    state => state.setCategories
  )

  const categoryInfo = categories.find(
    item => item.slug === category
  )

  const filteredProducts = products.filter(product => {
    if (selectedCategories.length === 0) {
      return true
    }

    return selectedCategories.includes(product.category)
  })

  useEffect(() => {
    if (category) {
      setCategories([category])
    }
  }, [category, setCategories])

  return (
    <main className="min-h-screen bg-white px-[25px] pb-[30px]">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <header className="flex items-center justify-between pt-[55px]">
          <button onClick={() => navigate(-1)}>
            <ArrowLeft />
          </button>

          <h1 className="text-[20px] font-semibold text-[#181725]">
            {categoryInfo?.name}
          </h1>

          <button onClick={() => navigate('/filter')}>
            <SlidersHorizontal />
          </button>
        </header>

        {/* Products */}
        <section className="mt-[30px] grid grid-cols-2 gap-[15px] lg:grid-cols-4">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </section>
      </div>
    </main>
  )
}

export default CategoryProducts