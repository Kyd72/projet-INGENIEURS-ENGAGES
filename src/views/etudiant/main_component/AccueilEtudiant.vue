<template>
  <div id="accueil_etudiant">
    <div id="texte_accueil">{{nomEtudiant.toUpperCase()}} </div>
</div>
</template>

<script setup>

import {ref} from "vue";

const nomEtudiant=ref("Nom, Prenom")

</script>

<style scoped>

div#accueil_etudiant{
  border: black solid 1px;
  position: absolute;
  height: 100vh;
  width: 1fr  ;
  right: 0;
  top: 0;
  left: 19vw;
  bottom: 0;
}

div#texte_accueil{
  color: black;
  font-family: 'Poppins',Poppins ,sans-serif;
  font-size: 3vh;
  width: 24vw;
  margin: 4% auto;
  font-weight: 750;
}

</style>