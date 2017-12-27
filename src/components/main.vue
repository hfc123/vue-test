<template>
<div>
<v-head titles="123" @showmenu1="showmenu12"></v-head>
 <router-view/>
<v-footer></v-footer>
<v-menu :show="show" ></v-menu>
	
</div>

</template>

<script>
	
	import vMenu from '@/components/menu/menu.vue'
	import vHead from '@/components/head/head.vue'
	import vFooter from '@/components/footer/footer.vue'
	export default{
		name : 'v-main',
		components:{	
			vMenu,
			vHead,
			vFooter
		},
		data(){
			return {
				show:false
			}
		},
		methods:{
			 showmenu12(ss){
			 	console.log('123'+ss);
			 	if(this.show){
			 		this.show=false;
			 	}else{
			 		this.show=true;
			 	}
			 	
			console.log(this.show);
			}
		}
		
	}
	
</script>

<style>
</style>