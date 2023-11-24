<template>
    <div class="TopBtn" @click="goTop">
        <font-awesome-icon :icon="['fas', 'arrow-up']" />
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

export default {
    name: 'TopButton',
    components: {
        FontAwesomeIcon
    },
    data() {
        return {
            faArrowUp
        }
    },
    methods: {
        goTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }
}
</script>
<style>
/* Top Btn */
.TopBtn {
    width: 30px;
    height: 30px;
    background-color: var(--purple);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    border-radius: 5px;
    position: fixed;
    bottom: 50px;
    right: 100px;
    cursor: pointer;
}
</style>