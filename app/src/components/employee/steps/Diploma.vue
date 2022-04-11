<template>
  <div class="main-grid p-3">
    <b-jumbotron class="max1000 aliceblue" >
      <template #lead>
        WELCHEN AUSBILDUNGSGRAD HAST DU ?
      </template>

      <hr class="my-4">

      <b-row class="m-4">
        <b-col>
          <b-form-tags input-id="tags-basic" v-model="diploma" placeholder="Schreiben Sie all Ihre Diplome, Aubildungen und Studiengänge auf"></b-form-tags>
        </b-col>
      </b-row>
      <p>
        * optional
      </p>
      <b-button class="mr-2" variant="secondary" @click="previousPage">zurück</b-button>
      <b-button variant="success" @click="nextPage">weiter mit dem Fragebogen</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'Diploma',
  data: function () {
    return {
      diploma: [],
      previousStep: 3,
      nextStep: 5,
    }
  },
  mounted() {
    this.diploma = this.$store.getters.getDiploma
  },
  methods: {
    nextPage() {
      this.$store.dispatch('setDiploma', this.diploma)
      this.$emit('update:step', this.nextStep)
    },
    previousPage() {
      this.$store.dispatch('setDiploma', this.diploma)
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
