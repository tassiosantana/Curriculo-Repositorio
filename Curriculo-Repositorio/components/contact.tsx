"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, MapPin, Send, ArrowUpRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function Contact() {
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
    <section ref={sectionRef} className="px-4 py-24 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div
          className={`flex items-center gap-3 mb-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
        >
          <div className="h-1 w-12 bg-primary rounded-full" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Contato</h2>
        </div>

        <Card
          className={`p-8 glass-card transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-lg text-foreground mb-8 leading-relaxed">
            Estou sempre aberto a novos desafios e oportunidades. Se você tem um projeto em mente ou gostaria de
            conversar sobre desenvolvimento,{" "}
            <span className="text-primary font-medium">não hesite em entrar em contato</span>.
          </p>

          <div className="grid gap-4 md:grid-cols-2 mb-8">
            <a
              href="mailto:tassiovinicius54321@hotmail.com"
              className="group flex items-center gap-4 p-4 rounded-xl glass hover:bg-primary/10 transition-all hover:scale-105"
            >
              <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Mail className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-foreground truncate">tassiovinicius54321@hotmail.com</p>
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>

            <div className="flex items-center gap-4 p-4 rounded-xl glass">
              <div className="p-3 rounded-xl bg-accent/10 text-accent">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Localização</p>
                <p className="text-foreground">Brasil</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="gap-2 glow-primary hover:scale-105 transition-transform">
              <a href="mailto:tassiovinicius54321@hotmail.com">
                <Send className="h-5 w-5" />
                Enviar Email
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-2 glass border-primary/30 hover:bg-primary/10 hover:scale-105 transition-all group bg-transparent"
            >
              <a href="https://github.com/tassiosantana" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                GitHub
                <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-2 glass border-primary/30 hover:bg-primary/10 hover:scale-105 transition-all group bg-transparent"
            >
              <a href="https://www.linkedin.com/in/tassio-santana-764056286/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                LinkedIn
                <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </Button>
          </div>
        </Card>

        {/* Footer */}
        <div
          className={`mt-16 text-center transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-muted-foreground text-sm">
            Desenvolvido com <span className="text-primary">Next.js</span> e{" "}
            <span className="text-primary">Tailwind CSS</span>
          </p>
          <p className="text-muted-foreground/60 text-xs mt-2">© 2026 Tassio Vinicius. Todos os direitos reservados.</p>
        </div>
      </div>
    </section>
  )
}
