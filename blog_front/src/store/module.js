export default {
    state: {
        data: [],
        allClass: []
    },
    mutations: {
        alldata(state, data) {
            state.data = data
        },
        class(state, data) {
            state.allClass = [];
            data.forEach(function(val) {
                state.allClass.push(val.onedata)
            })
        }
    },
    actions: {
        getData({ commit }, that) {
            that.axios.get('/api/front_article/getArticleAll').then(function(data) {
                commit('alldata', data.data.data)
            }.bind(that))
        },
        getClass({ commit }, that) {
            that.axios.get('/api/back_class/class_list').then(function(data) {
                commit('class', data.data.data)
            }.bind(that))
        }
    }
}