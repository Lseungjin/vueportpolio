<template>
    <div class="Model">
        <div class="model_back_bg"></div>
        <div class="model_container">
            <div class="model_close" @click="$emit('modelClose')">
                <font-awesome-icon :icon="['fas', 'times']" />
            </div>
            <component :is="targetProject"></component>
        </div>
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import WithsportsBlockchain from './project/WithsportsBlockchain'
import WithsportsReserve from './project/WithsportsReserve'
import Kotlin from './project/Kotlin'
import HouseRental from './project/HouseRental'

export default {
    name: 'ModelComponent',
    components: {
        FontAwesomeIcon,
        WithsportsBlockchain,
        WithsportsReserve,
        Kotlin,
        HouseRental
    },
    props: {
        project: {
            type: String,
            required: true
        }
    },
    computed: {
        targetProject() {
            if (this.project === 'WithsportsBlockchain') return 'WithsportsBlockchain'
            if (this.project === 'WithsportsReserve') return 'WithsportsReserve'
            if (this.project === 'Kotlin') return 'Kotlin'
            if (this.project === 'HouseRental') return 'HouseRental'
            return null;
        }
    },
    data() {
        return {
            faTimes
        }
    }
}
</script>

<style>
/* project model */
.portfolio_wrapper {
    position: relative;
}

.Model {
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
}

.model_back_bg {
    width: 200%;
    height: 100vh;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.379);
}

.model_container {
    background-color: var(--body_secondary-background);
    width: 80%;
    height: 80vh;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    z-index: 10;
}

.model_close {
    width: 100%;
    height: 5%;
    padding: 10px;
    text-align: end;
    cursor: pointer;
    color: var(--purple);
}

.scroll-locked {
    overflow: hidden !important;
    touch-action: none;
}

/* model project detail */
.project_detail_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    height: 95%;
    position: relative;
}

.project_detail_title {
    text-align: center;
    font-weight: bold;
}

.project_detail_title h2 {
    margin: 10px;
}

.project_detail_title span {
    color: var(--font-secondary-color);
}

.project_detail_description {
    width: 90%;
    margin-top: 20px;
}

.project_detail_description div {
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
}

.project_detail_description>div>span:nth-child(1) {
    color: var(--purple);
    font-weight: bold;
    margin-bottom: 5px;
}

.project_detail_description>div>span:nth-child(2) {
    font-size: 15px;
}


.project_detail_description .project_detail_skills {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
}

.project_detail_description .project_detail_skills>span {
    font-size: 12px;
    margin-right: 3px;
    margin-bottom: 3px;
    background-color: var(--purple);
    color: white;
    padding: 3px;
    border-radius: 3px;
}

.project_detail_description .project_img {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
}

.project_detail_description .project_img>div {
    width: 250px;
    height: 250px;
    margin-right: 10px;
    display: flex;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.project_detail_description .project_img>div img {
    width: 100%;
    height: 100%;
    object-fit: fill;
}

.project_detail_btn {
    text-align: end;
    width: 90%;
    position: absolute;
    bottom: 15px;
}

.project_detail_btn>a {
    text-decoration: none;
    color: var(--purple);
}

.project_detail_btn>a>span:first-child {
    font-size: 14px;
    margin-right: 3px;
    font-weight: bold;
}

.project_detail_btn>a>span:last-child {
    font-size: 20px;
}

.project_detail_btn>a:first-child {
    margin-right: 10px;
}
</style>
  