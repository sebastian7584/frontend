<template>
    <div>
      <b-button v-b-toggle.sidebar-no-header class="menuButton" color="#E11419"> 
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg></b-button>
      <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow>
        <template #default="{ hide }">
          <div class="p-3">
            <h4 id="sidebar-no-header-title">MENU</h4>
            <nav class="mb-3">
              <b-nav vertical>
                <ul class="menu">
                    <br><br>
                    <li @click="menu.controlInterno= !menu.controlInterno">CONTROL INTERNO</li>
                    <ul v-if="menu.controlInterno" class="submenu">
                        <li><a href="control-interno">Actualizar precios prepagos</a></li>
                        <li><a href="control-interno">Actualizar precios postpagos</a></li>
                    </ul>
                    <p style="margin-top: 20px;"></p>
                    <li @click="menu.gestionHumana= !menu.gestionHumana">GESTIÓN HUMANA</li>
                    <ul v-if="menu.gestionHumana" class="submenu">
                        <li>submenu</li>
                    </ul>
                    <p style="margin-top: 20px;"></p>
                    <li @click="menu.contabilidad= !menu.contabilidad">CONTABILIDAD</li>
                    <ul v-if="menu.contabilidad" class="submenu">
                        <li>submenu</li>
                    </ul>
                    <p style="margin-top: 20px;"></p>
                    <li @click="menu.comisiones= !menu.comisiones">COMISIONES</li>
                    <ul v-if="menu.comisiones" class="submenu">
                        <li>submenu</li>
                    </ul>
                    <p style="margin-top: 20px;"></p>
                    <li @click="menu.soporte= !menu.soporte">SOPORTE</li>
                    <ul v-if="menu.soporte" class="submenu">
                        <li>submenu</li>
                    </ul>
                    <p style="margin-top: 20px;"></p>
                    <li @click="menu.auditoria= !menu.auditoria">AUDITORIA</li>
                    <ul v-if="menu.auditoria" class="submenu">
                        <li>submenu</li>
                    </ul>
                    <p style="margin-top: 20px;"></p>
                    <li @click="menu.comercial= !menu.comercial">COMERCIAL</li>
                    <ul v-if="menu.comercial" class="submenu">
                        <li>submenu</li>
                    </ul>
                </ul>
              </b-nav>
            </nav>
            <b-button color="#E11419" class="closeMenu" block @click="hide">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </b-button>
          </div>
        </template>
      </b-sidebar>
    </div>
  </template>


 <script>


export default {
    
  name: 'SidebarMenu',
  data(){
    return{
        menu: {
            controlInterno: false,
            gestionHumana: false,
            contabilidad: false,
            comisiones: false,
            soporte: false,
            auditoria: false,
            comercial: false,
        }
    }
  },
  methods:{
    
  },
  created(){

  } ,
  comments:{


  }

}
 </script>

<style>

.menuButton{
    background-color: #E11419;
    border-color: #E11419;
    position: absolute;
    top: 20px;
    left: 20px;
}

.menu{
    list-style: none;
}

.submenu{
    list-style: none;
    font-size: 15px;
}

.closeMenu{
    background-color: #E11419;
    border-color: #E11419;
    position: absolute;
    bottom: 20px;
    right: 20px;
}

a{
    text-decoration: none;
    color: inherit;
}



</style>