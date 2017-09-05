import { ADD_INDEX, ADD_TAB } from './type_mutation'
export default {
    state: {
        num: 6,
        index: null,
        tab: null
    },
    mutations: {
        [ADD_INDEX.action_type](state, data) {
            state.index = data;
        },
        [ADD_TAB.action_type](state, data) {
            state.tab = data
        }
    },
    actions: {
        [ADD_INDEX.mutations_type]({ dispatch, commit, state, getter }, that) {
            return new Promise(function(resolve) {
                that.axios.get('/api/index').then(function(data) {
                    commit("AJAXINDEX", data.data)
                    resolve('ok')
                })
            })
        },
        [ADD_TAB.mutations_type]({ dispatch, commit, state, getter }, that) {
            dispatch('ajaxIndex', that).then(function(data) {
                that.axios.get('/api/tab').then(function(data) {
                    commit('AJAXTAB', data.data)
                })
            })
        }
    }
}