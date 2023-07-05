const screen = {
    userProfile: document.querySelector(".profile"),
    fd: document.querySelector(".lol"),
    screenUser(user, events){
        this.userProfile.innerHTML = `<img src="${user.avatarUrl}" alt="imagem do usuario">
                         <h1>${user.name ?? "O usuario não foi encontrado."}</h1>
                           <p>${user.bio ?? "A bio não foi encontrada."}</p>
                           <h3>${user.following} following 👤</h3>
                           <h3>${user.followers} followers 👥</h3>
     `
     let itensrepositorios = ""

     user.repositorios.forEach(element => {
        itensrepositorios += `<li class="repo"><a href="${element.html_url}" target="_blank">${element.name}</a><span>🍴${element.forks}</span><span>⭐${element.stargazers_count}</span><span>👀${element.watchers}</span><span>👩‍💻${element.language ?? "Não informado"}</span></li>`
    });
    this.userProfile.innerHTML += `<ul>${itensrepositorios}</ul>`

    let itens = ''
    events.forEach(element => {
        itens += `<li class="events"><a href="${element.repo.url}" target="_blank">${element.repo.name} - ${element.payload.description ?? "Não há descrição"}</li>`
    });
    if (itens.length === 0) {
        return
    }else{
        this.userProfile.innerHTML += ` <h2>Eventos recentes:</h2>
                                    <ul>${itens}</ul>`
    }
    
     },
    userNotFound(){
        this.userProfile.innerHTML = "<h1>Usuario não foi encontrado.</h1>"
    }
}

export {screen}