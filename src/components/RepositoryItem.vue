<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { defineProps } from 'vue'
import LanguageIcon from './icons/LanguageIcon.vue'


import { library } from "@fortawesome/fontawesome-svg-core";
import { faSquareCheck, faBan } from "@fortawesome/free-solid-svg-icons";

library.add(faSquareCheck, faBan);

defineProps(
    {
        id: Number,
        name: String,
        url: String,
        description: String,
        archived: Boolean,
        disabled: Boolean,
        language: String
    }
)
</script>
<template>
    <div class="repo">
        <ul>
            <li>id: {{ id }}</li>
            <li>name: {{ name }}</li>
            <li>url: {{ url }}</li>
            <li>description: {{ description }}</li>
        </ul>
        <div class="metadata-repo-container">
            <p v-if="archived">archived: <font-awesome-icon icon="fa-solid fa-square-check" /> </p>
            <p v-else>archived: <font-awesome-icon icon="fa-solid fa-ban" /> </p>

            <p v-if="disabled">disabled: <font-awesome-icon icon="fa-solid fa-square-check" /> </p>
            <p v-else>disabled: <font-awesome-icon icon="fa-solid fa-ban" /> </p>

            <div class="lang-icon-container">language: <LanguageIcon :language="language"/></div>
        </div>
    </div>
</template>
<style>

.repo{
    display:flex;
    padding-bottom: 5px;
    border-bottom-style: groove;
    max-width: 90%;
    justify-content: space-between;
}
.metadata-repo-container{
    align-self: flex-end;
    padding-right: 5px;
}

ul {
  list-style-type: none;
}
</style>

