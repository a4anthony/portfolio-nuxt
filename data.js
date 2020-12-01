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
    "Problem solving",
    "Creative thinking",
    "Communicating",
    "Organising"
  ],
  frameworks: [
    "Laravel",
    "Vuejs",
    "Nuxtjs",
    "Django",
    "Bootstrap",
    "jQuery",
    "Ajax",
    "Git",
    "Docker",
    "Nginx"
  ],
  languages: ["PHP", "CSS", "Javascript", "MySql"],
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
      id: "3",
      title: "MelaSpace",
      description:
        "A tech blog and website which is still under construction. Currently being built on Nuxtjs and Laravel frameworks",
      class: "col-lg-4 offset-lg-2 col-md-6",
      image_link: "/images/projects/melaspace.png",
      technologies: ["Vuejs", "Nuxtjs", "Bootstrap", "Laravel", "Nginx", "Git"],
      link: "https://mspace-nuxt.herokuapp.com",
      link_text: "Visit blog"
    },
    {
      id: "4",
      title: "Personal Portfolio",
      description: "A simple portfolio and blog website",
      class: "col-lg-4 col-md-6",
      image_link: "/images/projects/pbanthony.png",
      technologies: ["Vuejs", "Nuxtjs", "Bootstrap", "Nginx", "Git"],
      link: "https://github.com/a4anthony/portfolio-nuxt",
      link_text: "Github"
    }
  ]
});
