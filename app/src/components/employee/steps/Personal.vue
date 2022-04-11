<template>
  <div class="main-grid p-3">
    <b-jumbotron class="max1000 aliceblue" >
      <template #lead>
        WELCHE SPRACHEN BEHERRSCHST DU ?
      </template>

      <hr class="my-4">

      <b-row class="m-4">
        <b-col>
          <b-form-group
              id="input-group-1"
              label="Email:"
              label-for="input-1"
              class="w-75"
          >
            <b-form-input
                id="input-1"
                v-model="seekerEmail"
                type="email"
                placeholder="Email *"
                :state="validateEmail"
                required
            ></b-form-input>
            <b-form-invalid-feedback :state="validateEmail">
              Your user ID must be 5-12 characters long.
            </b-form-invalid-feedback>
          </b-form-group>

          <b-form-group id="input-group-2" label="Firstname:" label-for="input-2" class="w-75">
            <b-form-input
                id="input-2"
                v-model="seekerFirstname"
                placeholder="firstname *"
                required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Lastname:" label-for="input-2" class="w-75">
            <b-form-input
                id="input-2"
                v-model="seekerLastname"
                placeholder="lastname *"
                required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Phone:" label-for="input-2" class="w-75">
            <b-form-input
                id="input-2"
                v-model="seekerPhone"
                type="tel"
                placeholder="Phone *"
                required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-3" label="In Welchen Land lebst du ?" label-for="input-3" class="w-50">
            <b-form-select
                id="input-3"
                v-model="seekerCountry"
                :options="countries"
                required
            ></b-form-select>
          </b-form-group>

          <b-form-group id="input-group-2" label="City:" label-for="input-2" class="w-75">
            <b-form-input
                id="input-2"
                v-model="seekerCity"
                placeholder="City *"
                required
            ></b-form-input>
          </b-form-group>

          <label for="demo-sb">Wie alt bist du ?</label>
          <b-form-spinbutton id="demo-sb" v-model="seekerAge" min="1" max="100" class="w-25"></b-form-spinbutton>
        </b-col>
      </b-row>
      <b-button class="mr-2" variant="secondary" @click="previousPage">zurück</b-button>
      <b-button variant="success" @click="nextPage">kostenlose Anfrage senden</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
import * as RestCaller from "../../../service/RestCaller";

export default {
  name: 'Personal',
  data: function () {
    return {
      seekerEmail: '',
      seekerFirstname: '',
      seekerLastname: '',
      seekerAge: 25,
      seekerPhone: '',
      seekerCountry: '',
      seekerCity: '',
      previousStep: 6,
      nextStep: 8,
      errorStep: 0,
      countries: [],
    }
  },
  mounted() {
    this.seekerEmail = this.$store.getters.getSeekerEmail
    this.seekerFirstname = this.$store.getters.getSeekerFirstname
    this.seekerLastname = this.$store.getters.getSeekerLastname
    this.seekerAge = this.$store.getters.getSeekerAge
    this.seekerPhone = this.$store.getters.getSeekerPhone
    this.seekerCountry = this.$store.getters.getSeekerCountry
    this.seekerCity = this.$store.getters.getSeekerCity
    this.countries = this.$store.getters.getCountries
  },
  methods: {
    nextPage() {
      this.$store.dispatch('setSeekerEmail', this.seekerEmail)
      this.$store.dispatch('setSeekerFirstname', this.seekerFirstname)
      this.$store.dispatch('setSeekerLastname', this.seekerLastname)
      this.$store.dispatch('setSeekerAge', this.seekerAge)
      this.$store.dispatch('setSeekerPhone', this.seekerPhone)
      this.$store.dispatch('setSeekerCountry', this.seekerCountry)
      this.$store.dispatch('setSeekerCity', this.seekerCity)
      this.sendData()
    },
    async sendData() {
      let success = await RestCaller.sendLead({'test':'pppp','email':'onur-ulusoy@hotmail.de'})
      console.log('erg:::::', success)
      if (success.status === 200 ) {
        this.$emit('update:step', this.nextStep)
      } else {
        this.$emit('update:step', this.errorStep)
      }
    },
    previousPage() {
      this.$store.dispatch('setSeekerEmail', this.seekerEmail)
      this.$store.dispatch('setSeekerFirstname', this.seekerFirstname)
      this.$store.dispatch('setSeekerLastname', this.seekerLastname)
      this.$store.dispatch('setSeekerAge', this.seekerAge)
      this.$store.dispatch('setSeekerPhone', this.seekerPhone)
      this.$store.dispatch('setSeekerCountry', this.seekerCountry)
      this.$store.dispatch('setSeekerCity', this.seekerCity)
      this.$emit('update:step', this.previousStep)
    }
  },
  computed: {
    validateEmail() {
      return this.seekerEmail.length > 4 && this.seekerEmail.length < 13
    }
  }
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
