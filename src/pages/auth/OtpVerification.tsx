import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";


import OtpInput from "../../components/auth/OtpInput";


const OtpVerification = () => {


  const [code,setCode] =
    useState("");
    const navigate = useNavigate();

  const isCompleted =
    code.length === 4;



  const handleSubmit = () => {

    console.log(code);

     navigate("/location");

  };

  const handleBack = () => {

    navigate("/signin")

  }




  return (

    <main
      className="
        min-h-screen

        bg-white

        flex
        flex-col

        px-[25px]

        md:items-center
        md:justify-center
      "
    >


      <section
        className="
          w-full

          md:max-w-[430px]
        "
      >


        {/* back */}


        <button

          aria-label="Back"

          className="
            mt-[55px]
            mb-[65px]
            w-fit
            cursor-pointer
            md:mt-0
          "
            onClick={handleBack}
        >

          <ArrowLeft size={28}/>

        </button>






        <h1
          className="
            text-[#181725]

            text-[26px]
            leading-[29px]

            font-semibold

            mb-[35px]
          "
        >

          Enter your 4-digit code

        </h1>






        <label
          className="
            block

            text-[16px]

            font-semibold

            text-[#7C7C7C]

            mb-[15px]
          "
        >

          Code

        </label>




        <OtpInput

          value={code}

          onChange={setCode}

        />








        <div
          className="
            fixed

            left-[25px]
            right-[25px]

            bottom-[55px]


            flex
            items-center
            justify-between


            md:static
            md:mt-[70px]
          "
        >


          <button
            className="
              text-[#53B175]

              text-[18px]

              font-medium
            "
          >

            Resend Code

          </button>





          {isCompleted && (

            <button

              onClick={handleSubmit}

              aria-label="Verify OTP"


              className="
                w-[67px]
                h-[67px]

                rounded-full

                bg-[#53B175]

                flex
                items-center
                justify-center

                text-white


                transition

                active:scale-95
              "
            >

              <ArrowRight/>

            </button>

          )}



        </div>



      </section>



    </main>

  );

};


export default OtpVerification;