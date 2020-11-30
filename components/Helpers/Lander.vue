<template>
  <section class="mb-30 bg-gradient">
    <div class="container">
      <div id="lander" class="row full-height mt-40">
        <!--      bio tab-->
        <div class="col-lg-6 col-md-12-r col-sm-12 col-12 my-auto mt-180-sm">
          <div class="row">
            <div class="col-lg-12 col-md-12-r col-12 text-center">
              <div class="avatar text-center">
                <img
                  class="card-img-top img-fluid img-responsive"
                  src="/images/avatar.jpg"
                  alt="avatar"
                />
              </div>
              <div class="bio">
                <h6 class="no-margin no-padding">{{ user.name }}</h6>
                <span class="title">{{ user.title }}</span>
              </div>
            </div>
            <div class="col-lg-12 text-center col-md-12-r col-12 my-auto">
              <div class="bio">
                <p class="no-padding no-margin">{{ user.bio }}</p>
              </div>
            </div>
          </div>
        </div>
        <!--      skills tab-->
        <div class="col-lg-6 col-md-12-r col-sm-12 col-12 my-auto mb-180-sm">
          <div class="skill-set">
            <div class="row text-left">
              <div class="col-lg-4 col-sm-4 col-12">
                <span>Languages</span>
                <ul>
                  <li v-for="(language, index) in languages" :key="index">
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />
                    {{ language }}
                  </li>
                </ul>
              </div>
              <div class="col-lg-4 col-sm-4 col-12">
                <span>Frameworks/Tools</span>
                <ul>
                  <li v-for="(framework, index) in frameworks" :key="index">
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />
                    {{ framework }}
                  </li>
                </ul>
              </div>
              <div class="col-lg-4 col-sm-4 col-12">
                <span>Skill set</span>
                <ul>
                  <li v-for="(skill, index) in skills" :key="index">
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />
                    {{ skill }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!--      recent projects links-->
        </div>

        <div class="text-center recent-link">
          <NuxtLink class="btn" id="scrollbtna2" to="#projects">
            Projects <font-awesome-icon :icon="['fas', 'chevron-down']"
          /></NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { appData } from "../../data";

export default {
  name: "Lander",
  computed: {
    user() {
      return appData().user;
    },
    skills() {
      return appData().skills;
    },
    languages() {
      return appData().languages;
    },
    frameworks() {
      return appData().frameworks;
    }
  }
};
</script>

<style scoped>
.recent-link {
  position: absolute;
  bottom: 35px;
  left: 0;
  right: 0;
  top: unset;
}
.recent-link svg {
  margin-left: 10px;
}
section {
  position: relative;
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
