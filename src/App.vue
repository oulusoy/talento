<template>
  <div>
    <NavBar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
export default {
  name: 'App',
  components: {Footer, NavBar}
}
</script>

<style>
</style>
