import {
  ChevronRight,
  X,
} from "lucide-react";


import { useCartStore } from "../../stores/cartStore";



interface CheckoutModalProps {

  close: () => void;

}



const CheckoutModal = ({
  close,

}: CheckoutModalProps) => {


  const total =
    useCartStore(
      state => state.totalPrice
    );



  return (

    <div
      className="
        fixed
        inset-0

        z-[100]

        bg-black/40

        flex
        items-end

        md:items-center
        md:justify-center
      "
    >



      <section
        className="
          w-full

          bg-white

          rounded-t-[30px]

          px-[25px]

          pb-[35px]


          md:max-w-[500px]
          md:rounded-[30px]
        "
      >



        {/* header */}


        <div
          className="
            h-[100px]

            flex
            items-center
            justify-between

            border-b
            border-[#E2E2E2]
          "
        >


          <h2
            className="
              text-[28px]

              font-semibold

              text-[#181725]
            "
          >

            Checkout

          </h2>



          <button
            onClick={close}
          >

            <X size={30}/>

          </button>


        </div>









        <CheckoutRow
          title="Delivery"

          value="Select Method"
        />




        <CheckoutRow
          title="Payment"

          value="💳"
        />




        <CheckoutRow
          title="Promo Code"

          value="Pick discount"
        />





        <CheckoutRow
          title="Total Cost"

          value={`$${total().toFixed(2)}`}
        />








        <p
          className="
            mt-[25px]

            text-[14px]

            leading-[24px]

            text-[#7C7C7C]
          "
        >

          By placing an order you agree to our

          <br />

          <span
            className="
              text-[#181725]

              font-semibold
            "
          >
            Terms
          </span>

          {" "}
          and

          {" "}

          <span
            className="
              text-[#181725]

              font-semibold
            "
          >

            Conditions

          </span>


        </p>







        <button
          className="
            mt-[35px]

            w-full
            h-[67px]

            rounded-[19px]

            bg-[#53B175]

            text-white

            text-[18px]

            font-semibold

            active:scale-95

            transition
          "
        >

          Place Order

        </button>




      </section>



    </div>

  );

};







interface RowProps {

  title:string;

  value:string;

}



const CheckoutRow = ({
  title,
  value,

}:RowProps)=>{


return (

<div
className="
h-[78px]

border-b
border-[#E2E2E2]

flex
items-center
justify-between
"
>


<p
className="
text-[18px]

font-semibold

text-[#7C7C7C]
"
>

{title}

</p>




<div
className="
flex
items-center
gap-3

text-[16px]

font-semibold

text-[#181725]
"
>

<span>

{value}

</span>


<ChevronRight/>


</div>



</div>

)

}



export default CheckoutModal;