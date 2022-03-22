<template>
  <div class="main-grid p-3">
    <b-jumbotron class="max1000 aliceblue" >
      <template #lead>
        FÜR WELCHE BRANCHE INTERESSIEREN SIE SICH ?
      </template>

      <hr class="my-4">

      <b-row class="m-4">
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
              v-model="business.gastronomy"
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
      <p v-if="showErrorMsg" class="red">
        * Bitte wählen Sie eine Branche aus
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
        gastronomy: '',
        medicine: '',
      },
      currentJob: '',
      nextStep: 2,
      showErrorMsg: false
    }
  },
  mounted() {
    this.business = this.$store.getters.getBusiness
  },
  methods: {
    validate() {
      return !(
          this.business.handcraft == '' &&
          this.business.nursing == '' &&
          this.business.engineering == '' &&
          this.business.computer == '' &&
          this.business.gastronomy == '' &&
          this.business.medicine == '');
    },
    nextPage() {
      if (this.validate() != false) {
        this.$store.dispatch('setBusiness', this.business)
        this.$emit('update:step', this.nextStep)
      }  else {
        this.showErrorMsg = true
      }
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
