import type { Metadata } from "next"
import { projectsData } from "@/lib/projects-data"
import ProjectPageClient from "./project-page-client"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const projectId = Number(id)
  const project = projectsData.find((p) => p.id === projectId)

  if (!project) {
    return {
      title: "Projekt nicht gefunden",
      description: "Das gesuchte Projekt wurde nicht gefunden.",
    }
  }

  return {
    title: project.title,
    description: project.shortDescription,
    alternates: {
      canonical: `https://homamdev.de/projects/${projectId}`,
    },
    openGraph: {
      title: `${project.title} | HomamDev`,
      description: project.shortDescription,
      url: `https://homamdev.de/projects/${projectId}`,
      siteName: "HomamDev",
      locale: "de_DE",
      type: "website",
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | HomamDev`,
      description: project.shortDescription,
      images: [project.image],
    },
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  return <ProjectPageClient projectId={Number(id)} />
}
