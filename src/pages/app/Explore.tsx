import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";


import categoriesData from "../../data/categories.json";

import CategoryCard from "../../components/category/CategoryCard";
import ProductCard from "../../components/product/ProductCard";


import type { Category } from "../../types/category";


import { useProductStore } from "../../stores/productStore";

import { useDebounce } from "../../hooks/useDebounce";



const Explore = () => {

    const navigate = useNavigate();


  const [searchValue, setSearchValue] =
    useState("");


  const [inputActive, setInputActive] =
    useState(false);



  const debouncedSearch =
    useDebounce(searchValue, 300);




  const products =
    useProductStore(
      state => state.products
    );



  const categories =
    categoriesData as Category[];




  const searchedProducts =
    products.filter((product) =>

      product.name
        .toLowerCase()
        .includes(
          debouncedSearch.toLowerCase()
        )

    );





  const showSearch =
    inputActive || searchValue.length > 0;







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





        {!showSearch && (

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

        )}








        {/* search */}


        <div
          className={`
            ${
              showSearch
                ? "pt-[50px]"
                : "mt-[30px]"
            }

            flex
            items-center
            gap-[15px]
          `}
        >



          <div
            className="
              flex-1

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

              value={searchValue}


              onFocus={() =>
                setInputActive(true)
              }


              onBlur={() => {


                if (
                  searchValue.length === 0
                ) {

                  setInputActive(false);

                }


              }}



              onChange={(e) =>
                setSearchValue(
                  e.target.value
                )
              }



              placeholder="Search Store"



              className="
                flex-1

                bg-transparent

                outline-none

                text-[14px]
              "

            />






            {searchValue && (


              <button

                onClick={() => {

                  setSearchValue("");

                  setInputActive(false);

                }}

              >

                <X
                  size={18}

                  className="
                    text-[#7C7C7C]
                  "
                />


              </button>


            )}





          </div>







          {showSearch && (

           <button
onClick={()=>
navigate("/filter")
}
>

<SlidersHorizontal/>

</button>

          )}







        </div>









        {/* NORMAL EXPLORE */}

        {!showSearch && (


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
              category => (

                <CategoryCard

                  key={category.id}

                  category={category}

                />

              )
            )}


          </section>

        )}









        {/* SEARCH RESULT */}


        {showSearch && (


          searchedProducts.length === 0 ?


          <p
            className="
              mt-[150px]

              text-center

              text-[#7C7C7C]
            "
          >

            No products found


          </p>



          :



          <section
            className="
              mt-[30px]

              grid

              grid-cols-2

              gap-[15px]


              md:grid-cols-3

              lg:grid-cols-4
            "
          >


            {searchedProducts.map(
              product => (

                <ProductCard

                  key={product.id}

                  product={product}

                />

              )
            )}


          </section>



        )}





      </div>


    </main>

  );

};


export default Explore;