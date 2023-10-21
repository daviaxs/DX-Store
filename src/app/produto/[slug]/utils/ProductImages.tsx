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
    <div className="flex flex-col gap-4">
      <div className="flex h-[380px] w-full items-center justify-center bg-accent">
        <Image
          src={currentImage}
          alt={productName}
          width={0}
          height={0}
          priority
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          style={{
            objectFit: 'contain',
          }}
        />
      </div>

      <div className="grid grid-cols-4 gap-4 px-4">
        {imagesIUrls.map((imageUrl) => (
          <button
            key={imageUrl}
            onClick={() => handleImageClick(imageUrl)}
            className={`flex h-[100px] items-center justify-center rounded-lg bg-accent 
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
