import { Check, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

interface AuthInputProps {
  label: string;
  type?: "text" | "email" | "password";
  value: string;
  verified?: boolean;
  onChange: (value: string) => void;
}

const AuthInput = ({
  label,
  type = "text",
  value,
  verified = false,
  onChange,
}: AuthInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div
      className="
        w-full
      "
    >
      <label
        className="
          block

          mb-[15px]

          text-[16px]
          font-semibold

          text-[#7C7C7C]
        "
      >
        {label}
      </label>

      <div
        className="
          flex
          items-center

          border-b
          border-[#E2E2E2]

          pb-[18px]
        "
      >
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          type={isPassword && showPassword ? "text" : type}
          className="
            flex-1

            outline-none

            text-[18px]
            font-medium

            text-[#181725]

            bg-transparent
          "
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => {
              setShowPassword((prev) => !prev);
            }}
          >
            {showPassword ? <Eye size={22} /> : <EyeOff size={22} />}
          </button>
        )}
        {verified && (
          <Check
            size={24}
            className="
      text-[#53B175]
    "
          />
        )}
      </div>
    </div>
  );
};

export default AuthInput;
