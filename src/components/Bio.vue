<template lang="pug">
div
    v-layout(id='header' row wrap) 
        v-flex(class='display-2' xs12 v-for='i in 2' :key='i')
            p 
        v-flex(class='display-3' xs12)
            h2 {{name}}
        v-flex(class='display-1' xs12)
            p {{shortBio}}
        v-flex(class='display-2' xs12 v-for='i in 2' :key='i + 10')
            p
    v-toolbar(:color='color' flat)
        v-spacer
        v-toolbar-items(v-for='items in pages' :key='items.name')
            router-link(:to="items.path") 
                v-btn(flat dark) {{items.name}} 
        v-spacer
</template>


<script>
export default {
    props:['pages'],
  data() {
    return {
      color: "red darken-4",
      name: "KIERAN CUTTING",
      shortBio: "Researcher, activist and theorist",
    };
  }
};
</script>

<style>

</style>
