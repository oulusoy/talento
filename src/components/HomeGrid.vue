<template>
  <div class="hello">
    <b-container fluid>
      <!-- header bg und Text -->
      <b-img
          class="header-bg-img"
          :src="require('@/assets/images/header-bg1.png')"
          alt=""
      ></b-img>
      <!-- end header bg und Text -->
      <b-row>
        <!-- CUSTOMER BLOCK -->
        <b-col class="customer" cols="12" lg="6">

        </b-col>
        <!-- END CUSTOMER BLOCK -->
        <!-- EMPLOYEE BLOCK -->
        <b-col cols="12" lg="6">
          <b-row>
            <b-col class="employee_box1" cols="12" lg="6"></b-col>
            <b-col class="employee_box2" cols="12" lg="6"></b-col>
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.customer {
  background: radial-gradient(circle, rgba(56,56,56,1) 0%, rgba(33,33,33,1) 100%);
  height: 100vh;
}

.employee_box1 {
  background: radial-gradient(circle, rgba(25,217,217,1) 0%, rgba(25,164,167,1) 100%);
  height: 100vh;
}

.employee_box2 {
  background: radial-gradient(circle, rgba(88,171,208,1) 0%, rgba(69,133,161,1) 100%);
  height: 100vh;
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
  top: 150px;
  left: 0;
  right: 0;
  width: 75%;
  text-align: center;
  pointer-events: none;
  user-select: none;
  z-index: 50;
}
</style>
