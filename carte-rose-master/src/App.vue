<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import { carterosePdf } from "./data/pdf/BaseModel";
const dataValue = {
 

  nomAdAssure: "mba ndong",
  adresseAssure: "BP Libreville",
  NomAdSoCiete: "NSIA ",
  NumChassis: "202045",
  policeOriginale: 888999,
  boitePostale: "Boite postale 2-221 Libreville",
  usagecat: "transport personnel",
  dateFin: "20/05/2024",
  dateDebut: "20/05/2024",
  police: "GB400698831225",
  BureauEmetteur: "Glass",
  assureur: "NSIA",
  marquetype: "toyota bus",
  immatriculation: 100000522,

};
</script>

<template>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->
  <button @click.prevent="carterosePdf(dataValue)">
    <span>Clique ici</span>
  </button>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
