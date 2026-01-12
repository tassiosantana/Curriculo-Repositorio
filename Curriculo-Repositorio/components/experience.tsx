"use client"

import { Card } from "@/components/ui/card"
import { Briefcase, GraduationCap, Code2 } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const experiences = [
  {
    title: "Desenvolvedor Lua – Projetos FiveM",
    icon: Code2,
    items: [
      "Desenvolvimento de scripts em Lua para servidores FiveM",
      "Criação de sistemas complexos e funcionais",
      "Correção de bugs e otimização de performance de scripts",
    ],
  },
  {
    title: "Projetos em Python",
    icon: Briefcase,
    items: [
      "Desenvolvimento de automações para otimizar processos",
      "Criação de scripts utilitários para diversas finalidades",
      "Implementação de APIs simples e eficientes",
    ],
  },
  {
    title: "Formação",
    icon: GraduationCap,
    items: [
      "Estudo autodidata em programação",
      "Prática constante em projetos reais",
      "Aprendizado contínuo de novas tecnologias e best practices",
    ],
  },
]

export function Experience() {
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
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div
          className={`flex items-center gap-3 mb-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
        >
          <div className="h-1 w-12 bg-primary rounded-full" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Experiência & Projetos</h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent hidden md:block" />

          <div className="space-y-6">
            {experiences.map((exp, index) => {
              const Icon = exp.icon
              return (
                <Card
                  key={exp.title}
                  className={`p-8 glass-card hover-glow transition-all duration-700 md:ml-16 relative ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[4.5rem] top-8 w-4 h-4 rounded-full bg-primary glow-primary hidden md:block" />

                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                  </div>

                  <ul className="space-y-3 ml-2">
                    {exp.items.map((item, i) => (
                      <li key={i} className="flex gap-3 text-foreground leading-relaxed group">
                        <span className="text-primary mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0 group-hover:scale-150 transition-transform" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
