<template>
  <div id="sinscrire_activite">
    <div id="texte_accueil">{{texteAccueil.toUpperCase()}} </div>
  </div>

  <SearchBar
      @toSearch="eventSearchBar"></SearchBar>

  <div v-if="showNumberSearchResult" id="container-resultat-recherche">Nombre de résultats : {{ dataRowTable.length }}
  <button @click="backToAllData" >AFFICHER TOUT</button>
  </div>

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
                     @clickOnRowData2="clickOnActivityName"
    />


  </div>

  <DetailActivite :showed="showDesc"
                  :activity_name="activityName"
                  :activity_id="activityId"
                  @clickOnClosed="settingShowDescToFalse"></DetailActivite>


  <div id="cover"> </div>

</template>

<script setup>

import {onBeforeMount, onMounted, reactive, ref} from "vue";
import SearchBar from "@/components/generic_components/SearchBar/SearchBar.vue";
import CustomTableEtud from "@/components/generic_components/CustomTable/CustomTableEtud.vue";
import DetailActivite from "@/components/etudiant/PageSinscrireActivite/DetailActivite.vue";

/**Gestion des endpoints pour requête AJAX*/
//Note : les requêtes AJAX ne seront pas centralisées dans un seul fichier js.
//Chaque requête peut modifier différemment le DOM

const serveur ="http://127.0.0.1:8000"
const getAllActivities="/ie/activites/etudiant"


/**Fin Gestion des endpoints pour requête AJAX*/

/* ************************************************************************************************************************
*
*
*
*
*
*
*
*
*
*
*
*
*
*
* ***************************************************************************************************************************/

/**Début Gestion du Texte d'accueil affiché en haut de la page*/
const texteAccueil=ref("S'Inscrire à une Activité")

/**Fin Gestion Texte d'accueil affiché en haut de la page*/

//*****************************************************************
/**DEBUT Simulation données pour tableau --*/
/*
Cette section permet de comprendre le format des données à
respecter pour le tableau
*/
import {dataRowTableSimul} from "@/test_data"



/**FIN Simulation données pour tableau*/

/**DEBUT IMPLEMENTATION POUR REMPLISSAGE TABLEAU ********************************************************************************/

//Définition de l'en-tête du tableau
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

let colomneDateLimiteInscription=
    { imgsrc : "src/assets/SinscrireActivite/TableauActivteOuverte/img_date_limite.png",
      cssclass :"non-clickable",
      intitule :"DATE LIMITE D'INSCRIPTION"
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


let titleRowTable= [colomneReferentiel,colomneActivite,colomneDateLimiteInscription,colomnePlacesRestantes, colomneSinscrire]
//Fin Définition de l'en-tête du tableau

/* Variable pour récupération des données par requête AJAX */
const listeActivitesByPromo = reactive([])
/* Fin Variable pour récupération des données par requête AJAX */


/* Variable pour contenir les données reçues  mises dans un format adapté pour le tableau*/
const listeActivitesByPromoForTable=reactive([])
/* Fin Variable pour contenir les données mises dans un format adapté pour le tableau*/

/*Fonction pour mettre les données reçues dans un format adapté pour le tableau*/
const parsing = (tableauInitial, tablauFinal) => {

  /*


    exemple de Donnée AJAX reçue

    [
  {
    "id": 0,
    "titre": "string",
    "description": "string",
    "note_min": 0,
    "note_max": 0,
    "visible": true,
    "max_participants": 5,
    "date_debut": "2023-03-20",
    "date_fin": "2023-03-20",
    "engagement": {
      "intitule": "string"
    },
    "referent": 0
  }
]




{
    "id": 1,
    "titre": "Organisation de la conférence Ingénieurs Humanistes",
    "description": ".... descr",
    "note_min": 0.1,
    "note_max": 0.15,
    "visible": true,
    "max_participants": 5,
    "date_debut": "2023-03-13",
    "date_fin": "2023-06-30",
    "engagement": {
      "intitule": "Ecole"
    },
    "referent": {
      "last_name": "DEFOSSEZ",
      "first_name": "Adrien"
    }
  },
  FORMAT DE DESINATION
  let data6 =
    {
      id : 6,                                                                    // pour gestion des emits
      un :     {intitule : "ASSOCIATIF", cssclass : "non-clickable"},                //pour colomne REFERENTIEL
      deux :   {intitule : "ORGANISER STAGE", cssclass : "clickable-text"},    //pour colomne NOM DE L'ACTIVITE
      trois :  {intitule : "10-07-2021", cssclass : "non-clickable"},             //pour colomne DATE LIMITE
      quatre : {intitule : "7", cssclass : "non-clickable"},                     //pour colomne
      cinq :   {intitule : "S'INSCRIRE", cssclass : "clickable-button"}                //pour colomne



    }*/

  tableauInitial.forEach((activite)=>{
    tablauFinal.push(
        {
          id: activite.id,
          un: {intitule: activite.engagement.intitule, cssclass: "non-clickable"},
          deux: {intitule: activite.titre, cssclass: "clickable-text"},
          trois: {intitule: activite.date_fin, cssclass: "non-clickable"},
          quatre: {intitule: activite.max_participants, cssclass: "non-clickable"},
          cinq: {intitule: "S'INSCRIRE", cssclass: "clickable-button"}
        }
    )
  })

  console.log(tablauFinal)
}
/* Fin Fonction pour mettre les données reçues dans un format adapté pour le tableau*/

/* Variable pour recopier les données au format tableau  */
// Recopie nécessaire pour effectuer les recherches, car les recherches sont locales
const dataRowTable = reactive([])
/* Fin Variable pour recopier les données au format tableau  */

/* Fonction pour récupérer les données par requête AJAX, les mettre au bon format et les recopier dans le tableau */
function getActivitesByPromo (idPromo, tableauInitial, tableauFinal, tableauFinalBis){


  let fetchOptions = {
    method :"GET",
    credentials: 'include',
    withCredentials:true
  }


  const urlToRequest = "http://127.0.0.1:8000/ie/activites/etudiant"

  fetch(urlToRequest,fetchOptions).
  then((result)=>{return result.json()}).
  then((dataJson)=>{
    console.log(dataJson)

    tableauInitial.splice(0)
    dataJson.forEach((activite)=>{tableauInitial.push(activite)})
    parsing(tableauInitial,tableauFinal)
    /*Debut Recopie données reçues par requête AJAX dans une array props pour CustomTable  */
    tableauFinal.forEach(element=>tableauFinalBis.push(element)) //sera fait à chaque onMounted ou à chaque clic sur AFFICHER TOUT
    /*Fin Recopie données reçues par requête AJAX dans une array props pour CustomTable  */


  }).catch((error)=>{
    console.log(error)
  }
  )

}
/* Fin Fonction pour récupérer les données par requête AJAX, les mettre au bon format et les recopier dans le tableau*/


/**FIN IMPLEMENTATION POUR REMPLISSAGE TABLEAU**************************************************/


/**DEFINITION DU COMPORTEMENT ON MOUNTED*/

onMounted(()=>{
  dataRowTableSimul.forEach(element=>dataRowTable.push(element)) //sera fait à chaque onMounted ou à chaque clic sur AFFICHER TOUT
  //getActivitesByPromo(1, listeActivitesByPromo, listeActivitesByPromoForTable, dataRowTable);
})




/**FIN DEFINITION DU COMPORTEMENT ON MOUNTED*/






/****DEBUT implémentation affichage dynamique tableau*/
/*Les clics sur le titre du tableau doivent pouvoir afficher et masquer ce dernier et doit également changer
la direction de la flèche


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
/**FIN implémentaion affichage dynamique tableau*/


/**DEBUT Implémentation EVENT search bar*/
/*

Le clic sur le bouton recherche de la search bar entraîne l'envoi d'un event vers le composant père.
Cet event contient comme message le terme de recherche

Le composant père recherche ce terme de recherche dans la liste obtenue par requête ajax et actualise la liste en props

Le clic sur le boutton AFFICHER TOUT recharge toutes les activités disponibles

*/

const showNumberSearchResult= ref(false)
function eventSearchBar(message){
  dataRowTable.splice(0)
  listeActivitesByPromoForTable.forEach(
      (element) =>{element.deux.intitule.toUpperCase().includes(message)?dataRowTable.push(element): ()=>{} })
  showNumberSearchResult.value=true

}

function backToAllData(event){
  dataRowTable.splice(0)
  listeActivitesByPromoForTable.forEach(element=>dataRowTable.push(element))//
  showNumberSearchResult.value=false

}

/**FIN IMPLEMENTATION  EVENT search bar*/

/**DEBUT IMPLEMENTATION AFFICHAGE DESCRIPTION ET DETAILS D'UNE ACTIVITE*/
/*Le clic sur le nom d'une acivité affiche la description de celle-ci dans la div prevue à cet effet*/
//Cela diminue également l'opacité du composant principal


//opacity; variable pour rendre inaccessible l'interface lorsque le menu détails est affiché
let opacity='none'

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

/**DEBUT IMPLEMENTATION CLIC BOUTON S'INSCRIRE */
//L'inscription à une activité effectuera une requête http de type POST

let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
const fetchOptions = {
  method: "POST",
  headers: myHeaders,
  body: JSON.stringify("livreSansID"),
};


const urlToRequest ="https://webmmi.iut-tlse3.fr/~pecatte/librairies/public/1/livres"



/**FIN IMPLEMENTATION CLIC BOUTON S'INSCRIRE */






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
  margin-top: 5%;
  margin-left: 26vw;
  font-weight: 750;

}


div#sinscrire_activite-container-titre-and-table-1{

  margin-top: 38vh;
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

div#container-resultat-recherche{

  display: inline-flex;


  font-family: 'Poppins', Poppins , sans-serif;
  font-style: italic;
  font-size: 2.2vh;
  position: absolute;
  top:30vh;
  right: 30%;





}

div#container-resultat-recherche button {
  margin-left: 3vh;
  border-radius: 1vh;
  background-color: #283593;
  color: #FFFFFF;
  border: none;
  cursor: pointer;



}

div#container-resultat-recherche button:active{
  background-color: #1f254b;


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