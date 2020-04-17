import Fly from 'flyio/dist/npm/wx';
import _ from 'lodash';

const fly = new Fly();

fly.interceptors.request.use(request => {
    // let token = getApp().globalData.vm.$store.state.user.loginData.token;
    // if (token) {
    //     request.headers['Authorization'] = `bearer ${token}`;
    // }
    return request;
});

fly.interceptors.response.use(
    response => {
        return response.data;
    },
    _.debounce(function(err) {
        // let errRes = undefined;
        switch (err.status) {
            case 0:
                // uni.showModal({
                //     title: '请求超时',
                //     content: '请稍后重试！',
                //     showCancel: false,
                //     confirmColor: '#fe6940'
                // });
                break;
            case 401:
                // uni.showModal({
                //     title: '登陆失效',
                //     content: '请从新登陆！',
                //     showCancel: false,
                //     confirmColor: '#fe6940'
                // }).then(res => {
                //     if (res[1].confirm) {
                //         getApp().globalData.vm.$store.commit('user/sync_loginData', {});
                //         uni.reLaunch({
                //             url: '/pages/login/index'
                //         });
                //     }
                // });
                break;
            default:
            // errRes = err.response && err.response.data && err.response.data.errors;
            // if (errRes && errRes.length) {
            //     uni.showModal({
            //         title: 'Error',
            //         content: `${errRes[0].message}`,
            //         showCancel: false,
            //         confirmColor: '#fe6940'
            //     });
            // }
            // console.log(err);
        }
    }, 500)
);

Reflect.getPrototypeOf(fly).fetch = options => {
    let opts = Object.assign(
        {
            url: '',
            method: 'POST',
            param: {},
            toast: {
                loading: true
            }
        },
        options || {}
    );

    fly.config = {
        method: opts.method,
        baseURL: '',
        timeout: 0
    };

    if (opts.toast.loading) {
        uni.showLoading({
            mask: true,
            title: '正在加载'
        });
    }

    return fly.request(opts.url, opts.param).finally(() => {
        uni.hideLoading();
    });
};

export default fly;
