<template>
	<div >
		 <v-swiper ref="swiper" direction="horizontal" width="100%" height="150" pager-color="#ea5a49" pager-bg-color="#e5e4e3">
  	 <v-Swiperitem>
          <img src="../../../static/images/swiper/1.jpg">
        </v-Swiperitem>
        <v-Swiperitem>
          <img src="../../../static/images/swiper/2.jpg">
        </v-Swiperitem>
        <v-Swiperitem>
          <img src="../../../static/images/swiper/3.jpg">
        </v-Swiperitem>
  </v-swiper>
     <p>录播图的使用</p>
	</div>
 
</template>

<script>
import vSwiper from '@/components/swiper/swiper'
import vSwiperitem from '@/components/swiper/swiper-item'
import vSwiperp from '@/components/swiper/swiper-pagination'
	export default{
		name:"v-home",
		components:{
			vSwiper,vSwiperitem,vSwiperp
		},
    methods: {
      
      next() {
          this.$refs.swiper.next()
      },
      prev() {
          this.$refs.swiper.prev()
      }
    }
	}
</script>

<style>
</style>