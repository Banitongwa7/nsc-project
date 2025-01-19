import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function CardArticle({ item }) {
  return (
    <Link href={`/product/${item.slug.current}`}>
      <div className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer">
        <Image src={} alt='products' className="rounded-2xl h-[400px] w-[500px] object-cover" />
        <div>
          <p className="product-name  mt-4">{item.name}</p>
          <p className="product-price mb-3 font-urbanist">
            Rs. {item.price}
          </p>
        </div>
      </div>
    </Link>
  )
}
