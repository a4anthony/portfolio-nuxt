<template>
  <section id="projects" class="mb-30 mt-30">
    <div class="container">
      <h4 class="section-header text-center" style="text-transform: uppercase">
        Projects
      </h4>
      <hr style="width: 10%; background: #333; border-width: 2px;" />
      <hr style="visibility:hidden;" />
      <div id="recent" class="row">
        <div
          class="my-autoj project-card"
          :class="project.class"
          v-for="(project, index) in projects"
          :key="index"
          style="height: 100%"
        >
          <div class="card mb-2 b-shadow">
            <img
              style="width: 100%; height: 240px; background: white;"
              class="card-img-top img-fluid project-info-img"
              :src="project.image_link"
            />
            <div class="card-body" style="min-height: 130px">
              <h5 class="card-title">{{ project.title }}</h5>
              <!--<p class="card-text" style="padding-bottom: 15px">-->
              <!--  {{ project.description }}-->
              <!--</p>-->
              <nuxt-link
                :to="/project/ + project.id"
                class="btn btn-primary"
                style="position: absolute; bottom: 15px; right: 15px; "
              >
                View More
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { appData } from "../../data";

export default {
  name: "Projects",
  computed: {
    projects() {
      return appData().projects;
    }
  }
};
</script>

<style scoped>
#recent .project-card .card {
  margin-bottom: 30px !important;
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
