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
                     :array_for_title_row="titleRowTable1"
                     :array_for_data_row="dataRowTable"
                     @clickOnRowData2="clickOnActivityName"
                     @clickOnRowData4="clickOnActivityDescription"
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
                     :array_for_title_row="titleRowTable2"
                     :array_for_data_row="dataRowTable2"
                     @clickOnRowData2="clickOnActivityName"
    />


  </div>

  <DetailActivite :showed="showDesc"
                  :activity_name="activityName"
                  :activity_id="activityId"
                  @clickOnClosed="settingShowDescToFalse"></DetailActivite>


  <WritingDescription  :showed="showWrit"
                       :activity_name="activityNameForWriting"
                       :activity_id="activityIdForWriting"
                       @clickOnClosed="settingShowWritToFalse"
                       @clickOnSaved="settingShowWritToFalse"


  >
<!-- TODO : click on delete, reload all datas   -->

  </WritingDescription>


  <div id="cover"> </div>

</template>

<script setup>

import {reactive, ref} from "vue";
import CustomTableEtud from "@/components/generic_components/CustomTable/CustomTableEtud.vue";
import DetailActivite from "@/components/etudiant/PageSinscrireActivite/DetailActivite.vue";
import WritingDescription from "@/components/etudiant/page_mes_activites/WritingDescription.vue";



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
      cinq :   {intitule : "SOUMETTRE", cssclass : "clickable-button"}                //pour colomne



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
let colomneReferentielTable1=
    { imgsrc : "src/assets/mes_activites/tableau_activites_en_cours/colonne_tableau/img_referentiel.png",
      cssclass :"non-clickable",
      intitule :"REFERENTIEL"
    }

let colomneActiviteTable1=
    { imgsrc : "src/assets/mes_activites/tableau_activites_en_cours/colonne_tableau/img_activite.png",
      cssclass :"non-clickable",
      intitule :"ACTIVITE"
    }

let colomneDateLimite=
    { imgsrc : "src/assets/mes_activites/tableau_activites_en_cours/colonne_tableau/img_date_limite.png",
      cssclass :"non-clickable",
      intitule :"DATE LIMITE"
    }

let colomneModifDesc=
    { imgsrc : "src/assets/mes_activites/tableau_activites_en_cours/colonne_tableau/img_modif_description.png",
      cssclass :"non-clickable",
      intitule :"AFFICH/MODIF DESCRIPTION"
    }

let colomneStatut=
    { imgsrc : "src/assets/mes_activites/tableau_activites_en_cours/colonne_tableau/img_statut.png",
      cssclass :"non-clickable",
      intitule :"STATUT"
    }


let titleRowTable1= [colomneReferentielTable1,colomneActiviteTable1,colomneDateLimite,colomneModifDesc, colomneStatut]


/*Récupération données par requête AJAX */
//Pas encore implémenté ; sera fait à chaque onMounted
/* Fin Récupération données par requête AJAX */

/*Recopie données reçues par requête AJAX dans une array props pour CustomTable  */
const dataRowTable = reactive([])


dataRowTableSimul1.forEach(element=>dataRowTable.push(element)) //sera fait à chaque onMounted ou à chaque clic sur AFFICHER TOUT



/*Fin Recopie données reçues par requête AJAX dans une array props pour CustomTable  */

//Données à afficher dans tableau 2

let colomneReferentielTable2=
    { imgsrc : "src/assets/mes_activites/tableau_activites_terminees/colonne_tableau/img_referentiel.png",
      cssclass :"non-clickable",
      intitule :"REFERENTIEL"
    }

let colomneActiviteTable2=
    { imgsrc : "src/assets/mes_activites/tableau_activites_terminees/colonne_tableau/img_activite.png",
      cssclass :"non-clickable",
      intitule :"ACTIVITE"
    }

let colomneSemestre=
    { imgsrc : "src/assets/mes_activites/tableau_activites_terminees/colonne_tableau/img_semestre.png",
      cssclass :"non-clickable",
      intitule :"DATE LIMITE"
    }

let colomneDescription=
    { imgsrc : "src/assets/mes_activites/tableau_activites_terminees/colonne_tableau/img_description.png",
      cssclass :"non-clickable",
      intitule :"DESCRIPTION"
    }

let colomnePointsAttribues=
    { imgsrc : "src/assets/mes_activites/tableau_activites_terminees/colonne_tableau/img_points_attribues.png",
      cssclass :"non-clickable",
      intitule :"POINTS"
    }


let titleRowTable2= [colomneSemestre,colomneActiviteTable2,colomneReferentielTable2,colomneDescription, colomnePointsAttribues]


/*Récupération données par requête AJAX */
//Pas encore implémenté ; sera fait à chaque onMounted
/* Fin Récupération données par requête AJAX */

/*Recopie données reçues par requête AJAX dans une array props pour CustomTable  */
const dataRowTable2 = reactive([])


dataRowTableSimul2.forEach(element=>dataRowTable2.push(element)) //sera fait à chaque onMounted ou à chaque clic sur AFFICHER TOUT




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

const adaptSize0ForTable1 = () => {
  title_img_width_for_table_1
      .value="1.69vw";
  title_img_height_for_table_1
      .value= "2.24vh";
  arrowToShowForTable1 =0

}

const adaptSize1ForTable1 = () => {
  title_img_width_for_table_1
      .value="2.24vh";
  title_img_height_for_table_1
      .value= "1.69vw";
  arrowToShowForTable1 =1

}

const clickOnTitleTableActivitesEnCours = (event)=> {
  showTableActivitesEnCours.value=!showTableActivitesEnCours.value
  showTableActivitesEnCours.value===true? adaptSize0ForTable1() :adaptSize1ForTable1()

}

// tableau 2 *******************************************

const title_img_width_for_table_2
    =ref("1.69vw");
const title_img_height_for_table_2
    = ref ("2.24vh");


let arrowToShowForTable2 =0
const showTableActivitesTerminees = ref(true)

const adaptSize0ForTable2 = () => {
  title_img_width_for_table_2
      .value="1.69vw";
  title_img_height_for_table_2
      .value= "2.24vh";
  arrowToShowForTable2 =0

}

const adaptSize1ForTable2 = () => {
  title_img_width_for_table_2
      .value="2.24vh";
  title_img_height_for_table_2
      .value= "1.69vw";
  arrowToShowForTable2 =1

}

const clickOnTitleTableActivitesTerminees = (event) =>{
  showTableActivitesTerminees.value=!showTableActivitesTerminees.value
  showTableActivitesTerminees.value===true? adaptSize0ForTable2() :adaptSize1ForTable2()

}

/**FIN implémentaion affichage dynamique tableau*/



let opacity='none' //variable utilisée dans les deux prochaines sections
/**DEBUT IMPLEMENTATION AFFICHAGE DESCRIPTION ET DETAILS D'UNE ACTIVITE*/
/*Le clic sur le nom d'une acivité affiche la description de celle-ci dans la div prevue à cet effet*/
//Cela diminue également l'opacité du composant principal


//opacity; variable pour rendre inaccessible l'interface lorsque le menu détails est affiché


const showDesc= ref(false)
const settingShowDescToFalse = (event) => {
  showDesc.value=false
  opacity="none"
}
const activityName =ref('')
const activityId =ref('')

const clickOnActivityName = (message) => {
  activityId.value=message.id
  activityName.value=message.name
  showDesc.value=true;
  opacity="block"
}

/**FIN IMPLEMENTATION AFFICHAGE DESCRIPTION ET DETAILS D'UNE ACTIVITE*/

/**DEBUT IMPLEMENETATION AFFICHAGE ET MODIFICATION DESCRIPTION*/

const showWrit= ref(false)
const settingShowWritToFalse = (event) => {
  showWrit.value=false
  opacity="none"
}
const activityNameForWriting =ref('')
const activityIdForWriting =ref('')

const clickOnActivityDescription = (message) => {
  activityIdForWriting.value=message.id
  activityNameForWriting.value=message.name
  showWrit.value=true;
  opacity="block"
}



/**FIN IMPLEMENETATION AFFICHAGE ET MODIFICATION DESCRIPTION*/






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
  height: 125vh ;
  width: 100%;
  opacity: 0.80;
  background: #aaa;
  z-index: 10;
  display: v-bind(opacity);
}



</style>