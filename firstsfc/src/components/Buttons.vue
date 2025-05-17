<template>
    
    <div class="button-component">
    <button class="vue-js-btn" @click="playVueJs"><i class="ri-play-large-fill">&nbsp;&nbsp;</i>WHY VUE.JS?</button>
    <button class="vue-getstart-btn">GET STARTED</button>
    <button class="vue-github-btn"><i class="ri-github-fill">&nbsp;&nbsp;</i>GITHUB</button>
</div>
</template>
<style>
.button-component{
    margin-top: 20px;;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 25px;
    position: absolute;
    top:65px;
    bottom: auto;
}
.vue-js-btn{
    width: 160px;
    height: 45px;
    background-color: #50bf8e;
    border: none;
    border-radius: 25px;
    color:white;
    font-weight: 600;
}
.vue-js-btn:hover{
    cursor:pointer;
}
.vue-getstart-btn{
    width: 160px;
    height: 45px;
    background-color: white;
    border: 2px solid #50bf8e ;
    border-radius: 25px;
    color:#50bf8e;
    font-weight: 600;
}
.vue-github-btn{
    width: 140px;
    height: 45px;
    background-color: #f5f5f5;
    border: none;
    color:#888282;
       border-radius: 25px;
    font-weight: 600;
    
}
</style>
<script>
export default {
    data(){
        return{
            playVueJs:"https://www.youtube.com/watch?v=xbYNE_WAWIY&t=91s"
        }
    },
}
</script>