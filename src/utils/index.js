// import '@/static/iconfont/iconfont.css';
import '@/static/css/common.scss';
import http from '@/utils/http';
import tool from '@/utils/tool';
import _ from 'lodash';
import moment from 'moment';

export default Vue => {
    Vue.systemInfo = Vue.prototype.$systemInfo = uni.getSystemInfoSync();
    Vue.http = Vue.prototype.$http = http;
    Vue.tool = Vue.prototype.$tool = tool;
    Vue._ = Vue.prototype._ = _;
    Vue.moment = Vue.prototype.$moment = moment;
};
