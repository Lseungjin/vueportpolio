<template>
    <div class="wrapper" id="Skills">
        <div class="container skills">
            <h1>Skills</h1>
            <div class="skill_wrap">
                <div class="skill_item" v-for="skill in skills" :key="skill.title">
                    <div class="item_top">
                        <span>
                            <font-awesome-icon :icon="['fas', skill.icon]" />
                        </span>
                        <span>{{ skill.title }}</span>
                    </div>
                    <div class="item_bottom">
                        <Skill v-for="name in skill.names" :key="name" :skill-name="name" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCode, faTerminal, faDatabase, faGear, faShield } from '@fortawesome/free-solid-svg-icons'
import Skill from './Skill'

export default {
    name: 'SkillsComponent',
    components: {
        FontAwesomeIcon,
        Skill
    },
    data() {
        return {
            skills: [
                { icon: 'code', title: 'Frontend', names: ['JavaScript', 'React', 'Redux'] },
                { icon: 'terminal', title: 'Backend', names: ['Java', 'Kotlin', 'Spring'] },
                { icon: 'shield', title: 'Blockchain', names: ['Blockchain', 'Solidity'] },
                { icon: 'database', title: 'DataBase', names: ['Oracle', 'mysql'] },
                { icon: 'gear', title: 'Tool', names: ['Git', 'dbeaver', 'STS'] },
            ],
            faCode,
            faTerminal,
            faDatabase,
            faGear,
            faShield
        }
    }
}
</script>

<style>
/* Skills */
.skills {
    width: 80%;
}

.skills h1 {
    font-size: var(--font-size-L);
    text-align: center;
    margin-bottom: var(--title-margin);
}

.skills .skill_wrap {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5rem;
}

.skills .skill_item .item_top {
    border-radius: 3px;
    height: 30px;
    display: flex;
    align-items: center;
    padding: 0px 10px;
}

.skills .skill_item .item_top>span:first-child {
    margin-right: 10px;
    color: var(--purple);
    font-size: 30px;
}

.skills .skill_item .item_top>span:last-child {
    font-size: 20px;
    font-weight: bold;
}

.skills .skill_item .item_bottom {
    height: 100px;
    display: flex;
    align-items: center;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);

    padding-left: 50px;
    margin: 20px 0px;
}

.SkillName {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    border-radius: 5px;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 5px 10px;
    background-color: var(--purple);
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}

.SkillName>span:first-child {
    margin-right: 10px;
}
</style>
  