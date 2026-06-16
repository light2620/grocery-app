import { useState } from "react";
import { Link } from "react-router-dom";


import AuthInput from "../../components/auth/AuthInput";
import Button from "../../components/common/Button";


import carrot from "../../assets/images/carrot-color.svg";



const Login = () => {


  const [email,setEmail] =
    useState("");


  const [password,setPassword] =
    useState("");




  const handleLogin = () => {

    console.log({
      email,
      password,
    });


    // later auth zustand

  };




  return (

    <main
      className="
        min-h-screen

        bg-white

        px-[25px]

        flex

        md:items-center
        md:justify-center
      "
    >



      <section
        className="
          w-full

          pt-[80px]

          md:pt-0
          md:max-w-[430px]
        "
      >




        {/* logo */}

        <div
          className="
            flex
            justify-center

            mb-[80px]

            md:mb-[70px]
          "
        >

          <img

            src={carrot}

            alt="nectar"

            className="
              w-[47px]
            "

          />

        </div>






        <h1
          className="
            text-[#181725]

            text-[26px]
            leading-[29px]

            font-semibold
          "
        >

          Loging

        </h1>



        <p
          className="
            mt-[15px]

            text-[16px]

            text-[#7C7C7C]
          "
        >

          Enter your emails and password

        </p>








        <div
          className="
            mt-[40px]

            flex
            flex-col

            gap-[30px]
          "
        >


          <AuthInput

            label="Email"

            type="email"

            value={email}

            onChange={setEmail}

          />




          <AuthInput

            label="Password"

            type="password"

            value={password}

            onChange={setPassword}

          />



        </div>







        <div
          className="
            mt-[20px]

            text-right
          "
        >


          <button
            className="
              text-[14px]

              text-[#181725]
            "
          >

            Forgot Password?

          </button>


        </div>







        <div
          className="
            mt-[30px]
          "
        >


          <Button
            onClick={handleLogin}
          >

            Log In

          </Button>


        </div>







        <p
          className="
            mt-[25px]

            text-center

            text-[16px]

            font-semibold

            text-[#181725]
          "
        >


          Don’t have an account?


          {" "}


          <Link

            to="/signup"

            className="
              text-[#53B175]
            "
          >

            Singup

          </Link>



        </p>




      </section>



    </main>

  );

};


export default Login;