import {gitUrl} from './variables.js';

async function getUser(usuarios){
    const usuario = await fetch(`${gitUrl}/${usuarios}`)
    return await usuario.json()
}

export {getUser}