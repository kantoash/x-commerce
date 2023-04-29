'use client'

import React from 'react'
import Image from 'next/image'
interface AvatarProps {
    src?: string | null | undefined;
    isLarge?: boolean;
    isMedium?: boolean;
    hasBorder?: boolean;
}


const Avatar: React.FC<AvatarProps> = ({
    src,
    hasBorder,
    isLarge,
    isMedium,
}) => {
    let dimension = '';
    if (isLarge) {
        dimension = 'h-24 w-24'
    } else if (isMedium) {
        dimension = 'h-14 w-14'
    } else {
        dimension = 'h-7 w-7'
    }
    return (
        <div className={` ${hasBorder && 'border-[1px] border-neutral-500'} ${dimension} rounded-full hover:opacity-80 transition cursor-pointer relative`}>
            <Image src={src || '/placeholder.jpg'} alt='' fill style={{
                objectFit: 'cover', borderRadius: "100%"
            }} />
        </div>
    )
}

export default Avatar