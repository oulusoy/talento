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
              label="Email address:"
              label-for="input-1"
              description="We'll never share your email with anyone else."
          >
            <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                placeholder="Enter email"
                required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
            <b-form-input
                id="input-2"
                v-model="form.name"
                placeholder="Enter name"
                required
            ></b-form-input>
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
      seekerEmail: '',
      seekerFirstname: '',
      seekerLastname: '',
      seekerAge: '',
      seekerPhone: '',
      seekerCountry: '',
      seekerCity: '',
      previousStep: 5,
      nextStep: 7,
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
      this.$emit('update:step', this.nextStep)
    },
    previousPage() {
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
