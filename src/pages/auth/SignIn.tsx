import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

import MobileNumberInput from "../../components/auth/MobileNumberInput";
import SocialButton from "../../components/common/SocialButton";

import google from "../../assets/images/google.svg";
import facebook from "../../assets/images/facebook.svg";


const SignIn = () => {
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const [mobileInputView, setMobileInputView] =
    useState(false);


  const hasPhoneNumber =
    phone.trim().length > 0;



  const handleInputFocus = () => {

    if (window.innerWidth < 768) {

      setMobileInputView(true);

    }

  };



  const handleBack = () => {

    setMobileInputView(false);

  };



  const handleSubmit = () => {

    navigate("/verify-otp");


  };



  return (

    <main
      className="
        min-h-screen
        bg-white

        flex
        flex-col

        md:items-center
        md:justify-center
      "
    >


      {/* mobile back button */}

      {mobileInputView && (

        <button

          onClick={handleBack}

          aria-label="Go back"

          className="
            md:hidden

            mt-[55px]
            ml-[25px]

            w-fit
          "
        >

          <ArrowLeft size={28} />

        </button>

      )}






      {/* top grocery image */}

      {!mobileInputView && (

        <div
          className="
            w-full

            h-[370px]

            bg-[url('/images/signin-bg.png')]
            bg-cover
            bg-center


            md:h-[300px]
            md:max-w-[430px]
          "
        />

      )}






      {/* content */}

      <section
        className={`
          w-full

          px-[25px]

          md:max-w-[430px]

          ${
            mobileInputView
              ? "mt-[90px]"
              : ""
          }
        `}
      >


        <h1
          className="
            text-[#030303]

            text-[26px]
            leading-[29px]

            font-semibold

            mb-[30px]
          "
        >


          {mobileInputView ? (

            "Enter your mobile number"

          ) : (

            <>
              Get your groceries
              <br />
              with nectar
            </>

          )}


        </h1>






        {mobileInputView && (

          <p
            className="
              mb-[15px]

              text-[16px]

              font-semibold

              text-[#7C7C7C]
            "
          >

            Mobile Number

          </p>

        )}






        {/* input + desktop button */}

        <div
          className="
            flex
            items-center
            gap-3
          "
        >


          <div className="flex-1">

            <MobileNumberInput

              value={phone}

              onChange={setPhone}

              onFocus={handleInputFocus}

            />

          </div>






          {/* desktop submit */}

          {hasPhoneNumber && (

            <button

              onClick={handleSubmit}

              aria-label="Continue"

              className="
                hidden

                md:flex

                w-[45px]
                h-[45px]

                rounded-full

                bg-[#53B175]

                items-center
                justify-center

                text-white

                transition
                active:scale-95
              "
            >

              <ArrowRight />

            </button>

          )}


        </div>






        {/* mobile floating submit */}

        {mobileInputView && hasPhoneNumber && (

          <button

            onClick={handleSubmit}

            aria-label="Continue"

            className="
              md:hidden

              fixed

              right-[25px]
              bottom-[70px]

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

            <ArrowRight />

          </button>

        )}








        {/* social section */}

        {!mobileInputView && (

          <div>

            <p
              className="
                mt-[40px]
                mb-[37px]

                text-center

                text-[14px]

                font-semibold

                text-[#828282]
              "
            >

              Or connect with social media

            </p>



            <div
              className="
                flex
                flex-col
                gap-[20px]
              "
            >


              <SocialButton

                icon={google}

                text="Continue with Google"

                className="bg-[#5383EC]"

              />



              <SocialButton

                icon={facebook}

                text="Continue with Facebook"

                className="bg-[#4A66AC]"

              />


            </div>


          </div>

        )}



      </section>


    </main>

  );

};


export default SignIn;