let usuario = {
    name: '',
    repositorios: [],
    avatarUrl: '',
    apelido: '',
    bio: '',
    following: '',
    followers: '',
    setUser(param){
        this.name = param.name
        this.bio = param.bio
        this.avatarUrl = param.avatar_url
        this.apelido = param.login
        this.followers = param.followers
        this.following = param.following
    },
    setRepositories(repositories){
        this.repositorios = repositories
    }
}

export {usuario}