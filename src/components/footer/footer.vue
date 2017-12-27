<template>
	<div class="footer">
		
		<div class="foot" @click="">
		<router-link to="/">
			<i class="icon ion-android-home"></i>
			<h5>首页</h5>
			</router-link>
		</div>
	
		<div class="foot">
				<router-link to="/list">
			<i class="icon ion-android-list"></i>
			<h5>列表</h5>
			</router-link>
		</div>
		
		
		<div class="foot">
		<router-link to="/goods">
			<i class="icon ion-ios-medical-outline"></i>
			<h5>商品</h5>
				</router-link>
		</div>
	
		
		<div class="foot">
			<router-link to="/HelloWorld">
			<i class="icon ion-android-person"></i>
			<h5>我的</h5>	
			</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'v-footer',
		props: {
			show: false
		},
		data() {
			return {
				
			}

		},
		computed: {},
		methods: {
			changerouter(num){
				switch(num){
					case 0:
					break;
					case 1:
					break;
					case 2:
					break;
					case 3:
					break;
				}
			}
		}
	};
</script>

<style>
	.footer {
		background: gold;
		width: 100%;
		display: flex;
		font-size: 2rem;
		position: fixed;
		bottom: 0;
	}
	
	.foot {
		flex: 1;
		margin: auto;
		cursor: pointer;
	}
</style>