<template>
  <div class="mt-3">
    <div class="text-secondary text-center" v-if="user">
      Welcome back,
      <span class="font-weight-bold text-info">{{ user.displayName }}</span>!
    </div>
    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col-10 col-md-10 col-lg-8 col-xl-7">
          <h1 class="display-4 text-primary mt-1 mb-2">Optima Service Desk</h1>
          <p class="lead mt-3">
            Optima Service Desk is a robust issue tracking software built with the power of
            Vue.js. This Single Page Application frontend interfaces with a custom .NET Core 3.0 backend API
            with a SQL database to allow users to track the status of issues such as bugs or other service requests.
            In addition, this project utilizes Auth0 authentication to ensure security.
          </p>
          <p class="lead mb-4">
            For information on the development of this application, see this project's
            <a
              href="https://github.com/coucoulesr/service-desk"
            >Github</a> page, and view more of my projects on
            <a
              href="https://www.racoucoules.com/"
            >my portfolio.</a>
          </p>

          <router-link class="btn btn-outline-primary mr-2" to="/register">Register</router-link>
          <router-link class="btn btn-outline-primary mr-2" to="/login">Log In</router-link>
          <router-link class="btn btn-primary" to="/issues">Issue Log</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>
