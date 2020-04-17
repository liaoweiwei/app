let state = {
    token: ''
};

let mutations = {
    sync_token(state, value) {
        state.token = value;
    }
};

export default {
    namespaced: true,
    state: state,
    mutations: mutations
};
