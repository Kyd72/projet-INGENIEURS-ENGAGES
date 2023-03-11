<template>
  <div id="sinscrire_activite">
    <div id="texte_accueil">{{texteAccueil.toUpperCase()}} </div>
  </div>

  <SearchBar></SearchBar>
  <CustomTableEtud style="margin-top: 30vh"
  :array_for_title_row="titleRowTable"
  :array_for_data_row="dataRowTable"
  />
</template>

<script setup>

import {ref} from "vue";
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


    let dataRowTable= [data1,data2]


/*
FIN Simulation données pour tableau
*/


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

</style>