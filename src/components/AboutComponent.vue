<template>
  <div class="wrapper" id="About">
    <div class="container about">
      <h1>About Me</h1>

      <div v-if="isPC" class="about_introduce">
        <div class="about_left">
          <img :src="imgSrc" alt="img2" />
        </div>
        <div class="about_right">
          <p class="about_text">
            2년간 가천대학교 20학번 교육과정을 통해 React,
            JavaScript, 와 같은 기초적인 웹 프로그래밍, Java, blockchain, kotlin DataBase(Mysql) 같은 백엔드
            대한 공부를 하며 실습을 하였습니다. 그리고 유데미에서 블록체인 강의를 수강하였습니다.
            그 과정에서 두 번의 팀 프로젝트를 진행 중에 있으며 최근 블록체인 강의를 수강하면서 블록체인 분야에도
            매력을 느껴 백엔드 또는 블록체인 개발자가 되기를 결심하였습니다.
            공부와 개인프로젝트를 진행하며 백엔드 개발자로서의
            능력을 키우는 중이며 필요한 언어나 라이브러리, 기술 등 배울 껀덕지가 있다면 언제든
            배울 준비가 되어있습니다. 앞으로도 항상 배울 수 있는 기회를
            감사히 여기며 겸손한 마음으로 배워 성장하고 싶습니다.
          </p>
          <div style="text-align: end;">
            <a :href="cvLink" download="이력서(이승진)">
              Download CV__
              <font-awesome-icon :icon="faCloudArrowDown" />
            </a>
          </div>
          <div class="about_detail">
            <div class="detail_box">
              <span>Career</span>
              <div class="detail_item">
                <span>2034.06 ~ 2052.06</span>
                <span>이직 및 퇴직 예정</span>
              </div>
              <div class="detail_item">
                <span>2024.02 ~ 2033.12</span>
                <span>네카라쿠베당토 입사 및 근무</span>
              </div>
            </div>
            <div class="detail_box">
              <span>Education</span>
              <div class="detail_item">
                <span>2022.03 ~ 2024.02</span>
                <span>가천대학교 편입학 및 졸업예정</span>
              </div>
              <div class="detail_item">
                <span>2018.10 ~ 2020.06</span>
                <span>육군 병장 만기 전역</span>
              </div>
              <div class="detail_item">
                <span>2014.03 ~ 2017.02</span>
                <span>광명북고등학교 졸업</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { onMounted, ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';


export default {
  components: {
    FontAwesomeIcon
  },
  setup() {
    const isPC = ref(false)
    const imgSrc = ref(require('@/assets/img2.jpg'))
    const cvLink = '/이력서(이승진).docx';

    onMounted(() => {
      const matchMedia = window.matchMedia("(min-width: 1024px)")
      isPC.value = matchMedia.matches
      matchMedia.addEventListener('change', e => {
        isPC.value = e.matches
      })
    })

    return {
      isPC,
      imgSrc,
      cvLink,
      faCloudArrowDown
    }
  }
}
</script>

  
<style>
/* about */
.about {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.about h1 {
  font-size: var(--font-size-L);
  font-weight: bold;
  text-align: center;
  margin-bottom: var(--title-margin);
}

.about .about_introduce {
  width: 80%;
  display: flex;
}

.about .about_left {
  width: 30%;
  border-radius: 10px;
  overflow: hidden;
  margin-right: 20px;
}

.about .about_left img {
  width: 100%;
  object-fit: cover;
}

.about .about_right {
  width: 70%;
}

.about .about_text {
  color: var(--font-secondary-color);
  font-size: var(--font-size-m);
  line-height: 1.5;
}

.about .about_right a {
  text-decoration: none;
  border: none;
  background-color: transparent;
  color: var(--purple);
  font-weight: bold;
  font-size: var(--font-size-s);
}

.about .about_detail {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

.about .detail_box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
}

.about .detail_box > span:first-child {
  background-color: var(--purple);
  color: white;
  border-radius: 5px;
  width: 100px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.about .detail_item {
  display: flex;
  flex-direction: column;
}

.about .detail_item > span:first-child {
  margin-top: 10px;
}
.about .detail_item > span:last-child {
  color: var(--font-secondary-color);
  margin-top: 5px;
  font-size: var(--font-size-s);
}

/* about small vesrsion */
.about_introduce_small {
  width: 80%;
}

.about_introduce_small .about_top {
  display: flex;
  margin-bottom: 20px;
}

.about_introduce_small .about_top > div:first-child {
  width: 30%;
  border-radius: 5px;
  overflow: hidden;
}

.about_introduce_small .about_top > div:first-child img {
  width: 100%;
  object-fit: cover;
}

.about_introduce_small .about_top > div:last-child {
  width: 70%;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.about_introduce_small .about_top > div:last-child > p {
  color: var(--font-secondary-color);
  line-height: 1.5;
}

.about_introduce_small .about_top > div:last-child > div {
  text-align: end;
}

.about_introduce_small .about_top > div:last-child > div > a {
  border: none;
  background-color: transparent;
  color: var(--purple);
  font-weight: bold;
  text-decoration: none;
  font-size: 13px;
}

.about_introduce_small .about_bottom {
  display: flex;
}
</style>
  