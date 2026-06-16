import { useState } from "react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import { useCartStore } from "../../stores/cartStore";

import {
  ArrowLeft,
  ChevronDown,
  ChevronRight,
  Heart,
  Minus,
  Plus,
  Share2,
  Star,
} from "lucide-react";


import ProductImageSlider from "../../components/product/ProductImageSlider";

import { useProductStore } from "../../stores/productStore";
import { useFavoriteStore } from "../../stores/favoriteStore";


const ProductDetail = () => {
  const { id } = useParams();

  const navigate = useNavigate();


  const [qty, setQty] = useState(1);

  const {
    toggleFavorite,
    isFavorite,
  } = useFavoriteStore();

  const product = useProductStore((state) =>
    state.products.find(
      (item) => item.id === Number(id)
    )
  );

  const liked = product ? isFavorite(product.id) : false;

  const addToCart = useCartStore(
    state => state.addToCart
  );

  const handleAddCart = () => {
    if (!product) {
      return;
    }

    addToCart(
      product,
      qty
    );

    navigate("/cart");
  };


  if (!product) {
    return (
      <main
        className="
          min-h-screen
          flex
          items-center
          justify-center
        "
      >

        Product not found

      </main>
    );
  }



  const decreaseQty = () => {

    setQty((prev) =>
      Math.max(1, prev - 1)
    );

  };



  const increaseQty = () => {

    setQty((prev) =>
      Math.min(product.stock, prev + 1)
    );

  };





  return (

    <main
      className="
        min-h-screen

        bg-white

        pb-[30px]

        md:flex
        md:justify-center
      "
    >


      <div
        className="
          w-full

          md:max-w-[430px]
        "
      >



        {/* IMAGE SECTION */}

        <div
          className="
            relative
          "
        >


          <ProductImageSlider
            images={product.images}
          />



          <button
            onClick={() => navigate(-1)}

            className="
              absolute

              top-[55px]
              left-[25px]
            "
          >

            <ArrowLeft />

          </button>




          <button
            className="
              absolute

              top-[55px]
              right-[25px]
            "
          >

            <Share2 />

          </button>



        </div>








        <section
          className="
            px-[25px]
          "
        >



          {/* TITLE */}


          <div
            className="
              mt-[25px]

              flex
              justify-between
              gap-4
            "
          >


            <div>


              <h1
                className="
                  text-[24px]
                  font-semibold

                  text-[#181725]
                "
              >

                {product.name}

              </h1>



              <p
                className="
                  mt-[5px]

                  text-[#7C7C7C]
                "
              >

                {product.quantity}

              </p>


            </div>





            <button

              onClick={() => {

                toggleFavorite(product)

              }}

            >

              <Heart

                fill={
                  liked
                    ?
                    "#53B175"
                    :
                    "none"
                }


                className={

                  liked
                    ?
                    "text-[#53B175]"
                    :
                    "text-[#7C7C7C]"

                }

              />

            </button>



          </div>









          {/* QUANTITY */}

          <div
            className="
              mt-[35px]

              flex
              items-center
              justify-between
            "
          >


            <div
              className="
                flex
                items-center
                gap-5
              "
            >


              <button

                onClick={decreaseQty}

                disabled={qty === 1}

                className="
                  transition

                  disabled:opacity-40

                  active:scale-90
                "
              >

                <Minus
                  className="
                    text-[#B3B3B3]
                  "
                />

              </button>





              <span
                className="
                  w-[45px]
                  h-[45px]

                  border
                  border-[#E2E2E2]

                  rounded-[12px]

                  flex
                  items-center
                  justify-center

                  text-[18px]
                  font-semibold
                "
              >

                {qty}

              </span>





              <button
                onClick={increaseQty}

                disabled={qty === product.stock}

                className="
    transition

    disabled:opacity-40

    active:scale-90
  "
              >

                <Plus
                  className="
      text-[#53B175]
    "
                />

              </button>



            </div>





            <strong
              className="
                text-[24px]
                font-semibold
              "
            >

              ${product.price}

            </strong>



          </div>








          {/* DETAILS */}


          <div
            className="
              mt-[30px]

              border-t
              border-[#E2E2E2]
            "
          >


            <div
              className="
                py-[18px]

                flex
                justify-between
              "
            >

              <strong>
                Product Detail
              </strong>


              <ChevronDown />

            </div>



            <p
              className="
                text-[#7C7C7C]

                leading-[22px]
              "
            >

              {product.description}

            </p>



          </div>








          {/* NUTRITION */}


          <div
            className="
              mt-[20px]

              py-[18px]

              border-t
              border-[#E2E2E2]

              flex
              justify-between
            "
          >


            <strong>
              Nutritions
            </strong>



            <div
              className="
                flex
                items-center
                gap-3
              "
            >

              <span
                className="
                  bg-gray-100

                  px-2

                  rounded

                  text-xs
                "
              >

                {product.nutrition}

              </span>


              <ChevronRight />


            </div>



          </div>







          {/* REVIEW */}


          <div
            className="
              py-[18px]

              border-t
              border-[#E2E2E2]

              flex
              justify-between
            "
          >


            <strong>
              Review
            </strong>



            <div
              className="
                flex
                items-center
                gap-1
              "
            >


              {Array(product.rating)
                .fill(null)
                .map((_, index) => (

                  <Star

                    key={index}

                    size={16}

                    fill="#F3603F"

                    className="
                      text-[#F3603F]
                    "
                  />

                ))}


              <ChevronRight />


            </div>



          </div>








          {/* CART BUTTON */}


          <button
            onClick={handleAddCart}

            className="
    mt-[20px]

    w-full
    h-[67px]

    rounded-[19px]

    bg-[#53B175]

    text-white

    text-[18px]
    font-semibold

    transition
    active:scale-95
  "
          >

            Add To Basket

          </button>



        </section>


      </div>


    </main>

  );

};


export default ProductDetail;