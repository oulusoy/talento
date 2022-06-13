<template>
  <div class="main-grid p-3">
    <b-jumbotron class="max1000 aliceblue" >
      <template #lead>
        UPS
      </template>

      <hr class="my-4">

      <b-row class="m-4">
        <b-col>

        </b-col>
      </b-row>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'Error',
  data: function () {
    return {
    }
  },
  methods: {
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
