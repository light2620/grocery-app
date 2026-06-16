interface SocialButtonProps {
  icon: string;
  text: string;
  className?: string;
}


const SocialButton = ({
  icon,
  text,
  className = "",
}: SocialButtonProps) => {
  return (
    <button
      className={`
        min-h-[67px]
        w-full

        rounded-[19px]

        grid
        grid-cols-[55px_1fr_55px]
        items-center

        px-3
        py-3

        text-white
        text-[18px]
        leading-[22px]
        font-semibold

        transition
        active:scale-[0.98]

        ${className}
      `}
    >

      <div
        className="
          flex
          items-center
          justify-center
        "
      >
        <img
          src={icon}
          alt=""
          className="
            w-[22px]
            h-[22px]
            object-contain
          "
        />
      </div>


      <span
        className="
          text-center
          break-words
        "
      >
        {text}
      </span>


      <div />


    </button>
  );
};


export default SocialButton;