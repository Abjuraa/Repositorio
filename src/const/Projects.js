import mrHomero from '../assets/project/mrhomero.png'
import defaultImage from '../assets/project/default.png'

const Projects = [
    {
        id: 1,
        name: "BKD",
        image: defaultImage,
        description: "BKD es una empresa de venta de medicamentos, donde se gestiona las ventas, catálogo y compra de medicamentos para una droguería.",
        technologies: ["HTML", "CSS", "PHP", "MySQL", "JavaScript"],
        linkDemo: false,
        linkCode: "https://github.com/Abjuraa/BKD"
    },

    {
        id: 2,
        name: "Mr.homero",
        image: mrHomero,
        description: "Mr.Homero es un aplicativo web y movil desarrollado para un restaurante de comida rapida, con el fin de mejorar la gestión de ventas, fidelización de clientes y optimizar el manejo de pedidos.",
        technologies: ["React", "Tailwind", "Node.Js", "MySQL", "Express"],
        linkDemo: "https://mrhomero.onrender.com/",
        linkCode: "https://github.com/cmsrwood/mrhomero_web"
    },
    {
        id: 3,
        name: "Mr.homero App",
        image: defaultImage,
        description: "Mr.Homero es un aplicativo web y movil desarrollado para un restaurante de comida rapida, con el fin de mejorar la gestión de ventas, fidelización de clientes y optimizar el manejo de pedidos.",
        technologies: ["React Native", "CSS", "Node.Js", "MySQL"],
        linkDemo: false,
        linkCode: "https://github.com/cmsrwood/mrhomero_app"
    }
]

export default Projects;
