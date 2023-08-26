<script setup>
import { defineProps } from 'vue'
import LanguageIcon from './icons/LanguageIcon.vue'
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
    <div class="repository-item">
        <p>id: {{ id }}</p>
        <p>name: {{ name }}</p>
        <p>url: {{ url }}</p>
        <p>description: {{ description }}</p>
        <p>archived: {{ archived }}</p>
        <p>disabled: {{ disabled }}</p>
        <p>language: <LanguageIcon :language="language"/></p>
    </div>

</template>