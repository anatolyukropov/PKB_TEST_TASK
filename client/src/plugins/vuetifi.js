import Vue from 'vue'
import Vuetify, {
    VDataTable
} from 'vuetify/lib'

Vue.use(Vuetify, {
    components: {
        VDataTable
    },
})

export default new Vuetify({
    icons: {
        iconfont: 'mdi', // default - only for display purposes
    }
})