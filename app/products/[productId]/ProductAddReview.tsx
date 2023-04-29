'use client'

import Input from '@/components/input/Input';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

interface ProductAddReviewProps {
  productId: string;
}

const ProductAddReview: React.FC<ProductAddReviewProps> = ({
  productId
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      body: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post(`/api/review/${productId}`, data)
      .then(() => {
        toast.success("Review Created");
        router.refresh();
      })
      .catch(() => {
        toast.error("Something went wrong");
      })
      .finally(() => {
        setIsLoading(false);
        reset();
      });
  };

    return (
        <div className="flex flex-col justify-center gap-4 ">
        <div>
        <Input
            id="body"
            label="Add your review"
            type="text"
            isTextArea
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
        </div>
        <button onClick={handleSubmit(onSubmit)} className="AddProductBtn w-fit">Add Review</button>
      </div>
    )
}

export default ProductAddReview;