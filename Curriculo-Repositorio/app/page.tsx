import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Technologies } from "@/components/technologies"
import { Experience } from "@/components/experience"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Technologies />
      <Experience />
      <Contact />
    </main>
  )
}
