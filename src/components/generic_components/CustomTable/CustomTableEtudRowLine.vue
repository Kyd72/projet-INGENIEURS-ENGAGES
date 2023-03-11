<template>
  <li><span :class="props.css_class">{{props.data}}</span></li>
</template>

<script setup>

/* La propriété class est une v-bind. Elle dépend de la prop passée à l'appel du composant.
Les valeurs possibles sont "clickable-button" ,"clickable-text"
 et "non-clickable" */


/*data pour données à afficher;
* class pour définir le rendu */
const props= defineProps(["data", "css_class"])
</script>

<style scoped>

</style>