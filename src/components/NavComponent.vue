<template>
    <nav class="Nav">
        <div class="logo-section">
            <div class="logo" @click="goTop">SJ.L</div>
        </div>
        <div v-if="isPcAndTablet">
            <div class="full-width-nav">
                <ul>
                    <li @click="handleMenu('About')">About</li>
                    <li @click="handleMenu('Skills')">Skill</li>
                    <li @click="handleMenu('Portfolio')">Portfolio</li>
                    <li @click="handleMenu('Contact')">Contact</li>
                </ul>

                <div class="mode-btns">
                    <input
                        class="dark_mode_input"
                        type="checkbox"
                        id="darkmode-toggle"
                        v-model="isDarkMode"
                        @change="toggleTheme"
                    />
                    <label
                        for="darkmode-toggle"
                        :data-checked="isDarkMode ? 'dark' : ''"
                        :data-unChecked="isDarkMode ? '' : 'light'"
                    > </label>
                </div>
            </div>
        </div>
        <div v-else>
            <div>SJ.L</div>
            <div class="mobile_nav">
                <div class="nav_menu_btn">
                    <font-awesome-icon :icon="themeIcon" />
                    <input
                        class="dark_mode_input"
                        type="checkbox"
                        id="darkmode-toggle"
                        v-model="isDarkMode"
                        @change="toggleTheme"
                    />
                </div>
                <div class="nav_menu_btn" @click="toggleMenu">
                    <font-awesome-icon :icon="menuIcon" />
                </div>
            </div>

            <div class="mobile_menu" :style="{ height: isMenuOpen ? '250px' : '0px' }">
                <ul>
                    <li v-for="menu in menus" :key="menu.name" @click="handleMenu(menu.name)">
                        <span>
                            <font-awesome-icon :icon="menu.icon" />
                        </span>
                        <span>{{ menu.name }}</span>
                    </li>
                </ul>
                <div @click="toggleMenu" v-if="isMenuOpen">
                    <font-awesome-icon icon="times" />
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMoon, faSun, faBars, faHome, faUser, faCode, faImage, faPaperPlane, faTimes } from '@fortawesome/free-solid-svg-icons'
import { mapState, mapMutations } from 'vuex';
import { useMediaQuery } from '@vueuse/core';

export default {
    name: 'NavComponent',
    components: {
        FontAwesomeIcon
    },
    setup() {
        const isPcAndTablet = useMediaQuery('(min-width: 480px)');
        return { isPcAndTablet };
    },
    data() {
        return {
            imgSrc: "",
            isMenuOpen: true,
            isDarkMode: localStorage.getItem('selectedTheme') === 'dark',
            menus: [
                { name: 'Home', icon: faHome },
                { name: 'About', icon: faUser },
                { name: 'Skills', icon: faCode },
                { name: 'Portfolio', icon: faImage },
                { name: 'Contact', icon: faPaperPlane }
            ]
        }
    },
    computed: {
        ...mapState({
            isPcAndTablet: state => state.isPcAndTablet,
            theme: state => state.theme
        }),
        menuIcon() {
            return this.isMenuOpen ? faTimes : faBars;
        },
        themeIcon() {
            return this.isDarkMode ? faMoon : faSun;
        },
    },

    methods: {
        ...mapMutations(['SET_THEME']),
        goTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' })
            this.isMenuOpen = false
        },
        handleMenu(menu) {
    const targetMenu = document.getElementById(menu);
    if (targetMenu) {
        targetMenu.scrollIntoView({ behavior: 'smooth' });
        this.isMenuOpen = false;
    } else {
        console.error(`No element with id "${menu}" found in the document.`);
    }},

        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen
        },
        toggleTheme() {
            if (this.theme === 'light') {
        this.SET_THEME('dark');
      } else {
        this.SET_THEME('light');
      }
            document.querySelector('body').setAttribute('data-theme', this.isDarkMode ? 'dark' : 'light')
            localStorage.setItem('selectedTheme', this.isDarkMode ? 'dark' : 'light')
        }
    },
    mounted() {
    const storedTheme = localStorage.getItem('selectedTheme');
    if (storedTheme) {
      this.SET_THEME(storedTheme);
    }
    
    document.querySelector('body').setAttribute('data-theme', this.theme);
  }

}
</script>

<style>
/* Nav */
.Nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    right: 20px;
    top: 20px;
    padding: 30px 20px;
    z-index: 100;
    background-color: var(--body_background);
}
.Nav .logo {
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    font-size: 23px;
    font-weight: bold;
    cursor: pointer;
}

.Nav .full-width-nav {
    display: flex;
    justify-content: space-between; /* 추가 */
    align-items: center;
}

.Nav .full-width-nav ul {
    list-style: none;
    display: flex;
    cursor: pointer;
    padding-left: 0px;
}

.Nav .full-width-nav ul li {
    margin-right: 15px;
}

.Nav .full-width-nav ul li:hover,
.Nav .full-width-nav .mode-btns:hover {
    color: var(--purple);
}

.mode-btns {
    display: flex;
}

.mode-btns input {
    display: none;
}

.mode-btns input+label {
    display: inline-block;
    height: 25px;
    width: 60px;
    position: relative;
    font-size: 20px;
    border: 1.5px solid var(--purple);
    border-radius: 25px;
    padding: 0px;
    margin: 0px;
    cursor: pointer;
    transition: all 0.3s ease;
    color: var(--purple);
}

.mode-btns input+label::before {
    position: absolute;
    height: 20px;
    width: 20px;
    top: 1px;
    content: "";
    transition: all 0.3 ease;
    z-index: 3;
    border-radius: 50%;
}

.mode-btns input+label::after {
    width: 40px;
    font-size: 11px;
    text-align: center;
    z-index: 2;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    text-overflow: hidden;
}

.mode-btns input:not(:checked)+label {
    background-color: transparent;
    text-align: right;
}

.mode-btns input:not(:checked)+label::after {
    content: attr(data-unchecked);
    right: 0;
    left: auto;
    opacity: 1;
    color: var(--purple);
}

.mode-btns input:not(:checked)+label::before {
    left: 2px;
    top: 1px;
    background-color: var(--purple);
    transition: 0.3s ease;
}

.mode-btns input:checked+label {
    text-align: left;
}

.mode-btns input:checked+label::after {
    content: attr(data-checked);
    left: 0px;
    right: auto;
    opacity: 1;
}

.mode-btns input:checked+label::before {
    left: 35px;
    background-color: var(--purple);
    transition: 0.3s ease;
}
body[data-theme="light"] {
  background-color: white;
  color: black;
}

body[data-theme="dark"] {
  background-color: black;
  color: white;
}

</style>
  