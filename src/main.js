import './assets/main.css'

import { createApp } from 'vue' 
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import router from './router'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faArrowRight, faBars, faCirclePlay, faCloudArrowUp, faCode, faLongArrowLeft, faLongArrowRight, faPaperPlane, faPhoneAlt, faPlusCircle, faQuoteLeft, faQuoteRight, faStar, faMinusCircle, faCheck, faPhoneVolume, faEnvelopeOpen, faMapLocationDot, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(faPhoneAlt, faBars, faArrowRight, faCirclePlay, faPaperPlane, faCode, faCloudArrowUp, 
    faQuoteLeft, faQuoteRight, faLongArrowLeft, faLongArrowRight, faStar, faPlusCircle, faMinusCircle, 
    faCheck, faPhoneVolume, faEnvelopeOpen, faMapLocationDot, faFacebook, faTwitter, faGithub, 
    faLinkedin, faInstagram, faAngleUp
)

const app = createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
