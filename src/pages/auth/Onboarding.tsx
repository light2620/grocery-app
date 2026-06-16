import carrot from "../../assets/images/carrot.png";
import onboardingBg from "../../assets/images/onboarding.jpg";

import Button from "../../components/common/button";


const Onboarding = () => {


  return (

    <main
      className="
    min-h-screen
    bg-[url('/images/onboarding.png')]
    bg-cover
    bg-center

    flex
    items-end
    justify-center

    px-[30px]
    pb-[90px]

    md:items-center
  "

      style={{
        backgroundImage: `url(${onboardingBg})`,
      }}
    >


      <section
        className="
          w-full
          flex
          flex-col
          items-center

          md:max-w-[430px]
        "
      >


        <img
          src={carrot}
          alt=""
          className="
            w-[48px]
            mb-[35px]
          "
        />


        <h1
          className="
            text-white
            text-[48px]
            leading-[58px]
            font-semibold
            text-center
          "
        >

          Welcome <br />
          to our store

        </h1>



        <p
          className="
            mt-[19px]
            mb-[40px]
            text-[#FCFCFCB2]
            text-[16px]
            leading-[15px]
            text-center
          "
        >

          Ger your groceries in as fast as one hour

        </p>



        <Button>
          Get Started
        </Button>



      </section>


    </main>
  );
};


export default Onboarding;