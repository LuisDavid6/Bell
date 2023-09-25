'use client'
import Image from 'next/image'
import logo from '@/assets/images/logo.png'
import logoDark from '@/assets/images/logo2.png'

const Logo = ({ width, height }: { width: number; height: number }) => {
  return <Image src={localStorage.getItem('theme') === 'dark' ? logoDark : logo} alt='logo' width={width} height={height} />
}

export default Logo
