interface ButtonProps {
  children: string;
  onClick?: () => void;
}


const Button = ({
  children,
  onClick,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="
        w-full
        h-[67px]
        rounded-[19px]
        bg-[#53B175]
        text-white
        text-[18px]
        font-semibold
        transition
        active:scale-[0.98]
      "
    >
      {children}
    </button>
  );
};


export default Button;