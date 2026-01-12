"use client"

import { Github, Linkedin, Mail, ChevronDown, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-background relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-glow delay-500" />

      <div className="max-w-4xl w-full relative z-10">
        <div className="space-y-6">
          {/* Terminal badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-mono text-primary transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
          >
            <Terminal className="h-4 w-4" />
            <span className="animate-pulse">Disponível para projetos</span>
          </div>

          {/* Name with gradient */}
          <h1
            className={`text-5xl md:text-7xl lg:text-8xl font-bold text-gradient transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
          >
            Tassio Vinicius
          </h1>

          {/* Role with typewriter effect */}
          <div
            className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
          >
            <p className="text-xl md:text-2xl text-muted-foreground font-mono flex items-center gap-2 flex-wrap">
              <span className="text-primary">&gt;</span>
              <span>Desenvolvedor</span>
              <span className="text-primary">|</span>
              <span className="text-foreground/80">Lua</span>
              <span className="text-primary">•</span>
              <span className="text-foreground/80">JavaScript</span>
              <span className="text-primary">•</span>
              <span className="text-foreground/80">Python</span>
              <span className="text-primary">•</span>
              <span className="text-foreground/80">React</span>
            </p>
          </div>

          {/* Description */}
          <p
            className={`text-lg text-muted-foreground max-w-2xl leading-relaxed transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
          >
            Desenvolvedor com experiência prática em diversas tecnologias, atuando na criação de scripts, automações e
            sistemas funcionais, além de interfaces web modernas, com foco em{" "}
            <span className="text-primary font-medium">performance</span> e{" "}
            <span className="text-primary font-medium">organização de código</span>.
          </p>

          {/* Buttons */}
          <div
            className={`flex flex-wrap gap-4 pt-4 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
          >
            <Button asChild size="lg" className="gap-2 glow-primary hover:scale-105 transition-transform">
              <a href="mailto:tassiovinicius54321@hotmail.com">
                <Mail className="h-5 w-5" />
                Entrar em Contato
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-2 glass border-primary/30 hover:bg-primary/10 hover:scale-105 transition-all bg-transparent"
            >
              <a href="https://github.com/tassiosantana" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-2 glass border-primary/30 hover:bg-primary/10 hover:scale-105 transition-all bg-transparent"
            >
              <a href="https://www.linkedin.com/in/tassio-santana-764056286/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-primary/50" />
      </div>
    </section>
  )
}
