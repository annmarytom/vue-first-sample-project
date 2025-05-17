<template>
    <div class="progressivecomp">
        <p>The Progressive<br> Javascript Framework</p>
        <br>
        <buttons />
    </div>

</template>
<style>
.progressivecomp {
    width: 70%;
    position: relative;
}

.progressivecomp p {
    position: absolute;
    bottom: -32px;
    font-size: 45px;
    font-family: 'system-ui';


}
</style>
<script>

import Buttons from './Buttons.vue';
export default {
    components: { Buttons },

}
</script>