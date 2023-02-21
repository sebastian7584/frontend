<template>
  <div>

    <SidebarMenu /> 

    <div class="vld-parent">
                    <loading :active.syn="isLoading" :can-cancel="true"  :is-full-page="fullPage"></loading>
    </div>
    
    <div class="col-md-12" v-if="create==true">
        <v-btn color="#E11419" dark class="mb-2" @click=listaPrepago >Prepago</v-btn>
        <v-btn color="#E11419" dark class="mb-2" @click=listaPostpago >Postpago</v-btn>
        <b-table v-if="items.length>0" striped hover :items="items" :fields="fields">
            <template v-slot:cell(action)="data">
                <b-button size="sm" variant="primary" @click="selectItem(data)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                    </svg>
                </b-button>
                <!-- <b-button size="sm" variant="danger" @click="deleteItem(data)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                    </svg>
                </b-button> -->
                
            </template>
        </b-table>
    </div>


    
    <v-container v-if="create==false">
        <div class="form-group">
            <label for="exampleInputEmail1">Producto</label>
            <input type="text" class="form-control" id="product" aria-describedby="emailHelp" placeholder="Nombre circular" readonly v-model.trim="form.product">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Traduccion</label>
            <input type="text" class="form-control" id="translate" placeholder="Nombre Stok" v-model.trim="form.stok">
        </div>
        <div class="form-check">
            <label><input type="checkbox" class="form-check-input" id="IVA" v-model="checkIva"> IVA</label>
        </div>
        <div class="form-check">
            <label><input type="checkbox" class="form-check-input" id="ACTIVO" v-model="checkActive"> ACTIVO</label>
        </div>
        <v-btn color="#E11419" dark class="mb-2" @click="editTranslate" >CREAR</v-btn>
        <v-btn color="#E11419" dark class="mb-2" @click="create=true" >ATRAS</v-btn>
    </v-container>
  </div>
  </template>
  
  <script>
  import axios from 'axios'
  import router from '../../router'
  import backendRouter from  '../BackendRouter/BackendRouter'
  import SidebarMenu from '../SidebarMenu/SidebarMenu.vue';
  import Loading from 'vue-loading-overlay';
  import 'vue-loading-overlay/dist/vue-loading.css';


  export default{
    data(){
            return{
                
                categoria: '',
                create: true,
                items:[],
                fields:[
                    {key:'id', label:'Nombre'},
                    {key:'stok', label:'Traduccion'},
                    {key:'iva', label:'IVA'},
                    {key:'active', label:'Activo'},
                    {key:'action', label:''},
                    
                ],
                form:{
                    product:'',
                    stok:'',
                    iva:'',
                    active:'',
                },
                isLoading: false,
                fullPage: true,
                checkIva: false,
                checkActive: false
                
            }
        },

    components: {
        SidebarMenu,
        Loading
    },
    methods: {
        validate(){
            const path = backendRouter.data+'users/user'
            axios.post(path, {'jwt':this.$cookies.get('jwt')}).then((response)=>{
                console.log('check')
            })
            .catch((error)=>{
                router.push('/login')
                this.$swal(error.response.data.detail)
            })
        },

        listaPrepago(){
            this.categoria ='translateProducts'
            this.getTranslates()
        },

        listaPostpago(){
            this.categoria ='translateProductsPostpago'
            this.getTranslates()
        },

        deleteItem(data){
            
            this.deleteItemBack(data.item.id)
            // this.$swal({
            //     title: 'Eliminar Item',
            //     text: '¿Esta seguro de eliminar este item ?',
            //     icon:'warning',
            //     showCancelButton: true,
            //     confirmButtonColor: '#3085d6',
            //     cancelButtonColor: '#d33',
            //     confirmButtonText: 'Si, eliminar!',
            //     cancelButtonText: 'Cancelar',
            // }).then((result)=>{
            //     if (result.isConfirmed){
            //         this.deleteItemBack(data.item.id)
            //         this.getTranslates()
            //         this.$swal(
            //             'Eliminado!',
            //             'Se ha eliminado el item',
            //             'success')
            //         }
            //     })
                
        },

        selectItem(data){
            this.form.product = data.item.id
            this.form.stok = data.item.stok
            if (data.item.iva == "1"){ this.checkIva = true}
            else{this,this.checkIva = false}
            if (data.item.active == "1"){ this.checkActive = true}
            else{this,this.checkActive = false}
            this.create=false

        },

        editTranslate(){
            if (this.checkIva){this.form.iva = "1"}
            else{this.form.iva = "0"}
            if (this.checkActive){this.form.active = "1"}
            else{this.form.active = "0"}
            const data = {
                'equipo': this.form.product,
                'stok': this.form.stok,
                'iva' : this.form.iva,
                'active' : this.form.active
            }
            const path = backendRouter.data+this.categoria+'/admin'
            axios.put(path,data).then((response)=>{
                this.getTranslates()
                this.$swal('Item editado')
            })
            .catch((error)=>{
                    this.$swal(error.response.data.detail)
                })

        },

        deleteItemBack(equipo){
            console.log(equipo)
            this.isLoading = true
            const path = backendRouter.data+this.categoria+'/admin'
            const data = {'equipo':equipo}
            axios.delete(path,data ).then((response)=>{
                this.isLoading = false
                this.items = response.data
                this.create=true
                
            })
            .catch((error)=>{
                    this.$swal(error.response.data.detail)
                })

        },

        getTranslates () {
            this.isLoading = true
            const path = backendRouter.data+this.categoria+'/admin'
            axios.get(path).then((response)=>{
                this.isLoading = false
                this.items = response.data
                this.create=true
                
            })
        }
    },
    created(){
        this.validate()
        
    },


  }
  </script>
  
  <style>
  
  </style>
  