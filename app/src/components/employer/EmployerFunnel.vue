<template>
  <div class="main-grid p-3">
    <b-progress :max="max" height="2rem" class="mb-2 max1000" variant="success">
      <b-progress-bar :value="step">
        <span><strong>{{ step }} / {{ max }}</strong></span>
      </b-progress-bar>
    </b-progress>
    <!-- Branch Step 2 -->
    <Branch v-if="step === 1" :step.sync="step" ></Branch>
    <!-- Diplom Step 3 -->
    <Diploma v-if="step === 2" :step.sync="step" ></Diploma>
    <!-- Job Step 2 -->
    <ExperienceInYears v-if="step === 3" :step.sync="step" ></ExperienceInYears>
    <!-- Language Step 5 -->
    <Language v-if="step === 4" :step.sync="step"></Language>
    <!-- Licence Data Step 6 -->
    <Licence v-if="step === 5" :step.sync="step"></Licence>
    <!-- Personal Data Step 7 -->
    <Company v-if="step === 6" :step.sync="step"></Company>
    <!-- Success Data Step 8 -->
    <Success v-if="step === 9" :step.sync="step"></Success>
    <!-- Error Data Step 0 -->
    <Error v-if="step === 0" :step.sync="step"></Error>
  </div>
</template>

<script>
import Branch from "@/components/employer/steps/Branch";
import Diploma from "@/components/employer/steps/Diploma";
import ExperienceInYears from "@/components/employer/steps/ExperienceInYears";
import Language from "@/components/employer/steps/Language";
import Licence from "@/components/employer/steps/Licence";
import Success from "@/components/employer/steps/Success";
import Error from "@/components/employer/steps/Error";
import Company from "@/components/employer/steps/Company";
export default {
  components: { Error, Success, Licence, Language, ExperienceInYears, Diploma, Branch, Company },
  name: 'EmployerFunnel',
  data: function () {
    return {
      step: 1,
      max: 9
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-grid{
  min-height: 100vh;
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
