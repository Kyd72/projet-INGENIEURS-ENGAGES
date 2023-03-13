<template>

  <div class="wrapper">
    <!-- Row title -->
    <div class="title">
      <ul>
        <CustomTableEtudTitleLine
            v-for="(nom_c, index) in props.array_for_title_row" :key=[nom_c.imgsrc]
            :image_source="props.array_for_title_row[index].imgsrc"
            :css_class="props.array_for_title_row[index].cssclass"
            :nom_colomne="props.array_for_title_row[index].intitule"
        />


<!--
        <li> <img src="src/assets/searchbar/img_loupe.png" alt="" class="icon-column-name"> <span class="clickable-button">Sport</span> </li>
-->
      </ul>
    </div>
    <!-- Row  -->
    <div class="row-fadeIn-wrapper"
         v-for="(data, index) in props.array_for_data_row" :key=[index]
    >
      <article class="row fadeIn nfl">
        <ul>
          <CustomTableEtudRowLine
              v-if="props.array_for_data_row[index].un!=null"
              :data="props.array_for_data_row[index].un.intitule"
              :css_class="props.array_for_data_row[index].un.cssclass"
          />
          <CustomTableEtudRowLine @click="(event) => {
          let messageFromRow2= {id: data.id, name :data.deux.intitule}
          onClickOnRowData2(messageFromRow2)}"
              v-if="props.array_for_data_row[index].deux!=null"
              :data="props.array_for_data_row[index].deux.intitule"
              :css_class="props.array_for_data_row[index].deux.cssclass"
          />
          <CustomTableEtudRowLine
              v-if="props.array_for_data_row[index].trois!=null"
              :data="props.array_for_data_row[index].trois.intitule"
              :css_class="props.array_for_data_row[index].trois.cssclass"
          />
          <CustomTableEtudRowLine
              v-if="props.array_for_data_row[index].quatre!=null"
              :data="props.array_for_data_row[index].quatre.intitule"
              :css_class="props.array_for_data_row[index].quatre.cssclass"
          />
          <CustomTableEtudRowLine
              v-if="props.array_for_data_row[index].cinq!=null"
              :data="props.array_for_data_row[index].cinq.intitule"
              :css_class="props.array_for_data_row[index].cinq.cssclass"
          />
          <CustomTableEtudRowLine
              v-if="props.array_for_data_row[index].six!=null"
              :data="props.array_for_data_row[index].six.intitule"
              :css_class="props.array_for_data_row[index].six.cssclass"
          />
          <CustomTableEtudRowLine
              v-if="props.array_for_data_row[index].sept!=null"
              :data="props.array_for_data_row[index].sept.intitule"
              :css_class="props.array_for_data_row[index].sept.cssclass"
          />
<!--          <li><span class="clickable-text">(fadeIn)</span></li>
          <li><span class="non-clickable">(fadeIn)</span></li>
          <li><span class="non-clickable">(fadeIn)</span></li>
          <li><span class="clickable-button">(fadeIn)</span></li>-->
        </ul>
<!--        <ul class="more-content">
          <li>This 1665-player contest boasts a $300,000.00 prize pool and pays out the top 300 finishing positions. First place wins $100,000.00. Good luck!
            This 1665-player contest boasts a $300,000.00 prize pool and pays out the top 300 finishing positions. First place wins $100,000.00. Good luck!
            This 1665-player contest boasts a $300,000.00 prize pool and pays out the top 300 finishing positions. First place wins $100,000.00. Good luck!</li>
        </ul>-->
      </article>
    </div>





  </div>



</template>

<script setup>

import CustomTableEtudTitleLine from "@/components/generic_components/CustomTable/CustomTableEtudTitleLine.vue";
import CustomTableEtudRowLine from "@/components/generic_components/CustomTable/CustomTableEtudRowLine.vue";

/**Définition des props*/
/*array_for_title_row contient des objets json. Chaque objet a pour propriété le nom de la colomne,
 le lien pour l'image et la class CSS

 array_for_data_row contient des objets json. Chaque objet a pour propriété l'ensemble des valeurs correspondant aux différentes colonne (dans
    l'ordre). La class CSS est définie individuellement

    Un élément de array_for_title_row aura la structure json suivante :
    {imgsrc : "https//lien/lien/.com",
     cssclass : "non-clickable",
     intitule :"Date Limite"
    }

    Un élément de array_for_data_row aura la structure json suivante :
    {
      id : 123456789                                                             // pour gestion des emits
      un : {intitule : "ASSOCIATIF", cssclass : "non-clickable"},                 //pour colomne REFERENTIEL
     deux : {intitule : "Organiser Conférence", cssclass : "non-clickable"},    //pour colomne NOM DE L'ACTIVITE
     trois : {intitule : "10-07-2021", cssclass : "non-clickable"},             //pour colomne DATE LIMITE
     quatre : {intitule : "7", cssclass : "non-clickable"},                     //pour colomne
     cinq : {intitule : "S'INSCRIRE", cssclass : "clickable"},                       //pour colomne
     six : {intitule : " ", cssclass : "non-clickable"},                         //pour colomne
     sept : {intitule : " ", cssclass : "non-clickable"},                       //pour colomne


     Un tableau ne peut avoir que sept colomnes au maximum

    }


 */
const props=defineProps(["array_for_title_row", "array_for_data_row"])
/** Fin Définition des props*/

/**DEBUT Gestion dynamique de la largeur des span titre et lignes et taille caractère*/
/*
(75/nbre d'éléments)-7
*/
const titleSpanWidth= (85/(props.array_for_title_row.length))-7+"vw"
const fontSizeRow=props.array_for_title_row.length>=7?"1.4vh":"1.7vh"
const fontSizeTitle=props.array_for_title_row.length>=7?"1.4vh":props.array_for_title_row.length<=5?"2vh":"1.8vh"
/**FIN Gestion dynamique de la largeur des span titre et lignes*/


/**DEBUT Gestion des emits -- */
const emits=defineEmits(['clickOnRowData1','clickOnRowData2'
  ,'clickOnRowData3','clickOnRowData4',
  'clickOnRowData5','clickOnRowData6',
  'clickOnRowData7'])

/*emit de l'activité cliquée pour affichage de la description*/

function onClickOnRowData2 (message) {
  emits('clickOnRowData2', message)
}



/* fin de l'emit de l'activité cliquée pour affichage de la description*/
/**FIN Gestion des emits--*/

</script>

<style >

/* links */
.nfl a {
  text-decoration: none;
  transition: color 0.2s ease-out;
}



/* wrapper */
.wrapper {
  position: relative;
  width: 1fr;
  height: 45vh;
  padding: 2vh 0;
  color: rgb(0,0,0);
  overflow: auto;

}

/* rows ; */
.row{
  padding: 2.8vh 0;
  height: 4.2vh;
  font-size: 0;
  overflow: hidden;
  transition: all 0.2s ease-out;
}
.row:hover {
  background-color: rgb(255, 255, 255);
  height: 7vh;
  border-radius: 2vh;
}
.row ul, .title ul {
  margin: 0;
  padding: 0;
  display: flex;
  width: 100%;
}
.row ul li{
  font-weight: 500;
  font-family: 'Poppins', Poppins , sans-serif;
  list-style: none;
  display: flex;
  margin: auto;
  box-sizing: border-box;

  height: 8vh;
  width: v-bind(titleSpanWidth); /*A mettre dans un V-bind 75 ; ; (75/nbre d'éléments)-7 == v-bind(titleSpanWidth) */
  overflow: hidden;
  text-align: center;
}





/*@media only screen and (max-width: 767px) and (min-width: 480px) {
  .row ul li {
    font-size: 13px;
  }
}*/
/*@media only screen and (max-width: 479px) {
  .row ul li {
    font-size: 13px;
  }
}*/



.row-fadeIn-wrapper ul li span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 3vh;
  width: 100%;
  overflow: hidden;
  padding: 0;
  font-weight: 500;
  font-family: 'Poppins', Poppins , sans-serif;
  font-size: v-bind(fontSizeRow);
  line-height: v-bind(fontSizeRow);
}



.row-fadeIn-wrapper {
  opacity: 0;
  font-size: 0;
  height: 0;
  position: relative;
  transition: all 0.2s ease-out;
  animation: fadeIn 0.4s ease-out 0.2s 1 alternate;
  animation-fill-mode: forwards;
  border-radius: 2vh;
  margin-bottom: 1vh;
}

.row-fadeIn-wrapper:hover{
  margin-bottom: 4.6vh;
}

.row ul li .clickable-button {
  background-color: #283593; /*bleu ISIS*/
  border-radius: 2vh;
  color: #FFFFFF;
  cursor: pointer;
  height: 4vh;
}

.row ul li .clickable-text {

  text-decoration-line: underline;
  cursor: pointer;
  color: #5480f5;

}

.row ul li .editable-text {

  overflow: hidden;
  height: 50%;
  width: 90%;

}


.fadeIn {
  padding: 2.8vh 0;
  font-size: 0;
  position: absolute;
  transition: all 0.2s ease-out;
  width: 100%;
}


.nfl:hover {
  border-left: 3px solid rgb(40, 53, 147);
}
/*@media only screen and (max-width: 767px) {
  .row:hover {
    height: 85px;
  }
}*/
/*@media only screen and (max-width: 359px) {
  .row:hover {
    height: 105px;
  }
}*/

/*TITLE*/
.title {
  position: relative ;

  height: 10vh;
  width: 100%;
  background-color: #FFFFFF;
  border-radius: 2vh;
  margin-bottom: 1vh;

}

.title ul {
  height: 100%;
  display: inline-flex;
  overflow: hidden;
  margin: auto 3%;


}

.title ul li {

  display: inline-flex;
  margin: auto;
  align-items: center; /*alignement vertical*/
  justify-content: center;/*alignement horizontal*/



}

.title ul li span {
  display: inline-flex;
  align-items: center; /*alignement vertical*/
  height: 4vh;
  width: v-bind(titleSpanWidth);
  overflow: hidden;
  padding: 0;
  font-weight: 1000;
  font-family: 'Poppins', Poppins , sans-serif;
  font-size: v-bind(fontSizeTitle);/*A mettre dans un V-bind */
  line-height: v-bind(fontSizeTitle);/*A mettre dans un V-bind*/


}

.title ul li .clickable-button {
  background-color: #283593; /*bleu ISIS*/
  border-radius: 2vh;
  color: #FFFFFF;
  cursor: pointer;
}

.title ul li .clickable-text {
  text-decoration-line: underline;
  color: #5480f5;
  cursor: pointer;
}

img.icon-column-name{
  height: 4vh;
  width: 4vh;
  margin-right: 2%;


}









/*@media only screen and (max-width: 767px) {
  .title-hide {
    display: none;
  }
}*/




/* row one - fadeIn */





/* more content */
/*ul.more-content li {
  position: relative;
  top: 2vh;
  font-size: 2vh;
  margin: 0;
  padding: 1vh 1vh;
  display: block;
  height: 10vh;
  width: 100%;
  color: rgba(128, 128, 128, 0.9);
}*/

/* keyframe animations */
@keyframes fadeIn {
  from {
    background: rgba(255, 255, 255, 0.1);
    opacity: 0;
    padding: 0;
  }
  to {
    background: rgba(51, 51, 51, 0.1);
    opacity: 1;
    padding: 0 0 9vh 0;
  }
}


</style>