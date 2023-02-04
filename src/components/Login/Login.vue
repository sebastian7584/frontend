<template>
    <div class="container h-100">
		<div class="d-flex justify-content-center h-100">
			<div class="user_card">
				<div class="d-flex justify-content-center">
					<div class="brand_logo_container">
						<img src="data:image/png;base64,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" class="brand_logo" alt="Logo">
					</div>
				</div>
				<div class="d-flex justify-content-center form_container">
					<form>
						<div class="input-group mb-3">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-user"></i></span>
							</div>
							<input type="text" name="" class="form-control input_user" value="" placeholder="username" v-model.trim="form.username">
						</div>
						<div class="input-group mb-2">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-key"></i></span>
							</div>
							<input type="password" name="" class="form-control input_pass" value="" placeholder="password" v-model.trim="form.password">
						</div>
						<div class="form-group">
							<div class="custom-control custom-checkbox">
								<input type="checkbox" class="custom-control-input" id="customControlInline">
								<label class="custom-control-label" for="customControlInline">Remember me</label>
							</div>
						</div>
							<div class="d-flex justify-content-center mt-3 login_container">
				 	<button type="button" name="button" class="btn login_btn" @click="logineo">Login</button>
				   </div>
					</form>
				</div>
		
				<!-- <div class="mt-4">
					<div class="d-flex justify-content-center links">
						Don't have an account? <a href="#" class="ml-2">Sign Up</a>
					</div>
					<div class="d-flex justify-content-center links">
						<a href="#">Forgot your password?</a>
					</div>
				</div> -->
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import router from '../../router'
// import Swal from 'sweetalert2'
import backendRouter from  '../BackendRouter/BackendRouter'


export default{
    data(){
        return{
            form : {
                username:'',
                password:'',
            }
        }
    },
    methods:{
        logineo(){
            const path = backendRouter.data+'users/login'
            const access = {
                'email': this.form.username,
                'password': this.form.password
            }
            axios.post(path, access).then((response)=>{
				this.$cookies.set('jwt', response.data.jwt);
                router.push('/')
            })
            .catch((error)=>{
                // Swal.fire({text:error.response.data.detail, confirmButtonColor:'#E11419'})
				console.log(error.response.data)
            })
        }
    }
}
</script>

<style>
		body,
		html {
			margin: 0;
			padding: 0;
			height: 100%;
			background: #d2d5d6 !important;
		}
		.user_card {
			height: 400px;
			width: 350px;
			margin-top: auto;
			margin-bottom: auto;
			background: #ffff;
			position: relative;
			display: flex;
			justify-content: center;
			flex-direction: column;
			padding: 10px;
			box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
			-webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
			-moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
			border-radius: 5px;

		}
		.brand_logo_container {
			position: absolute;
			height: 170px;
			width: 170px;
			top: -75px;
			border-radius: 50%;
			background: #E11419;
			padding: 10px;
			text-align: center;
		}
		.brand_logo {
			height: 150px;
			width: 150px;
			border-radius: 50%;
			border: 2px solid white;
		}
		.form_container {
			margin-top: 100px;
		}
		.login_btn {
			width: 100%;
			background: #E11419 !important;
			color: white !important;
		}
		.login_btn:focus {
			box-shadow: none !important;
			outline: 0px !important;
		}
		.login_container {
			padding: 0 2rem;
		}
		.input-group-text {
			background: #E11419 !important;
			color: white !important;
			border: 0 !important;
			border-radius: 0.25rem 0 0 0.25rem !important;
		}
		.input_user,
		.input_pass:focus {
			box-shadow: none !important;
			outline: 0px !important;
		}
		.custom-checkbox .custom-control-input:checked~.custom-control-label::before {
			background-color: #E11419 !important;
		}

</style>