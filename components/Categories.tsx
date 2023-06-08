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
    <div className='py-5 my-5 flex-auto justify-center bg-bg'>
      <Swiper
        slidesPerView={7}
        spaceBetween={10}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          300: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          460: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          560: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          670: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
          850: {
            slidesPerView: 7,
            spaceBetween: 10,
          },
          940: {
            slidesPerView: 8,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 9,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 10,
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
                    width={100}
                    height={800}
                    style={{ objectFit: 'cover', width: '100px', height: '80px' }}
                    className='rounded-xl'
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
