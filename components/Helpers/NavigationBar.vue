<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light"
    :class="switchNavbar ? 'navbar-switch' : ''"
  >
    <nuxt-link class="navbar-brand" to="/">ProjectsByAnthony</nuxt-link>
    <!-- Collapse button -->
    <button
      @click="toggleMenu"
      class="navbar-toggler second-button"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent23"
      aria-controls="navbarSupportedContent23"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <div
        class="animated-icon2"
        ref="menuButton"
        :class="openMenu ? 'open' : ''"
      >
        <span></span><span></span><span></span><span></span>
      </div>
    </button>
    <!-- Collapsible content -->
    <div
      class="collapse navbar-collapse"
      id="navbarSupportedContent23"
      :class="openMenu ? 'show' : ''"
    >
      <!-- Links -->
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-item nav-link" :href="user.github_link" target="_blank"
            >Github <i class="fab fa-github"></i
          ></a>
        </li>
        <li class="nav-item">
          <NuxtLink id="go-to-contact" class="nav-item nav-link" to="/#contact"
            >Contact</NuxtLink
          >
        </li>
      </ul>
      <!-- Links -->
    </div>
    <!-- Collapsible content -->
  </nav>
</template>

<script>
import { appData } from "../../data";
export default {
  name: "NavigationBar",
  mounted() {
    console.log(appData().user);
    if (this.$router.currentRoute.params.id) {
      this.switchNavbar = true;
    } else {
      this.switchNavbar = false;
    }
  },
  computed: {
    user() {
      return appData().user;
    }
  },
  data() {
    return {
      switchNavbar: false,
      openMenu: false
    };
  },
  watch: {
    $route(to, from) {
      console.log(to);
      if (to.params.id) {
        this.switchNavbar = true;
      } else {
        this.switchNavbar = false;
      }
      if (to !== from && this.openMenu) {
        this.openMenu = false;
      }
    }
  },
  methods: {
    toggleMenu() {
      this.openMenu = !this.openMenu;
    }
  }
};
</script>

<style scoped>
.navbar-switch {
  position: relative !important;
  background-image: linear-gradient(147deg, #000000 0%, #292929 74%) !important;
}
/* (1366x768) WXGA Display */

@media screen and (min-width: 1366px) and (max-width: 1919px) {
}

@media (min-width: 1198px) and (max-width: 1365.9px) {
}

/* Normal desktop :992px. */

@media (min-width: 992px) and (max-width: 1197px) {
}

/* Normal desktop :991px. */

@media (min-width: 768px) and (max-width: 991px) {
}

/* small mobile :576px. */

@media (min-width: 576px) and (max-width: 767px) {
}

/* extra small mobile 320px. */

@media (max-width: 575px) {
}

/* Large Mobile :480px. */

@media only screen and (min-width: 480px) and (max-width: 575px) {
}

@media only screen and (max-width: 575px) and (min-width: 480px) {
}
</style>
