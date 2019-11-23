<template>
  <div>
    <nav class="site-nav navbar navbar-expand bg-primary navbar-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Optima Service Desk</router-link>
        <div class="navbar-nav ml-auto">
          <router-link class="nav-item nav-link" to="/issues">Issue Log</router-link>
          <router-link class="nav-item nav-link" to="/login">Login</router-link>
          <router-link class="nav-item nav-link" to="/register">Register</router-link>
          <a href="#" class="nav-item nav-link" @click.prevent="$emit('logout')">Logout</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navigation",
  props: [],
  components: {}
};
</script>
