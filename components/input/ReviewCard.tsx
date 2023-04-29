"use client";

import useUser from "@/app/hooks/useUserById";
import { Review } from "@prisma/client";
import { formatDistanceToNowStrict } from "date-fns";
import React, { useMemo, useState } from "react";
import Avatar from "./Avatar";

interface ReviewCardProps {
  review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const [isRead, setIsRead] = useState(false);
  const { data: user } = useUser(review.userId);

  function isLength(string = "", maxLength = 50) {
    return string.length > maxLength;
  }

  function truncateString(string = "", maxLength = 50) {
    let returnString = "";
    if (!isRead && isLength(string, maxLength)) {
      returnString = `${string.substring(0, maxLength)}…`;
    } else {
      returnString = string;
    }
    return returnString;
  }

  const createdAt = useMemo(() => {
    if (!review?.createdAt) {
      return null;
    }
    return `${formatDistanceToNowStrict(new Date(review?.createdAt))}`;
  }, [review?.createdAt]);

  return (
    <main className="flex items-center space-x-4 bg-gray-300 rounded-2xl p-2 ">
      <section className="flex flex-col justify-start">
        <Avatar src={user?.image} />
      </section>

      <section className="flex flex-col space-y-1">
        <div className="flex items-center space-x-2">
          <h2 className="text-xl">{user?.name}</h2>
          <p>{createdAt}</p>
        </div>
        <div>
          <p>{truncateString(review?.body, 200)} </p>
           {isLength(review?.body , 200) && (
            <h3
            onClick={() => setIsRead((val) => !val)}
            className="cursor-pointer"
          >
            Read More
          </h3>
           )} 
        </div>
      </section>
    </main>
  );
};

export default ReviewCard;
