"use client";

import React, { useState } from "react";
import { categories } from "../store";
import CategoryInput from "@/components/input/CategoryInput";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import ImagesUpload from "@/components/input/ImagesUpload";
import Input from "@/components/input/Input";

const AddProductClient = () => {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        setValue,
        reset,
    } = useForm<FieldValues>({
        defaultValues: {
            title: "",
            description: "",
            images: [],
            category: "",
            price: "",
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        axios
            .post("/api/product", data)
            .then(() => {
                toast.success("product Created");
                reset();
                router.push("/products");
            })
            .catch(() => {
                toast.error("listing went wrong");
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const category = watch("category");
    const images = watch("images");

    return (
        <div className="my-10 flex flex-col justify-center m-8  ">
            <section className="mt-8 flex flex-col gap-4">
                <header>
                    <h2 className="text-2xl">Which of these describes your products?</h2>
                    <p>Pick a category</p>
                </header>
                <main className="flex flex-wrap gap-3">
                    {categories.map((item, index) => (
                        <CategoryInput
                            label={item.label}
                            selected={category === item.label}
                            setValue={(value) => setValue("category", value)}
                            key={index}
                        />
                    ))}
                </main>
            </section>

            <section className="mt-8 flex flex-col gap-4">
                <header>
                    <h2 className="text-2xl">List Product Images</h2>
                    <p>List your product images!</p>
                </header>
                <ImagesUpload setValue={setValue} images={images} />
            </section>

            <section className="mt-8 flex flex-col gap-4">
                <header>
                    <h2 className="text-2xl">List Product Info</h2>
                    <p>List your product info!</p>
                </header>
                <Input
                    id="title"
                    label="Title"
                    type="text"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />

                <Input
                    id="description"
                    label="Description"
                    type="email"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
            </section>

            <section className="mt-8 flex flex-col gap-4">
                <header>
                    <h2 className="text-2xl">List Product Price</h2>
                    <p>Price your product price!</p>
                </header>
                <Input
                    id="price"
                    label="Price"
                    type="text"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
            </section>

            <button onClick={handleSubmit(onSubmit)} className="mt-8 AddProductBtn">
                Create
            </button>
        </div>
    );
};

export default AddProductClient;
