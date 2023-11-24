<template>
    <div class="project_detail_container">
        <div class="project_detail_title">
            <h2>WithsportsReserve</h2>
            <span>가천대 졸업프로젝트 - 팀 프로젝트에서 경기장예약서비스부분</span>
        </div>

        <div class="project_detail_description">
            <div>
                <span>기획 의도</span>
                <span> 
                    관리자가 등록한 경기장을 사용자들이 경기장을 조회하고 예약하고 예약된 정보를 조회하는 서비스 
                </span>
            </div>
            <div>
                <span>개발 기간</span>
                <span>2023.10.17 ~ (진행중)</span>
            </div>
            <div>
                <span>담당 및 참여도</span>
                <span>
                    백엔드 부분(100%), 프론트부분(0%), ui(0%)
                </span>
            </div>
            <div>
                <span>기술 스택</span>
                <div class="project_detail_skills">
                    <span>Java</span>
                    <span>Spring</span>
                    <span>Mysql</span>
                    <span>AWS</span>
                    <span>Intellij</span>
                    <span>OracleDB</span>
                    <span>eclipse</span>
                    <span>ApacheTomcat</span>
                    <span>DBeaver</span>
                    <span>Git</span>
                </div>
            </div>
        </div>

        <div class="project_detail_btn">
            <a href="https://github.com/Lseungjin/withsports-reserve" target="_blank">
                <span>Git</span>
                <span>
                    <font-awesome-icon :icon="['fab', 'github']" />
                </span>
            </a>
        </div>
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default {
    name: 'WithsportsReserve',
    components: {
        FontAwesomeIcon
    },
    data() {
        return {
            faGithub
        }
    }
}
</script>
  