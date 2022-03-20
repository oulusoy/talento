<template>
  <div class="main-grid p-3">
    <b-jumbotron class="max1000 aliceblue" >
      <template #lead>
        WELCHEN AUSBILDUNGSGRAD HAST DU ?
      </template>

      <hr class="my-4">

      <b-row class="m-3">
        <b-col>

        </b-col>
      </b-row>
      <b-row class="mb-3">
        <b-col cols="12">
          <b-form-input v-model="currentJob" placeholder="current Job"></b-form-input>
        </b-col>
      </b-row>
      <p>
        * Sie haben keinerlei kosten
      </p>

      <b-button class="mr-2" variant="secondary" href="#">zurück</b-button>
      <b-button variant="success" @click="nextStep">weiter mit dem Fragebogen</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'Diplom',
  data: function () {
    return {
      business: {
        handcraft: '',
        nursing: '',
        engineering: '',
        computer: '',
        gastronomie: '',
        medicine: '',
      },
      currentJob: '',
    }
  },
  methods: {
    nextStep() {

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
