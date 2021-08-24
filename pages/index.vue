<template>
  <div>
    <lander />

    <project-cards />
    <!--<projects />-->

    <contact />
  </div>
</template>

<script>
import Lander from "../components/Helpers/Lander";
import Projects from "../components/Helpers/Projects";
import Contact from "../components/Helpers/Contact";
import ProjectCards from "@/components/Helpers/ProjectCards";
export default {
  components: { ProjectCards, Contact, Projects, Lander }
};
</script>

<style></style>
