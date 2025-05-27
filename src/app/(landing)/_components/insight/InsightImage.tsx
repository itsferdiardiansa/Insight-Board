'use client'

import * as React from 'react'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'

import MetricsImage from '@/assets/Reports.png'
import SaveProductsImage from '@/assets/save-products.png'
import StockProductsImage from '@/assets/stock-products.png'
import SalesProductsImage from '@/assets/sales-products.png'

export const InsightImage: React.FC = () => {
  const bgLeftRef = useRef<HTMLDivElement>(null)
  const bgRightRef = useRef<HTMLDivElement>(null)
  const metricsRef = useRef<HTMLImageElement>(null)
  const saveRef = useRef<HTMLImageElement>(null)
  const stockRef = useRef<HTMLImageElement>(null)
  const salesRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    gsap.fromTo(
      bgLeftRef.current,
      { opacity: 0, y: -30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        delay: 0.1,
      }
    )

    gsap.fromTo(
      bgRightRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        delay: 0.2,
      }
    )

    const ctx = gsap.context(() => {
      gsap.fromTo(
        metricsRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: metricsRef.current,
            start: 'top 85%',
            once: true,
            onEnter: () => {
              // Pop-in animation for Save + Stock
              gsap.fromTo(
                saveRef.current,
                { opacity: 0, scale: 0.5 },
                {
                  opacity: 1,
                  scale: 1,
                  duration: 0.6,
                  ease: 'back.out(1.7)',
                  delay: 0.1,
                }
              )

              gsap.fromTo(
                stockRef.current,
                { opacity: 0, scale: 0.5 },
                {
                  opacity: 1,
                  scale: 1,
                  duration: 0.6,
                  ease: 'back.out(1.7)',
                  delay: 0.25,
                }
              )

              gsap.fromTo(
                salesRef.current,
                { opacity: 0, scale: 0.5 },
                {
                  opacity: 1,
                  scale: 1,
                  duration: 0.6,
                  ease: 'back.out(1.7)',
                  delay: 0.4,
                }
              )
            },
          },
        }
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="relative">
      <figure className="relative my-auto z-50">
        <Image
          src={SaveProductsImage}
          ref={saveRef}
          className="w-48 absolute top-[20px] left-[-100px] object-contain rounded-md shadow-lg opacity-0 z-10"
          alt="Save products"
        />

        <Image
          src={StockProductsImage}
          ref={stockRef}
          className="w-48 absolute top-[90px] right-[-30px] object-contain rounded-md shadow-lg opacity-0 z-10"
          alt="Stock products"
        />

        <Image
          src={SalesProductsImage}
          ref={salesRef}
          className="w-48 absolute top-[120px] right-[180px] object-contain rounded-md shadow-lg opacity-0 z-10"
          alt="Stock products"
        />

        <Image
          src={MetricsImage}
          ref={metricsRef}
          className="object-contain w-full rounded-md opacity-0"
          alt="Data insights visualization"
        />
      </figure>

      <div
        ref={bgLeftRef}
        className="absolute -top-10 -left-20 w-2/3 h-4/5 bg-violet-100 rounded-md z-10 opacity-0"
      ></div>
      <div
        ref={bgRightRef}
        className="absolute -bottom-10 -right-15 w-2/3 h-4/5 bg-pink-100 rounded-md z-10 opacity-0"
      ></div>
    </div>
  )
}
