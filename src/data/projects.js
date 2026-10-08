import movieImage from "../assets/project-movie.png";
import ecommerceImage from "../assets/project-ecommerce.png";

const projects = [
  // 1. Movie Management System
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

  // 2. E-Commerce Website
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

  // 3. POS System
  {
    id: 3,
    title: "POS Management System",
    description:
      "A point-of-sale management system for managing products, sales, customers and inventory with a modern dashboard.",

    image: ecommerceImage,

    technologies: [
      "React",
      "Spring Boot",
      "PostgreSQL",
      "Tailwind CSS",
    ],

    role: "Full Stack Developer",
    duration: "2 Months",

    github: "https://github.com/yourusername/pos-system",
    demo: "https://your-pos-demo.com",

    features: [
      "User authentication",
      "Product management",
      "Sales management",
      "Inventory management",
      "Customer management",
      "Sales reports",
      "REST API integration",
      "Responsive dashboard",
    ],
  },

  // 4. Job Management System
  {
    id: 4,
    title: "Job Management System",
    description:
      "A web-based job management platform for creating, managing and searching job opportunities with authentication.",

    image: movieImage,

    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "JWT",
    ],

    role: "Full Stack Developer",
    duration: "2 Months",

    github: "https://github.com/yourusername/job-management",
    demo: "https://your-job-demo.com",

    features: [
      "User registration and login",
      "JWT authentication",
      "Job CRUD management",
      "Job search",
      "Job filtering",
      "Application management",
      "Role-based authorization",
      "REST API integration",
    ],
  },

  // 5. Student Management System
  {
    id: 5,
    title: "Student Management System",
    description:
      "A student management application for managing students, courses, teachers and academic information.",

    image: movieImage,

    technologies: [
      "Laravel",
      "React",
      "PostgreSQL",
      "Tailwind CSS",
    ],

    role: "Full Stack Developer",
    duration: "1.5 Months",

    github: "https://github.com/yourusername/student-management",
    demo: "https://your-student-demo.com",

    features: [
      "Student CRUD management",
      "Teacher management",
      "Course management",
      "Student enrollment",
      "Search and filtering",
      "Authentication and authorization",
      "REST API integration",
      "Responsive dashboard",
    ],
  },

  // 6. Food Ordering App
  {
    id: 6,
    title: "Food Ordering Application",
    description:
      "A mobile food ordering application that allows users to browse menus, manage their cart and place food orders.",

    image: ecommerceImage,

    technologies: [
      "Flutter",
      "Dart",
      "Firebase",
      "REST API",
    ],

    role: "Mobile Developer",
    duration: "2 Months",

    github: "https://github.com/yourusername/food-app",
    demo: "https://your-food-demo.com",

    features: [
      "User authentication",
      "Food menu browsing",
      "Food details",
      "Shopping cart",
      "Order management",
      "Firebase integration",
      "REST API integration",
      "Responsive mobile UI",
    ],
  },
];

export default projects;