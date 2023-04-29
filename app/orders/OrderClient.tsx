'use client'

import OrderCard from '@/components/input/OrderCard'
import { Order } from '@prisma/client'
import React from 'react'

interface OrderClientProps {
    orders: Order[]
}

const OrderClient: React.FC<OrderClientProps> = ({
    orders
}) => {
  return (
    <div className='mt-10'>
         <h3 className="text-2xl md:text-3xl font-bold mb-6 whitespace-nowrap">
        Orders
      </h3>
      <div className="flex flex-col gap-6 ">
          {orders && orders.map((order) => (
            <div>
              <OrderCard order={order}  />
            </div>
          ))}
        </div>

    </div>
  )
}

export default OrderClient