<style src="./App.css"></style>
<template>
    <div class="intro_img">
        <img :src="imgUrl" />
    </div>
</template>

<script>
export default {
    name: 'IntroImage',
    data() {
        return {
            imgUrl: ref(require('@/assets/img1.jpg'))
        }
    }
}
</script>
  
