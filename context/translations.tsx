

import { Phone, Code2, Mail } from 'lucide-react';

export const translations = {
    en: {

        descIntro: {
            title: "Front-end developer",
            description: "I'm no magician, but I make divs float and bugs disappear.",
            buttonWork: "View Work",
            buttonTouch: "Get in Touch",
            buttonCV: "Download CV",
            scroll: "Scroll down",
        },

        descProject: {
            title: "My Projects",
            description: "Explore some of my recent work. Click on a project to discover more details and insights.",
        }  ,

        aboutMe: {
            title: "About Me",
            name: "Hi, I`m Miguel Cimildoro",
            description: "Passionate Frontend Developer focused on building modern, fast, and user-friendly web applications. I specialize in React, Next.js, TailwindCSS, and performance optimization to create seamless digital experiences.",
            about: [{
                id:1,
                icon: "CodeXml",
                title: "Web Development",
                description: "Building modern web applications with the latest technologies.",
                },
                {
                id:2,
                icon: "Palette",
                title: "UI/UX Design",
                description: "Creating intuitive and visually appealing user interfaces.",
                },
                {
                id:3,
                icon: "Globe",
                title: "Responsive Design",
                description: "Ensuring websites look great on all devices and screen sizes.",
                },
                {
                id:4,
                icon: "Zap",
                title: "Performance",
                description: "Optimizing websites for speed and performance.",
                },
            ],
        },
        
        skills: {
           title: "Skills",
           description: "Here are some of the technologies and tools I work with.",
        },

        navbar: [
            { id: 1, title: "Home", link: "#home" },
            { id: 2, title: "About Me", link: "#about-me" },
            { id: 3, title: "Skills", link: "#skills" },
            { id: 4, title: "Experience", link: "#experience" },
            { id: 5, title: "Contact", link: "#contact" },
        ],
  
        projects: {
            viewDetails: "View Details",
            project: [
                {
                    id: 1,
                    title: "Balanced 7v7 Team Generator",
                    description: "A Next.js app that creates 3 balanced football teams of 7 players using Firebase.",
                    image: "/teams.png",
                    viewDetails: "Ver Detalles",
                    tags: ["Next.js", "Firebase", "TailwindCSS", "React"],
                    github: "https://github.com/mcimildoro/fut7generator",
                    demo: "https://fut7app-next.web.app",
                    longDescription:
                    "This application allows users to generate 3 balanced football teams (7v7) automatically. Using a custom algorithm, the system ensures that no team is stronger or weaker than the others. The player data is stored and retrieved from Firebase, and the app is deployed using Firebase Hosting. It features a responsive UI built with TailwindCSS and a login system for user authentication.",
                },
                {
                    id: 2,
                    title: "Household Expense Tracker",
                    description: "A Next.js app to manage and track household expenses with shared user access.",
                    image: "/ex-tracker.png",
                    tags: ["Next.js", "PostgreSQL", "Neon Console", "TailwindCSS", "Vercel"],
                    github: "https://github.com/mcimildoro/ExpenseTracker",
                    demo: "https://householder.vercel.app/",
                    longDescription:
                    "This app simplifies household expense tracking, similar to banking apps. Built with Next.js, it uses PostgreSQL (Neon Console) for data management and supports multi-user authentication. Deployed on Vercel, it offers a responsive UI with TailwindCSS, allowing users to log in, add expenses, categorize spending, and view financial summaries.",
                },
                {
                    id: 3,
                    title: "ConInversión - Investment Platform 🚧 (In Construction)",
                    description: "A financial platform that guides users in investment funds with subscription-based access.",
                    image: "/coninversion.svg",
                    tags: ["Next.js", "PostgreSQL", "Drizzle ORM", "TailwindCSS", "Vercel", "Auth0", "Subscription"],
                    github: "https://github.com/mcimildoro/conInversion",
                    demo: "https://con-inversion.vercel.app/",
                    longDescription:
                    "ConInversión is a financial platform that helps users invest in funds with expert guidance. It offers subscription-based access to investment plans and includes an admin panel for managing users and subscriptions. Built with Next.js, TailwindCSS, and PostgreSQL (Drizzle ORM), it's deployed on Vercel for high performance and scalability.",
                }
            ],
        },

        experience: {
            title: "Work Experience",
            description: "My professional journey and work experience.",
            exp: [
                {
                    title: "Frontend Developer",
                    company: "Gransolar Group",
                    location: "Madrid",
                    period: "2022 - 2025",
                    description:
                      "Developed industrial applications using SCADA Ignition and created user manuals with React and TailwindCSS to enhance usability and system documentation.",
                  },
                  {
                    title: "Frontend Developer",
                    company: "Verticecrea CA",
                    location: "Madrid - Remote",
                    period: "2020 - 2022",
                    description:
                      "Built web applications with React.js, Next.js, and TailwindCSS. Implemented SSR/SSG for performance and developed responsive interfaces. Collaborated with clients to deliver scalable solutions.",
                  },
                  {
                    title: "FullStack Developer",
                    company: "Banco Santander - Openscript Consulting",
                    location: "Madrid",
                    period: "2018 - 2020",
                    description:
                      "Developed and maintained banking applications using J2EE, XML, and Apache HTTP Server. Diagnosed server failures, automated tasks with Bash scripting, and optimized system stability and performance.",
                  },
                  {
                    title: "Software Developer",
                    company: "Hewlett Packard - ABDE Business Consulting",
                    location: "Madrid",
                    period: "2017 - 2018",
                    description:
                      "Developed data collectors using IUM, Bash, and Java. Created and executed Shell, AWK, and PL/SQL scripts, managing version control with SVN. Worked on projects for Euskaltel and Orange under Agile methodologies, using JIRA for task management.",
                  },
                  ,
                  {
                    title: "Frontend Developer",
                    company: "Gomega Apps C.A.",
                    location: "Caracas, Venezuela",
                    period: "2017 - 2018",
                    description:
                      "Contributed to a bank financing application for Banco CANTV, improving user experience and financial process efficiency.",
                  }
            ],
        },

        contact: {
            title: "Concact Me",
            form : [
                {
                    id: 1,
                    title: "Phone",
                    subtitle: "+34 722 477 525",
                    link: "tel:+34722477525",
                    icon: () => <Phone size={20} />,  // ✅ Ahora es una función),
                },
                {
                    id: 2,
                    title: "Github",
                    subtitle: "github.com/mcimildoro",
                    link: "https://github.com/mcimildoro",
                    icon: () => <Code2 size={20} />,  // ✅ Ahora es una función),
                },
                {
                    id: 3,
                    title: "Email",
                    subtitle: "cimildoro@gmail.com",
                    link: "mailto:cimildoro@gmail.com",
                    icon: () => <Mail size={20} />,  // ✅ Ahora es una función),
                },
            ]       
        },

        form: {
            name: "Your Name",
            email: "Your Email",
            message: "Write your message here...",
            send: "Send"
        },

        footer: {
            title: "mcimildoro",
            about: "About",
            skills: "Skills",
            projects: "Portfolio",
            experience: "Work Experience",
            derechos: "All rights reserved."
        }
    },


   // Spanish translation


   es: {

        descIntro: {
            title: "Desarrollador Front-end",
            description: "No soy mago, pero hago que los divs floten y los bugs desaparezcan.",
            buttonWork: "Mi Trabajo",
            buttonTouch: "Concactame",
            buttonCV: "Descargar CV",
            scroll: "Desplazarse hacia abajo",
        },

        descProject:{
            title: "Mis Proyectos",
            description: "Explore algunos de mis trabajos recientes. Haz clic en un proyecto para descubrir más detalles y perspectivas.",
        },

        aboutMe: {
            title: "Sobre Mí",
            name: "Hola, soy Miguel Cimildoro",
            description: "Desarrollador Frontend apasionado centrado en la construcción de aplicaciones web modernas, rápidas y fáciles de usar. Me especializo en React, Next.js, TailwindCSS, y la optimización del rendimiento para crear experiencias digitales sin fisuras.",
            about: [{
                id:1,
                icon: "CodeXml",
                title: "Desarrollo Web",
                description: "Creación de aplicaciones web modernas con las últimas tecnologías.",
                },
                {
                id:2,
                icon: "Palette",
                title: "Diseño UI/UX",
                description: "Creación de interfaces de usuario intuitivas y visualmente atractivas.",
                },
                {
                id:3,
                icon: "Globe",
                title: "Diseño Responsivo",
                description: "Garantizar que los sitios web se vean bien en todos los dispositivos y tamaños de pantalla.",
                },
                {
                id:4,
                icon: "Zap",
                title: "Rendimiento",
                description: "Optimización de la velocidad y el rendimiento de los sitios web.",
                },
            ],
        },

        skills: {
            title: "Habilidades",
            description: "Aquí tienes algunas de las tecnologías y herramientas con",
         },

        navbar: [
            { id: 1, title: "Inicio", link: "#home" },
            { id: 2, title: "Sobre Mí", link: "#about-me" },
            { id: 3, title: "Habilidades", link: "#skills" },
            { id: 4, title: "Experiencia", link: "#experience" },
            { id: 5, title: "Contacto", link: "#contact" },
        ],
    
        projects: {
           viewDetails: "Ver Detalles",
           project: [
                {
                    id: 1,
                    title: "Generador de Equipos Equilibrados 7v7",
                    description: "Una aplicación Next.js que crea 3 equipos de fútbol equilibrados de 7 jugadores usando Firebase.",
                    image: "/teams.png",
                    viewDetails: "Ver Detalles",
                    tags: ["Next.js", "Firebase", "TailwindCSS", "React"],
                    github: "https://github.com/mcimildoro/fut7generator",
                    demo: "https://fut7app-next.web.app",
                    longDescription:
                    "Esta aplicación permite a los usuarios generar 3 equipos de fútbol equilibrados (7v7) de forma automática. Mediante un algoritmo personalizado, el sistema garantiza que ningún equipo sea más fuerte o más débil que los demás. Los datos de los jugadores se almacenan y recuperan de Firebase, y la aplicación se despliega utilizando Firebase Hosting. Cuenta con una interfaz de usuario responsiva construida con TailwindCSS y un sistema de inicio de sesión para la autenticación de usuarios.",
                },
                {
                    id: 2,
                    title: "Administrador de Gastos del Hogar",
                    description: "Una app Next.js para gestionar y rastrear los gastos del hogar con acceso compartido.",
                    image: "/ex-tracker.png",
                    tags: ["Next.js", "PostgreSQL", "Neon Console", "TailwindCSS", "Vercel"],
                    github: "https://github.com/mcimildoro/ExpenseTracker",
                    demo: "https://householder.vercel.app/",
                    longDescription:
                    "Esta aplicación simplifica el seguimiento de los gastos domésticos, de forma similar a las aplicaciones bancarias. Creada con Next.js, utiliza PostgreSQL (Neon Console) para la gestión de datos y admite autenticación multiusuario. Desplegada en Vercel, ofrece una interfaz de usuario responsiva con TailwindCSS, que permite a los usuarios iniciar sesión, añadir gastos, categorizar el gasto y ver resúmenes financieros."
                },
                {
                    id: 3,
                    title: "ConInversión - Plataforma de inversión 🚧 (En construcción)",
                    description: "Plataforma financiera que orienta a los usuarios en fondos de inversión con acceso por suscripción",
                    image: "/coninversion.svg",
                    tags: ["Next.js", "PostgreSQL", "Drizzle ORM", "TailwindCSS", "Vercel", "Auth0", "Subscription"],
                    github: "https://github.com/mcimildoro/conInversion",
                    demo: "https://con-inversion.vercel.app/",
                    longDescription:
                        "ConInversión es una plataforma financiera que ayuda a los usuarios a invertir en fondos con la orientación de expertos. Ofrece acceso por suscripción a planes de inversión e incluye un panel de administración para gestionar usuarios y suscripciones. Construida con Next.js, TailwindCSS y PostgreSQL (Drizzle ORM), está desplegada sobre Vercel para un alto rendimiento y escalabilidad"
                }
            ],
        },

        experience: {
            title: "Explora mi experiencia",
            description: "Mi trayectoria profesional y experiencia laboral.",
            exp: [
                {
                    title: "Frontend Developer",
                    company: "Gransolar Group",
                    location: "Madrid",
                    period: "2022 - 2025",
                    description:
                      "Desarrolló aplicaciones industriales utilizando SCADA Ignition y creó manuales de usuario con React y TailwindCSS para mejorar la usabilidad y la documentación del sistema.",
                  },
                  {
                    title: "Frontend Developer",
                    company: "Verticecrea CA",
                    location: "Madrid - Remoto",
                    period: "2020 - 2022",
                    description:
                      "Creación de aplicaciones web con React.js, Next.js y TailwindCSS. Implementación de SSR/SSG para rendimiento y desarrollo de interfaces responsivas. Colaboración con los clientes para ofrecer soluciones escalables.",
                  },
                  {
                    title: "FullStack Developer",
                    company: "Banco Santander - Openscript Consulting",
                    location: "Madrid",
                    period: "2018 - 2020",
                    description:
                      "Desarrollo y mantenimiento de aplicaciones bancarias utilizando J2EE, XML y Apache HTTP Server. Diagnóstico de fallos del servidor, automatización de tareas con scripts Bash y optimización de la estabilidad y el rendimiento del sistema.",
                  },
                  {
                    title: "Software Developer",
                    company: "Hewlett Packard - ABDE Business Consulting",
                    location: "Madrid",
                    period: "2017 - 2018",
                    description:
                      "Desarrollo de colectores de datos utilizando IUM, Bash y Java. Creación y ejecución de scripts Shell, AWK y PL/SQL, gestionando el control de versiones con SVN. Trabajé en proyectos para Euskaltel y Orange bajo metodologías ágiles, utilizando JIRA para la gestión de tareas.",
                  },
                  ,
                  {
                    title: "Frontend Developer",
                    company: "Gomega Apps C.A.",
                    location: "Caracas, Venezuela",
                    period: "2017 - 2018",
                    description:
                      "Contribución a una aplicación de financiación bancaria para el Banco CANTV, mejorando la experiencia del usuario y la eficiencia del proceso financiero.",
                  }
            ],
        },

        contact: {
            title: "Contáctame",
            form : [
                {
                    id: 1,
                    title: "Telefono",
                    subtitle: "+34 722 477 525",
                    link: "tel:+34722477525",
                    icon: () => <Phone size={20} />,  // ✅ Ahora es una función),
                },
                {
                    id: 2,
                    title: "Github",
                    subtitle: "github.com/mcimildoro",
                    link: "https://github.com/mcimildoro",
                    icon: () => <Code2 size={20} />,  // ✅ Ahora es una función),
                },
                {
                    id: 3,
                    title: "Correo Electrónico",
                    subtitle: "cimildoro@gmail.com",
                    link: "mailto:cimildoro@gmail.com",
                    icon: () => <Mail size={20} />,  // ✅ Ahora es una función),
                },
            ]       
        },

        form: {
            name: "Tu nombre",
            email: "Correo Electrónico",
            message: "Escribe tu mensaje aquí...",
            send: "Enviar"
        },

        footer: {
            title: "mcimildoro",
            about: "Sobre mi",
            skills: "Habilidades",
            projects: "Proyectos",
            experience: "Experiencia",
            derechos: "Todos los derechos reservados."
        }

    }
}

  