import 'font-awesome/css/font-awesome.min.css'
import Vue from 'vue'
import Vuetify, { VSnackbar, VBtn, VIcon } from 'vuetify/lib'

// 中文
import zhHans from 'vuetify/es5/locale/zh-Hans'
import en from 'vuetify/es5/locale/zh-Hans'

Vue.use(Vuetify, {
    components: {
        VSnackbar,
        VBtn,
        VIcon
    }
})

const VuetifyObj = new Vuetify({
    lang: {
        current: 'zhHans',
        locales: { en, zhHans },
    },
    theme: {
        themes: {
            light: {
                primary: '#c91c46',
                red: '#c91c46',
                header: '#EEEEEE',
                cardHover: '#f63665',
                btnHover: '#E53935',
                secondary: '#b0bec5',
                accent: '#8c9eff',
                error: '#b71c1c',
                grey: '#e6e8ea',
                lightenGrey: '#f5f5f5'
            },
        },
    },
    icons: {
        iconfont: 'fa4',
    },
})

export default VuetifyObj



