"use client"

import { Card } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

const technologies = [
  { name: "Lua", category: "Scripting", color: "from-blue-500 to-blue-600" },
  { name: "JavaScript", category: "Frontend/Backend", color: "from-yellow-400 to-yellow-500" },
  { name: "Python", category: "Backend/Automation", color: "from-green-400 to-green-500" },
  { name: "HTML", category: "Frontend", color: "from-orange-500 to-orange-600" },
  { name: "CSS", category: "Frontend", color: "from-blue-400 to-blue-500" },
  { name: "React", category: "Frontend", color: "from-cyan-400 to-cyan-500" },
  { name: "Node.js", category: "Backend", color: "from-green-500 to-green-600" },
  { name: "MySQL", category: "Database", color: "from-blue-600 to-blue-700" },
  { name: "Git / GitHub", category: "Version Control", color: "from-gray-500 to-gray-600" },
]

export function Technologies() {
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
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div
          className={`flex items-center gap-3 mb-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
        >
          <div className="h-1 w-12 bg-primary rounded-full" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Tecnologias</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {technologies.map((tech, index) => (
            <Card
              key={tech.name}
              className={`group p-6 glass-card hover-glow cursor-default transition-all duration-500 hover:scale-105 hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4">
                {/* Colored dot indicator */}
                <div
                  className={`w-3 h-3 rounded-full bg-gradient-to-r ${tech.color} group-hover:scale-150 transition-transform`}
                />
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{tech.category}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
