<template>

<div id="menu_sidebar">
  <div id="logo_icone">
    <img id="logo" src="../../../assets/sidebar/logo_icone/logo_icone.png" alt="logo">
  </div>
  <div id="profil">
    <div id="cercle_photo_profil">

      <img id="photo_profil" src="../../../assets/sidebar/profil/img.png" alt="image profil">

    </div>
    <span id="nom_prenom">NOM PRENOM</span>

  </div>
  <BoutonsMenu></BoutonsMenu>
  <div id="bouton_deconnexion">
    <div id="cadre_bouton_deconnexion">
      <img id="icone_deconnexion"  src="../../../assets/sidebar/bouton_deconnexion/img_bouton_deconnexion.png"
           alt="image bouton deconnexion">
    </div>
    <span id="texte_bouton_deconnexion">Déconnexion</span>
  </div>

</div>

</template>

<script setup>

import BoutonsMenu from "@/components/etudiant/BoutonsMenu.vue";




</script>

<style scoped>



div#menu_sidebar{
  position: fixed;
  width: 19vw;
  height: 100vh;
  left: 0;
  top: 0;
  background: #283593;

}

div#logo_icone{

  position: absolute;
  height: 5.25vh;
  left: 0;
  top: 0;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

}

img#logo{
  position: absolute;
  height: 5.25vh;
  left: 0.8vw;
  top: 0.8vh;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

div#profil{
  display: flex;
  position: absolute;
  width: 11.07vw;
  height: 8.68vh;
  left: 0.8vw;
  top: 25.93vh;

}

div#cercle_photo_profil{
  height: 6.72vh;
  width: 6.72vh; ;
  background: #D9D9D9;
  border-radius: 50%;
  margin: auto;

}

img#photo_profil{
 margin: 7% 7%;
  height: 5.6vh;


}

span#nom_prenom{
  margin:  auto;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 2vh;
  line-height: 8.68vh;
  align-items: center;
  letter-spacing: -0.002em;
  color: #FFFFFF;

}

div#bouton_deconnexion{
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 0.3vw;
  position: absolute;
  height: 4.5vh;
  width: 90%;
  left: 1.81%;
  right: 90.35%;
  bottom: 5vh;
  border-radius: 1.5vh;
  padding: 1.5vh 0 0;
}

div#bouton_deconnexion:hover{
  background-color: #f3b0b0;
}

div#cadre_bouton_deconnexion{
  margin-left: 5%;
  flex: none;
  order: 0;
  flex-grow: 0;
  width: 1.52vw;
  height: 3.36vh;
}

img#icone_deconnexion{
  width: 1.52vw;
  height: 3.36vh;
}

span#texte_bouton_deconnexion{
  flex: none;
  order: 1;
  flex-grow: 0;
  width: 5.14vw;
  height: 3.36vh;
  font-family: 'Poppins',sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.6vh;
  line-height: 2.52vh;
  display: flex;
  align-items: center;
  color: #D9D9D9;
}


</style>