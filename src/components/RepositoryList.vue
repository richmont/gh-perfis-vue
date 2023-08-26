<script setup>
import { defineProps } from 'vue'
import RepositoryItem from './RepositoryItem.vue'
defineProps(
    {
        repoList: Array
    }
)
</script>

<template>
    <div class="repository-list">
        <div v-for="repo in repoList" :key="repo.id">
            <RepositoryItem 
            :id="repo.id" 
            :name="repo.name"
            :url="repo.url"
            :description="repo.description"
            :archived="repo.archived"
            :disabled="repo.disabled"
            :language="repo.language"
            />
        </div>
    </div>
</template>