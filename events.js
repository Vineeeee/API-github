import {gitUrl} from './variables.js';

async function eventUser(usuarios){
    const usuario = await fetch(`${gitUrl}/${usuarios}/events?per_page=10`)
    return await usuario.json()
}

export {eventUser}