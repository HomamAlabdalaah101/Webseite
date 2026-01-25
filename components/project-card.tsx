"use client"

import Link from "next/link"

interface Project {
  id: number
  title: string
  category: string
  description: string
  tags: string[]
  image: string
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.id}`}>
      <div className="group rounded-lg overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 cursor-pointer transform hover:-translate-y-2">
        <div className="relative overflow-hidden h-64 bg-muted">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <p className="text-xs text-primary font-medium mb-2 group-hover:scale-105 transition-transform duration-200">{project.category}</p>
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 group-hover:scale-105 transition-transform">
              {project.title}
            </h3>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">{project.description}</p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag, index) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs bg-muted text-muted-foreground rounded-full group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300 transform group-hover:scale-105"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}
