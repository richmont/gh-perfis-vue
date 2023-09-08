<script setup>
import { ref, reactive } from 'vue'
import RepositoryList from '../components/RepositoryList.vue'
import UserItem from '../components/UserItem.vue'
defineProps(
    {
        githubRestApiUrl: String        
    }
)

const usernameGithub = ref('')
var userData = reactive({})

const apiReposUrl = ref()
const repoData = ref([])


function getRepoData(url){
  
  if (url == "https://api.github.com/users/richmont/repos"){
  let repoJson = [
  
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
    "visibility": "public",
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "main"
  },
  {
    "id": 188931428,
    "node_id": "MDEwOlJlcG9zaXRvcnkxODg5MzE0Mjg=",
    "name": "clappr-android",
    "full_name": "richmont/clappr-android",
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
    "html_url": "https://github.com/richmont/clappr-android",
    "description": "An extensible media player for Android.",
    "fork": true,
    "url": "https://api.github.com/repos/richmont/clappr-android",
    "forks_url": "https://api.github.com/repos/richmont/clappr-android/forks",
    "keys_url": "https://api.github.com/repos/richmont/clappr-android/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/richmont/clappr-android/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/richmont/clappr-android/teams",
    "hooks_url": "https://api.github.com/repos/richmont/clappr-android/hooks",
    "issue_events_url": "https://api.github.com/repos/richmont/clappr-android/issues/events{/number}",
    "events_url": "https://api.github.com/repos/richmont/clappr-android/events",
    "assignees_url": "https://api.github.com/repos/richmont/clappr-android/assignees{/user}",
    "branches_url": "https://api.github.com/repos/richmont/clappr-android/branches{/branch}",
    "tags_url": "https://api.github.com/repos/richmont/clappr-android/tags",
    "blobs_url": "https://api.github.com/repos/richmont/clappr-android/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/richmont/clappr-android/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/richmont/clappr-android/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/richmont/clappr-android/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/richmont/clappr-android/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/richmont/clappr-android/languages",
    "stargazers_url": "https://api.github.com/repos/richmont/clappr-android/stargazers",
    "contributors_url": "https://api.github.com/repos/richmont/clappr-android/contributors",
    "subscribers_url": "https://api.github.com/repos/richmont/clappr-android/subscribers",
    "subscription_url": "https://api.github.com/repos/richmont/clappr-android/subscription",
    "commits_url": "https://api.github.com/repos/richmont/clappr-android/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/richmont/clappr-android/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/richmont/clappr-android/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/richmont/clappr-android/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/richmont/clappr-android/contents/{+path}",
    "compare_url": "https://api.github.com/repos/richmont/clappr-android/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/richmont/clappr-android/merges",
    "archive_url": "https://api.github.com/repos/richmont/clappr-android/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/richmont/clappr-android/downloads",
    "issues_url": "https://api.github.com/repos/richmont/clappr-android/issues{/number}",
    "pulls_url": "https://api.github.com/repos/richmont/clappr-android/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/richmont/clappr-android/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/richmont/clappr-android/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/richmont/clappr-android/labels{/name}",
    "releases_url": "https://api.github.com/repos/richmont/clappr-android/releases{/id}",
    "deployments_url": "https://api.github.com/repos/richmont/clappr-android/deployments",
    "created_at": "2019-05-28T01:26:19Z",
    "updated_at": "2019-05-28T01:26:22Z",
    "pushed_at": "2019-05-23T18:27:51Z",
    "git_url": "git://github.com/richmont/clappr-android.git",
    "ssh_url": "git@github.com:richmont/clappr-android.git",
    "clone_url": "https://github.com/richmont/clappr-android.git",
    "svn_url": "https://github.com/richmont/clappr-android",
    "homepage": null,
    "size": 1919,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": "Kotlin",
    "has_issues": false,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "has_discussions": false,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 0,
    "license": {
      "key": "bsd-3-clause",
      "name": "BSD 3-Clause \"New\" or \"Revised\" License",
      "spdx_id": "BSD-3-Clause",
      "url": "https://api.github.com/licenses/bsd-3-clause",
      "node_id": "MDc6TGljZW5zZTU="
    },
    "allow_forking": true,
    "is_template": false,
    "web_commit_signoff_required": false,
    "topics": [

    ],
    "visibility": "public",
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "dev"
  }]
    repoData.value.push(repoJson)
  } else{
    console.log("Repos invalidos")
  }
}

function submitUsername(usuario){
  if (usuario=="richmont"){
    let jsonUser =  {
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
    }
    userData.id = jsonUser.id
    userData.login = jsonUser.login
    userData.avatar_url = jsonUser.avatar_url    
    userData.url = jsonUser.url    
    userData.html_url = jsonUser.html_url    
    userData.repos_url = jsonUser.repos_url
    userData.name = jsonUser.name    
    userData.company = jsonUser.company
    userData.bio = jsonUser.bio
    userData.public_repos = jsonUser.public_repos
    userData.followers = jsonUser.followers
    userData.following = jsonUser.following
    userData.created_at = jsonUser.created_at


    apiReposUrl.value = userData.repos_url
    getRepoData(apiReposUrl.value)
}else{
  // limpa os atributos da variável
    userData.id = null
    userData.login = null
    userData.avatar_url = null
    userData.url = null
    userData.html_url = null
    userData.repos_url = null
    userData.name = null
    userData.company = null
    userData.bio = null
    userData.public_repos = null
    userData.followers = null
    userData.following = null
    userData.created_at = null
    console.log("usuário inválido")
}
    
}
</script>

<template>
  <div class="input-username">
        <input @keydown.enter="submitUsername(usernameGithub)" v-model="usernameGithub" placeholder="Type github username">
        <button @click="submitUsername(usernameGithub);">Consultar</button>
    </div>
  <div class="container-data">
    
    <div class="user-data" v-if="userData.id != null">
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
    
    <div class="repositories" v-if="repoData.length > 0">
      
      <RepositoryList :repoList="repoData[0]"/>
    </div>
  </div>
</template>
<style>
.input-username{
  margin-bottom: 2px;
}
.container-data, .input-username{
  display: flex
}
.container-data{
  flex-direction: row;
  justify-content: left;
}
.input-username{
  justify-content: center;
  padding: 2px;
}

.user-data, .repository{
  border-style: groove;
  border-radius: 5px;
  
  height: fit-content;
  flex-direction: column;
  padding: 5px;
}
.user-data{
width: 30%;
}

.repositories{
  
}
</style>