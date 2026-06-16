import { ArrowLeft } from "lucide-react";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

import Button from "../../components/common/button";
import LocationSelect from "../../components/common/LocationSelect";
import locations from "../../data/locations.json";

import locationImage from "../../assets/images/location.png";

const Location = () => {
  const navigate = useNavigate();
  const [zone, setZone] = useState("");

  const [area, setArea] = useState("");

  const selectedZone = locations.find((item) => item.zone === zone);

  const areaOptions = selectedZone?.areas ?? [];

  const handleSubmit = () => {
    // later:
    // save location in zustand

    navigate("/home");
  };

  return (
    <main
      className="
    min-h-screen
    bg-white

    px-[28px]
    py-[40px]

    flex
    flex-col

    md:items-center
    md:justify-center
    md:px-6
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
          className="
            mt-[55px]
            cursor-pointer
            md:mt-0 
          "
          onClick={() => {
            navigate(-1);
          }}
        >
          <ArrowLeft size={28} />
        </button>

        {/* illustration */}

        <div
          className="
            mt-[60px]

            flex
            justify-center
          "
        >
          <img
            src={locationImage}
            alt="location"
            className="
              w-[224px]
              h-auto
            "
          />
        </div>

        <h1
          className="
            mt-[40px]

            text-center

            text-[#181725]

            text-[26px]
            leading-[29px]

            font-semibold
          "
        >
          Select Your Location
        </h1>

        <p
          className="
            mt-[15px]

            text-center

            text-[16px]
            leading-[24px]
            font-[400]
            text-[#7C7C7C]
          "
        >
          Switch on your location to stay in tune with
          <br />
          what’s happening in your area
        </p>

        <div
          className="
            mt-[85px]

            flex
            flex-col
            gap-[30px]
          "
        >
          <LocationSelect
            label="Your Zone"
            value={zone}
            placeholder="Select your zone"
            options={locations.map((item) => item.zone)}
            onChange={(value) => {
              setZone(value);

              setArea("");
            }}
          />

          <LocationSelect
            label="Your Area"
            value={area}
            placeholder="Types of your area"
            options={areaOptions}
            onChange={setArea}
          />
        </div>

        <div
          className="
            mt-[55px]
          "
        >
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      </section>
    </main>
  );
};

export default Location;
