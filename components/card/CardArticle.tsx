import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { ItemType } from '@/types/itemType'

export default function CardArticle({ item }: { item: ItemType }) {
  return (
    <Link href={`/articles/${item.id}`} className='rounded-2xl bg-gray-50 p-4'>
      <div className="transform overflow-hidden duration-200 hover:scale-105 cursor-pointer">
        <Image src={item.image} width={500} height={400} alt='products' className="rounded-2xl h-[400px] w-[500px] object-cover" />
        <div>
          <p className="text-gray-700 mt-4">{item.name}</p>
          <p className="text-[var(--palette-1)] mb-3 font-urbanist">
            {item.marque}
          </p>
        </div>
      </div>
    </Link>
  )
}
