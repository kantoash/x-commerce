"use client";

import React from "react";

interface PriceInputProps {
    label: string;
    selected: boolean;
    setValue: (value: string) => void;
}

const PriceInput: React.FC<PriceInputProps> = ({
    label,
    selected,
    setValue,
}) => {
    return (
        <div
            onClick={() => setValue(label)}
            className={`px-3 py-1 rounded-2xl text-gray-500 cursor-pointer  ${selected ? "bg-neutral-300" : "bg-blue-200"
                } border-[1px] border-gray-300   `}
        >
            <p>{label}</p>
        </div>
    );
};

export default PriceInput;