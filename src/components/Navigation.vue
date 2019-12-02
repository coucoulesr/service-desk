<template>
  <div>
    <nav class="site-nav navbar navbar-expand bg-primary navbar-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Optima Service Desk</router-link>
        <div class="navbar-nav ml-auto" v-if="!$auth.loading">
          <router-link class="nav-item nav-link" v-if="$auth.isAuthenticated" to="/issues">Issue Log</router-link>
          <a href="#" class="nav-item nav-link" v-if="!$auth.isAuthenticated" @click="login">Sign Up/Login</a>
          <router-link class="nav-item nav-link" v-if="$auth.isAuthenticated" to="/profile">Profile</router-link>
          <a href="#" class="nav-item nav-link" v-if="$auth.isAuthenticated" @click="logout">Logout</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navigation",
  methods: {
    login() {
      this.$auth.loginWithRedirect();
    },
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    },
  }
};
</script>
