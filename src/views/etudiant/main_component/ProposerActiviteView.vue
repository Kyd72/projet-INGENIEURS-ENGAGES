<template>
  <div id="accueil_etudiant">
    <div @click="i" id="texte_accueil">{{nomEtudiant.toUpperCase()}} </div>
  </div>

  <div id="custom1">
  </div>

<ReadingDescription :showed="true" :activity_name=" 'test' " ></ReadingDescription>
</template>

<script setup>

import {ref} from "vue";
import WritingDescription from "@/components/etudiant/page_mes_activites/WritingDescription.vue";
import ReadingDescription from "@/components/etudiant/page_mes_activites/ReadingDescription.vue";

const nomEtudiant=ref("Proposer Une Activité")





</script>

<style scoped>







div#accueil_etudiant{
  border: black solid 1px;
  position: absolute;
  height: 100vh;
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