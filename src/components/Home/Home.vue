<template>
  <div>
    <SidebarMenu />
    <div class="vld-parent">
      <loading :active.syn="isLoading" :can-cancel="true"  :is-full-page="fullPage"></loading>
    </div>
  </div>
  
</template>

<script>
import axios from 'axios'
import router from '../../router'
import SidebarMenu from '../SidebarMenu/SidebarMenu.vue'
import backendRouter from  '../BackendRouter/BackendRouter'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  name: 'Home',
  data() {
    return {
      isLoading: true,
      fullPage: true
    }
  },
  components: {
    SidebarMenu,
    Loading
  },
  methods:{
    validate(){
      const path = backendRouter.data+'users/user'
      axios.post(path, {'jwt':this.$cookies.get('jwt')}).then((response)=>{
        this.isLoading = false
      })
      .catch((error)=>{
        router.push('/login')
        this.$swal(error.response.data.detail)
      })
    }
  },
  created(){
    this.validate()
    
  }

}
</script>



