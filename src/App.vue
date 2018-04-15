 <template lang="pug">
 v-app 
  v-content
    bio(:pages='pages')
    router-view
    
  
   
        
    //- v-footer(:fixed="fixed" app)
    
</template>

<script>
import About from "./components/About.vue";
import Bio from "./components/Bio.vue";
export default {
  data() {
    return {
      // about: false,
      // thoughts: false,
      // projects: false,
      // papers: false
      pages: [
        { name: "about", path: "/" },
        { name: "thoughts", path: "/thoughts" },
        { name: "projects", path: "/projects" },
        { name: "papers", path: "/papers" }
      ]
      // icons: [
      //   { name: "email", path: "mailto:k.l.cutting2@ncl.ac.uk" },
      //   { name: "create", path: "" },
      //   { name: "crop_din", path: "" }
      // ],
    };
  },
  components: {
    About,
    Bio
  },

  name: "App"
};
</script>

<style>
#header {
  background: #b71c1c;
  color: #ffffff;
  text-shadow: 10px 10px 10px black;
  justify-content: center;
  text-align: center;
}
.generic p {
  font-size: 16pt;
  color: #000000;
  text-align: justify;
  margin-top: 50px;
  margin-bottom: 50px;
  margin-right: 100px;
  margin-left: 100px;
}
</style>
