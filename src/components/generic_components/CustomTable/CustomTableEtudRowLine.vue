<template>
  <li>

    <span v-if="props.css_class!=='editable-text' " :class="props.css_class">{{props.data}}</span>

    <input v-if="props.css_class==='editable-text' " type="text" name="description" placeholder="Voir description" :class="props.css_class">

  </li>

</template>

<script setup>

/* La propriété class est une v-bind. Elle dépend de la prop passée à l'appel du composant.
Les valeurs possibles sont "clickable-button" ,"clickable-text", "editable_text"
 et "non-clickable" */


/*data pour données à afficher;
* class pour définir le rendu */
const props= defineProps(["data", "css_class", "id"])
</script>

<style scoped>

</style>