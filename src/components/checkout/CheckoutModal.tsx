import { useState } from 'react'

import {
  ChevronRight,
  X,
} from 'lucide-react'

import OrderResultModal from '../order/OrderResultModal'

import { useCartStore } from '../../stores/cartStore'

import type { OrderStatus } from '../../types/order'

interface CheckoutModalProps {
  close: () => void
}

const CheckoutModal = ({
  close,
}: CheckoutModalProps) => {
  const [loading, setLoading] = useState(false)

  const [orderStatus, setOrderStatus] =
    useState<OrderStatus | null>(null)

  const total = useCartStore(
    state => state.totalPrice
  )

  const placeOrder = () => {
    setLoading(true)

    setTimeout(() => {
      const isSuccess = Math.random() > 0.5

      setOrderStatus(
        isSuccess ? 'success' : 'failed'
      )

      setLoading(false)
    }, 1500)
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-end bg-black/40 md:items-center md:justify-center">
      <section className="w-full rounded-t-[30px] bg-white px-[25px] pb-[35px] md:max-w-[500px] md:rounded-[30px]">
        {/* Header */}
        <div className="flex h-[100px] items-center justify-between border-b border-[#E2E2E2]">
          <h2 className="text-[28px] font-semibold text-[#181725]">
            Checkout
          </h2>

          <button onClick={close}>
            <X size={30} />
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

        <p className="mt-[25px] text-[14px] leading-[24px] text-[#7C7C7C]">
          By placing an order you agree to our
          <br />

          <span className="font-semibold text-[#181725]">
            Terms
          </span>{' '}
          and{' '}
          <span className="font-semibold text-[#181725]">
            Conditions
          </span>
        </p>

        <button
          onClick={placeOrder}
          disabled={loading}
          className="mt-[35px] h-[67px] w-full rounded-[19px] bg-[#53B175] text-[18px] font-semibold text-white disabled:opacity-60"
        >
          {loading ? 'Processing...' : 'Place Order'}
        </button>
      </section>

      {orderStatus && (
        <OrderResultModal
          status={orderStatus}
          close={() => setOrderStatus(null)}
        />
      )}
    </div>
  )
}

interface CheckoutRowProps {
  title: string
  value: string
}

const CheckoutRow = ({
  title,
  value,
}: CheckoutRowProps) => {
  return (
    <div className="flex h-[78px] items-center justify-between border-b border-[#E2E2E2]">
      <p className="text-[18px] font-semibold text-[#7C7C7C]">
        {title}
      </p>

      <div className="flex items-center gap-3 text-[16px] font-semibold text-[#181725]">
        <span>{value}</span>

        <ChevronRight />
      </div>
    </div>
  )
}

export default CheckoutModal