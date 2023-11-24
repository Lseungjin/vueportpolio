<template>
    <div class="wrapper" id="Portfolio">
        <div class="container portfolio">
            <h1>Portfolio</h1>

            <!-- Team Project Section -->
            <div class="team_project project">
                <h2>Team Project</h2>
                <div class="project_wrap">
                    <div class="porject_item" v-for="project in teamProjects" :key="project.name">
                        <div class="project_img">
                            <img :src="project.imgSrc" :alt="project.name" />
                        </div>
                        <div class="porject_description">
                            <div>
                                <span>{{ project.name }}</span>
                                <span>{{ project.description }}</span>
                            </div>
                            <div>
                                <button @click="modelOpen(project.name)">
                                    프로젝트 설명_
                                    <font-awesome-icon :icon="['fas', 'search']" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <Model v-if="modelIsOpen" :project="targetProject" @modelClose="closeModel" />
                </div>
            </div>

            <!-- Solo Project Section -->
            <div class="solo_project project">
                <h2>Solo Project</h2>
                <div class="project_wrap">
                    <div class="porject_item" v-for="project in soloProjects" :key="project.name">
                        <div class="project_img">
                            <img :src="project.imgSrc" :alt="project.name" />
                        </div>
                        <div class="porject_description">
                            <div>
                                <span>{{ project.name }}</span>
                                <span>{{ project.description }}</span>
                            </div>
                            <div>
                                <button @click="modelOpen(project.name)">
                                    프로젝트 설명_
                                    <font-awesome-icon :icon="['fas', 'search']" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Model v-if="modelIsOpen" :project="targetProject" @modelClose="closeModel" />
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSearch  } from '@fortawesome/free-solid-svg-icons'
import Model from './model'
import { ref } from 'vue' 

export default {
    name: 'PortfolioComponent',
    components: {
        FontAwesomeIcon,
        Model
    },
    setup() { 
        return {
            image1: ref(require('@/assets/img/project/withsports - reserve.png')),
            image2: ref(require('@/assets/img/project/withsports - blockchain.png')),
            image3: ref(require('@/assets/img/project/kotlin.png')),
            image4: ref(require('@/assets/img/project/house-rental.png')),
        }
    },
    data() {
        return {
            // Team projects
            teamProjects: [
                {
                    name: 'WithsportsReserve',
                    description: '블록체인 기반 스포츠매칭서비스(예약서비스부분)',
                    imgSrc: this.image1,
                    gitUrl: 'https://github.com/Lseungjin/withsports-reserve'
                },
                {
                    name: 'WithsportsBlockchain',
                    description: '블록체인 기반 스포츠매칭서비스(블록체인부분)',
                    imgSrc: this.image2,
                    gitUrl: 'https://github.com/Lseungjin/withsports-blockchain'
                }
            ],
            // Solo projects
            soloProjects: [
                {
                    name: 'Kotlin',
                    description: 'Kotlin 실습',
                    imgSrc: this.image3,
                    gitUrl: 'https://github.com/Lseungjin/Kotlin'
                },
                {
                    name: 'HouseRental',
                    description: '블록체인 - HouseRental',
                    imgSrc: this.image4,
                    gitUrl: 'https://github.com/Lseungjin/house-rental'
                }
            ],
            modelIsOpen: false,
            targetProject: null,
            faSearch
        }
    },
    methods: {
        goDetail(target) {
            const project = this.projects.find(p => p.name === target)
            if (project) {
                window.open(project.gitUrl, '_blank')
            }
        },
        modelOpen(project) {
            this.modelIsOpen = true
            this.targetProject = project
            const portfolio = document.getElementById('Portfolio')
            portfolio.scrollIntoView({ behavior: 'smooth' })
            document.body.classList.add('scroll-locked')
        },
        closeModel() {
            this.modelIsOpen = false
            document.body.classList.remove('scroll-locked')
        }
    }
}
</script>


<style>
/* portfolio */
.portfolio {
    width: 80%;
    position: relative;
}

.portfolio h1 {
    font-size: var(--font-size-L);
    margin-bottom: var(--title-margin);
    text-align: center;
}

.portfolio .project h2 {
    background-color: var(--purple);
    color: white;
    border-radius: 5px;
    width: 180px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0;
    font-size: 20px;
}

.portfolio .team_project {
    margin-bottom: 50px;
}

.portfolio .project .project_wrap {
    display: flex;
    justify-content: space-between;
}

.portfolio .project .porject_item {
    display: flex;
    width: 48%;
}

.portfolio .porject_item .project_img {
    width: 200px;
    height: 200px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    margin-right: 15px;
}

.portfolio .porject_item .project_img img {
    width: 100%;
    height: 100%;
}

.portfolio .porject_item .porject_description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    display: flex;
    width: 52%;
}

.portfolio .porject_description>div {
    display: flex;
    flex-direction: column;
}

.portfolio .porject_item .porject_description>div:first-child {
    height: 80%;
}

.portfolio .porject_description>div>span:nth-child(1) {
    font-size: var(--font-size-M);
    font-weight: bold;
    color: var(--purple);
}

.portfolio .porject_description>div>span:nth-child(2) {
    font-size: var(--font-size-s);
    color: var(--font-secondary-color);
    margin-top: 10px;
    flex-grow: 1;
}

.portfolio .porject_item .porject_description>div:last-child {
    display: inline-block;
    text-align: end;
}

.portfolio .porject_item .porject_description button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: var(--purple);
}
</style>
  