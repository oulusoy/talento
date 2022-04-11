<template>
  <div class="main-grid p-3">
    <b-jumbotron class="max1000 aliceblue" >
      <template #lead>
        WELCHE SPRACHEN BEHERRSCHST DU ?
      </template>

      <hr class="my-4">

      <b-row class="m-4">
        <b-col>
          <div>
            <label for="english">Wie gut sprichst du Englisch ?</label>
            <b-form-input id="english" v-model="seekerLanguage.english" type="range" min="0" max="10" step="1"></b-form-input>
            <p>{{ seekerLanguage.english }}</p>
          </div>
        </b-col>
        <b-col>
          <div>
            <label for="german">Wie gut sprichst du Deutsch ?</label>
            <b-form-input id="german" v-model="seekerLanguage.german" type="range" min="0" max="10" step="1"></b-form-input>
            <p>{{ seekerLanguage.german }}</p>
          </div>
        </b-col>
      </b-row>
      <b-row class="m-4">
        <b-col>
          <b-form-group id="input-group-3" label="Welche Sprache sprichst du noch ?" label-for="input-3" class="w-50">
            <b-form-select
                id="input-3"
                v-model="seekerLanguage.otherLanguage"
                :options="countries"
                required
            ></b-form-select>
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
  name: 'Language',
  data: function () {
    return {
      seekerLanguage: {
        english: 0,
        german: 0,
        otherLanguage: '',
      },
      previousStep: 4,
      nextStep: 6,
      countries: []
    }
  },
  mounted() {
    this.currentJob = this.$store.getters.getCurrentJob
    this.countries = this.$store.getters.getCountries
    this.seekerLanguage = this.$store.getters.getSeekerLanguage
  },
  methods: {
    nextPage() {
      this.$store.dispatch('setSeekerLanguage', this.seekerLanguage)
      this.$emit('update:step', this.nextStep)
    },
    previousPage() {
      this.$store.dispatch('setSeekerLanguage', this.seekerLanguage)
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
