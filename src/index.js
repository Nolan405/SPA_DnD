import { 
    Home, 
    Characters, 
    CharacterShow, 
    Classes, 
    ClasseShow, 
    Equipments, 
    EquipmentShow, 
    Races, 
    RaceShow 
} from './utils/fetch.js';

const routes = {
    '#/'                   : Home,
    '#/characters/'        : Characters,
    '#/characters/:id/'    : CharacterShow,
    '#/classes/'           : Classes,
    '#/classes/:id/'       : ClasseShow,
    '#/equipments/'        : Equipments,
    '#/equipments/:id/'    : EquipmentShow,
    '#/races/'             : Races,
    '#/races/:id/'         : RaceShow
}

const router = async () => {
    const hash = location.hash || '#/';
    let view = routes[hash];

    // Pour passer de '#/equipments/1/' à '#/equipments/:id/'
    if (!view) {
        const urlSep = hash.split('/');

        if (urlSep.length >= 3 && urlSep[2] !== "") {
            const resource = urlSep[1];
            const newRoute = `#/${resource}/:id/`; 
            view = routes[newRoute];
        }
    }
    if (view) {
        view();
    } 
}

window.addEventListener('load', router);
window.addEventListener('hashchange', router);