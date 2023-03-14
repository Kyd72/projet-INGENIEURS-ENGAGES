<template>

  <div v-if="props.showed" id="writing-description">
    <div id="container-titre-activite-with-button-close">
      <span id="titre-activite-in-writingDescription">{{ props.activity_name }}</span>
      <button title="Supprimer cette activité" id="button-delete-in-writingDescription" class="button-in-WritingDescription" @click="clickOnDelete">
        <img
          src="src/assets/mes_activites/zone_texte_description/img_delete.png" alt=""></button>
      <button title="Fermer" id="button-close-in-writingDescription" class="button-in-WritingDescription" @click="clickOnClose"><img
          src="src/assets/mes_activites/zone_texte_description/img_close.png" alt=""></button>
    </div>
    <div id="container-writing-description-with-referent-name-and-bonus">
      <div id="description-activite-in-writingDescription"><textarea name="written_description" id="description-in-writing-description"
           placeholder="Décrivez les actions menées dans le cadre de cette activité"></textarea></div>

      <button id="button-save-in-writing-description" class="button-in-WritingDescription" @click="clickOnSave" title="Sauvegarder">
        <div>
          <span >SAUVEGARDER</span>
          <img
              src="src/assets/mes_activites/zone_texte_description/img_save.png" alt="">
        </div>

      </button>



    </div>

  </div>

</template>

<script setup>

/**Définition des props*/
//showed : boolean qui détermine si le composant est affiché ou non
//activity_name : nom de l'activité
//activity_id : id de l'activité pour requêtes AJAX

const props=defineProps(['showed', 'activity_name', 'activity_id'])

/**Fin Définition des props*/

/**Définition des events*/

/*Le clic sur le boutton CROIX envoie un event vers le composant père pour faire passer la props showed à false*/

const emits=defineEmits(['clickOnClosed','clickOnSaved','clickOnDeleted'])

/**Fin Définition des events*/

/**Gestion click bouton croix*/
const clickOnClose = (event) => {
  emits('clickOnClosed', "Set showed to false")
}
/**Fin Gestion click bouton croix*/

/**Gestion click bouton delete*/
const clickOnSave = (event) => {
  //TODO FAIRE UNE REQUETE AJAX AVANT DE EMIT
  emits('clickOnSaved', "Set showed to false")
}
/**Fin Gestion click bouton delete*/

/**Gestion click bouton save*/
const clickOnDelete = (event) => {
  // TODO FAIRE UNE REQUETE AJAX AVANT DE EMIT
  emits('clickOnDeleted', "Set showed to false")
}
/**Fin Gestion click bouton save*/



</script>

<style scoped>

div#writing-description{

  font-family: 'Poppins', Poppins , sans-serif;
  position: absolute;
  top : 20%;
  right: 25%;
  height: 60vh;
  width: 40vw;
  border-radius: 2vh;
  background-color: #ffffff;
  border: #1f1f1f solid 1px;
  z-index: 20;
  overflow: auto;
}
div#container-titre-activite-with-button-close{
  width: 100%;
  display: flex;
  margin-top: 3%;
}
span#titre-activite-in-writingDescription{
  display: inline-flex;
  align-items: center;
  margin-left: 5%;
  margin-top: 2%;
  font-size: 2vh;
  font-weight: 1000;
  width: 80%;
  line-height: 2vh;
  overflow: hidden;
}

button.button-in-WritingDescription{
  

  border-radius: 1vh;
  background-color: #283593;
  color: #ffffff;
  font-weight: 1000;
  border: none;
  margin: auto;
  padding: 0.75%;

  cursor: pointer;
  display: inline-flex;
  text-align: center;
  justify-content: center;
  align-items: center;

}

button.button-in-WritingDescription:active{
  background-color: #1f254b;
}

button#button-delete-in-writingDescription{

background-color: #ff4141;
}

button#button-delete-in-writingDescription:active{
  background-color: #be3333;
}

button img{

  height: 2.5vh;
  width: 2.5vh;
}


div#container-writing-description-with-referent-name-and-bonus{
  height: 80%;
  width: 100%;
  display: inline-block;
}

div#description-activite-in-writingDescription{
  display: inline-block;
  height: 90%;
  width: 96%;
  margin: 2%;
  border: #1f1f1f dotted 1px;
  overflow: auto;


}

div#description-activite-in-writingDescription {
  display: flex;
  text-align: center;

}

textarea{
  height: 100%;
  width: 100%;
  font-size: 1.9vh;

}

button#button-save-in-writing-description div{
  display: inline-flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
}

button#button-save-in-writing-description div span{
margin-right: 5%;

}

button#button-save-in-writing-description {
  display:  block;
  margin: auto;
  font-size: 2vh;
}








</style>