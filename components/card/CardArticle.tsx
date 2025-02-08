import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { ItemType } from '@/types/types'

export default function CardArticle({ item }: { item: ItemType }) {
  return (
    <Link href={`/articles/${item.id}`}>
      <div className="transform overflow-hidden duration-200 hover:scale-105 cursor-pointer border border-gray-200 p-5 rounded-2xl">
        <Image src={item.image} width={500} height={400} alt='products' className="rounded-2xl h-[400px] w-[500px] object-cover" />
        <div className='mt-4'>
          <p className="text-gray-700">{item.name}</p>
          <div className="flex justify-between items-center">
          <p className="text-[var(--palette-1)] font-urbanist">
            {item.marque}
          </p>
          <p className="text-white bg-[var(--palette-1)] w-20 text-center rounded-md font-extrabold">{item.currency + item.price}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
