<template>
  <div class="main-grid p-3">
    <b-jumbotron class="max1000 aliceblue" >
      <template #lead>
        Ich bin Bürgerin/Bürger …
      </template>

      <hr class="my-4">

      <b-row class="m-4">
        <b-col>
          <div>
            <b-form-checkbox
                size="lg"
                class="m-2 mb-4"
                id="checkbox-1"
                v-model="citizen"
                value="EU"
            >
              der EU, Liechtensteins, Islands, Norwegens oder der Schweiz.
            </b-form-checkbox>
            <b-form-checkbox
                size="lg"
                class="m-2 mb-4"
                id="checkbox-2"
                v-model="citizen"
                value="NoneEU"
            >
              Australiens, Israels, Japans, Kanadas, der Republik Korea, Neuseelands,
              des Vereinigten Königreichs Großbritannien und Nordirland und der USA
            </b-form-checkbox><b-form-checkbox
              size="lg"
              class="m-2 mb-4"
              id="checkbox-3"
              v-model="citizen"
              value="other"
          >
            Anderes Land
          </b-form-checkbox>
          </div>
        </b-col>
      </b-row>
      <p v-if="showErrorMsg" class="red">
        * Bitte wählen Sie eines der drei Optionen aus
      </p>

      <b-button variant="success" @click="nextPage">weiter mit dem Fragebogen</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'Citizen',
  data: function () {
    return {
      citizen: '',
      nextStep: 2,
      showErrorMsg: false
    }
  },
  mounted() {
    this.citizen = this.$store.getters.getCitizen
  },
  methods: {
    validate() {
      return !(
          this.citizen == '' );
    },
    nextPage() {
      if (this.validate() != false) {
        this.$store.dispatch('setCitizen', this.citizen)
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
