<script setup>
import { defineProps } from 'vue'
defineProps(
    {
        avatar_url: String
    }
)
</script>
<template>
    <div class="user-avatar">
        <img v-bind:src="avatar_url" />
    </div>

</template>