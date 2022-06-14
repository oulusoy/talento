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
                v-model="companyEmail"
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
                v-model="companyFirstname"
                placeholder="firstname *"
                required
            ></b-form-input>
            <b-form-invalid-feedback :state="isFirstnameValid">
              invalid Firstname.
            </b-form-invalid-feedback>
          </b-form-group>

          <b-form-group id="lastname-group" label="Lastname:" label-for="input-lastname" class="w-75">
            <b-form-input
                id="input-lastname"
                v-model="companyLastname"
                placeholder="lastname *"
                required
            ></b-form-input>
            <b-form-invalid-feedback :state="isLastnameValid">
              invalid Lastname.
            </b-form-invalid-feedback>
          </b-form-group>

          <b-form-group id="phone-group" label="Phone:" label-for="input-phone" class="w-75">
            <b-form-input
                id="input-phone"
                v-model="companyPhone"
                type="tel"
                placeholder="Phone *"
                required
            ></b-form-input>
            <b-form-invalid-feedback :state="isPhoneValid">
              invalid Phone.
            </b-form-invalid-feedback>
          </b-form-group>

          <b-form-group id="country-group" label="In Welchen Land lebst du ?" label-for="input-country" class="w-50">
            <b-form-select
                id="input-country"
                v-model="companyCountry"
                :options="countries"
                required
            ></b-form-select>
            <b-form-invalid-feedback :state="isCountryValid">
              please choose a country.
            </b-form-invalid-feedback>
          </b-form-group>

          <b-form-group id="city-group" label="City:" label-for="input-city" class="w-75">
            <b-form-input
                id="input-city"
                v-model="companyCity"
                placeholder="City *"
                required
            ></b-form-input>
            <b-form-invalid-feedback :state="isCityValid">
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
      this.sendData()
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
      this.$store.dispatch('setCompanyEmail', this.companyEmail)
      this.$store.dispatch('setCompanyFirstname', this.companyFirstname)
      this.$store.dispatch('setCompanyLastname', this.companyLastname)
      this.$store.dispatch('setCompanyPhone', this.companyPhone)
      this.$store.dispatch('setCompanyCountry', this.companyCountry)
      this.$store.dispatch('setCompanyCity', this.companyCity)
      this.$emit('update:step', this.previousStep)
    },
    validate() {
      this.validateEmail()
      this.validateFirstName()
      this.validateLastName()
      this.validatePhoneNumber()
      this.validateCountry()
      this.validateCity()
      return this.isEmailValid &&
      this.isSeekerFirstnameValid &&
      this.isSeekerLastnameValid &&
      this.isSeekerPhoneValid &&
      this.isSeekerCountryValid &&
      this.isSeekerCityValid
    },
    validateEmail() {
      let regex = new RegExp('^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$');
      this.isEmailValid = regex.test(this.companyEmail.trim())
      return this.isEmailValid
    },
    validateFirstName() {
      let regex = new RegExp('^(?=.{1,50}$)[a-zA-Z]+(?:[.\\s][a-zA-Z]+)*$');
      this.isFirstnameValid = regex.test(this.companyFirstname.trim())
      return this.isFirstnameValid
    },
    validateLastName() {
      let regex = new RegExp('^(?=.{1,50}$)[a-zA-Z]+(?:[.\\s][a-zA-Z]+)*$');
      this.isLastnameValid = regex.test(this.companyLastname.trim())
      return this.isLastnameValid
    },
    validatePhoneNumber() {
      let regex = new RegExp('^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\\s\\./0-9]*$');
      this.isPhoneValid = regex.test(this.companyPhone.trim())
      return this.isPhoneValid
    },
    validateCountry() {
      if (this.companyCountry != null) {
        this.isCountryValid = this.companyCountry.length !== 0
      } else {
        this.isCountryValid = false
      }
      return this.isCountryValid
    },
    validateCity() {
      let regex = new RegExp('^[a-zA-Z]+(?:[\\s-][a-zA-Z]+)*$');
      this.isCityValid = regex.test(this.companyCity.trim())
      return this.isCityValid
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
