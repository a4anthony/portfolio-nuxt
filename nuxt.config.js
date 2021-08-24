export default {
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Portfolio - Anthony Akro",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Portfolio - Anthony Akro"
      },
      { property: "og:title", content: "Portfolio - Anthony Akro" },
      {
        name: "image",
        property: "og:image",
        content: "https://a4anthony.github.io/images/avatar.jpg"
      },
      { property: "og:description", content: "Full Stack Web Developer" },
      { property: "og:url", content: "https://a4anthony.github.io/" },
      // twitter card
      { name: "twitter:card", content: "summary" },
      { name: "twitter:url", content: "https://a4anthony.github.io/" },
      { name: "twitter:title", content: "Portfolio - Anthony Akro" },
      // {
      //   name: "twitter:description",
      //   content: ""
      // },
      {
        name: "twitter:image",
        content: "https://a4anthony.github.io/images/avatar.jpg"
      }
    ],
    link: [
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["@/assets/css/style.css", "@/assets/css/responsive.css"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ["@nuxtjs/fontawesome"],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt"
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    analyze: {
      analyzerMode: "static"
    }
  },
  buildDir: "nuxt-dist",

  // Font Awesome
  fontawesome: {
    icons: {
      solid: true,
      brands: true,
      regular: true
    }
  },

  router: {
    scrollBehavior: async (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition;
      }

      const findEl = async (hash, x) => {
        return (
          document.querySelector(hash) ||
          new Promise((resolve, reject) => {
            if (x > 50) {
              return resolve();
            }
            setTimeout(() => {
              resolve(findEl(hash, ++x || 1));
            }, 100);
          })
        );
      };

      if (to.hash) {
        let el = await findEl(to.hash);
        if ("scrollBehavior" in document.documentElement.style) {
          return window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
        } else {
          return window.scrollTo(0, el.offsetTop);
        }
      }

      return { x: 0, y: 0 };
    }
  }
};
