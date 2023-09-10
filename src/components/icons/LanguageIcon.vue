<script setup>
import { defineProps } from 'vue'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faJava, faPython, faPhp, faHtml5, faVuejs } from "@fortawesome/free-brands-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";

library.add(faJava, faPython, faPhp, faVuejs, faHtml5, faDesktop);

defineProps(
    {
        language: String,
        faLanguage: String
    }
)

function setIcon(lang){
    switch (lang){
        case 'Python':
            return "fa-brands fa-python"
            break;
        case 'Java':
            return "fa-brands fa-java";
            break;
        case 'PHP':
            return "fa-brands fa-php";
            break;
        case 'Vue':
            return "fa-brands fa-vuejs";
            break;
        case 'HTML':
            return "fa-brands fa-html5";
            break;
        default:
            return "fa-solid fa-desktop";
            break;
    }
}

</script>
<template>
    <div class="language-icon">
        <font-awesome-icon :icon="setIcon(language)" />
        {{ language }}
    </div>
</template>
<style>
.language-icon{
    font-size: 30px;
}
</style>