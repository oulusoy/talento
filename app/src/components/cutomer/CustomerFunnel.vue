<template>
  <div class="main-grid p-3">
    <b-jumbotron class="max1000 aliceblue" >
      <b-progress :value="60" class="mb-3"></b-progress>

      <template #lead>
        FÜR WELCHE BRANCHE INTERESSIEREN SIE SICH ?
      </template>

      <hr class="my-4">

      <b-row class="m-3">
        <b-col>
          <b-form-checkbox
              size="lg"
              class="m-2"
              id="checkbox-1"
              v-model="status"
              name="checkbox-1"
              value="accepted"
          >
            IT
          </b-form-checkbox>
          <b-form-checkbox
              size="lg"
              class="m-2"
              id="checkbox-2"
              v-model="status"
              name="checkbox-2"
              value="accepted"
          >
            Handwerk
          </b-form-checkbox>
          <b-form-checkbox
              size="lg"
              class="m-2"
              id="checkbox-3"
              v-model="status"
              name="checkbox-3"
              value="accepted"
          >
            Medizin
          </b-form-checkbox>
        </b-col>
        <b-col>
          <b-form-checkbox
              size="lg"
              class="m-2"
              id="checkbox-4"
              v-model="status"
              name="checkbox-4"
              value="accepted"
          >
            Bildungswesen
          </b-form-checkbox>
          <b-form-checkbox
              size="lg"
              class="m-2"
              id="checkbox-5"
              v-model="status"
              name="checkbox-5"
              value="accepted"
          >
            Kraftfahrer
          </b-form-checkbox>
          <b-form-checkbox
              size="lg"
              class="m-2"
              id="checkbox-6"
              v-model="status"
              name="checkbox-6"
              value="accepted"
          >
            Restaurant
          </b-form-checkbox>
        </b-col>
      </b-row>

      <p>
        * Sie haben keinerlei kosten
      </p>

      <b-button class="mr-2" variant="secondary" href="#">zurück</b-button>
      <b-button variant="success" href="#">weiter mit dem Fragebogen</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'CustomerFunnel',
  methods: {
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
