<template>
<!--Composant générique de barre de recherche
Le composant renvoie à travers un 'emit' le terme recherché

Cky72
-->


    <div class="search">
      <input type="text" class="searchTerm" placeholder="Rechercher une activité par son nom, etc.">
      <button type="submit" class="searchButton"/>
    </div>



</template>

<script setup>

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


  background: #FFFFFF;
  border-radius: 12px;
  border: #283593 solid 1px ;





  outline: none;
  color: #1f1f1f;
  font-size: 2vh;

}



.searchButton {

  width: 8.76vw;
  height: 4.33vh;
  border-radius: 12px;


  background-color:#283593 ;
  background-size: 3.2vh;
  background-image: url("src/assets/searchbar/img_loupe.png")  ;
  background-repeat: no-repeat;
  background-position: center;

  border: none;
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