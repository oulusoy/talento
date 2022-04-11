<template>
  <div class="main-grid p-3">
    <b-jumbotron class="max1000 aliceblue" >
      <template #lead>
        WELCHE FAHRLIZENZEN HAST DU ?
      </template>

      <hr class="my-4">

      <b-row class="m-4">
        <b-col>
          <b-form-group
              label=""
              v-slot="{ ariaDescribedby }"
          >
            <b-form-checkbox-group
                v-model="selectedLicence"
                :options="licenceOptions"
                :aria-describedby="ariaDescribedby"
                stacked
                buttons
            ></b-form-checkbox-group>
          </b-form-group>
        </b-col>
      </b-row>
      <b-button class="mr-2" variant="secondary" @click="previousPage">zurück</b-button>
      <b-button variant="success" @click="nextPage">weiter mit dem Fragebogen</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'Licence',
  data: function () {
    return {
      selectedLicence: [],
      licenceOptions: [],
      previousStep: 5,
      nextStep: 7,
    }
  },
  mounted() {
    this.selectedLicence = this.$store.getters.getSelectedLicence
    this.licenceOptions = this.$store.getters.getLicenceOptions
  },
  methods: {
    nextPage() {
      this.$store.dispatch('setSelectedLicence', this.selectedLicence)
      this.$emit('update:step', this.nextStep)
    },
    previousPage() {
      this.$store.dispatch('setSelectedLicence', this.selectedLicence)
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
