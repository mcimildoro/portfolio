import React from 'react'
import { /*BellPlus*/ Braces, Briefcase, Brush, Code2, Home, Mail, PanelsTopLeft, Phone, UserRound } from 'lucide-react'

export const dataAboutMe = [
    {
        id: 1,
        name: 'Experience',
        icon: () => <Briefcase size={20} />, // ✅ Ahora es una función),
        description: '+5 years of experience',
    },
]

export const itemsNavbar = [
    {
        id: 1,
        title: 'Home',
        icon: () => <Home size={20} />, // ✅ Ahora es una función
        link: '#home',
    },
    {
        id: 2,
        title: 'User',
        icon: () => <UserRound size={20} />,
        link: '#about-me',
    },
    {
        id: 3,
        title: 'Braces',
        icon: () => <Braces size={20} />,
        link: '#skills',
    },
    {
        id: 4,
        title: 'Layers',
        icon: () => <Briefcase size={20} />,
        link: '#experience',
    },
    {
        id: 5,
        title: 'Mail',
        icon: () => <Mail size={20} />,
        link: '#contact',
    },
]

export const dataSlider = [
    {
        id: 1,
        url: '/porfolioweb.jpg',
    },
    {
        id: 2,
        url: '/portfolioweb2.jpg',
    },
    {
        id: 3,
        url: '/portfolioweb3.jpg',
    },
    {
        id: 4,
        url: '/scada.jpeg',
    },
]

export const dataPortfolio = [
    {
        id: 1,
        title: 'Web Pro',
        image: '/image-1.jpg',
        urlGithub: '#!',
        urlDemo: '#!',
    },
    {
        id: 2,
        title: 'Agile Web Development',
        image: '/image-2.jpg',
        urlGithub: '#!',
        urlDemo: '#!',
    },
    {
        id: 3,
        title: 'Web Strategies',
        image: '/image-3.jpg',
        urlGithub: '#!',
        urlDemo: '#!',
    },
    {
        id: 4,
        title: 'Navigating Creative Ideas',
        image: '/image-4.jpg',
        urlGithub: '#!',
        urlDemo: '#!',
    },
    {
        id: 5,
        title: 'Impactful Websites',
        image: '/image-5.jpg',
        urlGithub: '#!',
        urlDemo: '#!',
    },
    {
        id: 6,
        title: 'Dynamic Web Projects',
        image: '/image-6.jpg',
        urlGithub: '#!',
        urlDemo: '#!',
    },
]

export const dataExperience = [
    {
        id: 1,
        title: 'Frontend Development 💄',
        experience: [
            {
                name: 'HTML',
                subtitle: 'Experienced',
                value: 80,
            },
            {
                name: 'CSS',
                subtitle: 'Experienced',
                value: 80,
            },
            {
                name: 'JavaScript',
                subtitle: 'Experienced',
                value: 60,
            },
            {
                name: 'Tailwind CSS',
                subtitle: 'Intermediate',
                value: 30,
            },
            {
                name: 'Typescript',
                subtitle: 'Intermediate',
                value: 30,
            },
            {
                name: 'React',
                subtitle: 'Intermediate',
                value: 60,
            },
            {
                name: 'Bootstrap',
                subtitle: 'Experienced',
                value: 50,
            },
            {
                name: 'Material UI',
                subtitle: 'Intermediate',
                value: 50,
            },
        ],
    },
    {
        id: 2,
        title: 'Backend Development  🐱‍👤',
        experience: [
            {
                name: 'Node JS',
                subtitle: 'Intermediate',
                value: 80,
            },
            {
                name: 'Mongo DB',
                subtitle: 'Intermediate',
                value: 75,
            },
            {
                name: 'Python',
                subtitle: 'Experienced',
                value: 70,
            },
            {
                name: 'MySQL',
                subtitle: 'Experienced',
                value: 60,
            },
            {
                name: 'PHP',
                subtitle: 'Intermediate',
                value: 60,
            },
            {
                name: 'SCADA',
                subtitle: 'Experienced',
                value: 80,
            },
            {
                name: 'Java',
                subtitle: 'Intermediate',
                value: 50,
            },
            {
                name: 'Shell Scripting (Bash)',
                subtitle: 'Intermediate',
                value: 50,
            },
        ],
    },
]

export const dataServices = [
    {
        id: 1,
        title: 'Web Development',
        icon: () => <PanelsTopLeft size={20} />, // ✅ Ahora es una función),
        features: [
            {
                name: 'Custom web site development',
            },
            {
                name: 'Responsive design and development',
            },
            {
                name: 'Process automation',
            },
            {
                name: 'Web application development',
            },
            {
                name: 'Content management',
            },
            {
                name: 'Web performance optimization',
            },
            {
                name: 'Ongoing maintenance and support',
            },
            {
                name: 'Web application performance monitoring and analysis',
            },
            {
                name: 'Implementation of authentication and security systems.',
            },
        ],
    },
    {
        id: 3,
        title: 'UI/UX Design',
        icon: () => <Brush size={20} />, // ✅ Ahora es una función),
        features: [
            {
                name: 'Intuitive design for a smooth user experience',
            },
            {
                name: 'Creation of attractive and functional interfaces',
            },
            {
                name: 'Development of wireframes and detailed mockups',
            },
            {
                name: 'Optimizing usability to improve accessibility',
            },
            {
                name: 'Definición de arquitectura de información clara y organizada',
            },
            {
                name: 'Responsive design to adapt to different devices',
            },
            {
                name: 'User journey maps to identify points of improvement',
            },
        ],
    },
]

export const dataContact = [
    {
        id: 1,
        title: 'Phone',
        subtitle: '+34 722 477 525',
        link: 'tel:+34722477525',
        icon: () => <Phone size={20} />, // ✅ Ahora es una función),
    },
    {
        id: 2,
        title: 'Github',
        subtitle: 'github.com/mcimildoro',
        link: 'https://github.com/mcimildoro',
        icon: () => <Code2 size={20} />, // ✅ Ahora es una función),
    },
    {
        id: 3,
        title: 'Email',
        subtitle: 'cimildoro@gmail.com',
        link: 'mailto:cimildoro@gmail.com',
        icon: () => <Mail size={20} />, // ✅ Ahora es una función),
    },
]

export const dataPhone = [
    {
        id: 1,
        title: 'Phone',
        subtitle: '+34 722 477 525',
        link: 'tel:+34722477525',
        icon: () => <Phone size={20} />, // ✅ Ahora es una función),
    },
]

export const dataTestimonials = [
    {
        id: 1,
        name: 'Who am I?',
        titulo: 'Developer with a passion for technology',
        description:
            "Hi, I'm Miguel Cimildoro, a web developer specialized in creating dynamic applications and innovative solutions. I love transforming ideas into functional and attractive digital products.",
        imageUrl: '/profile-1.jpeg',
    },
    {
        id: 2,
        name: 'What am I passionate about?',
        titulo: 'Design, create and innovate',
        description:
            "I am driven by the possibility of solving problems through development. Whether it's improving user experience, optimizing performance or integrating cutting-edge technologies, I'm always looking for new challenges that will make me grow.",
        imageUrl: '/profile-2.jpg',
    },
    {
        id: 3,
        name: 'How do I work?',
        titulo: 'Collaboration and focus on detail',
        description:
            "I work in an organized and collaborative manner, following agile methodologies and ensuring that every detail is well taken care of. My goal is to deliver results that meet the client's expectations and needs.",
        imageUrl: '/profile-3.jpeg',
    },
    {
        id: 4,
        name: 'My favorite tools',
        titulo: 'Technologies that enhance my work',
        description:
            'I rely on state-of-the-art tools to create efficient and attractive applications. Some of my favorites include React and Next.js for dynamic interfaces, and Tailwind CSS for elegant and responsive designs.',
        imageUrl: '/profile-4.jpeg',
    },
    {
        id: 5,
        name: 'My vision',
        titulo: 'Creating a positive impact with technology',
        description:
            'My goal is not only to build applications, but also to create experiences that inspire people and help them solve problems. I believe in the power of technology to transform lives and businesses.',
        imageUrl: '/profile-5.jpeg',
    },
]

export type aboutIconName = 'CodeXml' | 'Palette' | 'Globe' | 'Zap'
export const about: { id: number; icon: aboutIconName; title: string; description: string }[] = [
    {
        id: 1,
        icon: 'CodeXml',
        title: 'Web Development',
        description: 'Building modern web applications with the latest technologies',
    },
    {
        id: 2,
        icon: 'Palette',
        title: 'UI/UX Design',
        description: 'Creating intuitive and visually appealing user interfaces',
    },
    {
        id: 3,
        icon: 'Globe',
        title: 'Responsive Design',
        description: 'Ensuring websites look great on all devices and screen sizes',
    },
    {
        id: 4,
        icon: 'Zap',
        title: 'Performance',
        description: 'Optimizing websites for speed and performance',
    },
]

export const projects = [
    {
        id: 1,
        title: 'Balanced 7v7 Team Generator',
        description: 'A Next.js app that creates 3 balanced football teams of 7 players using Firebase.',
        image: '/teams.png',
        tags: ['Next.js', 'Firebase', 'TailwindCSS', 'React'],
        github: 'https://github.com/mcimildoro/fut7generator',
        demo: 'https://fut7app-next.web.app',
        longDescription:
            'This application allows users to generate 3 balanced football teams (7v7) automatically. Using a custom algorithm, the system ensures that no team is stronger or weaker than the others. The player data is stored and retrieved from Firebase, and the app is deployed using Firebase Hosting. It features a responsive UI built with TailwindCSS and a login system for user authentication.',
    },
    {
        id: 2,
        title: 'Household Expense Tracker',
        description: 'A Next.js app to manage and track household expenses with shared user access.',
        image: '/ex-tracker.png',
        tags: ['Next.js', 'PostgreSQL', 'Neon Console', 'TailwindCSS', 'Vercel'],
        github: 'https://github.com/mcimildoro/ExpenseTracker',
        demo: 'https://householder.vercel.app/',
        longDescription:
            'This app simplifies household expense tracking, similar to banking apps. Built with Next.js, it uses PostgreSQL (Neon Console) for data management and supports multi-user authentication. Deployed on Vercel, it offers a responsive UI with TailwindCSS, allowing users to log in, add expenses, categorize spending, and view financial summaries.',
    },
    {
        id: 3,
        title: 'ConInversión - Investment Platform 🚧 (In Construction)',
        description: 'A financial platform that guides users in investment funds with subscription-based access.',
        image: '/coninversion.svg',
        tags: ['Next.js', 'PostgreSQL', 'Drizzle ORM', 'TailwindCSS', 'Vercel', 'Auth0', 'Subscription'],
        github: 'https://github.com/mcimildoro/conInversion',
        demo: 'https://con-inversion.vercel.app/',
        longDescription:
            "ConInversión is a financial platform that helps users invest in funds with expert guidance. It offers subscription-based access to investment plans and includes an admin panel for managing users and subscriptions. Built with Next.js, TailwindCSS, and PostgreSQL (Drizzle ORM), it's deployed on Vercel for high performance and scalability.",
    },
    {
        id: 4,
        title: 'FactualPay',
        description: 'Analytics platform that transforms financial data into interactive dashboards.',
        image: '/factualpay.png',
        tags: ['React 19', 'TypeScript', 'Redux', 'Zustand', 'Apache Superset', 'TailwindCSS', 'Radix UI', 'Cypress'],
        github: '#',
        demo: 'https://factualpay.com/',
        longDescription:
            'An analytics platform that transforms financial data into interactive dashboards. Built with React 19, TypeScript, Redux and Zustand for state management, using Apache Superset for embedded visualizations. My role involved implementing an 8-step wizard flow that guides users from data import to dashboard creation, optimizing performance with lazy loading, and securing the application with role-based authentication. The stack includes TailwindCSS, Radix UI for accessible components, and Cypress for E2E testing. The application enables fintech companies to configure data schemas, map metrics, ingest millions of records from S3, and visualize real-time insights.',
    },
]

export const skills = [
    {
        category: 'Frontend',
        items: [
            { name: 'HTML5', level: 90 },
            { name: 'CSS3', level: 85 },
            { name: 'JavaScript', level: 80 },
            { name: 'TypeScript', level: 55 },
            { name: 'React', level: 70 },
            { name: 'Next.js', level: 75 },
            { name: 'TailwindCSS', level: 50 },
            { name: 'Radix UI', level: 90 },
        ],
    },
    {
        category: 'Backend',
        items: [
            { name: 'Node.js', level: 65 },
            { name: 'MySQL', level: 80 },

            { name: 'PostgreSQL', level: 70 },
            { name: 'Firebase', level: 80 },

            { name: 'Python', level: 70 },
            { name: 'Java', level: 50 },
        ],
    },
    {
        category: 'Tools & Others',
        items: [
            { name: 'Git', level: 85 },
            { name: 'Eslint + Prettier', level: 85 },
            { name: 'VS Code', level: 90 },
            { name: 'Figma', level: 45 },
            { name: 'Responsive Design', level: 90 },
            { name: 'Vitest', level: 55 },
            { name: 'Lazy Loading / Memoization', level: 55 },
            { name: 'Cypress Testing', level: 77 },
        ],
    },
]

export const experiences = [
    {
        title: 'Frontend Developer',
        company: 'FactualPay',
        location: 'Remote',
        period: '2025 - Present',
        description:
            'Developed an analytics platform transforming financial data into interactive dashboards using React 19, TypeScript, Redux, and Zustand. Implemented an 8-step wizard flow guiding users from data import to dashboard creation, optimized performance with lazy loading, and secured the application with role-based authentication. Integrated Apache Superset for embedded visualizations and Cypress for E2E testing.',
    },
    {
        title: 'Frontend Developer',
        company: 'Gransolar Group',
        location: 'Madrid',
        period: '2022 - 2025',
        description:
            'Developed industrial applications using SCADA Ignition and created user manuals with React and TailwindCSS to enhance usability and system documentation.',
    },
    {
        title: 'Frontend Developer',
        company: 'Verticecrea CA',
        location: 'Madrid - Remote',
        period: '2020 - 2022',
        description:
            'Built web applications with React.js, Next.js, and TailwindCSS. Implemented SSR/SSG for performance and developed responsive interfaces. Collaborated with clients to deliver scalable solutions.',
    },
    {
        title: 'FullStack Developer',
        company: 'Banco Santander - Openscript Consulting',
        location: 'Madrid',
        period: '2018 - 2020',
        description:
            'Developed and maintained banking applications using J2EE, XML, and Apache HTTP Server. Diagnosed server failures, automated tasks with Bash scripting, and optimized system stability and performance.',
    },
    {
        title: 'Software Developer',
        company: 'Hewlett Packard - ABDE Business Consulting',
        location: 'Madrid',
        period: '2017 - 2018',
        description:
            'Developed data collectors using IUM, Bash, and Java. Created and executed Shell, AWK, and PL/SQL scripts, managing version control with SVN. Worked on projects for Euskaltel and Orange under Agile methodologies, using JIRA for task management.',
    },
    ,
    {
        title: 'Frontend Developer',
        company: 'Gomega Apps C.A.',
        location: 'Caracas, Venezuela',
        period: '2017 - 2018',
        description:
            'Contributed to a bank financing application for Banco CANTV, improving user experience and financial process efficiency.',
    },
]
