<template>
  <b-container class="footer" fluid>
    <b-row>
      <b-col cols="12" lg="12">
        <p class="footer-text-left">Impressum</p>
        <p class="footer-text-right">all rights reserved by Colak GmbH</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.footer-text-left {
  left: 20px;
  bottom: 15px;
  position: fixed;
  color: white;
}

.footer-text-right {
  right: 20px;
  bottom: 15px;
  position: fixed;
  color: white;
}

.footer {
  background: radial-gradient(circle, rgba(142,87,219,1) 0%, rgba(122,66,200,1) 100%);
  height: 75px;
}
</style>