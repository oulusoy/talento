<template>
  <div class="main-grid p-3">
    <b-progress :max="max" height="2rem" class="mb-2 max1000" variant="success">
      <b-progress-bar :value="step">
        <span><strong>{{ step }} / {{ max }}</strong></span>
      </b-progress-bar>
    </b-progress>
    <!-- Branch Step 1 -->
    <Branch v-if="step === 1" :step.sync="step" ></Branch>
    <!-- ExperienceInYears Step 2 -->
    <ExperienceInYears v-if="step === 2" :step.sync="step" ></ExperienceInYears>
    <!-- Diplom Step 3 -->
    <Diplom v-if="step === 3" :step.sync="step" ></Diplom>
  </div>
</template>

<script>
import Branch from "./steps/Branch";
import Diplom from "./steps/Diplom";
import ExperienceInYears from "./steps/ExperienceInYears";
export default {
  components: {ExperienceInYears, Diplom, Branch },
  name: 'EmployeeFunnel',
  data: function () {
    return {
      step: 1,
      max: 6
    }
  },
  mounted() {
    console.log(this.step)
  },
  watch: {
    step: function () {
      console.log(this.step)
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-grid{
  height: 100vh;
  width: 100%;
  background: radial-gradient(circle, rgba(88,171,208,1) 0%, rgba(69,133,161,1) 100%);
}
.max1000{
  max-width: 1000px;
  margin-right: auto;
  margin-left: auto;
}

.aliceblue {
  background-color: aliceblue;
}
</style>
