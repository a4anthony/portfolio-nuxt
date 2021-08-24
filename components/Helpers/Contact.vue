<template>
  <section id="contact" class="mb-60 mt-30">
    <div class="container">
      <hr style="visibility:hidden;" />
      <hr style="visibility:hidden;" />
      <h4 class="section-header text-center" style="text-transform: uppercase">
        Contact Me
      </h4>
      <hr style="width: 10%; background: #333; border-width: 2px;" />
      <hr style="visibility:hidden;" />
      <div class="row height-60 mb-30">
        <div class="col-lg-6 offset-lg-3">
          <!--<div-->
          <!--  class="alert {% if message.tags %}alert-{{ message.tags }}{% endif %}"-->
          <!--  role="alert"-->
          <!--&gt;-->
          <!--  {{ message }}-->
          <!--</div>-->
          <p>
            Have some questions or just want to just chat? Shoot me a message
          </p>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Enter your email address"
            />
          </div>
          <!--<div class="form-group">-->
          <!--  <label for="subject">Subject</label>-->
          <!--  <input type="text" class="form-control" id="subject" />-->
          <!--</div>-->
          <div class="form-group">
            <label for="message">Message</label>
            <textarea
              name="messages"
              id="message"
              cols="30"
              rows="10"
              class="form-control"
              placeholder="Enter message"
            ></textarea>
          </div>
          <div class="form-actions mt-4">
            <button
              class="btn"
              style="color: white;text-transform: uppercase; width: 30%; padding: 15px; font-weight: 700"
              type="button"
            >
              Send
            </button>
          </div>
          <span class="mt-3 d-block">
            You can also send a mail directly to
            <a href="mailto:anthonyakrodev@gmail.com"
              >anthonyakrodev@gmail.com</a
            >
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact"
};
</script>

<style scoped>
#contact {
  /*background: #efefef;*/
  padding-bottom: 10px;
  color: #e5e3e3;
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
