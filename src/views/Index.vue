<template>
  <div class="home">
    <Navbar />
    <Herosection />
    <Process />
    <Jobs />
    <Alert />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Herosection from '@/components/Herosection.vue'
import Process from '@/components/Process.vue'
import Jobs from '@/components/Jobs.vue'
import Alert from '@/components/Alert.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Index',
  components:{
    Navbar,
    Herosection,
    Process,
    Jobs,
    Alert,
    Footer
  }
}
</script>
