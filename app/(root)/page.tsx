import { Classement, Intro, Niveaux, Show, Testimonials } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Intro />
      <Niveaux />
      <Show />
      <Classement />
      <Testimonials />
    </>
  )
}
