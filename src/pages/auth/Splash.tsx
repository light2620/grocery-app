

import { useEffect } from "react";

import { useNavigate } from "react-router-dom";


import carrot from "../../assets/images/carrot.svg";
import nectar from "../../assets/images/nectar.svg";



const Splash = () => {


  const navigate = useNavigate();



  useEffect(() => {


    const timer = setTimeout(() => {


      navigate("/home", {
        replace: true,
      });


    }, 3000);




    return () =>
      clearTimeout(timer);



  }, [navigate]);





  return (

    <main
      className="
        min-h-screen

        bg-[#53B175]

        flex
        items-center
        justify-center
      "
    >



      <div
        className="
          flex
          items-center
          gap-3
        "
      >



        <img

          src={carrot}

          alt="Nectar Logo"

          className="
            w-[55px]
          "

        />




        <div>


          <img

            src={nectar}

            alt="Nectar"

            className="
              w-[180px]
            "

          />



          <p
            className="
              mt-1

              text-white

              text-[14px]
              leading-[18px]

              tracking-[5.5px]

              text-center
            "
          >

            online groceriet

          </p>



        </div>



      </div>



    </main>

  );

};



export default Splash;
