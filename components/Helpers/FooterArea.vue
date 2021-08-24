<template>
  <footer class="page-footer font-small special-color-dark pt-4">
    <!-- Footer Elements -->
    <div class="container">
      <!-- Social buttons -->
      <ul class="list-unstyled list-inline text-center">
        <li class="list-inline-item">
          <a class="btn-floating btn-fb mx-1">
            <font-awesome-icon :icon="['fab', 'facebook-f']" />
          </a>
        </li>
        <li class="list-inline-item">
          <a class="btn-floating btn-tw mx-1">
            <font-awesome-icon :icon="['fab', 'twitter']" />
          </a>
        </li>
        <li class="list-inline-item">
          <a class="btn-floating btn-gplus mx-1">
            <font-awesome-icon :icon="['fab', 'google-plus-g']" />
          </a>
        </li>
        <li class="list-inline-item">
          <a class="btn-floating btn-li mx-1">
            <font-awesome-icon :icon="['fab', 'linkedin-in']" />
          </a>
        </li>
        <li class="list-inline-item">
          <a class="btn-floating btn-dribbble mx-1">
            <font-awesome-icon :icon="['fab', 'dribbble']" />
          </a>
        </li>
      </ul>
      <!-- Social buttons -->
    </div>
    <!-- Footer Elements -->

    <!-- Copyright -->
    <div class="footer-copyright text-center py-3">
      © 2020 Copyright:
      <NuxtLink to="/"> A4anthony</NuxtLink>
    </div>
    <!-- Copyright -->
  </footer>
</template>

<script>
export default {
  name: "FooterArea"
};
</script>

<style scoped>
.list-inline-item svg {
  color: #ffff;
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
