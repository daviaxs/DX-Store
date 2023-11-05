'use client'

import Image from 'next/image'
import { useState } from 'react'

interface ProductImagesProps {
  productName: string
  imagesIUrls: string[]
}

export function ProductImages({
  imagesIUrls,
  productName,
}: ProductImagesProps) {
  const [currentImage, setcurrentImage] = useState(imagesIUrls[0])

  const handleImageClick = (imageUrl: string) => {
    setcurrentImage(imageUrl)
  }

  return (
    <div className="relative flex flex-col gap-4 lg:m-5 lg:h-[500px] lg:w-full">
      <div className="flex h-[380px] w-full items-center justify-center bg-accent lg:h-full lg:rounded-lg">
        <Image
          src={currentImage}
          alt={productName}
          width={0}
          height={0}
          priority
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto min-w-[120px] lg:max-w-[230px]"
          style={{
            objectFit: 'contain',
          }}
        />
      </div>

      <div className="grid grid-cols-4 gap-4 px-4 lg:absolute lg:grid-cols-1 lg:p-3">
        {imagesIUrls.map((imageUrl) => (
          <button
            key={imageUrl}
            onClick={() => handleImageClick(imageUrl)}
            className={`flex h-[100px] items-center justify-center rounded-lg bg-accent lg:h-[77px] lg:w-[77px] lg:rounded-[16.5px] lg:bg-[#0B0B0B]
              ${
                imageUrl === currentImage &&
                'border-2 border-solid border-primary'
              }
            `}
          >
            <Image
              src={imageUrl}
              alt={productName}
              height={0}
              width={0}
              sizes="100vw"
              className="h-auto max-h-[70%] w-auto max-w-[80%]"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
