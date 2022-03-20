<template>
  <div class="navbar-box">
    <b-navbar toggleable="lg" type="dark">
      <b-navbar-brand href="#">TALENTO</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Über uns</b-nav-item>
          <b-nav-item href="#">Prozess</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-img
              class="flag"
              :src="require('@/assets/images/flags/' + flag)"
              alt=""
              :key="componentKey"
          ></b-img>
          <b-nav-item-dropdown right>
            <b-dropdown-item @click="setLanguage('en')" >EN</b-dropdown-item>
            <b-dropdown-item @click="setLanguage('de')" >DE</b-dropdown-item>
            <b-dropdown-item @click="setLanguage('tr')" >TR</b-dropdown-item>
          </b-nav-item-dropdown>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data: function () {
    return {
      flag: this.$store.state.language.lang + '.png',
    }
  },
  methods: {
    setLanguage(value) {
      this.$store.dispatch('setLanguage', value)
      this.flag = value + '.png'
      // console.log(this.$store.getters.getLanguage)
    }
  },
}
</script>

<style scoped>
.navbar-box {
  width: 100%;
  background-color: #282828;
  margin: 0;
  padding: 0;
}
.flag {
  width: 30px;
  height: 20px;
  margin-top: 10px;
}
</style>