import React from 'react'
import { Header } from '../components/markup/Header'
import { Hero } from '../components/markup/Hero'
import { About } from '../components/markup/About'
import { Cases } from '../components/markup/Cases'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Cases />
    </>

  )
}
