'use client'
import Image from 'next/image'
import logo from '@/assets/images/logo.png'
import logoDark from '@/assets/images/logo2.png'
import { useTheme } from 'next-themes'

const Logo = ({ width, height }: { width: number; height: number }) => {
  const { theme } = useTheme()

  return <Image src={theme === 'light' ? logo : logoDark} alt='logo' width={width} height={height} />
}

export default Logo
