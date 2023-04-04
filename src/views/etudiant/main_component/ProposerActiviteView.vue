<template>
  <div id="proposer_activite">
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

    <div @click="i" id="texte_accueil">{{nomEtudiant.toUpperCase()}} </div>
    <div @click="clickOnNewProposition" class="button_proposer_activite" id="nouvelle_activite">
      <img class="button_proposer_activite_img" id="img_nouvelle_activite" src="src/assets/proposer_activite/nouvelle_proposition/img_nouvelle_proposition.png" alt="image">
      <span>NOUVELLE PROPOSITION</span>
    </div>

  </div>

  <div id="container_proposition_et_titre">
  <CustomTableEtud
  :array_for_data_row="dataRowTableSimul3"
  :array_for_title_row="ligneTitre"
  @clickOnRowData2="clickOnActivityNameInTableActiviteEnCours"
  >

  </CustomTableEtud>
  </div>

  <DetailActivite :showed="showDescForTableActiviteEnCours"
                  :activity_name="activityNameInTableActiviteEnCours"
                  :activity_id="activityIdInTableActiviteEnCours"
                  @clickOnClosed="settingShowDescForTableActiviteEnCoursToFalse"></DetailActivite>

  <WritingDescriptionForProposition  :showed="showWritForTableActiviteEnCours"
                       :activity_name="activityNameForWritingForTableActiviteEnCours"
                       :activity_id="activityIdForWritingForTableActiviteEnCours"
                       @clickOnClosed="settingShowWritToFalseForTableActiviteEnCours"
                       @clickOnSaved="settingShowWritToFalseForTableActiviteEnCours"
                       @clickOnDeleted="settingShowWritToFalseWithDeleteForTableActiviteEnCours"


  >

  </WritingDescriptionForProposition>


  <div id="cover"> </div>

</template>

<script setup>

import {ref} from "vue";
import CustomTableEtud from "@/components/generic_components/CustomTable/CustomTableEtud.vue";


const nomEtudiant=ref("Proposer Une Activité")


import {ligneTitre} from "@/tableau_activites_proposees";
import {dataRowTableSimul3} from "@/test_data";
import DetailActivite from "@/components/etudiant/PageSinscrireActivite/DetailActivite.vue";
import WritingDescriptionForProposition
  from "@/components/etudiant/page_proposer_activites/WritingDescriptionForProposition.vue";


let opacity='none'

const activityNameInTableActiviteEnCours =ref('')
const activityIdInTableActiviteEnCours =ref('')

const clickOnActivityNameInTableActiviteEnCours = (message) => {
  activityIdInTableActiviteEnCours.value=message.id
  activityNameInTableActiviteEnCours.value=message.name
  showDescForTableActiviteEnCours.value=true;
  opacity="block"
}


const showDescForTableActiviteEnCours= ref(false)
const settingShowDescForTableActiviteEnCoursToFalse = (event) => {
  showDescForTableActiviteEnCours.value=false
  opacity="none"
}


/**DEBUT IMPLEMENTATION AFFICHAGE ET MODIFICATION DESCRIPTION DE TRAVAIL EFFECTUE POUR TABLEAU 1 ACTIVITE  EN COURS*/

const showWritForTableActiviteEnCours= ref(false)
const settingShowWritToFalseForTableActiviteEnCours = (event) => {
  showWritForTableActiviteEnCours.value=false
  opacity="none"
}


const settingShowWritToFalseWithDeleteForTableActiviteEnCours = (event) => {

  /*TODO : ajax request to reload all datas (line 262 -265)*/
  showWritForTableActiviteEnCours.value=false
  opacity="none"
}
const activityNameForWritingForTableActiviteEnCours =ref('')
const activityIdForWritingForTableActiviteEnCours =ref('')

const clickOnActivityDescriptionOnTableActiviteEnCours = (message) => {
  showWritForTableActiviteEnCours.value=true;
  opacity="block"

}


const clickOnNewProposition = (message) => {
  activityIdForWritingForTableActiviteEnCours.value=message.id
  activityNameForWritingForTableActiviteEnCours.value=message.name
  showWritForTableActiviteEnCours.value=true;
  opacity="block"

}


/**FIN IMPLEMENTATION AFFICHAGE ET MODIFICATION DESCRIPTION DE TRAVAIL EFFECTUE*/



</script>

<style scoped>

div#proposer_activite{
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
  margin-left: 25vw;
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


div.button_proposer_activite{

  display: inline-flex;
  align-items: center; /*alignement vertical*/
  justify-content: center;/*alignement horizontal*/
  background-color: #283593;
  border-radius: 1.7vh;
  color: #FFFFFF;

  position: absolute;
  left: 36%;
  top: 25%;
  cursor: pointer;


}

div.button_proposer_activite:active{
  background-color: #1f254b;
}

div.button_proposer_activite img{

  height: 2.5vh;
  width: 2.5vh;
  margin-left: 4%;
  margin-right: 3%;

}

div.button_proposer_activite span{
  display: inline-flex;
  align-items: center; /*alignement vertical*/
  height: 5vh;
  width:13vw;
  overflow: hidden;
  padding: 0;
  font-weight: 900;
  font-family: 'Poppins', Poppins , sans-serif;
  font-size: 1.75vh;
  line-height: 2vh;
}

div#container_proposition_et_titre{
  margin-top: 35vh;
  margin-left: 20vw;
}

#cover {
  position: absolute;
  top: 0;
  left: 19vw;
  height: 150vh ;
  width: 100%;
  opacity: 0.80;
  background: #aaa;
  z-index: 10;
  display: v-bind(opacity);
}


</style>