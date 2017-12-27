<template>
	<div class="menu" :class="{'show': show,'dissmiss': !show}">
		<img src="../../assets/logo.png" />
		<h2>22222</h2>
		<ul class="menu-list">
			<li v-for="img in imgs" @click="changerouter(img.name,img.img)">
				<i :class='img.img'></i>
				<p>{{img.name}}</p>
			</li>
		</ul>
	</div>

</template>

<script>
	export default {
		name: 'v-menu',
		props: {
			show: {
				type:Boolean,
			 default: false
			}
		},
		data() {
			return {
				imgs: [{
					"img": "icon ion-android-home",
					"name": "功能列表"
				}, {
					"img": "icon ion-android-menu",
					"name": "商品展览"
				}, {
					"img": "icon ion-android-settings",
					"name": "我的资料"
				}],
				show1:this.show
			}

		},
		computed: {
	
		},
		methods: {
			changerouter(name, img) {
				this.show = true;
			}
		}
	};
</script>

<style scoped="scoped">
	.menu {
		position: fixed;
		top: 0;
		bottom: 0;
		flex: 0 0 250px;
		left: 0px;
		width: 250px;
		background: deepskyblue;
		color: #313131;
	}
	
	img {
		margin-top: 1rem;
		width: 5rem;
	}
	
	h2 {
		color: white;
	}
	
	.icon {
		float: left;
		margin-left: 20px;
		padding: 0;
		font-size: 2rem;
		color: green;
		display: inline-block;
		;
	}
	.dissmiss{
		animation: myfirst1 2s;
		-moz-animation: myfirst1 2s;
		/* Firefox */
		-webkit-animation: myfirst1 2s;
		/* Safari 和 Chrome */
		-o-animation: myfirst1 2s;
		/* Opera */
		animation-fill-mode: forwards;
	}
	.show {
		
		animation: myfirst 2s;
		-moz-animation: myfirst 2s;
		/* Firefox */
		-webkit-animation: myfirst 2s;
		/* Safari 和 Chrome */
		-o-animation: myfirst 2s;
		/* Opera */
		animation-fill-mode: forwards;
	}
	@keyframes myfirst1{
		from{left: -250px;}
		to{left: 0px;}
	}
	@keyframes myfirst{
		from{left: 0px;}
		to{left: -250px;}
	}
	.menu-list {
		border-top: 1px solid white
	}
	
	ul {
		list-style: none;
	}
	
	li {
		margin-top: 20px;
		height: 2rem;
		display: block;
		cursor: pointer;
	}
	
	p {
		margin-left: 20px;
		float: left;
		vertical-align: middle;
		padding: 0;
		color: red;
		height: 2rem;
		line-height: 2rem;
		font-size: 1rem;
		display: inline-block;
	}
</style>