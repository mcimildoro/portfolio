import { /*BellPlus*/ BookText, Briefcase, Brush, Code2, CodeSquare, Home, Inbox, Mail, PanelsTopLeft, Phone, UserRound } from "lucide-react";

export const dataAboutMe = [
    {
        id: 1,
        name: "Experience",
        icon: <Briefcase />,
        description: "+5 years of experience",
    }
];

export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <Home size={20} />,
        link: "#home",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={20} />,
        link: "#about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={20} />,
        link: "#services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={20} />,
        link: "#portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Mail size={20} />,
        link: "#contact",
    },
];

export const dataSlider = [
    {
        id: 1,
        url: "/porfolioweb.jpg",
    },
    {
        id: 2,
        url: "/portfolioweb2.jpg",
    },
    {
        id: 3,
        url: "/portfolioweb3.jpg",
    },
    {
        id: 4,
        url: "/scada.jpeg",
    },
]

export const dataPortfolio = [
    {
        id: 1,
        title: "Web Pro",
        image: "/image-1.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Agile Web Development",
        image: "/image-2.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Web Strategies",
        image: "/image-3.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Navigating Creative Ideas",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Impactful Websites",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Dynamic Web Projects",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
];


export const dataExperience = [
    {
        id: 1,
        title: "Frontend Development 💄",
        experience: [
            {
                name: "HTML",
                subtitle: "Experienced",
                value: 80,
            },
            {
                name: "CSS",
                subtitle: "Experienced",
                value: 80,
            },
            {
                name: "JavaScript",
                subtitle: "Experienced",
                value: 60,
            },
            {
                name: "Tailwind CSS",
                subtitle: "Intermediate",
                value: 30,
            },
            {
                name: "Typescript",
                subtitle: "Intermediate",
                value: 30,
            },
            {
                name: "React",
                subtitle: "Intermediate",
                value: 60,
            },
            {
                name: "Bootstrap",
                subtitle: "Experienced",
                value: 50,
            },
            {
                name: "Material UI",
                subtitle: "Intermediate",
                value: 50,
            }
        ],
    },
    {
        id: 2,
        title: "Backend Development  🐱‍👤",
        experience: [
            {
                name: "Node JS",
                subtitle: "Intermediate",
                value: 80,
            },
            {
                name: "Mongo DB",
                subtitle: "Intermediate",
                value: 75,
            },
            {
                name: "Python",
                subtitle: "Experienced",
                value: 70,
            },
            {
                name: "MySQL",
                subtitle: "Experienced",
                value: 60,
            },
            {
                name: "PHP",
                subtitle: "Intermediate",
                value: 60,
            },
            {
                name: "SCADA",
                subtitle: "Experienced",
                value: 80,
            },
            {
                name: "Java",
                subtitle: "Intermediate",
                value: 50,
            },
            {
                name: "Shell Scripting (Bash)",
                subtitle: "Intermediate",
                value: 50,
            },
        ],
    },
];


export const dataServices = [
    {
        id: 1,
        title: "Web Development",
        icon: <PanelsTopLeft />,
        features: [
            {
                name: "Custom web site development",
            },
            {
                name: "Responsive design and development",
            },
            {
                name: "Process automation",
            },
            {
                name: "Web application development",
            },
            {
                name: "Content management",
            },
            {
                name: "Web performance optimization",
            },
            {
                name: "Ongoing maintenance and support",
            },
            {
                name: "Web application performance monitoring and analysis",
            },
            {
                name: "Implementation of authentication and security systems.",
            }
        ],
    },
    {
        id: 3,
        title: "UI/UX Design",
        icon: <Brush />,
        features: [
            {
                name: "Intuitive design for a smooth user experience",
            },
            {
                name: "Creation of attractive and functional interfaces",
            },
            {
                name: "Development of wireframes and detailed mockups",
            },
            {
                name: "Optimizing usability to improve accessibility",
            },
            {
                name: "Definición de arquitectura de información clara y organizada",
            },
            {
                name: "Responsive design to adapt to different devices",
            },
            {
                name: "User journey maps to identify points of improvement",
            }
        ],
    },
];


export const dataContact = [
    {
        id: 1,
        title: "Phone",
        subtitle: "+34 722 477 525",
        link: "tel:+34722477525",
        icon: <Phone />,
    },
    {
        id: 2,
        title: "Github",
        subtitle: "github.com/mcimildoro",
        link: "github.com/mcimildoro",
        icon: <Code2 />,
    },
    {
        id: 3,
        title: "Email",
        subtitle: "cimildoro@gmail.com",
        link: "mailto:cimildoro@gmail.com",
        icon: <Inbox />,
    },
];

export const dataPhone = [
    {
        id: 1,
        title: "Phone",
        subtitle: "+34 722 477 525",
        link: "tel:+34722477525",
        icon: <Phone />,
    }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "Who am I?",
        titulo: "Developer with a passion for technology",
        description:
            "Hi, I'm Miguel Cimildoro, a web developer specialized in creating dynamic applications and innovative solutions. I love transforming ideas into functional and attractive digital products.",
        imageUrl: "/profile-1.jpeg",
    },
    {
        id: 2,
        name: "What am I passionate about?",
        titulo: "Design, create and innovate",
        description:
            "I am driven by the possibility of solving problems through development. Whether it's improving user experience, optimizing performance or integrating cutting-edge technologies, I'm always looking for new challenges that will make me grow.",
        imageUrl: "/profile-2.jpg",
    },
    {
        id: 3,
        name: "How do I work?",
        titulo: "Collaboration and focus on detail",
        description:
            "I work in an organized and collaborative manner, following agile methodologies and ensuring that every detail is well taken care of. My goal is to deliver results that meet the client's expectations and needs.",
        imageUrl: "/profile-3.jpeg",
    },
    {
        id: 4,
        name: "My favorite tools",
        titulo: "Technologies that enhance my work",
        description:
            "I rely on state-of-the-art tools to create efficient and attractive applications. Some of my favorites include React and Next.js for dynamic interfaces, and Tailwind CSS for elegant and responsive designs.",
        imageUrl: "/profile-4.jpeg",
    },
    {
        id: 5,
        name: "My vision",
        titulo: "Creating a positive impact with technology",
        description:
            "My goal is not only to build applications, but also to create experiences that inspire people and help them solve problems. I believe in the power of technology to transform lives and businesses.",
        imageUrl: "/profile-5.jpeg",
    }
];