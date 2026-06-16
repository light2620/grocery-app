interface SocialButtonProps {
  icon: string
  text: string
  className?: string
}

const SocialButton = ({
  icon,
  text,
  className = '',
}: SocialButtonProps) => {
  return (
    <button
      className={`
        grid min-h-[67px]
        w-full
        grid-cols-[55px_1fr_55px]
        items-center

        rounded-[19px]

        px-3
        py-3

        text-[18px]
        font-semibold
        leading-[22px]
        text-white

        transition
        active:scale-[0.98]

        ${className}
      `}
    >
      <div className="flex items-center justify-center">
        <img
          src={icon}
          alt=""
          className="h-[22px] w-[22px] object-contain"
        />
      </div>

      <span className="break-words text-center">
        {text}
      </span>

      <div />
    </button>
  )
}

export default SocialButton