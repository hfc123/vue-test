<template>
  <div class="goods">
		<ul class="nav">
			<li v-for="(item,index) in items" v-on:click="changeitem(index)">{{item}}</li>
		</ul>

	<ul class="list">
                    <li v-for="good in goods">  
                        <img class="img" src="../../assets/logo.png">
                        <div class="message">
                        </div>
                        <div class="price">
                            <p>
                                ￥<strong>{{good.price}}</strong>
                            </p>
                            <div class="btn">{{good.title}}元</div>
                        </div>
                        <span class="tips">{{good.name}}</span>
                        <div class="disc">
                        <span>{{good.description}}</span>
                        </div>
                    </li>
                </ul>
  </div>
</template>

<script>
export default {
  name: 'goods',
  created () {
  	console.log('ssss')
  	this.$http.get('static/data/data.json')
      .then(response => {
      	this.goods = response.data.goods[0].foods
            console.log(response.data.goods[0].foods)
      }, response => {
    console.log('失败')
      })
  },
  data () {
    return {
      items: ['热销榜', '单人特色套餐', '特色粥品', '精选热菜', '爽口凉菜', '半成品', '饭类', '面类'],
      goods:[]
    }
  },
  methods: {
  	changeitem: function (position) {
  		console.log(position)
  		  	this.$http.get('static/data/data.json')
      .then(response => {
      	this.goods = response.data.goods[position].foods
            console.log(response.data.goods[position].foods)
      }, response => {
    console.log('失败')
      })
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	 
		*{
			margin: 0;
			padding: 0;
		}
		ul{
			list-style: none;
		}
		a{
			text-decoration: none;
		}
		.nav{
			background: bisque;
			height: 300px;
			width: 112px;
			line-height: 34px;
		}
		ul li{
			position: relative;
			display: block;
			background: bisque;
		}
		.goods{
	 	top: 30px;
	 	bottom: 30px;
	 	position: absolute;
	 }
		.nav ul{
			width:112px;
			margin:0 auto;
			background: bisque;
		}
		ul li{
			padding: 10px 0px;
			text-align: center;
			display: block;
			color: red;
		}
		ul li:hover{
			background: deepskyblue;
		}
		.list {
			left: 123px;
			height: 430px;
			width: 290px;
			overflow:scroll;
			overflow-x: hidden;
			top: -295px;
			position: relative;
		}
		.list li{
			width: 270px;
    display: inline-block;
    text-align: -webkit-match-parent;
    background: white;
		}
		.list .message {
    float: left;
    width: 265px;
    margin-left: 25px;
}
		.list .img {
    float: left;
    width: 100px;
    height: 100px;
}
h2 {
    display: block;
    font-size: 1.3em;
    -webkit-margin-before: 0.83em;
    -webkit-margin-after: 0.83em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    font-weight: bold;
}



</style>
