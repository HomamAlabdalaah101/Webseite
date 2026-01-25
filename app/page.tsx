import Header from "@/components/header"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import About from "@/components/about"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="overflow-hidden scroll-smooth">
      <Header />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </main>
  )
}
