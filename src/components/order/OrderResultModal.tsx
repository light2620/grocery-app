import {
  X,
  Check,
} from "lucide-react";


import { useNavigate } from "react-router-dom";


import type {
  OrderStatus
} from "../../types/order";



interface Props {

  status: OrderStatus;

  close: () => void;

}



const OrderResultModal = ({
  status,
  close,

}: Props) => {


  const navigate =
    useNavigate();



  const success =
    status === "success";





  return (

    <div
      className="
        fixed
        inset-0

        z-[200]

        bg-white

        px-[30px]

        flex
        flex-col
      "
    >



      {!success && (

        <button
          onClick={close}

          className="
            mt-[30px]

            self-start
          "
        >

          <X size={28}/>

        </button>

      )}






      <div
        className="
          flex-1

          flex
          flex-col

          items-center

          justify-center

          text-center
        "
      >





        {/* IMAGE AREA */}


        {
          success

          ?


          <div
            className="
              w-[200px]
              h-[200px]

              rounded-full

              bg-[#53B175]

              flex
              items-center
              justify-center
            "
          >

            <Check

              size={100}

              strokeWidth={4}

              className="
                text-white
              "
            />


          </div>


          :


          <img

            src="/images/order-failed.png"

            className="
              w-[230px]
              h-[230px]

              object-contain
            "

          />

        }









        <h1
          className="
            mt-[60px]

            text-[28px]

            leading-[36px]

            font-semibold

            text-[#181725]
          "
        >

          {
            success

            ?

            <>
              Your Order has been
              <br />
              accepted
            </>

            :

            "Oops! Order Failed"

          }


        </h1>







        <p
          className="
            mt-[20px]

            text-[16px]

            leading-[22px]

            text-[#7C7C7C]
          "
        >

          {
            success

            ?

            <>
            Your items has been placed and is on
            <br />
            it’s way to being processed
            </>

            :

            "Something went terribly wrong."

          }

        </p>






      </div>







      <button
        className="
          h-[67px]

          rounded-[19px]

          bg-[#53B175]

          text-white

          text-[18px]

          font-semibold
        "
      >

        {
          success
          ?
          "Track Order"
          :
          "Please Try Again"
        }


      </button>





      <button

        onClick={() =>
          navigate("/home")
        }


        className="
          mt-[25px]
          mb-[35px]

          text-[18px]

          font-semibold

          text-[#181725]
        "
      >

        Back to home

      </button>





    </div>

  );

};


export default OrderResultModal;