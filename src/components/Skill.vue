<template>
    <span class="SkillName">
        <span>
            <font-awesome-icon :icon="skillIcon" />
        </span>
        <span>
            {{ skillName }}
        </span>
    </span>
</template>
  
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faJava, faEthereum, faAndroid, faJs, faReact, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLeaf, faOtter, faStore, faServer, faHardDrive, faShield } from '@fortawesome/free-solid-svg-icons'

export default {
    name: 'SkillComponent',
    components: {
        FontAwesomeIcon
    },
    props: ['skillName'],
    computed: {
        skillIcon() {
            switch (this.skillName) {
                case 'Blockchain':
                    return faShield
                case 'Kotlin':
                    return faAndroid
                case 'JavaScript':
                    return faJs
                case 'React':
                    return faReact
                case 'Git':
                    return faGithub
                case 'Oracle':
                    return faServer
                case 'dbeaver':
                    return faOtter
                case 'Redux':
                    return faStore
                case 'Java':
                    return faJava
                case 'Spring':
                    return faLeaf
                case 'STS':
                    return faLeaf
                case 'mysql':
                    return faHardDrive
                case 'Solidity':
                    return faEthereum
                default:
                    return null
            }
        }
    }
}
</script>
  