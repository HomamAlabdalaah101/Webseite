"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import Header from "@/components/header"
import { ChevronLeft } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

interface ProjectData {
  id: number
  title: string
  image: string
  images: string[]
  technologies: string[]
  tags: string[]
}

const projectsBaseData: ProjectData[] = [
  {
    id: 1,
    title: "Ball Roll",
    image: "/images/ball-20roll-201.png",
    images: ["/images/ball-20roll-201.png", "/images/ball-20roll-202.png"],
    technologies: ["Unity", "C#", "Physics Engine", "3D Graphics"],
    tags: ["Unity", "C#", "Physics", "Game Design"],
  },
  {
    id: 2,
    title: "Ballon – Reisebüro",
    image: "/images/ballon-201.png",
    images: ["/images/ballon-201.png", "/images/ballon-202.png"],
    technologies: ["HTML5", "CSS3", "JavaScript", "Node.js", "RESTful API"],
    tags: ["HTML/CSS", "JavaScript", "Node.js", "Web Design"],
  },
  {
    id: 3,
    title: "2D Animation Film",
    image: "/images/2d-20animation-202.png",
    images: ["/images/2d-20animation.png", "/images/2d-20animation-202.png", "/images/2d-20animation-203.png"],
    technologies: ["After Effects", "Animation", "Motion Graphics", "Color Grading"],
    tags: ["After Effects", "Animation", "Motion Design", "Storytelling"],
  },
]

export default function ProjectPage() {
  const params = useParams()
  const projectId = Number(params.id)
  const { t, language } = useLanguage()
  
  const projectBase = projectsBaseData.find((p) => p.id === projectId)

  if (!projectBase) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">{t.projects.projectNotFound}</h1>
          <Link href="/#projects" className="text-primary hover:text-primary/80">
            {t.projects.backToProjects}
          </Link>
        </div>
      </main>
    )
  }

  // Get translated content based on project ID
  const getTranslatedContent = () => {
    switch (projectId) {
      case 1:
        return {
          category: t.categories.gameDevelopment,
          longDescription: t.projectDetails.ballRoll.longDescription,
          features: t.projectDetails.ballRoll.features,
          role: t.projectDetails.ballRoll.role,
          duration: t.projectDetails.ballRoll.duration,
        }
      case 2:
        return {
          category: t.categories.webDesign,
          longDescription: t.projectDetails.ballon.longDescription,
          features: t.projectDetails.ballon.features,
          role: t.projectDetails.ballon.role,
          duration: t.projectDetails.ballon.duration,
        }
      case 3:
        return {
          category: t.categories.motionDesign,
          longDescription: t.projectDetails.animation.longDescription,
          features: t.projectDetails.animation.features,
          role: t.projectDetails.animation.role,
          duration: t.projectDetails.animation.duration,
        }
      default:
        return {
          category: "",
          longDescription: "",
          features: [],
          role: "",
          duration: "",
        }
    }
  }

  const translatedContent = getTranslatedContent()

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Back Button */}
      <div className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors w-fit"
          >
            <ChevronLeft className="w-5 h-5" />
            {t.projects.backToProjects}
          </Link>
        </div>
      </div>

      {/* Project Hero */}
      <section className="py-12 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-12">
            <div>
              <p className="text-sm text-primary font-medium mb-3">{translatedContent.category}</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">{projectBase.title}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">{translatedContent.longDescription}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-border">
                <div>
                  <p className="text-xs text-primary font-medium mb-2">{t.projects.role}</p>
                  <p className="text-sm text-foreground">{translatedContent.role}</p>
                </div>
                <div>
                  <p className="text-xs text-primary font-medium mb-2">{t.projects.duration}</p>
                  <p className="text-sm text-foreground">{translatedContent.duration}</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden border border-border">
              <img
                src={projectBase.image || "/placeholder.svg"}
                alt={projectBase.title}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">{t.projects.projectGallery}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectBase.images.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden border border-border bg-muted">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${projectBase.title} - Image ${index + 1}`}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Technologies */}
      <section className="py-20 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
            {/* Features */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">{t.projects.keyFeatures}</h3>
              <ul className="space-y-3">
                {translatedContent.features.map((feature, index) => (
                  <li key={index} className="flex gap-3 text-muted-foreground">
                    <span className="text-primary font-bold mt-1">→</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">{t.projects.technologiesUsed}</h3>
              <div className="flex flex-wrap gap-3">
                {projectBase.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="text-sm text-primary font-medium mb-4">{t.projects.tags}</h4>
                <div className="flex flex-wrap gap-2">
                  {projectBase.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs bg-muted text-muted-foreground rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">{t.projects.otherProjects}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsBaseData
              .filter((p) => p.id !== projectId)
              .map((relatedProject) => {
                const relatedCategory = relatedProject.id === 1 
                  ? t.categories.gameDevelopment 
                  : relatedProject.id === 2 
                    ? t.categories.webDesign 
                    : t.categories.motionDesign
                
                return (
                  <Link key={relatedProject.id} href={`/projects/${relatedProject.id}`}>
                    <div className="group rounded-lg overflow-hidden bg-card border border-border hover:border-primary/50 transition-all cursor-pointer">
                      <div className="relative overflow-hidden h-56 bg-muted">
                        <img
                          src={relatedProject.image || "/placeholder.svg"}
                          alt={relatedProject.title}
                          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <p className="text-xs text-primary font-medium mb-2">{relatedCategory}</p>
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                          {relatedProject.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                )
              })}
          </div>
        </div>
      </section>
    </main>
  )
}
