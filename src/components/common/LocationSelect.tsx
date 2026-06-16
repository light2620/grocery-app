import { ChevronDown } from 'lucide-react'

interface LocationSelectProps {
  label: string
  value: string
  placeholder: string
  options: string[]
  onChange: (value: string) => void
}

const LocationSelect = ({
  label,
  value,
  placeholder,
  options,
  onChange,
}: LocationSelectProps) => {
  return (
    <div className="w-full">
      <label className="mb-[15px] block text-[16px] font-semibold text-[#7C7C7C]">
        {label}
      </label>

      <div className="relative border-b border-[#E2E2E2] pb-[15px]">
        <select
          value={value}
          onChange={event => onChange(event.target.value)}
          className="w-full appearance-none bg-transparent text-[18px] font-medium text-[#181725] outline-none"
        >
          <option value="">
            {placeholder}
          </option>

          {options.map(item => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          ))}
        </select>

        <ChevronDown
          size={22}
          className="pointer-events-none absolute right-0 top-1 text-[#7C7C7C]"
        />
      </div>
    </div>
  )
}

export default LocationSelect