import { X } from "lucide-react";

import { useNavigate } from "react-router-dom";


import FilterCheckbox from "../../components/filter/filterCheckbox";


import {
  useFilterStore
} from "../../stores/filterStore";


import categoriesData from "../../data/categories.json";


import type { Category } from "../../types/category";




const brandOptions = [

  "Individual Collection",

  "Cocola",

  "Ifad",

  "Kazi Farmas",

];





const Filter = () => {


  const navigate = useNavigate();



  const categoryOptions =
    categoriesData as Category[];





  const {

    categories,

    brands,

    toggleCategory,

    toggleBrand,

  } = useFilterStore();





  return (

    <main
      className="
        min-h-screen

        bg-white
      "
    >



      {/* header */}


      <header
        className="
          h-[90px]

          px-[25px]

          flex
          items-center
          justify-between
        "
      >



        <button
          onClick={() =>
            navigate(-1)
          }
        >

          <X />

        </button>





        <h1
          className="
            text-[20px]

            font-semibold
          "
        >

          Filters

        </h1>




        <div className="w-6" />



      </header>









      <section
        className="
          min-h-[calc(100vh-90px)]

          bg-[#F2F3F2]

          rounded-t-[30px]

          px-[25px]

          pt-[30px]

          relative
        "
      >





        {/* categories */}


        <h2
          className="
            text-[22px]

            font-semibold

            mb-[25px]
          "
        >

          Categories

        </h2>





        <div
          className="
            flex
            flex-col
            gap-[20px]
          "
        >


          {

            categoryOptions.map(
              category => (

                <FilterCheckbox

                  key={category.id}

                  label={category.name}


                  checked={
                    categories.includes(
                      category.slug
                    )
                  }


                  onClick={() =>

                    toggleCategory(
                      category.slug
                    )

                  }

                />

              )
            )

          }


        </div>









        {/* brands */}


        <h2
          className="
            mt-[35px]

            text-[22px]

            font-semibold

            mb-[25px]
          "
        >

          Brand

        </h2>






        <div
          className="
            flex
            flex-col
            gap-[20px]
          "
        >


          {

            brandOptions.map(
              brand => (

                <FilterCheckbox

                  key={brand}

                  label={brand}


                  checked={
                    brands.includes(
                      brand
                    )
                  }


                  onClick={() =>

                    toggleBrand(
                      brand
                    )

                  }

                />

              )
            )

          }


        </div>









        {/* button */}


        <button

          onClick={() =>
            navigate(-1)
          }


          className="
            fixed

            left-[25px]
            right-[25px]

            bottom-[35px]


            md:left-1/2
            md:-translate-x-1/2
            md:w-[430px]


            h-[67px]


            rounded-[19px]


            bg-[#53B175]


            text-white

            text-[18px]

            font-semibold
          "
        >

          Apply Filter

        </button>





      </section>


    </main>

  );

};


export default Filter;