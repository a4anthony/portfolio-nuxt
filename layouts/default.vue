<template>
  <div>
    <navigation-bar />
    <Nuxt />
    <footer-area />
    <button
      class="d-none"
      id="scroll-to-top"
      ref="scrollToTop"
      @click="scrollToTop"
    >
      <font-awesome-icon :icon="['fas', 'long-arrow-alt-up']" />
    </button>
  </div>
</template>

<style></style>
<script>
import NavigationBar from "../components/Helpers/NavigationBar";
import FooterArea from "../components/Helpers/FooterArea";
export default {
  components: { FooterArea, NavigationBar },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
      const that = this;
      setTimeout(function() {
        that.$router.push("/");
      }, 1000);
    },
    handleScroll() {
      if (window.scrollY > 400) {
        this.$refs.scrollToTop.classList.remove("d-none");
      } else {
        this.$refs.scrollToTop.classList.add("d-none");
      }
    }
  },
  created() {
    if (process.client) {
      window.addEventListener("scroll", this.handleScroll);
    }
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener("scroll", this.handleScroll);
    }
  }
};
</script>
