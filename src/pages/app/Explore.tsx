import { Search } from "lucide-react";


import categoriesData from "../../data/categories.json";


import CategoryCard from "../../components/category/CategoryCard";


import type { Category } from "../../types/category";



const Explore = () => {


  const categories =
    categoriesData as Category[];




  return (

    <main
      className="
        min-h-screen

        bg-white

        px-[25px]
        pb-[30px]
      "
    >


      <div
        className="
          max-w-7xl

          mx-auto
        "
      >



        <h1
          className="
            pt-[60px]

            text-center

            text-[20px]

            font-semibold

            text-[#181725]
          "
        >

          Find Products

        </h1>





        {/* search */}

        <div
          className="
            mt-[30px]

            h-[52px]

            rounded-[15px]

            bg-[#F2F3F2]

            px-4

            flex
            items-center
            gap-3
          "
        >


          <Search
            size={22}
          />



          <input

            placeholder="Search Store"

            className="
              flex-1

              bg-transparent

              outline-none

              text-[14px]
            "
          />


        </div>






        {/* categories */}

        <section
          className="
            mt-[20px]

            grid

            grid-cols-2

            gap-[15px]


            md:grid-cols-3

            lg:grid-cols-4
          "
        >


          {categories.map(
            (category)=>(

              <CategoryCard

                key={category.id}

                category={category}

              />

            )
          )}


        </section>



      </div>


    </main>

  );

};


export default Explore;