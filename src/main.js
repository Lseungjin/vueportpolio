
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import store from './store' // Vuex 스토어를 가져옵니다.
import IntroComponent from './components/IntroComponent.vue'
import PortfolioComponent from './components/PortfolioComponent.vue'
import ContactComponent from './components/ContactComponent.vue'
import AboutComponent from './components/AboutComponent.vue'
import SkillsComponent from './components/SkillsComponent.vue'
import TopButtonComponent from './components/TopButtonComponent.vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMoon, faSun, faBars, faHome, faUser, faCode, faImage, faPaperPlane, faTimes, faCloudArrowDown, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faJava, faEthereum, faAndroid, faJs, faReact, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLeaf, faOtter, faStore, faServer, faHardDrive, faShield, faTerminal, faDatabase, faGear, faSearch} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faBlog, faHeart, faComputerMouse, faArrowDown } from "@fortawesome/free-solid-svg-icons";


library.add(faMoon, faSun, faBars, faHome, faUser, faCode, faImage, faPaperPlane, faTimes, faCloudArrowDown, faPhone, faEnvelope, faJava, faEthereum, faAndroid, faJs, faReact, faGithub, faLeaf, faOtter, faStore, faSearch, faServer, faHardDrive, faShield, faTerminal, faDatabase, faGear, faArrowUp, faBlog, faHeart, faComputerMouse, faArrowDown);
// 라우트 정의
const routes = [
    {
      path: '/',
      component: IntroComponent,
    },
    {
      path: '/portfolio',
      component: PortfolioComponent,
    },
    {
      path: '/contact',
      component: ContactComponent,
    },
    {
      path: '/about',
      component: AboutComponent,
    },
    {
      path: '/skills',
      component: SkillsComponent,
    },
    {
      path: '/topbutton',
      component: TopButtonComponent,
    },
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router)
app.use(store)

app.mount('#app')
