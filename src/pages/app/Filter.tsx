import { X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import FilterCheckbox from '../../components/filter/filterCheckbox'

import { useFilterStore } from '../../stores/filterStore'

import categoriesData from '../../data/categories.json'

import type { Category } from '../../types/category'

const brandOptions = [
  'Individual Collection',
  'Cocola',
  'Ifad',
  'Kazi Farmas',
]

const Filter = () => {
  const navigate = useNavigate()

  const categoryOptions = categoriesData as Category[]

  const {
    categories,
    brands,
    toggleCategory,
    toggleBrand,
  } = useFilterStore()

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex h-[90px] items-center justify-between px-[25px]">
        <button onClick={() => navigate(-1)}>
          <X />
        </button>

        <h1 className="text-[20px] font-semibold">
          Filters
        </h1>

        <div className="w-6" />
      </header>

      <section className="relative min-h-[calc(100vh-90px)] rounded-t-[30px] bg-[#F2F3F2] px-[25px] pt-[30px]">
        {/* Categories */}
        <h2 className="mb-[25px] text-[22px] font-semibold">
          Categories
        </h2>

        <div className="flex flex-col gap-[20px]">
          {categoryOptions.map(category => (
            <FilterCheckbox
              key={category.id}
              label={category.name}
              checked={categories.includes(category.slug)}
              onClick={() => toggleCategory(category.slug)}
            />
          ))}
        </div>

        {/* Brands */}
        <h2 className="mb-[25px] mt-[35px] text-[22px] font-semibold">
          Brand
        </h2>

        <div className="flex flex-col gap-[20px]">
          {brandOptions.map(brand => (
            <FilterCheckbox
              key={brand}
              label={brand}
              checked={brands.includes(brand)}
              onClick={() => toggleBrand(brand)}
            />
          ))}
        </div>

        {/* Apply Button */}
        <button
          onClick={() => navigate(-1)}
          className="
            fixed bottom-[35px] left-[25px] right-[25px]

            h-[67px]

            rounded-[19px]
            bg-[#53B175]

            text-[18px]
            font-semibold
            text-white

            md:left-1/2
            md:w-[430px]
            md:-translate-x-1/2
          "
        >
          Apply Filter
        </button>
      </section>
    </main>
  )
}

export default Filter