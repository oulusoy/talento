<template>
  <div class="main-grid">
    <b-container fluid>
      <audio muted allow="autoplay">
       <source src="src/assets/sounds/modern-sound2.wav" />
     </audio>
      <!-- header bg und Text -->
      <b-img
          id="mainPic"
          class="header-bg-img"
          :src="require('@/assets/images/header-bg1.png')"
          alt=""
      ></b-img>
      <!-- end header bg und Text -->
      <b-row>
        <!-- CUSTOMER BLOCK -->
        <b-col class="customer text-center" cols="12" lg="6" v-b-hover="hoverHandler" @click="goToEmployeeFunnel" >
          <div class="h1 mb-0 icons">
            <b-icon icon="tools"></b-icon>
          </div>
          <p class="header_text">{{ this.$store.getters.getCurrentLanguage.homeEmployee }}</p>
        </b-col>
        <!-- END CUSTOMER BLOCK -->
        <!-- EMPLOYEE BLOCK -->
        <b-col cols="12" lg="6">
          <b-row>
            <b-col class="employee_box1 text-center" cols="12" lg="6" v-b-hover="hoverHandler" @click="goToEmployerFunnel">
              <div class="h1 mb-0 icons">
                <b-icon icon="people"></b-icon>
              </div>
              <p class="header_text">{{ this.$store.getters.getCurrentLanguage.homeEmployer }}</p>
            </b-col>
            <b-col class="employee_box2 text-center" cols="12" lg="6" v-b-hover="hoverHandler">
              <div class="h1 mb-0 icons">
                <b-icon icon="file-earmark-person"></b-icon>
              </div>
              <p class="header_text">{{ this.$store.getters.getCurrentLanguage.homeEmployerSupport }}</p>
            </b-col>
          </b-row>
        </b-col>
        <!-- END EMPLOYEE BLOCK -->
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'HomeGrid',
  methods: {
    hoverHandler(isHovered) {
        if (isHovered) {
          // <!-- end simulate mouseclick -->
          document.getElementsByTagName("audio")[0].play();
        } 
    },
    goToEmployeeFunnel() {
      this.$router.push('/employee')
    },
    goToEmployerFunnel() {
      this.$router.push('/employer')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-grid{
  color: white;
}

.customer {
  background: radial-gradient(circle, rgba(56,56,56,1) 0%, rgba(33,33,33,1) 100%);
  height: 100vh;
  cursor: pointer;
  padding: 20px;
}

.customer:hover {
  background: #5d3496;
  height: 100vh;
  cursor: pointer;
  border-width: medium green;
  padding: 20px;
}

.customer:checked {
  background: red;
  height: 100vh;
  cursor: pointer;
  border-width: medium green;
  padding: 20px;
}

.header_text{
  font-family: 'Bebas Neue', cursive;
  font-size: 34px;
  text-shadow: 1px 1px 4px #1d1d1d;
}

.icons {
  margin-top: 360px;
}

.employee_box1 {
  background: radial-gradient(circle, rgba(25,217,217,1) 0%, rgba(25,164,167,1) 100%);
  height: 100vh;
  cursor: pointer;
  padding: 20px;
}

.employee_box1:hover {
  background: #5d3496;
  height: 100vh;
  cursor: pointer;
  padding: 20px;
}

.employee_box2 {
  background: radial-gradient(circle, rgba(88,171,208,1) 0%, rgba(69,133,161,1) 100%);
  height: 100vh;
  cursor: pointer;
  padding: 20px;
}

.employee_box2:hover {
  background: #5d3496;
  height: 100vh;
  cursor: pointer;
  padding: 20px;
}

.logo {
  left: 20px;
  top: 20px;
  position: absolute;
  color: white;
  font-family: 'Bebas Neue', cursive;
  font-size: x-large !important;
}

.language {
  right: 20px;
  top: 20px;
  position: absolute;
  color: white;
}

.header-bg-img {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  top: 125px;
  left: 0;
  right: 0;
  width: 70%;
  max-width: 1000px;
  text-align: center;
  pointer-events: none;
  user-select: none;
  z-index: 50;
}
</style>
