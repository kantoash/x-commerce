'use client'

import React, { useCallback } from 'react'
import Image from 'next/image';
import { CldUploadWidget } from 'next-cloudinary'
import { TbPhotoPlus } from 'react-icons/tb'
import { FieldValues, UseFormSetValue } from 'react-hook-form';
import { cloudinaryUpload } from '@/typing';

interface ImagesUploadProps {
    setValue: UseFormSetValue<FieldValues>
    images: any
}

const ImagesUpload: React.FC<ImagesUploadProps> = ({
    setValue,
    images
}) => {
    const handleUpload = useCallback((result: cloudinaryUpload) => {
        images.push(result.info.secure_url)
        setValue("images", [...images])
    }, [setValue])

    return (
        <>
            <CldUploadWidget onUpload={handleUpload} uploadPreset='wk0ukflg'
                options={{ multiple: true }}>
                {({ open }) => {
                    return (
                        <div onClick={() => open?.()}
                            className='relative cursor-pointer hover:opacity-70
                                 transition 
                            border-dashed border-2 py-5 px-20 border-neutral-500 flex flex-col 
                            justify-center items-center gap-4 text-neutral-600'>
                            <TbPhotoPlus />
                            <div className="font-semibold text-lg">
                                Click to upload
                            </div>
                        </div>
                    )
                }}
            </CldUploadWidget>
            <section className='flex flex-wrap justify-center gap-5 bg-gray-200 rounded-xl p-3'>
                {images && images.map((image: string) => (
                    <div className='h-32 w-32 relative'>
                        <Image src={image} alt='' fill  className='object-cover object-center rounded-lg' />
                    </div>
                ))}
            </section>
        </>
    )
}

export default ImagesUpload