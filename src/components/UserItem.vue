<script setup>
import { defineProps } from 'vue'
import UserAvatar from './icons/UserAvatar.vue'

defineProps(
    {
        id: Number,
        login: String,
        bio: String,
        avatar: String,
        url: String,
        followers: Number,
        following: Number,
        created_at: String,
        description: String

    }
)
</script>
<template>
    <div class="user-item">
        <p>id: {{ id }}</p>
        <p>login: {{ login }}</p>
        <p>bio: {{ bio }}</p>
        <UserAvatar :avatar_url="avatar" />
        <p>url: {{ url }}</p>
        <p>description: {{ description }}</p>
        
    </div>

</template>