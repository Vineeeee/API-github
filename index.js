import {gitUrl} from './variables.js';
import { getUser } from "./users.js";
import { repos } from "./repositories.js";
import {usuario} from "./user.js"
import {screen} from "./screen.js";
import {eventUser} from './events.js';

document.querySelector("button").addEventListener("click", ()=>{
    const campoBusca = document.getElementById("busca").value 
    if (campoBusca.length === 0) {
        alert("preencha o campo")
        return
    }
        j(campoBusca)

    
})

document.getElementById("busca").addEventListener("keyup", (e)=>{
    const valor = e.target.value
    const key = e.which || e.keyCode
    const enter = key === 13
    if (enter) {
        const campoBusca = document.getElementById("busca").value 
    if (campoBusca.length === 0) {
        alert("preencha o campo")
        return
    }
        j(valor)
    }
})

async function j(usuarios){
    const l = await eventUser(usuarios)
    console.log(l);
    const userResponse = await getUser(usuarios)
    if (userResponse.message === "Not Found") {
        screen.userNotFound()
        return
    }
    const repositoriesResponse = await repos(usuarios)
    console.log(repositoriesResponse);
    usuario.setUser(userResponse)
    usuario.setRepositories(repositoriesResponse)
    screen.screenUser(usuario,l)
}
