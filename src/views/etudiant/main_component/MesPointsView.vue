<template>
  <div id="accueil_etudiant">
    <div class="header_infos" id="semestre">
      <img class="header_infos_img" id="img_semestre" src="src/assets/mes_activites/header/semestre/img_semestre.png" alt="image">
      <span>SEMESTRE</span>
    </div>
    <div class="header_infos" id="nbre_points">
      <span>Points gagnés : </span>
    </div>
    <div class="header_infos" id="date_limite">
      <span>Date limite : </span>
    </div>

    <div id="texte_accueil">{{nomEtudiant.toUpperCase()}} </div>
  </div>
</template>

<script setup>

import {ref} from "vue";

const nomEtudiant=ref("Mes points")

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
  margin-top: 10%;
  margin-left: 30vw;
  font-weight: 750;
}

div.header_infos{
  display: inline-flex;
  align-items: center; /*alignement vertical*/
  justify-content: center;/*alignement horizontal*/
  background-color: #283593;
  border-radius: 1.7vh;
  color: #FFFFFF;
}

div#semestre{

  position: absolute;
  left: 3%;
  top: 3%;

}

div#nbre_points span{
  width:13vw;
  margin-left: 5%;



}

div#nbre_points {
  position: absolute;
  right: 3%;
  top: 3%;

}


div.header_infos span {
  display: inline-flex;
  align-items: center; /*alignement vertical*/
  height: 6vh;
  width:10vw;
  overflow: hidden;
  padding: 0;
  font-weight: 1000;
  font-family: 'Poppins', Poppins , sans-serif;
  font-size: 2vh;
  line-height: 2vh;
}

img.header_infos_img{
  height: 4vh;
  width: 4vh;
  margin-left: 7%;
}

div#date_limite {
  position: absolute;
  left: 3%;
  top: 10%;

}

div#date_limite span{
  margin-left: 5%;
  font-weight: normal;
  font-size: 1.7vh;
  height: 4vh;
  width:12vw;





}


</style>