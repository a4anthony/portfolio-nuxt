export const appData = () => ({
  user: {
    name: "Anthony Akro",
    title: "Full Stack Web Developer",
    bio:
      "I am a full stack web developer and " +
      "a creative thinker. I constantly find better and efficient ways " +
      "to solve problems and I am also passionate about learning new technologies.",
    github_link: "https://github.com/a4anthony",
    linkedIn_link: ""
  },
  skills: [
    "Database Management",
    "Problem solving",
    "Creative thinking",
    "Communicating",
    "Organising"
  ],
  frameworks: [
    "Laravel",
    "Vuejs",
    "React",
    "Express",
    "Nuxtjs",
    "Django",
    "Bootstrap",
    "TailwindCss",
    "jQuery",
    "Ajax",
    "Git",
    "Docker",
    "Nginx"
  ],
  servers: ["Digital Ocean"],
  databases: ["MySQL", "postgreSQL", "SQLite"],
  languages: ["PHP", "CSS", "Javascript", "MySql"],
  testings: ["Jest", "PHPUnit", "Cypress", "Laravel Dusk"],
  projects: [
    {
      id: "1",
      title: "MelaMart Online - Ecommerce Grocery Store",
      description:
        "An e-commerce website built from scratch to enable users make purchases from the comfort of their homes.",
      class: "col-lg-4 offset-lg-2 col-md-6",
      image_link: "/images/projects/melamart.png",
      technologies: ["Vuejs", "Nuxtjs", "Bootstrap", "Laravel", "Nginx", "Git"],
      link: "https://melamartonline.com",
      link_text: "Visit store"
    },
    {
      id: "2",
      title: "Coupon Generator - Laravel Package",
      description:
        "A laravel package which helps in generating and validating coupon codes. It comes with an in-built user interface.",
      class: "col-lg-4 col-md-6",
      image_link: "/images/projects/coupon_package.png",
      technologies: ["Bootstrap", "Laravel", "Nginx", "Git"],
      link: "https://github.com/a4anthony/coupon",
      link_text: "View package"
    },
    {
      id: "5",
      title: "Cartavel - Laravel Package",
      description:
        "A simple laravel package to aid E-commerce platforms maintain and manage user cart systems",
      class: "col-lg-4 col-md-6",
      image_link: "/images/projects/coupon_package.png",
      technologies: ["Bootstrap", "Laravel", "Nginx", "Git"],
      link: "https://github.com/a4anthony/cartavel",
      link_text: "View package"
    },
    {
      id: "3",
      title: "MelaStore",
      description:
        "Currently building a vue component library that helps you easily build amazing E-commerce websites. Yup! You're welcome.",
      class: "col-lg-4 offset-lg-2 col-md-6",
      image_link: "/images/projects/melaspace.png",
      technologies: ["Vuejs", "Nuxtjs", "Bootstrap", "Laravel", "Nginx", "Git"],
      link: "https://github.com/dev-melatech/mela-store",
      link_text: "Visit package"
    },
    {
      id: "4",
      title: "Amela Group",
      description:
        "Rebranded the Amela Group website to improve engagements between the organisation and its partners.",
      class: "col-lg-4 col-md-6",
      image_link: "/images/projects/pbanthony.png",
      technologies: ["Vuejs", "Nuxtjs", "Bootstrap", "Nginx", "Git"],
      link: "https://www.amelagroup.com",
      link_text: "View site"
    }
  ]
});
