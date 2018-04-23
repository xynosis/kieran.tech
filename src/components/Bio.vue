<template lang="pug">
div
    v-layout(id='header' row wrap) 
        v-flex(class='display-2' xs12 v-for='i in 2' :key='i')
            p 
        v-flex(class='display-3' xs12 hidden-xs-only)
            h2 {{firstName}} {{lastName}}
        v-flex(class='display-2' xs12 hidden-sm-and-up)
            h3 {{firstName}}
            h3 {{lastName}}
        v-flex(class='display-2' xs12 v-for='i in 2' :key='i + 20' hidden-sm-and-up)
            p
        v-flex(class='display-1' xs12)
            p {{shortBio}}
        v-flex(class='display-2' xs12 v-for='i in 2' :key='i + 10')
            p
    v-layout(id='header' flat)
        p(v-for='items in pages' :key='items.name' hidden-xs-only) 
            v-btn(:to="items.path" large flat dark ) {{items.name}} 
        //- p(hidden-sm-and-up) 
        //-     v-menu
        //-         v-btn(flat dark slot='activator' hidden-sm-and-up) Pages
        //-         v-list(hidden-sm-and-up)
        //-             v-list-tile(v-for='items in pages' :key='items.name')
        //-                 v-list-tile-title {{items.name}}
       

</template>


<script>
export default {
    props:['pages'],
  data() {
    return {
      color: "red darken-4",
      firstName: "KIERAN",
      lastName: "CUTTING",
      shortBio: "Researcher, activist and theorist",
    };
  }
};
</script>

<style>

</style>
