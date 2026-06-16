import {
  Check,
  X,
} from 'lucide-react'

import { useNavigate } from 'react-router-dom'

import type { OrderStatus } from '../../types/order'

interface OrderResultModalProps {
  status: OrderStatus
  close: () => void
}

const OrderResultModal = ({
  status,
  close,
}: OrderResultModalProps) => {
  const navigate = useNavigate()

  const success = status === 'success'

  return (
    <div className="fixed inset-0 z-[200] flex flex-col bg-white px-[30px]">
      {!success && (
        <button
          onClick={close}
          className="mt-[30px] self-start"
        >
          <X size={28} />
        </button>
      )}

      <div className="flex flex-1 flex-col items-center justify-center text-center">
        {/* Image */}
        {success ? (
          <div className="flex h-[200px] w-[200px] items-center justify-center rounded-full bg-[#53B175]">
            <Check
              size={100}
              strokeWidth={4}
              className="text-white"
            />
          </div>
        ) : (
          <img
            src="/images/order-failed.png"
            alt="Order failed"
            className="h-[230px] w-[230px] object-contain"
          />
        )}

        <h1 className="mt-[60px] text-[28px] font-semibold leading-[36px] text-[#181725]">
          {success ? (
            <>
              Your Order has been
              <br />
              accepted
            </>
          ) : (
            'Oops! Order Failed'
          )}
        </h1>

        <p className="mt-[20px] text-[16px] leading-[22px] text-[#7C7C7C]">
          {success ? (
            <>
              Your items has been placed and is on
              <br />
              it’s way to being processed
            </>
          ) : (
            'Something went terribly wrong.'
          )}
        </p>
      </div>

      <button className="h-[67px] rounded-[19px] bg-[#53B175] text-[18px] font-semibold text-white">
        {success ? 'Track Order' : 'Please Try Again'}
      </button>

      <button
        onClick={() => navigate('/home')}
        className="mb-[35px] mt-[25px] text-[18px] font-semibold text-[#181725]"
      >
        Back to home
      </button>
    </div>
  )
}

export default OrderResultModal