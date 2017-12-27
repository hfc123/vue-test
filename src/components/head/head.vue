<template>
<div class="head">
<i class="icon ion-arrow-left-c"></i>
<h3>{{title}}</h3>
<i class="icon ion-navicon-round" @click="showmenu"></i>
</div>
</template>

<script>
	export default{
		name:"v-head",
		props:{
			titles:{
				type : String
			}
		},
		data(){
			return {title:this.titles}
		},
		computed:{
			
		},
		methods:{
			showmenu(){
			console.log('sss')
			this.$emit('showmenu1','123')
			}
		}
	}
</script>

<style scoped="scoped">
.head {
	margin: 0;
	width: 100%;
	height: 2rem;
	background: green;
	top: 0;
	
}
.icon{
	font-size: 2rem;
}
.ion-arrow-left-c{
	float:left;
	cursor: pointer;
	
}
h3{
	margin: auto;
	display: inline-block;
}
.ion-navicon-round{
	float: right;
	cursor: pointer;
	display: inline-block;
}
</style>