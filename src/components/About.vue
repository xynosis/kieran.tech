<template lang="pug">
v-container(fluid)
  v-layout(class='generic')
      v-spacer
      v-flex(xs10 s10 md8 lg6 xl4) 
          br
          br
          p {{about}}
      v-spacer
  //- v-layout(id='buttons' hidden-xs-and-up)
  //-     v-spacer
  //-     v-flex(lg6)
  //-       v-btn(large flat :href='"mailto:" + email')
  //-         i(class="fas fa-envelope fa-4x")
  //-       v-btn(flat disabled)
  //-       v-btn(large flat :href='twitter')
  //-         i(class="fab fa-twitter fa-4x")
  //-       v-btn(flat disabled)
  //-       v-btn(large flat :href='github')
  //-         i(class="fab fa-github fa-4x" )
  //-     v-spacer
      //- <i class="fab fa-github fa-4x"></i>
</template>


<script>
export default {
  data() {
    return {
      email: 'k.l.cutting2@ncl.ac.uk',
      twitter: 'http://twitter.com/kierancutting',
      github: 'http://github.com/xynosis',
      about:
        "I am an MRes/PhD student in Digital Civics at Open Lab, Newcastle University, with a background in interdisciplinary social sciences and philosophy. In the past, my research has focused on different ways to understand actively resist neoliberal structures in society, and in my MRes and PhD at Open Lab I continue this work in a digital context. At present, I am working with Youth Homeless North East, a charity who advocate for youth-led change on homelessness policy in the North East of the United Kingdom, on designing and developing a platform for digital peer support for young homeless people. It's looking like it's going to be a game, so I'm pretty excited."
    };
  }
};
</script>

<style>
#buttons{
  text-align: center;
  justify-content: center;
}
</style>
