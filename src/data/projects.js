import movieImage from "../assets/project-movie.png"
import ecommerceImage from "../assets/project-ecommerce.png"

const projects = [
  {
    id: 1,
    title: "Movie Management System",
    description:
      "A full-stack movie management system with authentication, movie management, genres and admin dashboard.",

    image: movieImage,

    technologies: [
      "React",
      "Laravel",
      "PostgreSQL",
      "Tailwind CSS",
    ],

    role: "Full Stack Developer",
    duration: "2 Months",

    github: "https://github.com/yourusername/movie-management",
    demo: "https://your-demo-url.com",

    features: [
      "User authentication and authorization",
      "Movie CRUD management",
      "Genre management",
      "Admin dashboard",
      "Search and filtering",
      "REST API integration",
      "Responsive design",
    ],
  },

  {
    id: 2,
    title: "E-Commerce Website",
    description:
      "A modern e-commerce application with product listing, shopping cart and responsive user interface.",

    image: ecommerceImage,

    technologies: [
      "React",
      "Laravel",
      "MySQL",
      "Tailwind CSS",
    ],

    role: "Full Stack Developer",
    duration: "1.5 Months",

    github: "https://github.com/yourusername/ecommerce",
    demo: "https://your-ecommerce-demo.com",

    features: [
      "Product listing",
      "Product details",
      "Shopping cart",
      "Product search",
      "Category filtering",
      "Responsive UI",
      "REST API integration",
    ],
  },
];

export default projects;