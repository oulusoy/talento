<template>
  <div class="main-grid p-3">
    <b-jumbotron class="max1000 aliceblue" >
      <template #lead>
        FÜR WELCHE BRANCHE INTERESSIEREN SIE SICH ?
      </template>

      <hr class="my-4">

      <!-- handcraft -->

      <b-row class="m-4">
        <b-col>
          <b-button variant="secondary" v-b-toggle.handcraft-card >handcraft & manual labor</b-button>
        </b-col>
        <b-col></b-col>
      </b-row>

      <b-collapse id="handcraft-card">
        <b-card class="mb-4">
          <b-form-checkbox
              size="lg"
              class="m-2"
              id="metalWorker-checkbox"
              v-model="business.handcraft.metalWorker"
              name="metalWorker"
              switch
          >
            Metal worker
          </b-form-checkbox>
          <b-form-checkbox
              size="lg"
              class="m-2"
              id="electrician-checkbox"
              v-model="business.handcraft.electrician"
              name="electrician"
              switch
          >
            Electrician
          </b-form-checkbox>
          <b-form-checkbox
            size="lg"
            class="m-2"
            id="painter-checkbox"
            v-model="business.handcraft.painter"
            name="painter"
            switch
        >
          Painter
        </b-form-checkbox>
          <b-form-checkbox
              size="lg"
              class="m-2"
              id="bricklayer-checkbox"
              v-model="business.handcraft.bricklayer"
              name="bricklayer"
              switch
          >
            Bricklayer
          </b-form-checkbox>
          <b-form-checkbox
              size="lg"
              class="m-2"
              id="roofer-checkbox"
              v-model="business.handcraft.roofer"
              name="roofer"
              switch
          >
            roofer
          </b-form-checkbox>
        </b-card>
      </b-collapse>

      <!-- SCIENTIST -->

      <b-row class="m-4">
        <b-col>
          <b-button variant="secondary" v-b-toggle.scientist-card >Scientist</b-button>
        </b-col>
        <b-col></b-col>
      </b-row>

      <b-collapse id="scientist-card">
        <b-card class="mb-4">
          <b-form-checkbox
              size="lg"
              class="m-2"
              id="scientist-checkbox"
              v-model="business.scientist.scientist"
              name="scientist"
              switch
          >
            Scientist
          </b-form-checkbox>
          <b-form-input v-if="business.scientist.scientist === true" v-model="business.scientist.specialScientistField" placeholder="special Science field"></b-form-input>
          <b-form-checkbox
              size="lg"
              class="m-2"
              id="researcher-checkbox"
              v-model="business.scientist.researcher"
              name="researcher"
              switch
          >
            Researcher
          </b-form-checkbox>
          <b-form-input v-if="business.scientist.researcher === true" v-model="business.scientist.specialResearcherField" placeholder="other"></b-form-input>
        </b-card>
      </b-collapse>

      <!-- HOTEL & GASTRO -->

      <b-row class="m-4">
        <b-col>
          <b-button variant="secondary" v-b-toggle.hotel-card >Hotel and Gastro</b-button>
        </b-col>
        <b-col></b-col>
      </b-row>

      <b-collapse id="hotel-card">
        <b-card class="mb-4">
          <b-form-checkbox
              size="lg"
              class="m-2"
              id="cook-checkbox"
              v-model="business.hotelAndGastro.cook"
              name="cook"
              switch
          >
            Cook
          </b-form-checkbox>
          <b-form-checkbox
              size="lg"
              class="m-2"
              id="baker-checkbox"
              v-model="business.hotelAndGastro.baker"
              name="baker"
              switch
          >
            Baker
          </b-form-checkbox>
          <b-form-checkbox
              size="lg"
              class="m-2"
              id="hotelManager-checkbox"
              v-model="business.hotelAndGastro.hotelManager"
              name="hotelManager"
              switch
          >
            Hotel Manager
          </b-form-checkbox>
          <b-form-checkbox
              size="lg"
              class="m-2"
              id="hotelClerk-checkbox"
              v-model="business.hotelAndGastro.hotelClerk"
              name="hotelClerk"
              switch
          >
            Hotel Clerk
          </b-form-checkbox>
        </b-card>
      </b-collapse>

      <!-- IT -->

      <b-row class="m-4">
        <b-col>
          <b-button variant="secondary" v-b-toggle.it-card >IT</b-button>
        </b-col>
        <b-col></b-col>
      </b-row>

      <b-collapse id="it-card">
        <b-card class="mb-4">
          <b-form-checkbox
              size="lg"
              class="m-2"
              id="uxDeveloper-checkbox"
              v-model="business.it.uxDeveloper"
              name="uxDeveloper"
              switch
          >
            UX Designer
          </b-form-checkbox>
          <b-form-checkbox
              size="lg"
              class="m-2"
              id="webDesigner-checkbox"
              v-model="business.it.webDesigner"
              name="webDesigner"
              switch
          >
            Web Designer
          </b-form-checkbox>
          <b-form-checkbox
              size="lg"
              class="m-2"
              id="backendDeveloper-checkbox"
              v-model="business.it.backendDeveloper"
              name="backendDeveloper"
              switch
          >
            Backend Developer
          </b-form-checkbox>
          <b-form-checkbox
              size="lg"
              class="m-2"
              id="fullStackDeveloper-checkbox"
              v-model="business.it.fullStackDeveloper"
              name="fullStackDeveloper"
              switch
          >
            FullStack Developer
          </b-form-checkbox>
          <b-form-checkbox
              size="lg"
              class="m-2"
              id="qa-checkbox"
              v-model="business.it.qa"
              name="qualityAssurance"
              value="qualityAssurance"
              switch
          >
            QA
          </b-form-checkbox>
        </b-card>
      </b-collapse>

      <!-- MEDICINE -->

      <b-row class="m-4">
        <b-col>
          <b-button variant="secondary" v-b-toggle.medicine-card >Medicine</b-button>
        </b-col>
        <b-col></b-col>
      </b-row>

      <b-collapse id="medicine-card">
        <b-card class="mb-4">
          <b-form-checkbox
              size="lg"
              class="m-2"
              id="doctor-checkbox"
              v-model="business.medicine.doctor"
              name="doctor"
              switch
          >
            Doctor
          </b-form-checkbox>
          <b-form-input v-if="business.medicine.doctor === true" v-model="business.medicine.specialDoctorField" placeholder="special field"></b-form-input>
          <b-form-checkbox
              size="lg"
              class="m-2"
              id="caregiver-checkbox"
              v-model="business.medicine.caregiver"
              name="caregiver"
              switch
          >
            Caregiver
          </b-form-checkbox>
          <b-form-input v-if="business.medicine.caregiver === true" v-model="business.medicine.specialCareField" placeholder="special field"></b-form-input>
        </b-card>
      </b-collapse>

      <!-- ENGINEER -->

      <b-row class="m-4">
        <b-col>
          <b-button variant="secondary" v-b-toggle.engineer-card >Engineer</b-button>
        </b-col>
        <b-col></b-col>
      </b-row>

      <b-collapse id="engineer-card">
        <b-card class="mb-4">
          <b-form-checkbox
              size="lg"
              class="m-2"
              id="architect-checkbox"
              v-model="business.engineering.architect"
              name="doctor"
              switch
          >
            Architect
          </b-form-checkbox>
          <b-form-checkbox
              size="lg"
              class="m-2"
              id="civilEngineer-checkbox"
              v-model="business.engineering.civilEngineer"
              name="civilEngineer"
              switch
          >
            Civil Engineer
          </b-form-checkbox>
          <b-form-checkbox
              size="lg"
              class="m-2"
              id="machineEngineer-checkbox"
              v-model="business.engineering.machineEngineer"
              name="machineEngineer"
              switch
          >
            Machine Engineer
          </b-form-checkbox>
          <b-form-checkbox
              size="lg"
              class="m-2"
              id="electricEngineer-checkbox"
              v-model="business.engineering.electricEngineer"
              name="machineEngineer"
              switch
          >
            Electric Engineer
          </b-form-checkbox>
        </b-card>
      </b-collapse>

      <b-form-input class="w-50 mb-4 ml-5" v-model="business.other" placeholder="other"></b-form-input>

      <p v-if="showErrorMsg" class="red">
        * Bitte wählen Sie eine Branche aus
      </p>

      <b-button class="mr-2" variant="secondary" @click="previousPage">zurück</b-button>
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
        handcraft: {
          metalWorker: false,
          electrician: false,
          mechanic: false,
          painter: false,
          bricklayer: false,
          roofer: false,
        },
        scientist: {
          scientist: false,
          specialScientistField: '',
          researcher: false,
          specialResearcherField: '',
        },
        hotelAndGastro: {
          cook: false,
          hotelManager: false,
          hotelClerk: false,
          baker: false
        },
        it: {
          uxDeveloper: false,
          webDesigner: false,
          backendDeveloper: false,
          fullStackDeveloper: false,
          qa: false
        },
        medicine: {
          doctor: false,
          specialDoctorField: '',
          caregiver: false,
          specialCareField: '',
        },
        engineering: {
          architect: false,
          civilEngineer: false,
          machineEngineer: false,
          mechanicEngineer: false,
          electricEngineer: false
        },
        other : ''
      },
      currentJob: '',
      nextStep: 3,
      previousStep: 1,
      showErrorMsg: false
    }
  },
  mounted() {
    this.business = this.$store.getters.getBusiness
  },
  update() {

  },
  methods: {
    nextPage() {
      console.log(this.business.scientist.researcher, '+#+');
      if (this.validate()) {
        console.log('this.business');
        this.$store.dispatch('setBusiness', this.business)
        this.$emit('update:step', this.nextStep)
      }  else {
        this.showErrorMsg = true
      }
    },
    previousPage() {
      this.$store.dispatch('setBusiness', this.business)
      this.$emit('update:step', this.previousStep)
    },
    validate() {
      return !(
          this.business.handcraft.metalWorker === false &&
          this.business.handcraft.roofer === false &&
          this.business.handcraft.bricklayer === false &&
          this.business.handcraft.painter === false &&
          this.business.handcraft.electrician === false &&
          this.business.handcraft.mechanic === false &&
          this.business.scientist.scientist === false &&
          this.business.scientist.researcher === false &&
          this.business.hotelAndGastro.baker === false &&
          this.business.hotelAndGastro.cook === false &&
          this.business.hotelAndGastro.hotelClerk === false &&
          this.business.hotelAndGastro.hotelManager === false &&
          this.business.it.backendDeveloper === false &&
          this.business.it.qa === false &&
          this.business.it.fullStackDeveloper === false &&
          this.business.it.uxDeveloper === false &&
          this.business.it.webDesigner === false &&
          this.business.medicine.doctor === false &&
          this.business.medicine.caregiver === false &&
          this.business.engineering.architect === false &&
          this.business.engineering.civilEngineer === false &&
          this.business.engineering.electricEngineer === false &&
          this.business.engineering.machineEngineer === false &&
          this.business.engineering.mechanicEngineer === false &&
          this.business.other === ''
      );
    },
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
