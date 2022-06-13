<template>
  <div class="main-grid p-3">
    <b-jumbotron class="max1000 aliceblue" >
      <template #lead>
        TRAGEN SIE BITTE IHRE FIRMENDATEN EIN
      </template>

      <hr class="my-4">

      <b-row class="m-4">
        <b-col>
          <b-form-group
              id="email-group"
              label="Email:"
              label-for="input-email"
              class="w-75"
          >
            <b-form-input
                id="input-email"
                v-model="seekerEmail"
                type="email"
                placeholder="Email *"
                required
            ></b-form-input>
            <b-form-invalid-feedback :state="isEmailValid">
              invalid email.
            </b-form-invalid-feedback>
          </b-form-group>

          <b-form-group id="firstname-group" label="Firstname:" label-for="input-firstname" class="w-75">
            <b-form-input
                id="input-firstname"
                v-model="seekerFirstname"
                placeholder="firstname *"
                required
            ></b-form-input>
            <b-form-invalid-feedback :state="isSeekerFirstnameValid">
              invalid Firstname.
            </b-form-invalid-feedback>
          </b-form-group>

          <b-form-group id="lastname-group" label="Lastname:" label-for="input-lastname" class="w-75">
            <b-form-input
                id="input-lastname"
                v-model="seekerLastname"
                placeholder="lastname *"
                required
            ></b-form-input>
            <b-form-invalid-feedback :state="isSeekerLastnameValid">
              invalid Lastname.
            </b-form-invalid-feedback>
          </b-form-group>

          <b-form-group id="phone-group" label="Phone:" label-for="input-phone" class="w-75">
            <b-form-input
                id="input-phone"
                v-model="seekerPhone"
                type="tel"
                placeholder="Phone *"
                required
            ></b-form-input>
            <b-form-invalid-feedback :state="isSeekerPhoneValid">
              invalid Phone.
            </b-form-invalid-feedback>
          </b-form-group>

          <b-form-group id="country-group" label="In Welchen Land lebst du ?" label-for="input-country" class="w-50">
            <b-form-select
                id="input-country"
                v-model="seekerCountry"
                :options="countries"
                required
            ></b-form-select>
            <b-form-invalid-feedback :state="isSeekerCountryValid">
              please choose a country.
            </b-form-invalid-feedback>
          </b-form-group>

          <b-form-group id="city-group" label="City:" label-for="input-city" class="w-75">
            <b-form-input
                id="input-city"
                v-model="seekerCity"
                placeholder="City *"
                required
            ></b-form-input>
            <b-form-invalid-feedback :state="isSeekerCityValid">
              please choose a city.
            </b-form-invalid-feedback>
          </b-form-group>

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
  name: 'Company',
  data: function () {
    return {
      companyEmail: '',
      isEmailValid: null,
      companyFirstname: '',
      isFirstnameValid: null,
      companyLastname: '',
      isLastnameValid: null,
      companyPhone: '',
      isPhoneValid: null,
      companyCountry: '',
      isCountryValid: null,
      companyCity: '',
      isCityValid: null,
      previousStep: 7,
      nextStep: 9,
      errorStep: 0,
      countries: [],
    }
  },
  mounted() {
    this.companyEmail = this.$store.getters.getCompanyEmail
    this.companyFirstname = this.$store.getters.getCompanyFirstname
    this.companyLastname = this.$store.getters.getCompanyLastname
    this.companyPhone = this.$store.getters.getCompanyPhone
    this.companyCountry = this.$store.getters.getCompanyCountry
    this.companyCity = this.$store.getters.getCompanyCity
    this.countries = this.$store.getters.getCountries
  },
  methods: {
    nextPage() {
      this.$store.dispatch('setCompanyEmail', this.companyEmail)
      this.$store.dispatch('setCompanyFirstname', this.companyFirstname)
      this.$store.dispatch('setCompanyLastname', this.companyLastname)
      this.$store.dispatch('setCompanyPhone', this.companyPhone)
      this.$store.dispatch('setCompanyCountry', this.companyCountry)
      this.$store.dispatch('setCompanyCity', this.companyCity)
      if (this.validate()) {
        this.sendData()
      }
    },
    async sendData() {
      let payload = this.$store.getters.getCompanyPayload
      console.log(payload)
      /*
      let success = await RestCaller.sendLead(payload)
      if ( success.status === 200 ) {
        this.$emit('update:step', this.nextStep)
      } else {
        this.$emit('update:step', this.errorStep)
      }

       */
    },
    previousPage() {
      this.$store.dispatch('setSeekerEmail', this.seekerEmail)
      this.$store.dispatch('setSeekerFirstname', this.seekerFirstname.trim())
      this.$store.dispatch('setSeekerLastname', this.seekerLastname.trim())
      this.$store.dispatch('setSeekerAge', this.seekerAge)
      this.$store.dispatch('setSeekerPhone', this.seekerPhone)
      this.$store.dispatch('setSeekerCountry', this.seekerCountry)
      this.$store.dispatch('setSeekerCity', this.seekerCity)
      this.$emit('update:step', this.previousStep)
    },
    validate() {
      this.validateEmail()
      this.validateFirstName()
      this.validateLastName()
      this.validatePhoneNumber()
      this.validateCountry()
      this.validateCity()
      this.validateAge()
      return this.isEmailValid &&
      this.isSeekerFirstnameValid &&
      this.isSeekerLastnameValid &&
      this.isSeekerPhoneValid &&
      this.isSeekerCountryValid &&
      this.isSeekerCityValid &&
      this.isSeekerAgeValid
    },
    validateEmail() {
      let regex = new RegExp('^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$');
      this.isEmailValid = regex.test(this.seekerEmail.trim())
      return this.isEmailValid
    },
    validateFirstName() {
      let regex = new RegExp('^(?=.{1,50}$)[a-zA-Z]+(?:[.\\s][a-zA-Z]+)*$');
      this.isSeekerFirstnameValid = regex.test(this.seekerFirstname.trim())
      return this.isSeekerFirstnameValid
    },
    validateLastName() {
      let regex = new RegExp('^(?=.{1,50}$)[a-zA-Z]+(?:[.\\s][a-zA-Z]+)*$');
      this.isSeekerLastnameValid = regex.test(this.seekerLastname.trim())
      return this.isSeekerLastnameValid
    },
    validatePhoneNumber() {
      let regex = new RegExp('^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\\s\\./0-9]*$');
      this.isSeekerPhoneValid = regex.test(this.seekerPhone.trim())
      return this.isSeekerPhoneValid
    },
    validateCountry() {
      if (this.seekerCountry != null) {
        this.isSeekerCountryValid = this.seekerCountry.length !== 0
      } else {
        this.isSeekerCountryValid = false
      }
      return this.isSeekerCountryValid
    },
    validateCity() {
      let regex = new RegExp('^[a-zA-Z]+(?:[\\s-][a-zA-Z]+)*$');
      this.isSeekerCityValid = regex.test(this.seekerCity.trim())
      return this.isSeekerCountryValid
    },
    validateAge() {
      let regex = new RegExp('([1-9]|[1-9][0-9]|100)(\\s([1-9]|[1-9][0-9]|100))*$');
      console.log(regex.test(this.seekerAge))
      this.isSeekerAgeValid = regex.test(this.seekerAge)
      return this.isSeekerAgeValid
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
