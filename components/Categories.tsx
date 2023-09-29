'use client'
import React from 'react'
import Image from 'next/image'
import { Category } from '@/types'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import 'swiper/css'
import Link from 'next/link'

interface Props {
  categories: Category[]
}
const Categories: React.FC<Props> = ({ categories }) => {
  return (
    <div className='py-10 flex-auto justify-center'>
      <Swiper
        slidesPerView={7}
        spaceBetween={10}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          10: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          300: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          470: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          560: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          720: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          900: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 7,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 8,
            spaceBetween: 10,
          },
          1500: {
            slidesPerView: 9,
            spaceBetween: 10,
          },
        }}
        modules={[Autoplay]}
        className='mySwiper'
      >
        {categories.map((category) => {
          return (
            <SwiperSlide key={category.id}>
              <Link href={`category/${category.name}`}>
                <section className='flex flex-col items-center cursor-pointer'>
                  <Image
                    src={category.image}
                    alt={category.name}
                    width='0'
                    height='0'
                    sizes='100vw'
                    style={{ objectFit: 'cover', width: 'auto', height: '150px' }}
                    className='w-full h-auto rounded-xl object-cover'
                  />
                  <h5 className='text-sm text-center font-semibold'>{category.name}</h5>
                </section>
              </Link>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Categories
