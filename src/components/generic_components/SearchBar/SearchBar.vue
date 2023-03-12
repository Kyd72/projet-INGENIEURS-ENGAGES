<template>
<!--Composant générique de barre de recherche
Le composant renvoie à travers un 'emit' le terme recherché

Cky72
-->


    <div class="search">
      <input type="text" class="searchTerm" placeholder="Rechercher une activité par son nom" v-model="termToFind">
      <button @click="onClickOnSearchButton" type="submit" class="searchButton"/>
    </div>



</template>

<script setup>

const emits=defineEmits(['toSearch'])
import {ref} from "vue";

const termToFind =ref('')


/*Envoyer un event contenant pour message le terme de recherche*/

function onClickOnSearchButton (event){
  emits('toSearch',termToFind.value.toUpperCase())
}

</script>

<style scoped>




.search {
  display: flex;
  position: absolute;
  width: 27.27vw;
  height: 5.93vh;
  right: 4%;
  top: 22.6vh;
}

.searchTerm {

  width:27.27vw;
  height: 3.92vh;
  margin-right: -8vh;
  padding :  0 8vh 0 10px ;


  background: #FFFFFF;
  border-radius: 2vh;
  border: #283593 solid 0.1vh ;
  overflow-x: hidden;





  outline: none;
  color: #1f1f1f;
  font-size: 2vh;

}



.searchButton {

  width: 8.76vw;
  height: 4.3vh;
  border-radius: 2vh;


  background-color:#283593 ;
  background-size: 3.2vh;
  background-image: url("@/assets/searchbar/img_loupe.png")  ;
  background-repeat: no-repeat;
  background-position: center;

  cursor: pointer;

  border: none;
}

.searchButton:active{
  background-color: #1f254b;
}

/*Resize the wrap to see the search bar change!*/


/*
("

 rechercher une activité

position: absolute;
width: 628.42px;
height: 42.07px;
left: 789px;
top: 241px;



 rectangle délimitation barre de recherche

position: absolute;
width: 628.42px;
height: 42.07px;
left: 789px;
top: 241px;

background: #FFFFFF;
box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.15);
border-radius: 12px;


texte barre de recherche

position: absolute;
width: 398.42px;
height: 19.35px;
left: 802.83px;
top: 253.62px;



 Rechercher une activité par son nom, etc.

position: absolute;
width: 398.42px;
height: 19.35px;
left: 802.83px;
top: 253.62px;

font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 15px;
line-height: 22px;

color: rgba(0, 0, 0, 0.5);



bouton loupe rechercher

position: absolute;
width: 201.09px;
height: 42.07px;
left: 1216.32px;
top: 241px;



 rectangle fond loupe




loupe blanche

position: absolute;
width: 25px;
height: 26px;
left: 1312.35px;
top: 250.11px;

background: url(image.png);
")



*/

</style>