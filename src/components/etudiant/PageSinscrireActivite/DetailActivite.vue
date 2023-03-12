<template>

  <div v-if="props.showed" id="detail-activite">
    <div id="container-titre-activite-with-button-close">
      <span id="titre-activite-in-detailActivite">{{ props.activity_name }}</span>
      <button id="button-close-in-detailActivite" @click="clickOnClose">X</button>
    </div>
    <div id="container-description-activite-with-referent-name-and-bonus">
      <div id="description-activite-in-detailActivite"><p></p></div>
      <div id="container-nom-referent-with-bonus">
        <span id="nom-referent-in-detailActivite">NOM DU REFERENT : </span>
        <span id="bonus-in-detailActivite"> INTERVALLE POINTS :</span>
      </div>

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

const emits=defineEmits(['clickOnClosed'])

/**Fin Définition des events*/

/**Gestion click bouton croix*/
const clickOnClose = (event) => {
  emits('clickOnClosed', "Set showed to false")
}
/**Fin Gestion click bouton croix*/



</script>

<style scoped>

div#detail-activite{

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
}
div#container-titre-activite-with-button-close{
  height: 20%;
  width: 100%;
  display: inline-block;
  margin-top: 3%;
}
span#titre-activite-in-detailActivite{
  display: inline-block;
  margin-left: 5%;
  margin-top: 2%;
  font-size: 2vh;
  font-weight: 1000;
  height: 6vh;
  width: 80%;
  line-height: 2vh;
  overflow: hidden;
}

button#button-close-in-detailActivite{

  border-radius: 1vh;
  background-color: #283593;
  color: #ffffff;
  font-weight: 1000;
  border: none;
  justify-content: center;

  margin-left: 90%;
  cursor: pointer;

}


div#container-description-activite-with-referent-name-and-bonus{
  height: 70%;
  width: 100%;
  display: inline-block;
}

div#description-activite-in-detailActivite{
  display: inline-block;
  height: 75%;
  width: 96%;
  margin: 2%;
  border: #1f1f1f dotted 1px;
  overflow: auto;


}

div#description-activite-in-detailActivite p{
  display: flex;

}

div#container-nom-referent-with-bonus{
  display: inline-flex;
  height: 10%;
  width: 100%;
  overflow: hidden;
}

div#container-nom-referent-with-bonus span{
  font-size: 1.75vh;
  font-weight: 600;
  line-height: 1.75vh;
  color: #545252;
  margin: auto;

}

span#nom-referent-in-detailActivite{
  width: 60%;
  overflow: hidden;
}

span#bonus-in-detailActivite{
  width: 35%;
  overflow: hidden;
}


</style>