import { useState } from "react";
import PhoneInputLib from "react-phone-number-input";

import "react-phone-number-input/style.css";


interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
}


const PhoneInput = ({
  value,
  onChange,
}: PhoneInputProps) => {


  const [focused,setFocused] = useState(false);


  return (

    <div
      className={`
        border-b
        border-[#E2E2E2]

        pb-[15px]

        transition-all
        duration-300

        ${focused ? "mt-[10px]" : ""}
      `}
    >

      <PhoneInputLib

        international

        defaultCountry="BD"

        value={value}

        onChange={(val)=>onChange(val || "")}

        onFocus={()=>{
          setFocused(true)
        }}

        onBlur={()=>{
          setFocused(false)
        }}

        className="
          text-[18px]
          font-medium

          outline-none
        "
      />


    </div>

  );
};


export default PhoneInput;