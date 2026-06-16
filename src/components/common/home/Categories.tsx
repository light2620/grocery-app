import categories from "../../../data/categories.json";

import type { Category } from "../../../types/category.ts";


const Categories = () => {


  const data =
    categories as Category[];



  return (

    <section
      className="
        mt-[30px]
      "
    >


      <div
        className="
          flex
          justify-between
          items-center
        "
      >

        <h2
          className="
            text-[24px]
            font-semibold

            text-[#181725]
          "
        >

          Groceries

        </h2>


        <button
          className="
            text-[#53B175]
            font-semibold
          "
        >

          See all

        </button>


      </div>





      <div
        className="
          mt-[20px]

          flex
          gap-[15px]

          overflow-x-auto
        "
      >


        {data.map((item)=>(


          <div

            key={item.id}

            className={`
              ${item.color}

              min-w-[250px]
              h-[105px]

              rounded-[18px]

              flex
              items-center

              px-[15px]
              gap-[15px]
            `}
          >


            <img

              src={item.image}

              alt={item.name}

              className="
                w-[70px]
                h-[70px]

                object-contain
              "

            />



            <h3
              className="
                text-[20px]

                font-semibold

                text-[#181725]
              "
            >

              {item.name}

            </h3>



          </div>


        ))}



      </div>



    </section>

  );

};


export default Categories;