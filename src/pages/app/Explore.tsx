import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  Search,
  SlidersHorizontal,
  X,
} from 'lucide-react'

import CategoryCard from '../../components/category/CategoryCard'
import ProductCard from '../../components/product/ProductCard'

import categoriesData from '../../data/categories.json'

import { useProductStore } from '../../stores/productStore'

import { useDebounce } from '../../hooks/useDebounce'

import type { Category } from '../../types/category'

const Explore = () => {
  const navigate = useNavigate()

  const [searchValue, setSearchValue] = useState('')
  const [inputActive, setInputActive] = useState(false)

  const debouncedSearch = useDebounce(searchValue, 300)

  const products = useProductStore(state => state.products)

  const categories = categoriesData as Category[]

  const showSearch = inputActive || searchValue.length > 0

  const searchedProducts = products.filter(product =>
    product.name
      .toLowerCase()
      .includes(debouncedSearch.toLowerCase())
  )

  const clearSearch = () => {
    setSearchValue('')
    setInputActive(false)
  }

  return (
    <main className="min-h-screen bg-white px-[25px] pb-[30px]">
      <div className="mx-auto max-w-7xl">
        {!showSearch && (
          <h1 className="pt-[60px] text-center text-[20px] font-semibold text-[#181725]">
            Find Products
          </h1>
        )}

        {/* Search */}
        <div
          className={`
            flex items-center gap-[15px]

            ${showSearch ? 'pt-[50px]' : 'mt-[30px]'}
          `}
        >
          <div className="flex h-[52px] flex-1 items-center gap-3 rounded-[15px] bg-[#F2F3F2] px-4">
            <Search size={22} />

            <input
              value={searchValue}
              placeholder="Search Store"
              onFocus={() => setInputActive(true)}
              onChange={event =>
                setSearchValue(event.target.value)
              }
              onBlur={() => {
                if (!searchValue) {
                  setInputActive(false)
                }
              }}
              className="flex-1 bg-transparent text-[14px] outline-none"
            />

            {searchValue && (
              <button onClick={clearSearch}>
                <X
                  size={18}
                  className="text-[#7C7C7C]"
                />
              </button>
            )}
          </div>

          {showSearch && (
            <button onClick={() => navigate('/filter')}>
              <SlidersHorizontal />
            </button>
          )}
        </div>

        {/* Categories */}
        {!showSearch && (
          <section className="mt-[20px] grid grid-cols-2 gap-[15px] md:grid-cols-3 lg:grid-cols-4">
            {categories.map(category => (
              <CategoryCard
                key={category.id}
                category={category}
              />
            ))}
          </section>
        )}

        {/* Search Result */}
        {showSearch &&
          (searchedProducts.length === 0 ? (
            <p className="mt-[150px] text-center text-[#7C7C7C]">
              No products found
            </p>
          ) : (
            <section className="mt-[30px] grid grid-cols-2 gap-[15px] md:grid-cols-3 lg:grid-cols-4">
              {searchedProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </section>
          ))}
      </div>
    </main>
  )
}

export default Explore