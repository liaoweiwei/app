import Vue from 'vue';
import Vuex from 'vuex';
import CreatePersistedState from 'vuex-persistedstate';
import login from './login';

Vue.use(Vuex);

const store = new Vuex.Store({
    strict: true,
    plugins: [
        CreatePersistedState({
            storage: {
                getItem: key => uni.getStorageSync(key),
                setItem: (key, value) => uni.setStorageSync(key, value),
                removeItem: key => uni.removeStorageSync(key)
            }
        })
    ],
    modules: {
        login
    }
});

export default store;
