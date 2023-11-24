<template>
  <div class="App">
    <nav-component />
    <router-view /> 
    <about-component />
    <skills-component />
    <portfolio-component />
    <contact-component />
    <top-button-component />
  </div>
</template>

<script>
import NavComponent from './components/NavComponent.vue'
import AboutComponent from './components/AboutComponent.vue'
import SkillsComponent from './components/SkillsComponent.vue'
import PortfolioComponent from './components/PortfolioComponent.vue'
import ContactComponent from './components/ContactComponent.vue'
import TopButtonComponent from './components/TopButtonComponent.vue'

export default {
  name: 'App',
  components: {
    NavComponent,
    AboutComponent,
    SkillsComponent,
    PortfolioComponent,
    ContactComponent,
    TopButtonComponent
  }
}
</script>


<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

@font-face {
  font-family: "Pretendard-Regular";
  src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff") format("woff");
  font-weight: 300, 400, 500, 600, 700, 800;
  font-style: normal;
}

@font-face {
  font-family: "NanumSquareRound";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NanumSquareRound.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}

:root {
  --purple: #8b6add;

  --body_background: white;
  --body_secondary-background: white;
  --font_color: black;
  --font-secondary-color: gray;

  --font-size-XL: 50px;
  --font-size-L: 40px;
  --font-size-M: 18px;
  --font-size-s: 13px;

  --title-margin: 70px;
  --title-margin-mobile: 30px;

  --font-style: "NanumSquareRound";
}

[data-theme="dark"] {
  --font-color: #fafafa;
  --font-secondary-color: #fafafa;
  --body_background: #24202e;
  --body_secondary-background: #302b3b;
}

#root {
  background-color: var(--body_background);
  color: var(--font-color);
}

/* ------------- */
.App {
  max-width: 1340px;
  margin: auto;
  font-family: var(--font-style);
  position: relative;
}

.wrapper {
  max-width: 1340px;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
}

.grid {
  display: grid;
  gap: 1.5rem;
}
/* 미디어쿼리 */

/* 포트폴리오 이미지 */
@media (max-width:1000px) {
  .project_detail_description .project_img > div { 
    width: 33%;
    height: auto;
    aspect-ratio: 1/1;
  }
}

/* 태블릿 */
@media (min-width: 821px) and (max-width: 1023px) {
  /* about */

  /* portfolio */
  .portfolio .porject_item .project_img {
    width: 130px;
    height: 130px;
  }

  /* skill */
  .skills .skill_item .item_bottom {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }

  .SkillName {
    font-size: var(--font-size-s);
  }

  /* contact */
  .contact .contact_info {
    width: 40%;
  }
}

/* 모바일 / 태블릿 */
@media (max-height: 850px) {
  .project_detail_description .project_img > div { 
    display: none;
  }
}

@media (max-width: 820px) {
  /* intro */
  .intro {
    flex-direction: column;
    position: relative;
  }
  .intro .intro_img {
    display: none;
  }

  .intro_scroll {
    position: relative;
    top: -50px;
  }

  /* about ------------ */
  .about h1 {
    font-size: 30px;
    margin-bottom: 30px;
  }

  .about_introduce_small .about_top {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
  }

  .about_introduce_small .about_top > div:first-child {
    display: none;
  }

  .about_introduce_small .about_top > div:last-child {
    width: 100%;
    margin-left: 0px;
  }

  .about_introduce_small .about_top > div:last-child > p {
    font-size: var(--font-size-s);
  }

  .about_introduce_small .about_bottom {
    display: flex;
    flex-direction: column;
  }

  .about_introduce_small .detail_box {
    width: 100%;
    margin-bottom: var(--title-margin-mobile);
  }

  .about_introduce_small .detail_item {
    font-size: var(--font-size-s);
  }

  /* about end ------------ */

  /* skill */
  .skills h1 {
    font-size: 30px;
    margin-bottom: var(--title-margin-mobile);
  }

  .skills .skill_wrap {
    display: grid;
    grid-template-columns: unset;
    gap: 0;
  }

  .skills .skill_item .item_top > span:first-child {
    font-size: 20px;
  }

  .skills .skill_item .item_top > span:last-child {
    font: 18px;
  }

  .skills .skill_item .item_bottom {
    margin-top: 0px;
    padding-left: 45px;
    margin: 10px 0px;
  }

  .SkillName {
    margin-bottom: 5px;
    font-size: 13px;
  }

  /* portfolio */
  .portfolio h1 {
    font-size: 30px;
    margin-bottom: var(--title-margin-mobile);
  }

  .contact h1 {
    font-size: 30px;
    margin-bottom: var(--title-margin-mobile);
  }

  /* portfolio */
  .portfolio .project h2 {
    width: 130px;
    height: 30px;
    font-size: 18px;
    margin-bottom: 20px;
  }

  .portfolio .project .project_wrap {
    display: flex;
    flex-direction: column;
  }

  .portfolio .project .porject_item {
    width: 100%;
    margin-bottom: 20px;
  }

  .portfolio .porject_item .project_img {
    width: 100px;
    height: 100px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    margin-right: 15px;
  }

  /* contact */
  .contact_wrap {
    flex-direction: column;
  }

  .contact .contact_info {
    width: 100%;
    margin-bottom: 20px;
  }

  .contact .info_box {
    margin-bottom: 10px;
  }

  .contact .info_box_left {
    font-size: 30px;
  }

  .contact .info_box_right > div:first-child {
    font-weight: bold;
    font-size: 18px;
  }

  .contact .info_box_right > div:last-child {
    font-size: var(--font-size-s);
    margin-top: 5px;
  }

  .contact_mail .contact_box {
    width: 48%;
  }

  /* top btn */
  .TopBtn {
    right: 30px;
  }
}

/* 모바일 */
@media (max-width: 479px) {
  /* intro */
  .intro {
    height: 100%;
  }

  .intro_scroll {
    top: -150px;
  }

  .TopBtn {
    right: 30px;
    bottom: 80px;
  }

  /* nav */
  .Nav {
    bottom: 0;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    z-index: 10;
    padding: 20px;
  }

  .mobile_nav {
    display: flex;
  }

  .nav_menu_btn {
    height: 25px;
    width: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--purple);
    cursor: pointer;
  }

  .nav_menu_btn input {
    opacity: 0;
    position: absolute;
    cursor: pointer;
  }

  /* skill */
  .skills .skill_item {
    margin-bottom: 20px;
  }

  /* portfolio */
  .project_detail_description .project_img > div { 
    display: none;
  }


  /* nav */

  .mobile_menu {
    width: 100%;
    height: 0px;
    position: fixed;
    bottom: 0;
    left: 0px;
    background-color: var(--body_secondary-background);
    margin: 0px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition: all 0.3s;
  }

  .mobile_menu ul {
    width: 100%;
    padding-left: 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding: 20px;
    margin: 40px;
  }

  .mobile_menu ul li {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
    cursor: pointer;
  }

  .mobile_menu ul li:hover {
    color: var(--purple);
  }

  .mobile_menu ul li > span:first-child {
    margin-bottom: 10px;
  }

  .mobile_menu ul li > span:last-child {
    font-size: var(--font-size-s);
  }

  .mobile_menu > div {
    width: 100%;
    text-align: end;
    padding-right: 20px;
    font-size: 18px;
    position: absolute;
    bottom: 15px;
    cursor: pointer;
  }

  .mobile_menu > div:hover {
    color: var(--purple);
  }
}
</style>
