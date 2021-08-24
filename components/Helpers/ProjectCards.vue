<template>
  <section id="projects" class="mb-30 mt-30">
    <b-container>
      <h4 class="section-header text-center" style="text-transform: uppercase">
        Projects
      </h4>
      <hr style="width: 10%; background: #333; border-width: 2px;" />
      <hr style="visibility:hidden;" />
      <b-row>
        <b-col lg="4" v-for="(project, index) in projects" :key="index">
          <div class="project-card rounded mt-5">
            <h4>
              {{ project.title }}
            </h4>
            <hr />
            <span>
              {{ project.description }}
            </span>
            <hr />
            <div class="text-center">
              <a
                :href="project.link"
                class="btn view-project-btn"
                target="_blank"
                >{{ project.link_text || "View Project" }}
              </a>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import { appData } from "@/data";

export default {
  name: "ProjectCards",
  computed: {
    projects() {
      return appData().projects;
    }
  }
};
</script>

<style scoped>
.project-card {
  background-color: rgba(44, 44, 44, 0.8);
  padding: 20px;
}
.project-card h4 {
  font-size: 17px;
  font-weight: 700;
}
.project-card span {
  color: #e5e3e3;
  font-size: 14px;
}
.view-project-btn {
  color: white;
  padding: 10px 20px;
  font-size: 14px;
  text-transform: capitalize;
}
hr {
  border-color: #696464;
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
