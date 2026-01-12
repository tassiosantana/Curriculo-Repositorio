"use client"

import { Card } from "@/components/ui/card"
import { MapPin, Code2, Sparkles } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="px-4 py-24 bg-secondary/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div
          className={`flex items-center gap-3 mb-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
        >
          <div className="h-1 w-12 bg-primary rounded-full" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Sobre</h2>
        </div>

        <Card
          className={`p-8 glass-card hover-glow transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <Code2 className="h-6 w-6" />
              </div>
              <p className="text-lg leading-relaxed text-foreground/95 font-semibold">
              Sou um desenvolvedor focado na criação de {" "}
              <span className="text-primary font-bold">soluções</span> e{" "}
              <span className="text-primary font-bold">bem estruturadas</span> através do código. Com experiência em
              múltiplas linguagens de programação, mantenho um processo contínuo de evolução técnica, buscando
              constantemente aprimorar minhas habilidades e acompanhar novas tecnologias.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-accent/10 text-accent">
                <Sparkles className="h-6 w-6" />
              </div>
              <p className="text-lg leading-relaxed text-foreground/95 font-semibold">
                Minha jornada no desenvolvimento é marcada pelo{" "}
                <span className="text-accent font-bold">estudo autodidata</span> e pela prática constante em projetos
                reais. Acredito que a melhor forma de aprender é colocando a mão na massa e enfrentando desafios reais.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-border/50">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">Brasil</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
