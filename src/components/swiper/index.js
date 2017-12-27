/**
 * Created by longks on 2017/2/22.
 */
import Swiper from './swiper.vue';
import SwiperItem from './swiper-item.vue';

Swiper.install = function(Vue) {
    Vue.component(Swiper.name, Swiper);
    Vue.component(SwiperItem.name, SwiperItem);
};

export default {
    Swiper,
    SwiperItem
};

