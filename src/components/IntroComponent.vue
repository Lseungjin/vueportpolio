<template>
  <div class="wrapper intro_wrapper">
    <div class="container intro">
      <div class="intro_text">
        <div>
          <span>안녕하세요 </span>
          <span>이승진입니다.</span>
        </div>
        <span>Backend, Blockchain Developer</span>

        <div class="intro_log">
          <a href="https://github.com/Lseungjin" target="blank">
            <font-awesome-icon :icon="githubIcon" />
          </a>
          <a href="https://github.com/2LeeSeungJin" target="blank">
            <font-awesome-icon :icon="blogIcon" />
          </a>
          <button @click="goContact">
            Contact Me _<font-awesome-icon :icon="heartIcon" />
          </button>
        </div>
      </div>

      <div class="intro_img">
        <img :src="imgSrc" />
      </div>
    </div>

    <div class="intro_scroll">
      <span>
        <font-awesome-icon :icon="mouseIcon" />
      </span>
      <span>Scroll Down</span>
      <span>
        <font-awesome-icon :icon="arrowDownIcon" />
      </span>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBlog, faHeart, faComputerMouse, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default {
  name: 'IntroComponent',
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      imgSrc: require('@/assets/img1.jpg'),
      githubIcon: faGithub,
      blogIcon: faBlog,
      heartIcon: faHeart,
      mouseIcon: faComputerMouse,
      arrowDownIcon: faArrowDown
    }
  },
  methods: {
    goContact() {
      const targetMenu = document.getElementById("Contact");
      targetMenu.scrollIntoView({ behavior: "smooth" });
    }
  }
}
</script>

<style>
/* Intro */
.intro {
  height: calc(100% - 100px);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
  width: 80%;
}

.intro_wrapper {
  display: flex;
  flex-direction: column;
}

.intro .intro_img {
  width: 300px;
}

/* intro text */
.intro .intro_text {
  display: flex;
  flex-direction: column;
  margin-right: 50px;
}

.intro .intro_text > div:nth-child(1) {
  font-size: var(--font-size-XL);
  font-weight: bold;
}

.intro .intro_text > div:nth-child(1) > span:last-child {
  color: var(--purple);
}

.intro .intro_text > span:nth-child(2) {
  font-size: 25px;
  color: var(--font-secondary-color);
  margin-top: 10px;
}

.intro .intro_text > span:nth-child(3) {
  font-size: 18px;
  color: rgb(158, 158, 158);
  margin-top: 10px;
  max-width: 400px;
}

.intro .intro_log {
  margin: 30px 0px;
  display: flex;
}

.intro .intro_log > a {
  margin-right: 15px;
  background-color: var(--purple);
  color: white;
  border-radius: 50%;
  display: inline-block;
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
}

.intro .intro_text button {
  padding: 0px 10px;
  height: 30px;
  border: none;
  border-radius: 5px;
  background-color: #8b6add;
  color: white;
  font: var(--font-style);
  cursor: pointer;
}

.intro .intro_img {
  background-color: var(--purple);
  border-radius: 50%;
  height: 300px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
}

.intro .intro_img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  clip-path: circle(50%);
}

.intro_scroll {
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
}

.intro_scroll > span:nth-child(1) {
  color: var(--purple);
  font-size: 20px;
}
.intro_scroll > span:nth-child(2) {
  font-size: var(--font-size-s);
  color: var(--font-secondary-color);
  margin: 0px 10px;
}
.intro_scroll > span:nth-child(3) {
  font-size: var(--font-size-s);
  color: var(--font-secondary-color);
  animation: scrollDown 0.8s linear 0s infinite alternate;
}
@keyframes scrollDown {
  0% {
    margin-top: -5px;
  }
  100% {
    margin-top: 10px;
  }
}
</style>
  