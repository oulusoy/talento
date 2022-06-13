<template>
  <div class="main-grid p-3">
    <b-jumbotron class="max1000 aliceblue" >
      <template #lead>
        WHICH DIPLOMA DO YOU HAVE ?
      </template>

      <hr class="my-4">

      <b-row class="m-4">
        <b-col>
          <!-- HIGHSCHOOL DIPLOMA -->
          <b-button class="mb-4" pill variant="primary" @click="addHighSchoolInput">+ Add Highschool Diploma</b-button>
          <div class="form-group" v-for="(input,k) in diploma.highSchoolDiploma" :key="k">
            <b-row class="m-4">
              <b-col cols="8">
                <b-input class="form-control" type="text" v-model="input.field"></b-input>
              </b-col>
              <b-col cols="4">
                <b-button class="mb-4" pill variant="danger" @click="removeHighSchoolInput(k)">remove</b-button>
              </b-col>
            </b-row>
          </div>
          <br>
          <!-- VOCATIONAL DIPLOMA -->
          <b-button class="mb-4" pill variant="primary" @click="addVocationalInput">+ Add Vocational School Diploma</b-button>
          <div class="form-group" v-for="(input,j) in diploma.vocationalSchoolDiploma" :key="j">
            <b-row class="m-4">
              <b-col cols="8">
                <b-input class="form-control" type="text" v-model="input.field"></b-input>
              </b-col>
              <b-col cols="4">
                <b-button class="mb-4" pill variant="danger" @click="removeVocationalInput(j)">remove</b-button>
              </b-col>
            </b-row>
          </div>
          <!-- NONE DIPLOMA -->
          <b-form-checkbox
              size="lg"
              class="m-2"
              id="none-diploma-checkbox"
              v-model="diploma.noneDiploma"
              name="noneDiploma"
              switch
          >
            None Diploma
          </b-form-checkbox>
        </b-col>
        <b-form-invalid-feedback :state="isAnOptionSelected">
          Please Select any option.
        </b-form-invalid-feedback>
      </b-row>
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
      diploma:{
        highSchoolDiploma: [],
        vocationalSchoolDiploma: [],
        noneDiploma: false
      },
      isAnOptionSelected: null,
      previousStep: 2,
      nextStep: 4,
    }
  },
  mounted() {
    this.diploma = this.$store.getters.getDiploma
  },
  methods: {
    addHighSchoolInput() {
      if (this.diploma.highSchoolDiploma.length <= 8) {
        this.diploma.highSchoolDiploma.push({field: ''})
      }
    },
    removeHighSchoolInput(k) {
      if ( k === 0 ) {
        this.diploma.highSchoolDiploma.splice(k,k+1)
      } else {
        this.diploma.highSchoolDiploma.splice(k,k)
      }
    },
    addVocationalInput() {
      if (this.diploma.vocationalSchoolDiploma.length <= 8) {
        this.diploma.vocationalSchoolDiploma.push({field: ''})
      }
    },
    removeVocationalInput(j) {
      if ( j === 0 ) {
        this.diploma.vocationalSchoolDiploma.splice(j,j+1)
      } else {
        this.diploma.vocationalSchoolDiploma.splice(j,j)
      }
    },
    nextPage() {
      this.validate();
      if (this.isAnOptionSelected === true) {
        this.$store.dispatch('setDiploma', this.diploma)
        this.$emit('update:step', this.nextStep)
      }
    },
    previousPage() {
      this.$store.dispatch('setDiploma', this.diploma)
      this.$emit('update:step', this.previousStep)
    },
    validate() {
      this.isAnOptionSelected = this.diploma.vocationalSchoolDiploma.length !== 0
          || this.diploma.highSchoolDiploma.length !== 0
          || this.diploma.noneDiploma;
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
