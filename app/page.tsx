import Image from 'next/image'
import LoginBox from '@/app/components/login/LoginBox'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Auth Training',
  description: 'Training app for implementing authentication'
}

export default function Home() {
  return (
    <>
      <LoginBox />
    </>
  )
}
