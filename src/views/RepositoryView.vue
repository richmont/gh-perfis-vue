<script setup>
import { defineProps, ref, reactive } from 'vue'
import RepositoryList from '../components/RepositoryList.vue'
import UserItem from '../components/UserItem.vue'
defineProps(
    {
        githubRestApiUrl: String        
    }
)

const usernameGithub = ref()
let userData = reactive({
        "login": null,
        "id": null,
        "avatar_url": null,
        "url": null,
        "html_url": null,
        "repos_url": null,
        "name": null,
        "company": null,
        "bio": null,
        "public_repos": null,
        "followers": null,
        "following": null,
        "created_at": null,
      })

const apiReposUrl = ref()
let repoData = reactive([{}])


function getRepoData(url){
repoData = [
  {
    "id": 559363474,
    "node_id": "R_kgDOIVc1kg",
    "name": "app_repo_github",
    "full_name": "richmont/app_repo_github",
    "private": false,
    "owner": {
      "login": "richmont",
      "id": 8619725,
      "node_id": "MDQ6VXNlcjg2MTk3MjU=",
      "avatar_url": "https://avatars.githubusercontent.com/u/8619725?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/richmont",
      "html_url": "https://github.com/richmont",
      "followers_url": "https://api.github.com/users/richmont/followers",
      "following_url": "https://api.github.com/users/richmont/following{/other_user}",
      "gists_url": "https://api.github.com/users/richmont/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/richmont/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/richmont/subscriptions",
      "organizations_url": "https://api.github.com/users/richmont/orgs",
      "repos_url": "https://api.github.com/users/richmont/repos",
      "events_url": "https://api.github.com/users/richmont/events{/privacy}",
      "received_events_url": "https://api.github.com/users/richmont/received_events",
      "type": "User",
      "site_admin": false
    },
    "html_url": "https://github.com/richmont/app_repo_github",
    "description": null,
    "fork": false,
    "url": "https://api.github.com/repos/richmont/app_repo_github",
    "forks_url": "https://api.github.com/repos/richmont/app_repo_github/forks",
    "keys_url": "https://api.github.com/repos/richmont/app_repo_github/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/richmont/app_repo_github/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/richmont/app_repo_github/teams",
    "hooks_url": "https://api.github.com/repos/richmont/app_repo_github/hooks",
    "issue_events_url": "https://api.github.com/repos/richmont/app_repo_github/issues/events{/number}",
    "events_url": "https://api.github.com/repos/richmont/app_repo_github/events",
    "assignees_url": "https://api.github.com/repos/richmont/app_repo_github/assignees{/user}",
    "branches_url": "https://api.github.com/repos/richmont/app_repo_github/branches{/branch}",
    "tags_url": "https://api.github.com/repos/richmont/app_repo_github/tags",
    "blobs_url": "https://api.github.com/repos/richmont/app_repo_github/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/richmont/app_repo_github/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/richmont/app_repo_github/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/richmont/app_repo_github/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/richmont/app_repo_github/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/richmont/app_repo_github/languages",
    "stargazers_url": "https://api.github.com/repos/richmont/app_repo_github/stargazers",
    "contributors_url": "https://api.github.com/repos/richmont/app_repo_github/contributors",
    "subscribers_url": "https://api.github.com/repos/richmont/app_repo_github/subscribers",
    "subscription_url": "https://api.github.com/repos/richmont/app_repo_github/subscription",
    "commits_url": "https://api.github.com/repos/richmont/app_repo_github/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/richmont/app_repo_github/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/richmont/app_repo_github/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/richmont/app_repo_github/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/richmont/app_repo_github/contents/{+path}",
    "compare_url": "https://api.github.com/repos/richmont/app_repo_github/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/richmont/app_repo_github/merges",
    "archive_url": "https://api.github.com/repos/richmont/app_repo_github/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/richmont/app_repo_github/downloads",
    "issues_url": "https://api.github.com/repos/richmont/app_repo_github/issues{/number}",
    "pulls_url": "https://api.github.com/repos/richmont/app_repo_github/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/richmont/app_repo_github/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/richmont/app_repo_github/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/richmont/app_repo_github/labels{/name}",
    "releases_url": "https://api.github.com/repos/richmont/app_repo_github/releases{/id}",
    "deployments_url": "https://api.github.com/repos/richmont/app_repo_github/deployments",
    "created_at": "2022-10-29T22:00:17Z",
    "updated_at": "2022-11-18T16:16:58Z",
    "pushed_at": "2022-12-01T23:41:09Z",
    "git_url": "git://github.com/richmont/app_repo_github.git",
    "ssh_url": "git@github.com:richmont/app_repo_github.git",
    "clone_url": "https://github.com/richmont/app_repo_github.git",
    "svn_url": "https://github.com/richmont/app_repo_github",
    "homepage": null,
    "size": 683,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": "Python",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": true,
    "has_discussions": false,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 0,
    "license": null,
    "allow_forking": true,
    "is_template": false,
    "web_commit_signoff_required": false,
    "topics": [

    ],

  }]
}

function submitUsername(){
    userData = {
  "login": "richmont",
  "id": 8619725,
  "node_id": "MDQ6VXNlcjg2MTk3MjU=",
  "avatar_url": "https://avatars.githubusercontent.com/u/8619725?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/richmont",
  "html_url": "https://github.com/richmont",
  "followers_url": "https://api.github.com/users/richmont/followers",
  "following_url": "https://api.github.com/users/richmont/following{/other_user}",
  "gists_url": "https://api.github.com/users/richmont/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/richmont/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/richmont/subscriptions",
  "organizations_url": "https://api.github.com/users/richmont/orgs",
  "repos_url": "https://api.github.com/users/richmont/repos",
  "events_url": "https://api.github.com/users/richmont/events{/privacy}",
  "received_events_url": "https://api.github.com/users/richmont/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Richelmy Monteiro",
  "company": null,
  "blog": "",
  "location": "Brazil",
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 33,
  "public_gists": 2,
  "followers": 28,
  "following": 57,
  "created_at": "2014-09-01T21:18:42Z",
  "updated_at": "2023-08-25T17:09:16Z"
}

    apiReposUrl.value = userData.repos_url
    getRepoData(apiReposUrl.value)
    
    
}



</script>

<template>
    <div class="input-username">
        <input v-model="usernameGithub" placeholder="Type github username">
        <button @click="submitUsername(usernameGithub.value);">Consultar</button>
        <button @click="console.log('Botão clicado')">registrar botão</button>
    </div>
    <div class="user-data" v-if="userData.id != undefined">
        <UserItem 
        :id="userData.id"
        :login="userData.login"
        :bio="userData.bio"
        :avatar="userData.avatar_url"
        :url="userData.html_url"
        :followers="userData.followers"
        :following="userData.following"
        :created_at="userData.created_at"
        :description="userData.description"
        />
    </div>


</template>