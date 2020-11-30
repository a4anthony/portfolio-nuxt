<template>
  <section>
    <div class="container">
      <div id="details" class="row pt-30 " style="height: 93vh">
        <div class="col-12 my-auto">
          <div
            class="card card-project mb-3 b-shccadow"
            style="border-radius: 0!important;"
          >
            <div class="row no-gutters">
              <div class="col-lg-8 col-md-12 col-md-12-r col-sm-12">
                <img
                  class="project-img"
                  style="width: 100%; height: 440px; background: white;border-radius: 0!important;"
                  :src="project.image_link"
                  alt=""
                  width="100%"
                />
              </div>
              <div class="col-lg-4 col-md-12 col-md-12-r col-sm-12 my-auto">
                <div class="card-body">
                  <h5 class="card-title">{{ project.title }}</h5>

                  <strong>Description:</strong>
                  <p class="card-text">{{ project.description }}</p>

                  <strong>Technologies:</strong>
                  <p class="card-text">
                    <span
                      style="margin-right: 10px; display: inline-block"
                      v-for="(technology, index) in project.technologies"
                      :key="index"
                      >{{ technology }}</span
                    >
                  </p>
                  <strong>Link:</strong>
                  <a :href="project.link" target="_blank">{{
                    project.link_text || "View Project"
                  }}</a>
                </div>
              </div>
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
  computed: {
    project() {
      const id = this.$router.currentRoute.params.id;
      let project;
      appData().projects.forEach(p => {
        if (p.id === id) {
          project = p;
        }
      });
      return project;
    },
    title() {
      return this.project.title || "";
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "My custom description"
        }
      ]
    };
  }
};
</script>

<style scoped>
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
