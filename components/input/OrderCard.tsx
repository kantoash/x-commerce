"use client";

import { Order } from "@prisma/client";
import React, { useMemo } from "react";
import FullInfoListingCard from "./FullInfoListingCard";
import { formatDistanceToNowStrict } from "date-fns";

interface OrderCardProps {
  order: Order;
}

const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
  const createdAt = useMemo(() => {
    if (!order?.createdAt) {
      return null;
    }
    return `Order: ${formatDistanceToNowStrict(new Date(order?.createdAt))}`;
  }, [order?.createdAt]);

  return (
    <div className="flex flex-col justify-center gap-4">

      <div className="p-2">
        <div className="flex flex-row justify-between items-center  gap-2 whitespace-nowrap">
          <h3 className="text-2xl">{order?.name}</h3>
          <div className="">{createdAt}</div>
        </div>
        <p>{order?.address}</p>
      </div>
      
      <div className="flex flex-col gap-6 ">
        {order.productIds &&
          order.productIds.map((product) => (
            <div>
              <FullInfoListingCard productId={product} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default OrderCard;
