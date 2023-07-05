import {gitUrl} from './variables.js';

async function repos(usuarios){
    const usuario = await fetch(`${gitUrl}/${usuarios}/repos`)
    return await usuario.json()
}

export {repos}