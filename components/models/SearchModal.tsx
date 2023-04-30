"use client";

import qs from "query-string";
import React, { useCallback, useMemo, useState } from "react";
import Modal from "./Modal";
import useSearchModal from "@/app/hooks/useSearchModal";
import { useRouter, useSearchParams } from "next/navigation";
import CategoryInput from "../input/CategoryInput";
import { categories, prices } from "@/app/store";
import PriceInput from "../input/PriceInput";

enum STEPS {
  CATEGORY = 0,
  PRICE = 1,
}

const SearchModal = () => {
  const searchModal = useSearchModal();
  const router = useRouter();
  const params = useSearchParams();

  const [steps, setSteps] = useState(STEPS.CATEGORY);

  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const onBack = useCallback(() => {
    setSteps((val) => val - 1);
  }, []);

  const onNext = useCallback(() => {
    setSteps((val) => val + 1);
  }, []);

  const onSubmit = useCallback(async () => {
    if (steps !== STEPS.PRICE) {
      return onNext();
    }

    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updateQuery: any = {
      ...currentQuery,
      category,
      price,
    };

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updateQuery,
      },
      { skipNull: true }
    );
    setSteps(STEPS.CATEGORY);
    setCategory("");
    setPrice("");
    searchModal.onClose();
    router.push(url);
  }, [steps, searchModal, price, category, router, params]);

  const actionLabel = useMemo(() => {
    if (steps === STEPS.PRICE) {
      return "Search";
    }
    return "Next";
  }, [steps]);

  const secondaryActionLabel = useMemo(() => {
    if (steps === STEPS.CATEGORY) {
      return undefined;
    }
    return "Back";
  }, [steps]);

  let body = (
    <div className="flex flex-col gap-8">
      <header>
        <h3 className="text-lg">Category</h3>
      </header>
      <main className="flex flex-wrap gap-5">
        {categories.map((item, index) => (
          <CategoryInput
            label={item.label}
            selected={category === item.label}
            setValue={(value) => setCategory(value)}
            key={index}
          />
        ))}
      </main>
    </div>
  );

  if (steps === STEPS.PRICE) {
    body = (
      <div className="flex flex-col gap-8">
        <header>
          <h3 className="text-lg">Price less than</h3>
        </header>
        <main className="flex flex-wrap gap-5">
          {prices.map((item, index) => (
            <PriceInput
              label={item.label}
              selected={price === item.label}
              setValue={(value) => setPrice(value)}
              key={index}
            />
          ))}
        </main>
      </div>
    );
  }

  return (
    <Modal
      title="Filters"
      isOpen={searchModal.isOpen}
      onSubmit={onSubmit}
      onClose={searchModal.onClose}
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={steps === STEPS.CATEGORY ? undefined : onBack}
      body={body}
    />
  );
};

export default SearchModal;
