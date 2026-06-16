import type { ChangeEvent } from 'react'

interface OtpInputProps {
  value: string
  onChange: (value: string) => void
}

const OtpInput = ({
  value,
  onChange,
}: OtpInputProps) => {
  const handleChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const numbersOnly = event.target.value.replace(/\D/g, '')

    if (numbersOnly.length <= 4) {
      onChange(numbersOnly)
    }
  }

  return (
    <div className="border-b border-[#E2E2E2] pb-[15px]">
      <input
        autoFocus
        inputMode="numeric"
        maxLength={4}
        value={value}
        onChange={handleChange}
        placeholder="- - - -"
        className="w-full text-[20px] tracking-[8px] text-[#181725] outline-none placeholder:text-[#181725]"
      />
    </div>
  )
}

export default OtpInput