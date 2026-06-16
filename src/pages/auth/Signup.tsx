import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import AuthInput from "../../components/auth/AuthInput";
import Button from "../../components/common/Button";

import carrot from "../../assets/images/carrot-color.svg";

const Signup = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const emailValid = email.includes("@");

  const handleSignup = () => {
    console.log({
      username,
      email,
      password,
    });

    navigate("/location");
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
            text-[26px]
            leading-[29px]

            font-semibold

            text-[#181725]
          "
        >
          Sign Up
        </h1>

        <p
          className="
            mt-[15px]

            text-[16px]

            text-[#7C7C7C]
          "
        >
          Enter your credentials to continue
        </p>

        <div
          className="
            mt-[40px]

            flex
            flex-col

            gap-[30px]
          "
        >
          <AuthInput label="Username" value={username} onChange={setUsername} />

          <AuthInput
            label="Email"
            type="email"
            value={email}
            verified={emailValid}
            onChange={setEmail}
          />

          <AuthInput
            label="Password"
            type="password"
            value={password}
            onChange={setPassword}
          />
        </div>

        {/* terms */}

        <p
          className="
            mt-[20px]

            text-[14px]
            leading-[25px]

            text-[#7C7C7C]
          "
        >
          By continuing you agree to our{" "}
          <span
            className="
              text-[#53B175]
            "
          >
            Terms of Service
          </span>
          <br />
          and{" "}
          <span
            className="
              text-[#53B175]
            "
          >
            Privacy Policy.
          </span>
        </p>

        <div
          className="
            mt-[30px]
          "
        >
          <Button onClick={handleSignup}>Sing Up</Button>
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
          Already have an account?{" "}
          <Link
            to="/login"
            className="
              text-[#53B175]
            "
          >
            Login
          </Link>
        </p>
      </section>
    </main>
  );
};

export default Signup;
