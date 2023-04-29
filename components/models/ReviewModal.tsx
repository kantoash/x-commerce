"use client";

import React, { useState } from "react";
import Modal from "./Modal";
import useReviewModal from "@/app/hooks/useReviewModal";
import Input from "../input/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const ReviewModal = () => {
  const reviewModal = useReviewModal();
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
      .post("/api/review", data)
      .then(() => {
        toast.success("Review Created");
        reviewModal.onClose();
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

  const body = (
    <div className="flex flex-col gap-4">
      <header>
        <h2 className="text-2xl">Add Product review</h2>
      </header>
      <Input
        id="body"
        label="Review Body"
        type="text"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  return (
    <Modal
      isOpen={reviewModal.isOpen}
      onClose={reviewModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      title="Add your review"
      actionLabel="Add review"
      disabled={isLoading}
      body={body}
    />
  );
};

export default ReviewModal;
