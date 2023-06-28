import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Custom Web Devlopment",
    company_name: "Tailored Solutions for Your Online Presence",
    icon: starbucks,
    iconBg: "#383E56",
    points: [
      "Expertise in developing dynamic web applications using Javascript and associated technologies.",
      "Skilled at collaborating with diverse teams, including designers, product managers, and developers, to deliver top-quality products.",
      "Proficient in implementing responsive designs that ensure seamless performance across various browsers.",
      "Dedicated to professional growth through active participation in code reviews and constructive exchange of feedback.",
    ],
  },
  {
    title: "Responsive Web Design",
    company_name: "Crafting Visually Appealing and Functional User Experiences",
    icon: tesla,
    iconBg: "#383E56",
    points: [
      "Specializing in the creation of visually captivating, responsive web interfaces.",
      "Adapting designs for optimal display on desktop, tablet, and mobile devices.",
      "Delivering seamless and immersive user experiences across all platforms.",
      "Staying current with cutting-edge design practices to offer innovative solutions.",
    ],
  },
  {
    title: "Website Maintenance & Optimization",
    company_name: "Keeping Your Digital Presence Polished and Efficient",
    icon: shopify,
    iconBg: "#383E56",
    points: [
      "Providing continuous maintenance and updates to ensure websites remain functional, speedy, and secure.",
      "Regularly updating content to keep websites fresh, relevant, and engaging.",
      "Optimizing load times and implementing SEO best practices for enhanced discoverability and user experience.",
      "Performing regular backups to safeguard valuable data and content.",
    ],
  },
  {
    title: "Troubleshooting & Technical Support",
    company_name: "Troubleshooting and Technical Support",
    icon: meta,
    iconBg: "#383E56",
    points: [
      "Utilizing strong problem-solving skills to quickly and efficiently address bugs and other technical issues.",
      "Working to improve site performance by identifying bottlenecks and implementing solutions.",
      "Adding new features and enhancements to improve user experience and meet evolving business needs.",
      "Providing timely, knowledgeable technical support to ensure optimal website functionality at all times.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I had doubts about mirroring our product's beauty in a website, but Sol transformed them into belief with their exceptional design capabilities.",
    name: "Ryan Karim",
    designation: "Founder",
    company: "Design Your Future",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Sol's dedication to client success is a testament to their exceptional professional commitment in the realm of web development.",
    name: "Mark Stevens",
    designation: "Founder",
    company: "American Limos",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Post Sol's expert optimization, our website traffic experienced a significant surge by 50%. Their contributions have been invaluable, playing a key role in our online growth.",
    name: "Lisa Wang",
    designation: "Founder",
    company: "CBD Santuary",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Article Summarizer",
    description:
      "Leveraging the power of OpenAI's GPT-4, this AI tool efficiently summarizes online articles. Enter the URL and receive a concise summary instantly. This project showcases my proficiency in integrating AI technologies to simplify information consumption.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/SolRudd",
  },
  {
    name: "Weather App",
    description:
      "A user-friendly tool providing real-time weather updates using the OpenWeather API. Enter any city to receive key info about the current weather condition, including temp and sky status. This app highlights my adeptness to create practical solutions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/SolRudd",
  },
  {
    name: "Golds Gym App",
    description:
      "This comprehensive fitness guide, integrated with the ExerciseDB and YouTube APIs, offers over 200 exercises categorized. Pick an exercise to view a video tutorial. This project demonstrates my ability to merge multiple APIs to create value-adding applications.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/SolRudd",
  },
];

export { services, technologies, experiences, testimonials, projects };