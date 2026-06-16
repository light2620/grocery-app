import { Check } from 'lucide-react'

interface FilterCheckboxProps {
  label: string
  checked: boolean
  onClick: () => void
}

const FilterCheckbox = ({
  label,
  checked,
  onClick,
}: FilterCheckboxProps) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-[12px] text-[15px]"
    >
      <div
        className={`
          flex h-[20px]
          w-[20px]
          items-center
          justify-center

          rounded-[6px]
          border

          ${
            checked
              ? 'border-[#53B175] bg-[#53B175]'
              : 'border-[#B1B1B1]'
          }
        `}
      >
        {checked && (
          <Check
            size={15}
            className="text-white"
          />
        )}
      </div>

      <span
        className={
          checked
            ? 'text-[#53B175]'
            : 'text-[#181725]'
        }
      >
        {label}
      </span>
    </button>
  )
}

export default FilterCheckbox