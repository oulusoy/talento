<template>
  <div class="main-grid p-3">
    <b-jumbotron class="max1000 aliceblue" >
      <template #lead>
        WAS IST IHR AKTUELLER BERUF ?
      </template>

      <hr class="my-4">

      <b-row class="m-4">
        <b-col>
          <b-form-input v-model="currentJob" placeholder="*optional" v-text="currentJob"></b-form-input>
        </b-col>
      </b-row>
      <b-button class="mr-2" variant="secondary" @click="previousPage">zurück</b-button>
      <b-button variant="success" @click="nextPage">weiter mit dem Fragebogen</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'Job',
  data: function () {
    return {
      currentJob: '',
      previousStep: 1,
      nextStep: 3,
      showErrorMsg: false
    }
  },
  mounted() {
    this.currentJob = this.$store.getters.getCurrentJob
  },
  methods: {
    nextPage() {
      this.$store.dispatch('setCurrentJob', this.currentJob)
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
.max1000{
  max-width: 1000px;
  margin-right: auto;
  margin-left: auto;
}

.aliceblue {
  background-color: aliceblue;
}

.red {
  color: red;
}
</style>
