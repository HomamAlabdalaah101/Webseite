export interface ProjectDetail {
  id: number
  title: string
  category: string
  description: string
  shortDescription: string
  tags: string[]
  image: string
  images: string[]
  longDescription: string
  features: string[]
  technologies: string[]
  role: string
  duration: string
}

export const projectsData: ProjectDetail[] = [
  {
    id: 1,
    title: "Ball Roll",
    category: "Game Development",
    shortDescription:
      "A Unity-based physics game featuring dynamic ball mechanics, scoring systems, and persistent high score tracking.",
    description:
      "A dynamic physics-based game developed in Unity where players control a rolling ball through challenging levels.",
    longDescription:
      "Ball Roll is a sophisticated physics-based game created in Unity that challenges players to navigate a rolling ball through intricate levels. The game features realistic physics simulation, dynamic environmental obstacles, and a comprehensive scoring system that tracks player performance. The high score system persists across sessions, encouraging players to improve their gameplay and compete for top rankings.",
    features: [
      "Dynamic physics-based ball mechanics",
      "Multiple challenging levels with increasing difficulty",
      "Real-time scoring system with combo mechanics",
      "Persistent high score leaderboard",
      "Smooth camera controls following the ball",
      "Collision detection and response system",
    ],
    technologies: ["Unity", "C#", "Physics Engine", "3D Graphics"],
    tags: ["Unity", "C#", "Physics", "Game Design"],
    image: "/images/ball-20roll-201.png",
    images: ["/images/ball-20roll-201.png", "/images/ball-20roll-202.png"],
    role: "Developer & Designer",
    duration: "3 months",
  },
  {
    id: 2,
    title: "Ballon – Reisebüro",
    category: "Web Design",
    shortDescription:
      "A modern travel agency website built with HTML, CSS, JavaScript, and Node.js backend. Showcasing destinations and booking functionality.",
    description: "Full-stack travel agency website with destination browsing and booking system.",
    longDescription:
      "Ballon is a comprehensive web platform designed for a travel agency, built using modern web technologies. The frontend showcases beautiful destination galleries with detailed information about various travel packages. The Node.js backend handles booking requests, user management, and payment processing integration. The site features responsive design, smooth navigation, and an intuitive booking experience.",
    features: [
      "Responsive design across all devices",
      "Destination gallery with detailed information",
      "Advanced search and filtering system",
      "Booking management system",
      "User authentication and profiles",
      "Integration with payment processing",
      "Admin dashboard for content management",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Node.js", "RESTful API"],
    tags: ["HTML/CSS", "JavaScript", "Node.js", "Web Design"],
    image: "/images/ballon-201.png",
    images: ["/images/ballon-201.png", "/images/ballon-202.png"],
    role: "Full-Stack Developer",
    duration: "4 months",
  },
  {
    id: 3,
    title: "2D Animation Film",
    category: "Motion Design",
    shortDescription:
      "An animated short film created using Adobe After Effects, featuring character animation and visual storytelling.",
    description: "A creative animated short film showcasing advanced motion design and storytelling techniques.",
    longDescription:
      "This 2D animation film is a creative short story brought to life through Adobe After Effects. The project demonstrates advanced animation techniques including character rigging, keyframe animation, and dynamic visual effects. The film tells a compelling narrative through carefully choreographed motion, color grading, and sound design, showcasing expertise in visual storytelling and motion graphics.",
    features: [
      "Hand-crafted character animations",
      "Dynamic camera movements and transitions",
      "Color grading and visual effects",
      "Sound design and audio synchronization",
      "Professional composition and framing",
      "Story-driven visual narrative",
    ],
    technologies: ["After Effects", "Animation", "Motion Graphics", "Color Grading"],
    tags: ["After Effects", "Animation", "Motion Design", "Storytelling"],
    image: "/images/2d-20animation-202.png",
    images: ["/images/2d-20animation.png", "/images/2d-20animation-202.png", "/images/2d-20animation-203.png"],
    role: "Animator & Director",
    duration: "2 months",
  },
]
