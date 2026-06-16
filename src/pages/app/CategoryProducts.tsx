import {
  ArrowLeft,
  SlidersHorizontal,
} from "lucide-react";


import {
  useNavigate,
  useParams,
} from "react-router-dom";


import ProductCard from "../../components/product/ProductCard";


import { useProductStore } from "../../stores/productStore";


import categories from "../../data/categories.json";


const CategoryProducts = () => {


  const navigate =
    useNavigate();


  const { category } =
    useParams();



  const products =
    useProductStore(
      state => state.products
    );




  const categoryInfo =
    categories.find(
      item =>
        item.slug === category
    );




  const filteredProducts =
    products.filter(
      item =>
        item.category === category
    );





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



        {/* header */}


        <header
          className="
            pt-[55px]

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

            <ArrowLeft />

          </button>




          <h1
            className="
              text-[20px]

              font-semibold

              text-[#181725]
            "
          >

            {categoryInfo?.name}

          </h1>





          <button>

            <SlidersHorizontal />

          </button>



        </header>








        {/* products */}


        <section
          className="
            mt-[30px]

            grid

            grid-cols-2

            gap-[15px]


            lg:grid-cols-4
          "
        >



          {
            filteredProducts.map(
              product => (

              <ProductCard

                key={product.id}

                product={product}

              />

            ))
          }



        </section>



      </div>



    </main>

  );

};


export default CategoryProducts;