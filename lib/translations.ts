export type Language = "de" | "en"

export const translations = {
  de: {
    // Header
    nav: {
      work: "Projekte",
      about: "Über mich",
      contact: "Kontakt",
    },
    // Hero
    hero: {
      greeting: "Hallo, ich bin",
      role: "Kreativer Entwickler & Designer",
      description:
        "Ich schaffe digitale Erlebnisse durch Spieleentwicklung, Webdesign und Animation. Technische Fähigkeiten mit kreativer Vision verbinden, um Ideen zum Leben zu erwecken.",
      viewWork: "Meine Arbeit ansehen",
      getInTouch: "Kontakt aufnehmen",
    },
    // Projects
    projects: {
      selectedWork: "Ausgewählte Arbeiten",
      featuredProjects: "Ausgewählte Projekte",
      backToProjects: "Zurück zu Projekten",
      projectNotFound: "Projekt nicht gefunden",
      projectGallery: "Projekt-Galerie",
      keyFeatures: "Hauptmerkmale",
      technologiesUsed: "Verwendete Technologien",
      tags: "Tags",
      otherProjects: "Andere Projekte",
      role: "ROLLE",
      duration: "DAUER",
    },
    // About
    about: {
      title: "Über mich",
      greeting: "Hi, ich bin Homam",
      tagline: "Ideen durch Code und Kreativität zum Leben erwecken",
      description:
        "Mit Expertise in Spieleentwicklung, Web-Technologien und digitaler Animation gehe ich jedes Projekt mit einer Mischung aus technischer Präzision und kreativer Vision an. Mein Weg von interaktiven Spielerlebnissen zu responsiven Webanwendungen zeigt meine Vielseitigkeit in verschiedenen kreativen Medien.",
      skills: "Fähigkeiten",
      tools: "Werkzeuge",
      skillsList: {
        gameDev: "Spieleentwicklung (Unity)",
        webDev: "Webentwicklung (HTML/CSS/JS)",
        animation: "Animation & Motion Design",
        backend: "Backend-Entwicklung",
      },
      toolsList: {
        unity: "Unity Engine",
        afterEffects: "Adobe After Effects",
        nodejs: "Node.js & JavaScript",
        webTech: "Web-Technologien",
      },
      techTitle: "Technologien hinter diesem Portfolio",
      techDescription:
        "Diese Portfolio-Website wurde mit modernen Web-Technologien erstellt, um schnelle Leistung, responsives Design und eine ausgezeichnete Benutzererfahrung auf allen Geräten zu gewährleisten.",
      frontend: "Frontend",
      uiComponents: "UI-Komponenten",
      features: "Funktionen",
    },
    // Contact
    contact: {
      title: "Kontakt aufnehmen",
      heading: "Lass uns etwas gemeinsam erschaffen",
      description: "Haben Sie ein Projekt im Sinn oder möchten Sie einfach Hallo sagen? Ich freue mich von Ihnen zu hören.",
      name: "Name",
      namePlaceholder: "Ihr Name",
      email: "E-Mail",
      emailPlaceholder: "ihre@email.de",
      subject: "Betreff",
      subjectPlaceholder: "Betreff der Nachricht",
      message: "Nachricht",
      messagePlaceholder: "Ihre Nachricht...",
      send: "Nachricht senden",
      sending: "Wird gesendet...",
      success: "Nachricht erfolgreich gesendet! Ich melde mich bald bei Ihnen.",
      error: "Fehler beim Senden. Bitte versuchen Sie es erneut.",
      orReach: "Oder direkt erreichen",
    },
    // Project Details
    projectDetails: {
      ballRoll: {
        shortDescription:
          "Ein Unity-basiertes Physikspiel mit dynamischer Ballmechanik, Punktesystemen und persistenter Highscore-Verfolgung.",
        description:
          "Ein dynamisches physikbasiertes Spiel, das in Unity entwickelt wurde, bei dem Spieler einen rollenden Ball durch anspruchsvolle Level steuern.",
        longDescription:
          "Ball Roll ist ein ausgeklügeltes physikbasiertes Spiel, das in Unity erstellt wurde und Spieler herausfordert, einen rollenden Ball durch komplexe Level zu navigieren. Das Spiel bietet realistische Physiksimulation, dynamische Umgebungshindernisse und ein umfassendes Punktesystem, das die Spielerleistung verfolgt. Das Highscore-System bleibt über Sitzungen hinweg erhalten und ermutigt Spieler, ihr Gameplay zu verbessern und um Spitzenplatzierungen zu konkurrieren.",
        features: [
          "Dynamische physikbasierte Ballmechanik",
          "Mehrere anspruchsvolle Level mit steigendem Schwierigkeitsgrad",
          "Echtzeit-Punktesystem mit Combo-Mechanik",
          "Persistente Highscore-Bestenliste",
          "Sanfte Kamerasteuerung, die dem Ball folgt",
          "Kollisionserkennung und Reaktionssystem",
        ],
        role: "Entwickler & Designer",
        duration: "3 Monate",
      },
      ballon: {
        shortDescription:
          "Eine moderne Reisebüro-Website, erstellt mit HTML, CSS, JavaScript und Node.js-Backend. Präsentation von Reisezielen und Buchungsfunktionalität.",
        description: "Full-Stack Reisebüro-Website mit Reiseziel-Browsing und Buchungssystem.",
        longDescription:
          "Ballon ist eine umfassende Webplattform für ein Reisebüro, die mit modernen Web-Technologien erstellt wurde. Das Frontend präsentiert wunderschöne Reiseziel-Galerien mit detaillierten Informationen über verschiedene Reisepakete. Das Node.js-Backend verarbeitet Buchungsanfragen, Benutzerverwaltung und Integration der Zahlungsabwicklung. Die Website bietet responsives Design, sanfte Navigation und ein intuitives Buchungserlebnis.",
        features: [
          "Responsives Design auf allen Geräten",
          "Reiseziel-Galerie mit detaillierten Informationen",
          "Erweitertes Such- und Filtersystem",
          "Buchungsverwaltungssystem",
          "Benutzerauthentifizierung und Profile",
          "Integration mit Zahlungsabwicklung",
          "Admin-Dashboard für Content-Management",
        ],
        role: "Full-Stack Entwickler",
        duration: "4 Monate",
      },
      animation: {
        shortDescription:
          "Ein animierter Kurzfilm, erstellt mit Adobe After Effects, mit Charakteranimation und visuellem Storytelling.",
        description: "Ein kreativer animierter Kurzfilm, der fortgeschrittene Motion-Design- und Storytelling-Techniken zeigt.",
        longDescription:
          "Dieser 2D-Animationsfilm ist eine kreative Kurzgeschichte, die durch Adobe After Effects zum Leben erweckt wurde. Das Projekt demonstriert fortgeschrittene Animationstechniken einschließlich Charakter-Rigging, Keyframe-Animation und dynamische visuelle Effekte. Der Film erzählt eine fesselnde Geschichte durch sorgfältig choreografierte Bewegung, Farbkorrektur und Sounddesign und zeigt Expertise in visuellem Storytelling und Motion Graphics.",
        features: [
          "Handgefertigte Charakteranimationen",
          "Dynamische Kamerabewegungen und Übergänge",
          "Farbkorrektur und visuelle Effekte",
          "Sounddesign und Audio-Synchronisation",
          "Professionelle Komposition und Bildausschnitt",
          "Story-getriebene visuelle Erzählung",
        ],
        role: "Animator & Regisseur",
        duration: "2 Monate",
      },
    },
    categories: {
      gameDevelopment: "Spieleentwicklung",
      webDesign: "Webdesign",
      motionDesign: "Motion Design",
    },
  },
  en: {
    // Header
    nav: {
      work: "Work",
      about: "About",
      contact: "Contact",
    },
    // Hero
    hero: {
      greeting: "Hello, I'm",
      role: "Creative Developer & Designer",
      description:
        "I craft digital experiences through game development, web design, and animation. Blending technical skills with creative vision to bring ideas to life.",
      viewWork: "View My Work",
      getInTouch: "Get in Touch",
    },
    // Projects
    projects: {
      selectedWork: "Selected Work",
      featuredProjects: "Featured Projects",
      backToProjects: "Back to Projects",
      projectNotFound: "Project Not Found",
      projectGallery: "Project Gallery",
      keyFeatures: "Key Features",
      technologiesUsed: "Technologies Used",
      tags: "Tags",
      otherProjects: "Other Projects",
      role: "ROLE",
      duration: "DURATION",
    },
    // About
    about: {
      title: "About Me",
      greeting: "Hi, I'm Homam",
      tagline: "Bringing Ideas to Life Through Code and Creativity",
      description:
        "With expertise spanning game development, web technologies, and digital animation, I approach each project with a blend of technical precision and creative vision. My journey from interactive gaming experiences to responsive web applications demonstrates my versatility across different creative mediums.",
      skills: "Skills",
      tools: "Tools",
      skillsList: {
        gameDev: "Game Development (Unity)",
        webDev: "Web Development (HTML/CSS/JS)",
        animation: "Animation & Motion Design",
        backend: "Backend Development",
      },
      toolsList: {
        unity: "Unity Engine",
        afterEffects: "Adobe After Effects",
        nodejs: "Node.js & JavaScript",
        webTech: "Web Technologies",
      },
      techTitle: "Technologies Behind This Portfolio",
      techDescription:
        "This portfolio website was built using modern web technologies to ensure fast performance, responsive design, and an excellent user experience across all devices.",
      frontend: "Frontend",
      uiComponents: "UI Components",
      features: "Features",
    },
    // Contact
    contact: {
      title: "Get in Touch",
      heading: "Let's Create Something Together",
      description: "Have a project in mind or just want to say hello? I'd love to hear from you.",
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "your@email.com",
      subject: "Subject",
      subjectPlaceholder: "Subject of your message",
      message: "Message",
      messagePlaceholder: "Your message...",
      send: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully! I'll get back to you soon.",
      error: "Error sending message. Please try again.",
      orReach: "Or reach out directly",
    },
    // Project Details
    projectDetails: {
      ballRoll: {
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
        role: "Developer & Designer",
        duration: "3 months",
      },
      ballon: {
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
        role: "Full-Stack Developer",
        duration: "4 months",
      },
      animation: {
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
        role: "Animator & Director",
        duration: "2 months",
      },
    },
    categories: {
      gameDevelopment: "Game Development",
      webDesign: "Web Design",
      motionDesign: "Motion Design",
    },
  },
}

export type Translations = typeof translations.de
