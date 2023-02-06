<template>
  <div>
    <SidebarMenu />
  </div>
  
</template>

<script>
import SidebarMenu from '../SidebarMenu/SidebarMenu.vue'
import backendRouter from  '../BackendRouter/BackendRouter'

export default {
  name: 'Home',
  components: {
    SidebarMenu
  },
  methods:{
    validate(){
      const path = backendRouter.data+'users/user'
      axios.post(path, {'jwt':this.$cookies.get('jwt')}).then((response)=>{
      })
      .catch((error)=>{
        router.push('/login')
        // Swal.fire({text:error.response.data.detail, confirmButtonColor:'#E11419'})
      })
    }
  },
  created(){
    this.validate()
    //s
    
  }

}
</script>



