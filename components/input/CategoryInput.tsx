"use client";

import React from "react";

interface CategoryInputProps {
    label: string;
    selected: boolean;
    setValue: (value: string) => void;
}

const CategoryInput: React.FC<CategoryInputProps> = ({
    label,
    selected,
    setValue,
}) => {
    return (
        <div
            onClick={() => setValue(label)}
            className={`px-3 py-1 rounded-2xl text-gray-500 cursor-pointer  ${selected ? "bg-neutral-200" : "bg-blue-100"
                } border-[1px] border-gray-300   `}
        >
            <p>{label}</p>
        </div>
    );
};

export default CategoryInput;
