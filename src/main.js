import Vue from 'vue';
import App from './App';
import store from '@/store';
import utils from '@/utils';

Vue.use(utils);

import { uniList, uniListItem } from '@dcloudio/uni-ui';

Vue.component('uniList', uniList);
Vue.component('uniListItem', uniListItem);

Vue.config.productionTip = false;

App.mpType = 'app';

const vm = new Vue({
    ...App,
    store
});

vm.$mount();

getApp().globalData.vm = vm;
