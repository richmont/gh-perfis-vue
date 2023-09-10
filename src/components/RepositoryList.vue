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
        <div class="repository-item" v-for="repo in repoList" :key="repo.id">
            <RepositoryItem 
            :id="repo.id" 
            :name="repo.name"
            :url="repo.html_url"
            :description="repo.description"
            :archived="repo.archived"
            :disabled="repo.disabled"
            :language="repo.language"
            />
        </div>
    </div>
</template>
<style>
.repository-list{
    display: flex;
    flex-direction: column;
    padding-left: 30px;
}

</style>