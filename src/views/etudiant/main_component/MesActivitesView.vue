<template>
  <div id="mes_activites">
    <div id="texte_accueil">{{texteAccueil.toUpperCase()}} </div>
  </div>


  <div class="container-titre+table" id="mes_activites-container-titre-and-table-1">
    <div @click="clickOnTitleTableActivitesEnCours" class="container-titre"  id="mes_activites-container-titre-1">
      <img class="directionnal-arrow" id="mes_activites-container-titre-1-directionnal-arrow"
           :src="arrowsImageLinks[arrowToShowForTable1]"
           alt="img row down">
      <h1 class="titre" id="mes_activites-intitule-titre-1">ACTIVITES EN COURS POUR LE SEMESTRE</h1>



    </div>


    <CustomTableEtud v-if="showTableActivitesEnCours"
                     :array_for_title_row="titleRowTableActiviteEnCours"
                     :array_for_data_row="dataRowTableTableActiviteEnCours"
                     @clickOnRowData2="clickOnActivityNameInTableActiviteEnCours"
                     @clickOnRowData4="clickOnActivityDescriptionOnTableActiviteEnCours"
    />


  </div>

  <div class="container-titre+table" id="mes_activites-container-titre-and-table-2">
    <div @click="clickOnTitleTableActivitesTerminees" class="container-titre"  id="mes_activites-container-titre-2">
      <img class="directionnal-arrow" id="mes_activites-container-titre-2-directionnal-arrow"
           :src="arrowsImageLinks[arrowToShowForTable2]"
           alt="img row down">
      <h1 class="titre" id="mes_activites-intitule-titre-2">ACTIVITES TERMINEES</h1>



    </div>


    <CustomTableEtud v-if="showTableActivitesTerminees"
                     :array_for_title_row="titleRowTableActiviteesTerminees"
                     :array_for_data_row="dataRowTableActiviteesTerminees"
                     @clickOnRowData3="clickOnActivityNameInTableActiviteTerminees"
                     @clickOnRowData4="clickOnActivityDescriptionOnTableActiviteTerminees"
    />


  </div>

  <DetailActivite :showed="showDescForTableActiviteEnCours"
                  :activity_name="activityNameInTableActiviteEnCours"
                  :activity_id="activityIdInTableActiviteEnCours"
                  @clickOnClosed="settingShowDescForTableActiviteEnCoursToFalse"></DetailActivite>

  <DetailActivite :showed="showDescForTableActiviteTerminees"
                  :activity_name="activityNameInTableActiviteTerminees"
                  :activity_id="activityIdInTableActiviteTerminees"
                  @clickOnClosed="settingShowDescForTableActiviteTermineesToFalse"></DetailActivite>


  <WritingDescription  :showed="showWritForTableActiviteEnCours"
                       :activity_name="activityNameForWritingForTableActiviteEnCours"
                       :activity_id="activityIdForWritingForTableActiviteEnCours"
                       @clickOnClosed="settingShowWritToFalseForTableActiviteEnCours"
                       @clickOnSaved="settingShowWritToFalseForTableActiviteEnCours"
                       @clickOnDeleted="settingShowWritToFalseWithDeleteForTableActiviteEnCours"


  >
<!-- TODO : click on delete, reload all datas   -->

  </WritingDescription>

  <ReadingDescription  :showed="showWritForTableActiviteTerminees"
                       :activity_id="activityIdForWritingForTableActiviteTerminees"
                       @clickOnClosed="settingShowWritToFalseForTableActiviteTerminees"
                       @clickOnSaved="settingShowWritToFalseForTableActiviteTerminees"
                       @clickOnDeleted="settingShowWritToFalseWithDeleteForTableActiviteTerminees"


  >
    <!-- TODO : click on delete, reload all datas   -->

  </ReadingDescription>




  <div id="cover"> </div>

</template>

<script setup>

import {reactive, ref} from "vue";
import CustomTableEtud from "@/components/generic_components/CustomTable/CustomTableEtud.vue";
import DetailActivite from "@/components/etudiant/PageSinscrireActivite/DetailActivite.vue";
import WritingDescription from "@/components/etudiant/page_mes_activites/WritingDescription.vue";
import ReadingDescription from "@/components/etudiant/page_mes_activites/ReadingDescription.vue";



/**Début Gestion du Texte d'accueil affiché en haut de la page*/
const texteAccueil=ref("S'Inscrire à une Activité")

/**Fin Gestion Texte d'accueil affiché en haut de la page*/

//*****************************************************************
/**DEBUT Simulation données pour tableau --*/
/*
Cette section permet de comprendre le format des données à
respecter pour le tableau
*/



let data1 =
    {
      id : 1,                                                                    // pour gestion des emits
      un :     {intitule : "ASSOCIATIF", cssclass : "non-clickable"},                //pour colomne REFERENTIEL
      deux :   {intitule : "ORGANISER CONFERENCE", cssclass : "clickable-text"},    //pour colomne NOM DE L'ACTIVITE
      trois :  {intitule : "10-07-2021", cssclass : "non-clickable"},             //pour colomne DATE LIMITE
      quatre : {intitule : "", cssclass : "editable-text"},                     //pour colomne
      cinq :   {intitule : "SOUMETTRE", cssclass : "clickable-button"}
    }
let data2 =
    {
      id : 2,                                                                    // pour gestion des emits
      un :     {intitule : "CLIMAT", cssclass : "non-clickable"},                //pour colomne REFERENTIEL
      deux :   {intitule : "PLANTER DES ARBRES", cssclass : "clickable-text"},    //pour colomne NOM DE L'ACTIVITE
      trois :  {intitule : "10-07-2021", cssclass : "non-clickable"},             //pour colomne DATE LIMITE
      quatre : {intitule : "", cssclass : "editable-text"},                     //pour colomne
      cinq :   {intitule : "SOUMETTRE", cssclass : "clickable-button"}               //pour colomne



    }
let data3 =
    {
      id : 3,                                                                    // pour gestion des emits
      un :     {intitule : "ASSOCIATIF", cssclass : "non-clickable"},                //pour colomne REFERENTIEL
      deux :   {intitule : "TRAVAILLER A HORUS", cssclass : "clickable-text"},    //pour colomne NOM DE L'ACTIVITE
      trois :  {intitule : "10-07-2021", cssclass : "non-clickable"},             //pour colomne DATE LIMITE
      quatre : {intitule : "", cssclass : "editable-text"},                     //pour colomne
      cinq :   {intitule : "SOUMIS", cssclass : "not-clickable-button"}                //pour colomne



    }
let data4 =
    {
      id : 4,                                                                    // pour gestion des emits
      un :     {intitule : "DIVERSITE", cssclass : "non-clickable"},                //pour colomne REFERENTIEL
      deux :   {intitule : "PARTICIPER AUX CORDEES DE LA REUSSITE", cssclass : "clickable-text"},    //pour colomne NOM DE L'ACTIVITE
      trois :  {intitule : "10-07-2021", cssclass : "non-clickable"},             //pour colomne DATE LIMITE
      quatre : {intitule : "", cssclass : "editable-text"},                     //pour colomne
      cinq :   {intitule : "SOUMETTRE", cssclass : "clickable-button"}                //pour colomne



    }
let data5 =
    {
      id : 5,                                                                    // pour gestion des emits
      un :     {intitule : "HUMANITAIRE", cssclass : "non-clickable"},                //pour colomne REFERENTIEL
      deux :   {intitule : "ACCUEILLIR DIRECTEUR RWANDA", cssclass : "clickable-text"},    //pour colomne NOM DE L'ACTIVITE
      trois :  {intitule : "10-07-2021", cssclass : "non-clickable"},             //pour colomne DATE LIMITE
      quatre : {intitule : "", cssclass : "editable-text"},                     //pour colomne
      cinq :   {intitule : "SOUMETTRE", cssclass : "clickable-button"}               //pour colomne



    }
let data6 =
    {
      id : 6,                                                                    // pour gestion des emits
      un :     {intitule : "5", cssclass : "non-clickable"},                //pour colomne REFERENTIEL
      deux :   {intitule : "DIVERSITE", cssclass : "non-clickable"},    //pour colomne NOM DE L'ACTIVITE
      trois :  {intitule : "ORGANISER STAGE", cssclass : "clickable-text"},             //pour colomne DATE LIMITE
      quatre : {intitule : "7", cssclass : "editable-text"},                     //pour colomne
      cinq :   {intitule : "0.25", cssclass : "non-clickable"}                //pour colomne



    }
let data7 =
    {
      id : 7,                                                                    // pour gestion des emits
      un :     {intitule : "5", cssclass : "non-clickable"},                //pour colomne REFERENTIEL
      deux :   {intitule : "ASSOCIATIF", cssclass : "non-clickable"},    //pour colomne NOM DE L'ACTIVITE
      trois :  {intitule : "ORGANISER STAGE", cssclass : "clickable-text"},             //pour colomne DATE LIMITE
      quatre : {intitule : "7", cssclass : "editable-text"},                     //pour colomne
      cinq :   {intitule : "0.25", cssclass : "non-clickable"}                 //pour colomne



    }
let data8 =
    {
      id : 8,                                                                    // pour gestion des emits
      un :     {intitule : "5", cssclass : "non-clickable"},                //pour colomne REFERENTIEL
      deux :   {intitule : "ASSOCIATIF", cssclass : "non-clickable"},    //pour colomne NOM DE L'ACTIVITE
      trois :  {intitule : "PARTICIPER CONFERENCE", cssclass : "clickable-text"},             //pour colomne DATE LIMITE
      quatre : {intitule : "7", cssclass : "editable-text"},                     //pour colomne
      cinq :   {intitule : "0.25", cssclass : "non-clickable"}                //pour colomne



    }
let data9 =
    {
      id : 9,                                                                    // pour gestion des emits
      un :     {intitule : "5", cssclass : "non-clickable"},                //pour colomne REFERENTIEL
      deux :   {intitule : "CLIMAT", cssclass : "non-clickable"},    //pour colomne NOM DE L'ACTIVITE
      trois :  {intitule : "FRESQUES DU CLIMAT", cssclass : "clickable-text"},             //pour colomne DATE LIMITE
      quatre : {intitule : "7", cssclass : "editable-text"},                     //pour colomne
      cinq :   {intitule : "0.25", cssclass : "non-clickable"}                 //pour colomne



    }
let data10 =
    {
      id : 10,                                                                    // pour gestion des emits
      un :     {intitule : "5", cssclass : "non-clickable"},                //pour colomne REFERENTIEL
      deux :   {intitule : "DIVERSITE", cssclass : "non-clickable"},    //pour colomne NOM DE L'ACTIVITE
      trois :  {intitule : "CORDEES", cssclass : "clickable-text"},             //pour colomne DATE LIMITE
      quatre : {intitule : "7", cssclass : "editable-text"},                     //pour colomne
      cinq :   {intitule : "0.25", cssclass : "non-clickable"}                 //pour colomne



    }


const dataRowTableSimul1=  [data1,data2,data3,data4,data5]
const dataRowTableSimul2=  [data6,data7,data8,data9,data10]

/**FIN Simulation données pour tableau*/

/**DEBUT IMPLEMENTATION POUR REMPLISSAGE TABLEAU ********************************************************************************/
//Données à afficher dans le tableau Activités en cours
let colomneReferentielTableActiviteEnCours=
    { imgsrc : "src/assets/mes_activites/tableau_activites_en_cours/colonne_tableau/img_referentiel.png",
      cssclass :"non-clickable",
      intitule :"REFERENTIEL"
    }

let colomneActiviteTableActiviteEnCours=
    { imgsrc : "src/assets/mes_activites/tableau_activites_en_cours/colonne_tableau/img_activite.png",
      cssclass :"non-clickable",
      intitule :"ACTIVITE"
    }

let colomneDateLimiteTableActiviteEnCours=
    { imgsrc : "src/assets/mes_activites/tableau_activites_en_cours/colonne_tableau/img_date_limite.png",
      cssclass :"non-clickable",
      intitule :"DATE LIMITE"
    }

let colomneModifDescTableActiviteEnCours=
    { imgsrc : "src/assets/mes_activites/tableau_activites_en_cours/colonne_tableau/img_modif_description.png",
      cssclass :"non-clickable",
      intitule :"AFFICH/MODIF DESCRIPTION"
    }

let colomneStatutTableActiviteEnCours=
    { imgsrc : "src/assets/mes_activites/tableau_activites_en_cours/colonne_tableau/img_statut.png",
      cssclass :"non-clickable",
      intitule :"STATUT"
    }


let titleRowTableActiviteEnCours= [colomneReferentielTableActiviteEnCours,colomneActiviteTableActiviteEnCours,colomneDateLimiteTableActiviteEnCours,colomneModifDescTableActiviteEnCours, colomneStatutTableActiviteEnCours]


/*Récupération données par requête AJAX */
//Pas encore implémenté ; sera fait à chaque onMounted
/* Fin Récupération données par requête AJAX */

/*Recopie données reçues par requête AJAX dans une array props pour CustomTable  */
const dataRowTableTableActiviteEnCours = reactive([])


dataRowTableSimul1.forEach(element=>dataRowTableTableActiviteEnCours.push(element)) //sera fait à chaque onMounted ou à chaque clic sur AFFICHER TOUT



/*Fin Recopie données reçues par requête AJAX dans une array props pour CustomTable  */

//Données à afficher dans tableau 2 Activitées terminées

let colomneReferentielTableActiviteesTerminees=
    { imgsrc : "src/assets/mes_activites/tableau_activites_terminees/colonne_tableau/img_referentiel.png",
      cssclass :"non-clickable",
      intitule :"REFERENTIEL"
    }

let colomneActiviteTableActiviteesTerminees=
    { imgsrc : "src/assets/mes_activites/tableau_activites_terminees/colonne_tableau/img_activite.png",
      cssclass :"non-clickable",
      intitule :"ACTIVITE"
    }

let colomneSemestreActiviteesTerminees=
    { imgsrc : "src/assets/mes_activites/tableau_activites_terminees/colonne_tableau/img_semestre.png",
      cssclass :"non-clickable",
      intitule :"SEMESTRE"
    }

let colomneDescriptionActiviteesTerminees=
    { imgsrc : "src/assets/mes_activites/tableau_activites_terminees/colonne_tableau/img_description.png",
      cssclass :"non-clickable",
      intitule :"DESCRIPTION"
    }

let colomnePointsAttribuesActiviteesTerminees=
    { imgsrc : "src/assets/mes_activites/tableau_activites_terminees/colonne_tableau/img_points_attribues.png",
      cssclass :"non-clickable",
      intitule :"POINTS"
    }


let titleRowTableActiviteesTerminees= [colomneSemestreActiviteesTerminees,colomneReferentielTableActiviteesTerminees, colomneActiviteTableActiviteesTerminees, colomneDescriptionActiviteesTerminees, colomnePointsAttribuesActiviteesTerminees]


/*Récupération données par requête AJAX */
//Pas encore implémenté ; sera fait à chaque onMounted
/* Fin Récupération données par requête AJAX */

/*Recopie données reçues par requête AJAX dans une array props pour CustomTable  */
const dataRowTableActiviteesTerminees = reactive([])


dataRowTableSimul2.forEach(element=>dataRowTableActiviteesTerminees.push(element)) //sera fait à chaque onMounted ou à chaque clic sur AFFICHER TOUT




/**FIN IMPLEMENTATION POUR REMPLISSAGE TABLEAU**************************************************/









/****DEBUT implémentation affichage dynamique tableau*/
/*Les clics sur le titre du tableau doivent pouvoir afficher et masquer ce dernier et doit également changer
la direction de la flèche


*/

const title_img_width_for_table_1
    =ref("1.69vw");
const title_img_height_for_table_1
    = ref ("2.24vh");

const arrowsImageLinks= [
  "src/assets/SinscrireActivite/TitreTableauActiviteOuverte/img_arrow_down.png",
  "src/assets/SinscrireActivite/TitreTableauActiviteOuverte/img_arrow_right.png"]
let arrowToShowForTable1 =0
const showTableActivitesEnCours = ref(true)

const adaptSize0ForTableActiviteEnCours = () => {
  title_img_width_for_table_1
      .value="1.69vw";
  title_img_height_for_table_1
      .value= "2.24vh";
  arrowToShowForTable1 =0

}

const adaptSize1ForTableActiviteEnCours = () => {
  title_img_width_for_table_1
      .value="2.24vh";
  title_img_height_for_table_1
      .value= "1.69vw";
  arrowToShowForTable1 =1

}

const clickOnTitleTableActivitesEnCours = (event)=> {
  showTableActivitesEnCours.value=!showTableActivitesEnCours.value
  showTableActivitesEnCours.value===true? adaptSize0ForTableActiviteEnCours() :adaptSize1ForTableActiviteEnCours()

}

// tableau 2 *******************************************

const title_img_width_for_table_2
    =ref("1.69vw");
const title_img_height_for_table_2
    = ref ("2.24vh");


let arrowToShowForTable2 =0
const showTableActivitesTerminees = ref(true)

const adaptSize0ForTableActiviteesTerminees = () => {
  title_img_width_for_table_2
      .value="1.69vw";
  title_img_height_for_table_2
      .value= "2.24vh";
  arrowToShowForTable2 =0

}

const adaptSize1ForTableActiviteesTerminees = () => {
  title_img_width_for_table_2
      .value="2.24vh";
  title_img_height_for_table_2
      .value= "1.69vw";
  arrowToShowForTable2 =1

}

const clickOnTitleTableActivitesTerminees = (event) =>{
  showTableActivitesTerminees.value=!showTableActivitesTerminees.value
  showTableActivitesTerminees.value===true? adaptSize0ForTableActiviteesTerminees() :adaptSize1ForTableActiviteesTerminees()

}

/**FIN implémentaion affichage dynamique tableau*/



let opacity='none' //variable utilisée dans les deux prochaines sections
/**DEBUT IMPLEMENTATION AFFICHAGE DESCRIPTION ET DETAILS D'UNE ACTIVITE  POUR TABLEAU 1 ACTIVITE  EN COURS*/
/*Le clic sur le nom d'une acivité affiche la description de celle-ci dans la div prevue à cet effet*/
//Cela diminue également l'opacité du composant principal


//opacity; variable pour rendre inaccessible l'interface lorsque le menu détails est affiché


const showDescForTableActiviteEnCours= ref(false)
const settingShowDescForTableActiviteEnCoursToFalse = (event) => {
  showDescForTableActiviteEnCours.value=false
  opacity="none"
}
const activityNameInTableActiviteEnCours =ref('')
const activityIdInTableActiviteEnCours =ref('')

const clickOnActivityNameInTableActiviteEnCours = (message) => {
  activityIdInTableActiviteEnCours.value=message.id
  activityNameInTableActiviteEnCours.value=message.name
  showDescForTableActiviteEnCours.value=true;
  opacity="block"
}

/**FIN IMPLEMENTATION AFFICHAGE DESCRIPTION ET DETAILS D'UNE ACTIVITE POUR TABLEAU 1 ACTIVITE  EN COURS*/

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
  activityIdForWritingForTableActiviteEnCours.value=message.id
  activityNameForWritingForTableActiviteEnCours.value=message.name
  showWritForTableActiviteEnCours.value=true;
  opacity="block"

}



/**FIN IMPLEMENTATION AFFICHAGE ET MODIFICATION DESCRIPTION DE TRAVAIL EFFECTUE*/



//*********************************************************************************
//**************************************************************************
//********************************************************************************

/**DEBUT IMPLEMENTATION AFFICHAGE DESCRIPTION ET DETAILS D'UNE ACTIVITE  POUR TABLEAU 2 ACTIVITE  TERMINEES*/
/*Le clic sur le nom d'une acivité affiche la description de celle-ci dans la div prevue à cet effet*/
//Cela diminue également l'opacité du composant principal


//opacity; variable pour rendre inaccessible l'interface lorsque le menu détails est affiché


const showDescForTableActiviteTerminees= ref(false)
const settingShowDescForTableActiviteTermineesToFalse = (event) => {
  showDescForTableActiviteTerminees.value=false
  opacity="none"
}
const activityNameInTableActiviteTerminees =ref('')
const activityIdInTableActiviteTerminees =ref('')

const clickOnActivityNameInTableActiviteTerminees = (message) => {
  activityIdInTableActiviteTerminees.value=message.id
  activityNameInTableActiviteTerminees.value=message.name
  showDescForTableActiviteTerminees.value=true;
  opacity="block"
}

/**FIN IMPLEMENTATION AFFICHAGE DESCRIPTION ET DETAILS D'UNE ACTIVITE POUR TABLEAU 2 ACTIVITE  TERMINEES*/

/**DEBUT IMPLEMENTATION AFFICHAGE  DESCRIPTION DE TRAVAIL EFFECTUE POUR TABLEAU 2 ACTIVITE  TERMINEES*/

const showWritForTableActiviteTerminees= ref(false)
const settingShowWritToFalseForTableActiviteTerminees = (event) => {
  showWritForTableActiviteTerminees.value=false
  opacity="none"
}


const settingShowWritToFalseWithDeleteForTableActiviteTerminees = (event)=>{

  /*TODO : ajax request to reload all datas (line 262 -265)*/
  showWritForTableActiviteTerminees.value=false
  opacity="none"
}
const activityNameForWritingForTableActiviteTerminees =ref('')
const activityIdForWritingForTableActiviteTerminees =ref('')

const clickOnActivityDescriptionOnTableActiviteTerminees = (message) => {
  activityIdForWritingForTableActiviteTerminees.value=message.id
  activityNameForWritingForTableActiviteTerminees.value=message.name
  showWritForTableActiviteTerminees.value=true;
  opacity="block"

}



/**FIN IMPLEMENTATION AFFICHAGE ET MODIFICATION DESCRIPTION DE TRAVAIL EFFECTUE TABLEAU 2 ACTIVITE  TERMINEES*/






</script>

<style scoped>

div#mes_activites{


  border: black solid 1px;
  background-color: #E8EAF6;
  position: absolute;
  height: 150vh;
  width: 1fr;
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


div#mes_activites-container-titre-and-table-1{

  margin-top: 25vh;
  margin-left: 20vw;


}

div#mes_activites-container-titre-and-table-2{

  margin-top: 2vh;
  margin-left: 20vw;


}

div.container-titre{
  position: relative;
  display: inline-flex;
  margin-bottom: 1vh;
  font-family: 'Poppins', Poppins , sans-serif;
  font-size: 1.3vh;
  font-weight: 600;
  color: #1f1f1f;
  align-items: center;
  justify-content: center;
  cursor: pointer;


}

img#mes_activites-container-titre-1-directionnal-arrow{
  width: v-bind(title_img_width_for_table_1);
  height: v-bind(title_img_height_for_table_1);

}

img#mes_activites-container-titre-2-directionnal-arrow{
  width: v-bind(title_img_width_for_table_2);
  height: v-bind(title_img_height_for_table_2);

}

h1#mes_activites-intitule-titre-1{
  margin-left: 1vw;

}

h1#mes_activites-intitule-titre-2{
  margin-left: 1vw;

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