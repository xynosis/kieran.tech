<template lang="pug">
v-layout(class='generic')
    v-flex(xs3)
    v-flex(xs6) 
        p {{about}}
    v-flex(xs3)
</template>


<script>
export default {
  data() {
    return {
      about:
        "I am an MRes/PhD student in Digital Civics at Open Lab, Newcastle University, with a background in interdisciplinary social sciences and philosophy. In the past, my research has focused on different ways to understand actively resist neoliberal structures in society, and in my MRes and PhD at Open Lab I continue this work in a digital context. At present, I am working with Youth Homeless North East, a charity who advocate for youth-led change on homelessness policy in the North East of the United Kingdom, on designing and developing a platform for digital peer support for young homeless people. It's looking like it's going to be a game, so I'm pretty excited."
    };
  }
};
</script>

<style>

</style>
