<template lang="pug">
div
    v-jumbotron(:color='color' v-if='!dark')
      v-container(fill-height fluid)
        v-layout(align-center)
          v-flex(text-xs-center)
            p(class="display-3") {{highText}}
    v-jumbotron(:color='color' v-if='dark' dark)
      v-container(fill-height fluid) 
        v-layout(align-center) 
          v-flex(text-xs-center)
            p(class="display-3") {{highText}}
            
    v-jumbotron(:color='color' v-if='!dark') 
      v-flex(text-xs-center)
        p(class="display-1" v-if='italic') 
            em {{midText}}
        p(class="display-1" v-if='!italic') {{midText}}
      v-container(fill-height fluid)
        v-layout(align-center)
          v-flex(text-xs-center v-if='!icons') {{bottomText}}
          v-flex(text-xs-center v-if='icons')
            v-icons {{bottomText}}
    v-jumbotron(:color='color' v-if='dark' dark) 
      v-flex(text-xs-center)
        p(class="display-1" v-if='italic') 
            em {{midText}} 
        p(class="display-2" v-if='!italic') {{midText}} 
      v-container(fill-height fluid)
        v-layout(align-center)
          v-flex(text-xs-center v-if='!icons') {{bottomText}}
          v-flex(text-xs-center v-if='icons')
            v-btn(v-for='items in bottomText' :color='color' fab)
                v-icon(large @click='items.path') {{items.name}}
</template>


<script>
export default {
  props: [
    "color",
    "highText",
    "midText",
    "bottomText",
    "dark",
    "icons",
    "italic"
  ],

  methods: {
    action(items) {}
  }
};
</script>

<style>

</style>
