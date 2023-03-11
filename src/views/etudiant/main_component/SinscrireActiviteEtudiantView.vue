<template>
  <div id="sinscrire_activite">
    <div id="texte_accueil">{{texteAccueil.toUpperCase()}} </div>
  </div>

  <SearchBar @toSearch="eventSearchBar"></SearchBar>

  <div class="container-titre+table" id="sinscrire_activite-container-titre-and-table-1">
    <div @click="clickOnTitleTableActivitesOuvertes" class="container-titre"  id="sinscrire_activite-container-titre-1">
      <img class="directionnal-arrow" id="sinscrire_activite-container-titre-1-directionnal-arrow"
           :src="arrowsImageLinks[arrowToShow]"
           alt="img row down">
      <h1 class="titre" id="sinscrire_activite-intitule-titre-1">ACTIVITE OUVERTES POUR LE SEMESTRE</h1>



    </div>


    <CustomTableEtud v-if="showTableActivitesOuvertes"
                     :array_for_title_row="titleRowTable"
                     :array_for_data_row="dataRowTable"
    />


  </div>

</template>

<script setup>

import {reactive, ref} from "vue";
import SearchBar from "@/components/generic_components/SearchBar/SearchBar.vue";
import CustomTableEtud from "@/components/generic_components/CustomTable/CustomTableEtud.vue";



/*
 Début Gestion du Texte d'accueil affiché en haut de la page
*/
const texteAccueil=ref("S'Inscrire à une Activité")

/*
Fin Gestion Texte d'accueil affiché en haut de la page
*/

//*****************************************************************
/*
DEBUT Simulation données pour tableau --
Cette section permet de comprendre le format des données à
respecter pour le tableau
*/



let data1 =
    {
      id : 1,                                                                    // pour gestion des emits
      un :     {intitule : "ASSOCIATIF", cssclass : "non-clickable"},                //pour colomne REFERENTIEL
      deux :   {intitule : "ORGANISER CONFERENCE", cssclass : "clickable-text"},    //pour colomne NOM DE L'ACTIVITE
      trois :  {intitule : "10-07-2021", cssclass : "non-clickable"},             //pour colomne DATE LIMITE
      quatre : {intitule : "7", cssclass : "non-clickable"},                     //pour colomne
      cinq :   {intitule : "S'INSCRIRE", cssclass : "clickable-button"}
    }
let data2 =
    {
      id : 2,                                                                    // pour gestion des emits
      un :     {intitule : "ASSOCIATIF", cssclass : "non-clickable"},                //pour colomne REFERENTIEL
      deux :   {intitule : "ORGANISER STAGE", cssclass : "clickable-text"},    //pour colomne NOM DE L'ACTIVITE
      trois :  {intitule : "10-07-2021", cssclass : "non-clickable"},             //pour colomne DATE LIMITE
      quatre : {intitule : "7", cssclass : "non-clickable"},                     //pour colomne
      cinq :   {intitule : "S'INSCRIRE", cssclass : "clickable-button"}                //pour colomne



    }

let data3 =
    {
      id : 3,                                                                    // pour gestion des emits
      un :     {intitule : "ASSOCIATIF", cssclass : "non-clickable"},                //pour colomne REFERENTIEL
      deux :   {intitule : "ORGANISER STAGE", cssclass : "clickable-text"},    //pour colomne NOM DE L'ACTIVITE
      trois :  {intitule : "10-07-2021", cssclass : "non-clickable"},             //pour colomne DATE LIMITE
      quatre : {intitule : "7", cssclass : "non-clickable"},                     //pour colomne
      cinq :   {intitule : "S'INSCRIRE", cssclass : "clickable-button"}                //pour colomne



    }

let data4 =
    {
      id : 4,                                                                    // pour gestion des emits
      un :     {intitule : "ASSOCIATIF", cssclass : "non-clickable"},                //pour colomne REFERENTIEL
      deux :   {intitule : "ORGANISER STAGE", cssclass : "clickable-text"},    //pour colomne NOM DE L'ACTIVITE
      trois :  {intitule : "10-07-2021", cssclass : "non-clickable"},             //pour colomne DATE LIMITE
      quatre : {intitule : "7", cssclass : "non-clickable"},                     //pour colomne
      cinq :   {intitule : "S'INSCRIRE", cssclass : "clickable-button"}                //pour colomne



    }

let data5 =
    {
      id : 5,                                                                    // pour gestion des emits
      un :     {intitule : "ASSOCIATIF", cssclass : "non-clickable"},                //pour colomne REFERENTIEL
      deux :   {intitule : "ORGANISER STAGE", cssclass : "clickable-text"},    //pour colomne NOM DE L'ACTIVITE
      trois :  {intitule : "10-07-2021", cssclass : "non-clickable"},             //pour colomne DATE LIMITE
      quatre : {intitule : "7", cssclass : "non-clickable"},                     //pour colomne
      cinq :   {intitule : "S'INSCRIRE", cssclass : "clickable-button"}                //pour colomne



    }

let data6 =
    {
      id : 6,                                                                    // pour gestion des emits
      un :     {intitule : "ASSOCIATIF", cssclass : "non-clickable"},                //pour colomne REFERENTIEL
      deux :   {intitule : "ORGANISER STAGE", cssclass : "clickable-text"},    //pour colomne NOM DE L'ACTIVITE
      trois :  {intitule : "10-07-2021", cssclass : "non-clickable"},             //pour colomne DATE LIMITE
      quatre : {intitule : "7", cssclass : "non-clickable"},                     //pour colomne
      cinq :   {intitule : "S'INSCRIRE", cssclass : "clickable-button"}                //pour colomne



    }

let data7 =
    {
      id : 7,                                                                    // pour gestion des emits
      un :     {intitule : "ASSOCIATIF", cssclass : "non-clickable"},                //pour colomne REFERENTIEL
      deux :   {intitule : "ORGANISER STAGE", cssclass : "clickable-text"},    //pour colomne NOM DE L'ACTIVITE
      trois :  {intitule : "10-07-2021", cssclass : "non-clickable"},             //pour colomne DATE LIMITE
      quatre : {intitule : "7", cssclass : "non-clickable"},                     //pour colomne
      cinq :   {intitule : "S'INSCRIRE", cssclass : "clickable-button"}                //pour colomne



    }

let data8 =
    {
      id : 8,                                                                    // pour gestion des emits
      un :     {intitule : "ASSOCIATIF", cssclass : "non-clickable"},                //pour colomne REFERENTIEL
      deux :   {intitule : "ORGANISER STAGE", cssclass : "clickable-text"},    //pour colomne NOM DE L'ACTIVITE
      trois :  {intitule : "10-07-2021", cssclass : "non-clickable"},             //pour colomne DATE LIMITE
      quatre : {intitule : "7", cssclass : "non-clickable"},                     //pour colomne
      cinq :   {intitule : "S'INSCRIRE", cssclass : "clickable-button"}                //pour colomne



    }

let data9 =
    {
      id : 9,                                                                    // pour gestion des emits
      un :     {intitule : "ASSOCIATIF", cssclass : "non-clickable"},                //pour colomne REFERENTIEL
      deux :   {intitule : "ORGANISER STAGE", cssclass : "clickable-text"},    //pour colomne NOM DE L'ACTIVITE
      trois :  {intitule : "10-07-2021", cssclass : "non-clickable"},             //pour colomne DATE LIMITE
      quatre : {intitule : "7", cssclass : "non-clickable"},                     //pour colomne
      cinq :   {intitule : "S'INSCRIRE", cssclass : "clickable-button"}                //pour colomne



    }

let data10 =
    {
      id : 10,                                                                    // pour gestion des emits
      un :     {intitule : "ASSOCIATIF", cssclass : "non-clickable"},                //pour colomne REFERENTIEL
      deux :   {intitule : "ORGANISER STAGE", cssclass : "clickable-text"},    //pour colomne NOM DE L'ACTIVITE
      trois :  {intitule : "10-07-2021", cssclass : "non-clickable"},             //pour colomne DATE LIMITE
      quatre : {intitule : "7", cssclass : "non-clickable"},                     //pour colomne
      cinq :   {intitule : "S'INSCRIRE", cssclass : "clickable-button"}                //pour colomne



    }

let data11 =
    {
      id : 11,                                                                    // pour gestion des emits
      un :     {intitule : "ASSOCIATIF", cssclass : "non-clickable"},                //pour colomne REFERENTIEL
      deux :   {intitule : "ORGANISER STAGE", cssclass : "clickable-text"},    //pour colomne NOM DE L'ACTIVITE
      trois :  {intitule : "10-07-2021", cssclass : "non-clickable"},             //pour colomne DATE LIMITE
      quatre : {intitule : "7", cssclass : "non-clickable"},                     //pour colomne
      cinq :   {intitule : "S'INSCRIRE", cssclass : "clickable-button"}                //pour colomne



    }

let data12 ={
      id : 12,                                                                    // pour gestion des emits
      un :     {intitule : "ASSOCIATIF", cssclass : "non-clickable"},                //pour colomne REFERENTIEL
      deux :   {intitule : "ORGANISER STAGE", cssclass : "clickable-text"},    //pour colomne NOM DE L'ACTIVITE
      trois :  {intitule : "10-07-2021", cssclass : "non-clickable"},             //pour colomne DATE LIMITE
      quatre : {intitule : "7", cssclass : "non-clickable"},                     //pour colomne
      cinq :   {intitule : "S'INSCRIRE", cssclass : "clickable-button"}                //pour colomne



    }

let data13 ={
      id : 13,                                                                    // pour gestion des emits
      un :     {intitule : "ASSOCIATIF", cssclass : "non-clickable"},                //pour colomne REFERENTIEL
      deux :   {intitule : "ORGANISER STAGE", cssclass : "clickable-text"},    //pour colomne NOM DE L'ACTIVITE
      trois :  {intitule : "10-07-2021", cssclass : "non-clickable"},             //pour colomne DATE LIMITE
      quatre : {intitule : "7", cssclass : "non-clickable"},                     //pour colomne
      cinq :   {intitule : "S'INSCRIRE", cssclass : "clickable-button"}                //pour colomne



    }

let data14 ={
      id : 14,                                                                    // pour gestion des emits
      un :     {intitule : "ASSOCIATIF", cssclass : "non-clickable"},                //pour colomne REFERENTIEL
      deux :   {intitule : "ORGANISER STAGE", cssclass : "clickable-text"},    //pour colomne NOM DE L'ACTIVITE
      trois :  {intitule : "10-07-2021", cssclass : "non-clickable"},             //pour colomne DATE LIMITE
      quatre : {intitule : "7", cssclass : "non-clickable"},                     //pour colomne
      cinq :   {intitule : "S'INSCRIRE", cssclass : "clickable-button"}                //pour colomne



    }
const dataRowTableSimul=  [data1,data2,data3,data4,data5,data6,data7,data8,data9,data10,data11,data12,data13,data14]


/*
FIN Simulation données pour tableau
*/

/* *****************************************************************************************************
 * DEBUT IMPLEMENTATION POUR REMPLISSAGE TABLEAU*/
//Données à afficher dans le tableau
let colomneReferentiel=
    { imgsrc : "src/assets/SinscrireActivite/TableauActivteOuverte/img_referentiel.png",
      cssclass :"non-clickable",
      intitule :"REFERENTIEL"
    }

let colomneActivite=
    { imgsrc : "src/assets/SinscrireActivite/TableauActivteOuverte/img_activite.png",
      cssclass :"non-clickable",
      intitule :"ACTIVITE"
    }

let colomneDateLimite=
    { imgsrc : "src/assets/SinscrireActivite/TableauActivteOuverte/img_date_limite.png",
      cssclass :"non-clickable",
      intitule :"DATE LIMITE"
    }

let colomnePlacesRestantes=
    { imgsrc : "src/assets/SinscrireActivite/TableauActivteOuverte/img_places_restantes.png",
      cssclass :"non-clickable",
      intitule :"PLACES RESTANTES"
    }

let colomneSinscrire=
    { imgsrc : "src/assets/SinscrireActivite/TableauActivteOuverte/img_sinscrire.png",
      cssclass :"non-clickable",
      intitule :"S'INSCRIRE"
    }


let titleRowTable= [colomneReferentiel,colomneActivite,colomneDateLimite,colomnePlacesRestantes, colomneSinscrire]


/**Récupération données par requête AJAX */
//Pas encore implémenté ; sera fait à chaque onMounted
/** Fin Récupération données par requête AJAX */

/**Recopie données reçues par requête AJAX dans une array props pour CustomTable  */
const dataRowTable = reactive([])


dataRowTableSimul.forEach(element=>dataRowTable.push(element)) //sera fait à chaque onMounted



/**Fin Recopie données reçues par requête AJAX dans une array props pour CustomTable  */







/* ******************************************************************************************************
 * FIN IMPLEMENTATION POUR REMPLISSAGE TABLEAU */









/****Les clics sur le titre du tableau doivent pouvoir afficher et masquer ce dernier et doit également changer
la direction de la flèche

DEBUT implémentation
*/

const title_img_width=ref("1.69vw");
const title_img_height= ref ("2.24vh");

const arrowsImageLinks= [
    "src/assets/SinscrireActivite/TitreTableauActiviteOuverte/img_arrow_down.png",
    "src/assets/SinscrireActivite/TitreTableauActiviteOuverte/img_arrow_right.png"]
let arrowToShow=0
const showTableActivitesOuvertes = ref(true)

const adaptSize0 = () => {
  title_img_width.value="1.69vw";
  title_img_height.value= "2.24vh";
  arrowToShow=0

}

const adaptSize1 = () => {
  title_img_width.value="2.24vh";
  title_img_height.value= "1.69vw";
  arrowToShow=1

}

const clickOnTitleTableActivitesOuvertes = (event) =>{
  showTableActivitesOuvertes.value=!showTableActivitesOuvertes.value
  showTableActivitesOuvertes.value===true? adaptSize0() :adaptSize1()

}
/**FIN implémentaion*/


/*
DEBUT Implémentation EVENT search bar

Le clic sur le bouton recherche de la search bar entraîne l'envoi d'un event vers le composant père.
Cet event contient comme message le terme de recherche

Le composant père recherche  ce terme de recherche dans la liste obtenue par requête ajaxactualise la liste en props

*/


function eventSearchBar(message){
  dataRowTable.splice(0)
  dataRowTableSimul.forEach(                                                              //à effectuer sur donnees Ajax
      (element) =>{element.deux.intitule.includes(message)?dataRowTable.push(element): ()=>{} })








}

/*FIN IMPLEMENTATION*/




</script>

<style scoped>

div#sinscrire_activite{
  border: black solid 1px;
  background-color: #E8EAF6;
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
  font-size: 3vh;
  width: 24vw;
  margin: 4% auto;
  font-weight: 750;
}


div#sinscrire_activite-container-titre-and-table-1{
  margin-top: 30vh;
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

img#sinscrire_activite-container-titre-1-directionnal-arrow{
  width: v-bind(title_img_width);
  height: v-bind(title_img_height);
}

h1#sinscrire_activite-intitule-titre-1{
margin-left: 1vw;
}



</style>