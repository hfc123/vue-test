<template>
		<div class="listclass">
		<v-Scroll :on-refresh="onRefresh" >
			<p v-for="item in list">{{item}}</p>	
		</v-Scroll>
		
		</div>
</template>

<script>
	import vScroll from '@/components/scroll/scroll'
	import Vue from 'vue'
	export default{
		name : 'v-list',
		data(){
			return{
				list:["111","222"]
			}
			
		},
		components:{
			vScroll
		},
		methods:{
			onRefresh(done){
			var len=this.list.length;
				for (var i = len; i < 5+len; i++) {
					Vue.set(this.list,i,"item"+i); 
				}
				console.log(this.list)
				done();
			}
		}
	}
</script>

<style  scoped="scoped">
  
  
    li{
    	display: block;
    }
</style>