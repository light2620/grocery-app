import { useNavigate } from 'react-router-dom'

import type { Category } from '../../types/category'

interface CategoryCardProps {
  category: Category
}

const CategoryCard = ({
  category,
}: CategoryCardProps) => {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate(`/category/${category.slug}`)}
      style={{
        backgroundColor: category.background,
        borderColor: category.border,
      }}
      className="
        flex h-[190px]
        flex-col
        items-center
        justify-center

        rounded-[18px]
        border

        px-3

        transition
        active:scale-95
      "
    >
      <img
        src={category.image}
        alt={category.name}
        className="h-[85px] object-contain"
      />

      <h3 className="mt-[20px] text-center text-[16px] font-normal leading-[22px] text-[#181725]">
        {category.name}
      </h3>
    </button>
  )
}

export default CategoryCard