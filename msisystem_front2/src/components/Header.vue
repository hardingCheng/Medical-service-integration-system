<template>
  <div>
    <div class="topnav">
          <TopNav />
    </div>
    <Carousels/>
    <Search/>
  </div>
</template>

<script>
import TopNav from '../components/TopNav'
import Carousels from '../components/Carousels'
import Search from '../components/Search'
export default {
  name: "Header",
  props: {
    msg: String
  },
  components: {
    TopNav,
    Carousels,
    Search
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topnav {
  
}
</style>
