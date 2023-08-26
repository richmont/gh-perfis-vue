<script setup>
import { defineProps } from 'vue'

defineProps(
    {
        language: String
    }
)
</script>
<template>
    <div class="language-icon">
        {{ language }}
    </div>
</template>