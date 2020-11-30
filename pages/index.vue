<template>
  <div>
    <lander />
    <projects />
    <contact />
  </div>
</template>

<script>
import Lander from "../components/Helpers/Lander";
import Projects from "../components/Helpers/Projects";
import Contact from "../components/Helpers/Contact";
export default {
  components: { Contact, Projects, Lander }
};
</script>

<style></style>
