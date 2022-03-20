<template>
  <div class="main-grid p-3">
    <b-jumbotron class="max1000 aliceblue" >
      <b-progress :value="60" class="mb-3"></b-progress>

      <template #lead>
        Berufserfahrung in Jahren
      </template>

      <hr class="my-4">

      <b-row class="m-3">
        <b-col>
        </b-col>
      </b-row>

      <b-button class="mr-2" variant="secondary" @click="previousPage">zurück</b-button>
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
      previousStep: 1,
      nextStep: 3
    }
  },
  methods: {
    nextPage() {
      this.$emit('update:step', this.nextStep)
    },
    previousPage() {
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
