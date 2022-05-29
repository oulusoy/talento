<template>
  <div class="main-grid p-3">
    <b-jumbotron class="max1000 aliceblue" >
      <template #lead>
        Work experience in years
      </template>
      <hr class="my-4">
      <b-row class="m-4">
        <b-col>
          <div>
            <label for="range-2">How many years of work experience do you have?</label>
            <b-form-input id="range-2" v-model="experienceInYears" type="range" min="0" max="20" step="1"></b-form-input>
            <div class="mt-2">{{ experienceInYears }} Years of Experience <span v-if="experienceInYears == 20">and more</span></div>
          </div>
        </b-col>
      </b-row>
      <b-button class="mr-2" variant="secondary" @click="previousPage">back</b-button>
      <b-button variant="success" @click="nextPage">weiter mit dem Fragebogen</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'ExperienceInYears',
  data: function () {
    return {
      experienceInYears: 0,
      previousStep: 4,
      nextStep: 6
    }
  },
  mounted() {
    this.experienceInYears = this.$store.getters.getExperienceInYears
  },
  methods: {
    nextPage() {
      this.$store.dispatch('setExperienceInYears', this.experienceInYears)
      this.$emit('update:step', this.nextStep)
    },
    previousPage() {
      this.$store.dispatch('setExperienceInYears', this.experienceInYears)
      this.$emit('update:step', this.previousStep)
    }
  },
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
