"use client"

import { useLanguage } from "@/lib/language-context"
import ProjectCard from "./project-card"

export default function Projects() {
  const { t, language } = useLanguage()

  const projects = [
    {
      id: 1,
      title: "Ball Roll",
      category: language === "de" ? t.categories.gameDevelopment : t.categories.gameDevelopment,
      description: t.projectDetails.ballRoll.shortDescription,
      tags: ["Unity", "C#", "Physics", "Game Design"],
      image: "/3d-ball-rolling-game-physics.jpg",
    },
    {
      id: 2,
      title: "Ballon – Reisebüro",
      category: language === "de" ? t.categories.webDesign : t.categories.webDesign,
      description: t.projectDetails.ballon.shortDescription,
      tags: ["HTML/CSS", "JavaScript", "Node.js", "Web Design"],
      image: "/travel-agency-website-design.jpg",
    },
    {
      id: 3,
      title: "2D Animation Film",
      category: language === "de" ? t.categories.motionDesign : t.categories.motionDesign,
      description: t.projectDetails.animation.shortDescription,
      tags: ["After Effects", "Animation", "Motion Design", "Storytelling"],
      image: "/2d-animation-film-abstract.jpg",
    },
  ]

  return (
    <section id="projects" className="py-16 md:py-20 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 md:mb-16">
          <p className="text-sm text-primary font-medium mb-2">{t.projects.selectedWork}</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">{t.projects.featuredProjects}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
