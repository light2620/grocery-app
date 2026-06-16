import carrot from "../../assets/images/carrot.png";
import nectar from "../../assets/images/nector.png";


const Splash = () => {
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
      <section
        className="
          flex
          items-center
          gap-[12px]
        "
      >

        {/* carrot */}
        <img
          src={carrot}
          alt=""
          className="
            w-[54px]
            h-[63px]
          "
        />


        {/* text group */}
        <div>

          <img
            src={nectar}
            alt="nectar"
            className="
              w-[200px]
              h-auto
            "
          />


          <p
            className="
              text-white
              text-[14px]
              leading-[18px]
              tracking-[5.5px]
              font-medium
              text-center
              mt-[2px]
            "
          >
            online groceriet
          </p>

        </div>

      </section>
    </main>
  );
};


export default Splash;