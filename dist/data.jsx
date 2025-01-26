"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataTestimonials = exports.dataContact = exports.dataServices = exports.dataExperience = exports.dataPortfolio = exports.dataSlider = exports.itemsNavbar = exports.dataAboutMe = void 0;
const lucide_react_1 = require("lucide-react");
exports.dataAboutMe = [
    {
        id: 1,
        name: "Experiencia",
        icon: <lucide_react_1.Briefcase />,
        description: "+7 años de experiencia",
    }
];
exports.itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <lucide_react_1.Home size={20}/>,
        link: "#home",
    },
    {
        id: 2,
        title: "User",
        icon: <lucide_react_1.UserRound size={20}/>,
        link: "#about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <lucide_react_1.BookText size={20}/>,
        link: "#services",
    },
    {
        id: 4,
        title: "Target",
        icon: <lucide_react_1.CodeSquare size={20}/>,
        link: "#portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <lucide_react_1.Mail size={20}/>,
        link: "#contact",
    },
];
exports.dataSlider = [
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
];
exports.dataPortfolio = [
    {
        id: 1,
        title: "Web Pro",
        image: "/image-1.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Desarrollo Web Ágil",
        image: "/image-2.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Estrategias Web",
        image: "/image-3.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Navegando Ideas Creativas",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Sitios Web Impactantes",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Proyectos Web Dinámicos",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
];
exports.dataExperience = [
    {
        id: 1,
        title: "Frontend Development 💄",
        experience: [
            {
                name: "HTML",
                subtitle: "Experimentado",
                value: 80,
            },
            {
                name: "CSS",
                subtitle: "Experimentado",
                value: 80,
            },
            {
                name: "JavaScript",
                subtitle: "Experimentado",
                value: 60,
            },
            {
                name: "Tailwind CSS",
                subtitle: "Intermedio",
                value: 30,
            },
            {
                name: "Typescript",
                subtitle: "Intermedio",
                value: 30,
            },
            {
                name: "React",
                subtitle: "Intermedio",
                value: 60,
            },
            {
                name: "Bootstrap",
                subtitle: "Experimentado",
                value: 50,
            },
            {
                name: "Material UI",
                subtitle: "Intermedio",
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
                subtitle: "Intermedio",
                value: 80,
            },
            {
                name: "Mongo DB",
                subtitle: "Intermedio",
                value: 75,
            },
            {
                name: "Python",
                subtitle: "Experimentado",
                value: 70,
            },
            {
                name: "MySQL",
                subtitle: "Experimentado",
                value: 60,
            },
            {
                name: "PHP",
                subtitle: "Intermedio",
                value: 60,
            },
            {
                name: "SCADA",
                subtitle: "Experimentado",
                value: 80,
            },
            {
                name: "Java",
                subtitle: "Intermedio",
                value: 50,
            },
            {
                name: "Shell Scripting (Bash)",
                subtitle: "Intermedio",
                value: 50,
            },
        ],
    },
];
exports.dataServices = [
    {
        id: 1,
        title: "Desarrollo Web",
        icon: <lucide_react_1.PanelsTopLeft />,
        features: [
            {
                name: "Desarrollo de sitios web personalizados",
            },
            {
                name: "Diseño y desarrollo responsive",
            },
            {
                name: "Automatización de procesos",
            },
            {
                name: "Desarrollo de aplicaciones web",
            },
            {
                name: "Gestión de contenido",
            },
            {
                name: "Optimización de rendimiento web",
            },
            {
                name: "Mantenimiento y soporte continuo",
            },
            {
                name: "Monitoreo y análisis del rendimiento de aplicaciones web",
            },
            {
                name: "Implementación de sistemas de autenticación y seguridad",
            }
        ],
    },
    {
        id: 3,
        title: "UI/UX Design",
        icon: <lucide_react_1.Brush />,
        features: [
            {
                name: "Diseño intuitivo para una experiencia de usuario fluida",
            },
            {
                name: "Creación de interfaces atractivas y funcionales",
            },
            {
                name: "Desarrollo de wireframes y mockups detallados",
            },
            {
                name: "Optimización de la usabilidad para mejorar la accesibilidad",
            },
            {
                name: "Definición de arquitectura de información clara y organizada",
            },
            {
                name: "Diseño responsive para adaptarse a diferentes dispositivos",
            },
            {
                name: "Mapas de recorrido del usuario para identificar puntos de mejora",
            }
        ],
    },
];
exports.dataContact = [
    {
        id: 1,
        title: "Teléfono",
        subtitle: "+34 722 477 525",
        link: "tel:+34722477525",
        icon: <lucide_react_1.Phone />,
    },
    {
        id: 2,
        title: "Github",
        subtitle: "github.com/mcimildoro",
        link: "github.com/mcimildoro",
        icon: <lucide_react_1.Code2 />,
    },
    {
        id: 3,
        title: "Email",
        subtitle: "cimildoro@gmail.com",
        link: "mailto:cimildoro@gmail.com",
        icon: <lucide_react_1.Inbox />,
    },
];
exports.dataTestimonials = [
    {
        id: 1,
        name: "¿Quién soy?",
        titulo: "Desarrollador apasionado por la tecnología",
        description: "Hola, soy Miguel Cimildoro, un desarrollador web especializado en la creación de aplicaciones dinámicas y soluciones innovadoras. Me encanta transformar ideas en productos digitales funcionales y atractivos",
        imageUrl: "/profile-1.jpeg",
    },
    {
        id: 2,
        name: "¿Qué me apasiona?",
        titulo: "Diseñar, crear e innovar",
        description: "Me impulsa la posibilidad de resolver problemas a través del desarrollo. Ya sea mejorando la experiencia del usuario, optimizando el rendimiento o integrando tecnologías de última generación, siempre estoy buscando nuevos retos que me hagan crecer.",
        imageUrl: "/profile-2.jpg",
    },
    {
        id: 3,
        name: "¿Cómo trabajo?",
        titulo: "Colaboración y enfoque en el detalle",
        description: "Trabajo de manera organizada y colaborativa, siguiendo metodologías ágiles y asegurando que cada detalle esté bien cuidado. Mi objetivo es entregar resultados que cumplan con las expectativas y necesidades del cliente.",
        imageUrl: "/profile-3.jpeg",
    },
    {
        id: 4,
        name: "Mis herramientas favoritas",
        titulo: "Tecnologías que potencian mi trabajo",
        description: "Me apoyo en herramientas de última generación para crear aplicaciones eficientes y atractivas. Algunas de mis favoritas incluyen React y Next.js para interfaces dinámicas, y Tailwind CSS para diseños elegantes y responsivos. ",
        imageUrl: "/profile-4.jpeg",
    },
    {
        id: 5,
        name: "Mi visión",
        titulo: "Crear un impacto positivo con la tecnología",
        description: "Mi objetivo no es solo construir aplicaciones, sino también crear experiencias que inspiren a las personas y les ayuden a resolver problemas. Creo en el poder de la tecnología para transformar vidas y negocios.",
        imageUrl: "/profile-5.jpeg",
    }
];
