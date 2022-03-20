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
              v-model="business.handcraft"
              name="handcraft"
              value="handcraft"
          >
            handcraft & manual labor
          </b-form-checkbox>
          <b-form-checkbox
              size="lg"
              class="m-2"
              id="checkbox-2"
              v-model="business.nursing"
              name="nursing"
              value="nursing"
          >
            nursing & care taking
          </b-form-checkbox><b-form-checkbox
              size="lg"
              class="m-2"
              id="checkbox-3"
              v-model="business.engineering"
              name="engineering"
              value="engineering"
          >
            engineering & architecture
          </b-form-checkbox>
        </b-col>
        <b-col>
          <b-form-checkbox
              size="lg"
              class="m-2"
              id="checkbox-4"
              v-model="business.computer"
              name="computer"
              value="computer"
          >
            computer science
          </b-form-checkbox>
          <b-form-checkbox
              size="lg"
              class="m-2"
              id="checkbox-5"
              v-model="business.gastronomie"
              name="gastronomie"
              value="gastronomie"
          >
            cooking & gastronomie
          </b-form-checkbox><b-form-checkbox
            size="lg"
            class="m-2"
            id="checkbox-6"
            v-model="business.medicine"
            name="medicine"
            value="medicine"
        >
          medicine
        </b-form-checkbox>
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
      <b-button variant="success" @click="nextPage">weiter mit dem Fragebogen</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'Branch',
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
      nextStep: 2
    }
  },
  methods: {
    nextPage() {
      this.$emit('update:step', this.nextStep)
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
</style>
