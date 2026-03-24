const routes = {
    '#/'                   : Home,
    // '#/characters/'        : Characters,
    // '#/characters/:id/'    : CharacterShow,
    '#/classes/'           : classes,
    '#/classes/:id/'       : classeShow,
    // '#/equipements/'       : Equipements,
    // '#/equipements/:id/'   : EquipementShow,
    '#/races/'             : Races,
    '#/races/:id/'         : RaceShow
}

const router = async () => {
    const path = location.hash;
    
    if (path.startsWith('#/races/') && path.split('/').length >= 4) {
        RaceShow();
        return;
    } else if (path.startsWith('#/classes/') && path.split('/').length >= 4) {
        classeShow();
        return;
    }

    const view = routes[path];
    if (view) {
        view();
    } 
}

window.addEventListener('load', router);
window.addEventListener('hashchange', router);