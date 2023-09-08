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
        <p class="user-id">id: {{ id }}</p>
        <p class="user-login">login: {{ login }}</p>
        <p class="user-bio">bio: {{ bio }}</p>
        <UserAvatar :avatar_url="avatar" />
        <p class="user-url">url: {{ url }}</p>
        <p class="user-description">description: {{ description }}</p>
        
    </div>

</template>
<style>
.user-item{
    align-content: space-around;
    
}
</style>