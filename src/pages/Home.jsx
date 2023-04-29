import { Header } from '../components/markup/Header'
import { Hero } from '../components/markup/Hero'
import { About } from '../components/markup/About'
import { Cases } from '../components/markup/Cases'
import { Blog } from '../components/markup/Blog'
import Team from '../components/markup/Team/Team'
import Callback from '../components/markup/Callback/Callback'
import { Footer } from '../components/markup/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Cases />
      <Blog />
      <Team />
      <Callback />
      <Footer />
    </>
  )
}
