<template>

  <div id="menu_sidebar_red">
    <div id="logo_icone_red">
      <img id="logo_red" src="../../../assets/sidebar/logo_icone/logo_icone.png" alt="logo">
    </div>
    <div id="profil_red">
      <div id="cercle_photo_profil_red">

        <img id="photo_profil_red" src="../../../assets/sidebar/profil/img.png" alt="image profil">

      </div>

    </div>
    <BoutonsMenuReduite></BoutonsMenuReduite>
    <div id="bouton_deconnexion_red">
      <div id="cadre_bouton_deconnexion_red">
        <img id="icone_deconnexion_red"  src="../../../assets/sidebar/bouton_deconnexion/img_bouton_deconnexion.png"
             alt="image bouton deconnexion">
      </div>
    </div>

  </div>

</template>

<script setup>

import BoutonsMenuReduite from "@/components/etudiant/BoutonsMenuReduite.vue";
</script>

<style scoped>

div#menu_sidebar_red{
  position: absolute;
  width: 3.88vw;
  height: 100vh;
  left: 0;
  top: 0;
  background: #283593;

}

div#logo_icone_red{

  position: absolute;
  height: 5.25vh;
  left: 0;
  top: 0;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

}

img#logo_red{
  position: absolute;
  height: 5.25vh;
  left: 0.8vw;
  top: 0.8vh;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

div#profil_red{
  display: flex;
  position: absolute;
  height: 8.68vh;
  top: 25.93vh;

}

div#cercle_photo_profil_red{
  height: 6.72vh;
  width: 6.72vh; ;
  background: #D9D9D9;
  border-radius: 50%;
  margin: auto;

}

img#photo_profil_red{
  margin: 7% 7%;
  height: 5.6vh;


}



div#bouton_deconnexion_red{
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

div#bouton_deconnexion_red:hover{
  background-color: #f3b0b0;
}

div#cadre_bouton_deconnexion_red{
  margin-left: 5%;
  flex: none;
  order: 0;
  flex-grow: 0;
  width: 1.52vw;
  height: 3.36vh;
}

img#icone_deconnexion_red{
  width: 1.52vw;
  height: 3.36vh;
}




</style>