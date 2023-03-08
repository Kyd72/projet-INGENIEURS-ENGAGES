<template>
  <div id="accueil_etudiant">
    <div id="texte_accueil">{{nomEtudiant.toUpperCase()}} </div>
  </div>

  <SearchBar></SearchBar>
</template>

<script setup>

import {ref} from "vue";
import SearchBar from "@/components/generic_components/SearchBar.vue";

const nomEtudiant=ref("S'Inscrire à une Activité")

</script>

<style scoped>

div#accueil_etudiant{
  border: black solid 1px;
  position: absolute;
  height: 125vh;
  width: 1fr;
  right: 0;
  top: 0;
  left: 19vw;
  bottom: 0;
}

div#texte_accueil{
  color: black;
  font-family: 'Poppins',Poppins ,sans-serif;
  font-size: 4vh;
  width: 24vw;
  margin: 4% auto;
  font-weight: 750;
}

</style>