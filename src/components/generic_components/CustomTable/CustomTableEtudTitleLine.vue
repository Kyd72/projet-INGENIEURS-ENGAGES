<template>
  <li>
    <img :src="props.image_source" alt="" class="icon-column-name">
    <span :class="props.css_class">{{ props.nom_colomne }}</span>
  </li>
</template>

<script setup>
/* Les propriétés class img, class span sont des v-bind. Elles dépendent de la prop passée à l'appel du composant.
Les valeurs possibles sont "clickable-button,clickable-text
 et non-clickable" pour le span et "icon-column-name" pour l'image */



/*
DEBUT définition des props
image_source pour le lien vers l'image
css_class pour le rendu CSS*/
const props = defineProps(["image_source", "css_class","nom_colomne"])
/*
FIN définition des props
*/

//****************************************************************************************



</script>

<style scoped>

</style>