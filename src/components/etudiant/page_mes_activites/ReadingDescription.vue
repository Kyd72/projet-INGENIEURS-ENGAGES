<template>

  <div v-if="props.showed" id="reading-description">
    <div id="container-titre-activite-with-button-close">
      <span id="titre-activite-in-readingDescription">{{ titreAct.value }}</span>

<!--  TODO : requête AJAX pour récupérer le nom et la description     -->

      <button title="Fermer" id="button-close-in-readingDescription" class="button-in-ReadingDescription" @click="clickOnClose"><img
          src="src/assets/mes_activites/zone_texte_description/img_close.png" alt=""></button>
    </div>
    <div id="container-reading-description-with-referent-name-and-bonus">
      <div id="description-activite-in-readingDescription"> <p id="description-in-reading-description"> {{t}}</p>

      </div>





    </div>

  </div>

</template>

<script setup>
import {onMounted, ref} from "vue";

/**Définition des props*/
//showed : boolean qui détermine si le composant est affiché ou non
//activity_name : nom de l'activité
//activity_id : id de l'activité pour requêtes AJAX

const props=defineProps(['showed', 'activity_id'])


const t=ref("Victus universis caro ferina est lactisque abundans copia qua sustentantur, et herbae multiplices et siquae alites capi per aucupium possint, et plerosque mos vidimus frumenti usum et vini penitus ignorantes.\n" +
    "\n" +
    "Post hanc adclinis Libano monti Phoenice, regio plena gratiarum et venustatis, urbibus decorata magnis et pulchris; in quibus amoenitate celebritateque nominum Tyros excellit, Sidon et Berytus isdemque pares Emissa et Damascus saeculis condita priscis.\n" +
    "\n" +
    "Raptim igitur properantes ut motus sui rumores celeritate nimia praevenirent, vigore corporum ac levitate confisi per flexuosas semitas ad summitates collium tardius evadebant. et cum superatis difficultatibus arduis ad supercilia venissent fluvii Melanis alti et verticosi, qui pro muro tuetur accolas circumfusus, augente nocte adulta terrorem quievere paulisper lucem opperientes. arbitrabantur enim nullo inpediente transgressi inopino adcursu adposita quaeque vastare, sed in cassum labores pertulere gravissimos.\n" +
    "\n" +
    "Postremo ad id indignitatis est ventum, ut cum peregrini ob formidatam haut ita dudum alimentorum inopiam pellerentur ab urbe praecipites, sectatoribus disciplinarum liberalium inpendio paucis sine respiratione ulla extrusis, tenerentur minimarum adseclae veri, quique id simularunt ad tempus, et tria milia saltatricum ne interpellata quidem cum choris totidemque remanerent magistris.\n" +
    "\n" +
    "Et eodem impetu Domitianum praecipitem per scalas itidem funibus constrinxerunt, eosque coniunctos per ampla spatia civitatis acri raptavere discursu. iamque artuum et membrorum divulsa conpage superscandentes corpora mortuorum ad ultimam truncata deformitatem velut exsaturati mox abiecerunt in flumen.")

/**Fin Définition des props*/


/**Gestion des endpoints pour requête AJAX*/
//Note : les requêtes AJAX ne seront pas centralisées dans un seul fichier js.
//Chaque requête peut modifier différemment le DOM

const serveur ="http://127.0.0.1:8000"
const getActivityTitleAndDescWithId="/ie/activites/"+props.activity_id


/**Fin Gestion des endpoints pour requête AJAX*/

/**Requete Ajax pour remplissage zone description*/

const titreAct=ref('')
const desc=ref('')

function getTitreAndDesc (){
  let fetchOptions = {
    method :"GET"
  }

  const urlToRequest = serveur+getActivityTitleAndDescWithId

  fetch(urlToRequest,fetchOptions).
  then((result)=>{return result.json()}).
  then((dataJson)=>{
    console.log("dataJson)",dataJson)
    desc.value= dataJson.description


  }).catch((error)=>{console.log(error)})

}

onMounted(()=>{getTitreAndDesc()})



/**Fin Requete Ajax pour remplissage zone description*/

/**Définition des events*/

/*Le clic sur le boutton CROIX envoie un event vers le composant père pour faire passer la props showed à false*/

const emits=defineEmits(['clickOnClosed','clickOnSaved','clickOnDeleted'])

/**Fin Définition des events*/

/**Gestion click bouton croix*/
const clickOnClose = (event) => {
  emits('clickOnClosed', "Set showed to false")
}
/**Fin Gestion click bouton croix*/




</script>

<style scoped>

div#reading-description{

  font-family: 'Poppins', Poppins , sans-serif;
  position: absolute;
  top : 35%;
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
span#titre-activite-in-readingDescription{
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

button.button-in-ReadingDescription{


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

button.button-in-ReadingDescription:active{
  background-color: #1f254b;
}

button img{

  height: 2.5vh;
  width: 2.5vh;
}


div#container-reading-description-with-referent-name-and-bonus{
  height: 80%;
  width: 100%;
  display: inline-block;
}

div#description-activite-in-readingDescription{
  display: inline-block;
  height: 90%;
  width: 96%;
  margin: 2%;
  border: #1f1f1f dotted 1px;
  overflow: auto;


}

div#description-activite-in-readingDescription {
  display: flex;
  text-align: center;

}


button#button-save-in-reading-description div{
  display: inline-flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
}

button#button-save-in-reading-description div span{
  margin-right: 5%;

}

p#description-in-reading-description{
  background-color: #ffffff;
  overflow: auto;

  z-index: 20;
}












</style>