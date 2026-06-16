import PhoneInput from "react-phone-number-input";

import "react-phone-number-input/style.css";


interface MobileNumberInputProps {
  value: string;
  onChange: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}


const MobileNumberInput = ({
  value,
  onChange,
  onFocus,
  onBlur,
}: MobileNumberInputProps) => {


  return (

    <div
      className="
        w-full

        border-b
        border-[#E2E2E2]

        pb-[14px]
      "
    >


      <PhoneInput

        international

        defaultCountry="BD"

        value={value}

        onChange={(phone)=>{
          onChange(phone ?? "");
        }}

        onFocus={onFocus}

        onBlur={onBlur}

        className="
          text-[18px]
          leading-[18px]
          font-medium

          outline-none
        "
      />


    </div>

  );
};


export default MobileNumberInput;