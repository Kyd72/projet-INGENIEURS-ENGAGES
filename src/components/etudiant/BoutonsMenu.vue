<template>
  
  <div id="boutons_menu">
    
    <RouterLink style="text-decoration: none; color: inherit;" to="/SinscrireActivite">
    <div id="s_inscrire" class="bouton_menu" :style="route.name === 'SinscrireActivite' ? 'background: #FF8183' : ''">
      <img class="image_bouton" src="../../assets/sidebar/icone_boutons_sidebar/img_s_inscrire.png" alt="image bouton s'inscrire">
      <span class="texte_bouton">S'INSCRIRE A UNE ACTIVITE</span>
    </div>
    </RouterLink>
    <RouterLink style="text-decoration: none; color: inherit;" to="/MesActivites">
    <div id="mes_activites" class="bouton_menu" :style="route.name === 'MesActivites' ? 'background: #FF8183' : ''">
      <img class="image_bouton" src="../../assets/sidebar/icone_boutons_sidebar/image_mes_activites.png" alt=" image bouton mes activités">
      <span class="texte_bouton">MES ACTIVITES</span>
    </div>
    </RouterLink>
    <RouterLink style="text-decoration: none; color: inherit;"  to="/ProposerActivite">
    <div id="proposer_une_activite" class="bouton_menu" :style="route.name === 'ProposerActivite' ? 'background: #FF8183' : ''">
      <img class="image_bouton" src="../../assets/sidebar/icone_boutons_sidebar/image_proposer_une_activite.png" alt="image proposer une activté">
      <span class="texte_bouton">PROPOSER UNE ACTIVITE</span>
    </div>
    </RouterLink>
    <RouterLink style="text-decoration: none; color: inherit;" to="/MesPoints">
    <div id="mes_points" class="bouton_menu" :style="route.name === 'MesPoints' ? 'background: #FF8183' : ''">
      <img class="image_bouton" src="../../assets/sidebar/icone_boutons_sidebar/img_mes_points.png" alt="image bouton mes points">
      <span class="texte_bouton">MES POINTS</span>
    </div>
    </RouterLink>
  </div>

</template>

<script setup>

import {useRoute} from "vue-router";
import {reactive} from "vue";

//-------------------------------------------------------------------
// CHANGER LE BACKGROUND DU BOUTON EN FONCTION DU COMPOSANT


const route= reactive(useRoute())



//-----------------------------------------------------------------


</script>

<style scoped>

/* boutons menu */

div#boutons_menu{
  position: absolute;
  width: 17.25vw;
  height: 31.37vh;
  left: 0.7vw;
  margin-top: 50vh;

}

div.bouton_menu{
  display: flex;

  flex-direction: row;
  align-items: flex-start;
  width: 17.25vw;
  height: 7vh;
  border-radius: 1.5vh;
}

div.bouton_menu:hover{
  background-color: #f3b0b0;
}


img.image_bouton{

  height: 3.36vh;

  margin: auto 0 auto 3%;

}


span.texte_bouton{

  font-family: 'Poppins' , sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 7vh;
  margin-left: 4%;
  overflow: hidden;


  color: #FFFFFF;


}


</style>