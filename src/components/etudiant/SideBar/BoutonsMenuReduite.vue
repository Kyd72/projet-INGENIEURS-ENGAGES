<template>
  <div id="boutons_menu_red">
    <div id="s_inscrire_red" class="bouton_menu_red">
      <img class="image_bouton_red" src="../../../assets/sidebar/icone_boutons_sidebar/img_s_inscrire.png" alt="image bouton s'inscrire">
    </div>
    <div id="mes_activites_red" class="bouton_menu_red">
      <img class="image_bouton_red" src="../../../assets/sidebar/icone_boutons_sidebar/image_mes_activites.png" alt=" image bouton mes activités">
    </div>
    <div id="proposer_une_activite_red" class="bouton_menu_red">
      <img class="image_bouton_red" src="../../../assets/sidebar/icone_boutons_sidebar/image_proposer_une_activite.png" alt="image proposer une activté">
    </div>
    <div id="mes_points_red" class="bouton_menu_red">
      <img class="image_bouton_red" src="../../../assets/sidebar/icone_boutons_sidebar/img_mes_points.png" alt="image bouton mes points">
    </div>

  </div>

</template>

<script setup>

</script>

<style scoped>

/* boutons menu */

div#boutons_menu_red{
  position: absolute;
  width: 2.5vw;
  height: 31.37vh;
  left: 0.7vw;
  margin-top: 50vh;

}

div.bouton_menu_red{
  display: flex;

  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  height: 7vh;
  border-radius: 1.5vh;
}




img.image_bouton_red{

  height: 3.36vh;

  margin: auto 0 auto 3%;

}




</style>