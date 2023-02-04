<template>
  <div class="container h-100">
    <b-button v-b-toggle.sidebar-no-header>{{MenuName}}</b-button>
    <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow>
      <template #default="{ hide }">
        <div class="p-3">
          <h4 id="sidebar-no-header-title">Menu</h4>
            <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item active @click="hide">Cerrar Menu</b-nav-item>
              <b-nav-item href="control-interno" @click="hide">Control interno</b-nav-item>
              <b-nav-item href="#link-2" @click="hide">Otra area</b-nav-item>
              <b-nav-item href="#link-2" @click="hide">Otra area</b-nav-item>
              <b-nav-item href="#link-2" @click="hide">Otra area</b-nav-item>
              <b-nav-item href="login" @click="hide">Cerrar sesion</b-nav-item>
            </b-nav>
          </nav>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script src="https://unpkg.com/vue-cookies@1.5.12/vue-cookies.js"></script>
<script>
import axios from 'axios'
// import Swal from 'sweetalert2'
import router from '../../router'
import backendRouter from  '../BackendRouter/BackendRouter'

export default{
  data(){
    return{
      MenuName : 'Menu'
    }
    
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
    // this.validate()
    
  }
}
</script>

<style>
ul{
  list-style: none;
  justify-content: start;
  position:absolute;
}

a {
  text-decoration: none;
  color: black;
}
</style>