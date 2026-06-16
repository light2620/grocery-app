import { useState } from "react";
import CartItemCard from "../../components/cart/CartItemCard";


import {
    useCartStore
} from "../../stores/cartStore";


import CheckoutModal from "../../components/checkout/CheckoutModal";
const Cart = () => {


    const {
        items,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
        totalPrice,
    } = useCartStore();

    const [checkoutOpen, setCheckoutOpen] = useState(false);


    return (
        

        <main
            className="
        min-h-screen

        bg-white

        pb-[110px]

        md:flex
        md:justify-center
      "
        >



            <section
                className="
          w-full

          px-[25px]

          md:max-w-[600px]
        "
            >



                <h1
                    className="
            pt-[65px]
            pb-[30px]

            text-center

            text-[20px]

            font-semibold

            border-b
            border-[#E2E2E2]
          "
                >

                    My Cart

                </h1>






                {items.length === 0 ? (

                    <p
                        className="
              mt-[100px]

              text-center

              text-[#7C7C7C]
            "
                    >

                        Your cart is empty

                    </p>


                ) : (


                    items.map((item) => (

                        <CartItemCard

                            key={item.product.id}

                            item={item}

                            increase={() =>
                                increaseQuantity(
                                    item.product.id
                                )
                            }

                            decrease={() =>
                                decreaseQuantity(
                                    item.product.id
                                )
                            }

                            remove={() =>
                                removeItem(
                                    item.product.id
                                )
                            }

                        />

                    ))

                )}






                {items.length > 0 && (

                    <button

                        onClick={() =>
                            setCheckoutOpen(true)
                        }
                        className="
              fixed

              bottom-[90px]

              left-[25px]
              right-[25px]


              md:left-1/2
              md:-translate-x-1/2
              md:w-[430px]


              h-[67px]

              rounded-[19px]

              bg-[#53B175]

              text-white

              text-[18px]

              font-semibold


              flex
              justify-center
              items-center
              gap-5
            "
                    >

                        Go to Checkout


                        <span
                            className="
                bg-black/10

                px-2
                py-1

                rounded
                text-xs
              "
                        >

                            $
                            {
                                totalPrice()
                                    .toFixed(2)
                            }

                        </span>


                    </button>

                )}




            </section>

                {

        checkoutOpen &&

            <CheckoutModal

                close={() =>
                    setCheckoutOpen(false)
                }

            />

    }



        </main>

        


    );
    


};


export default Cart;