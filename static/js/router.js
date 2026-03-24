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
    const path = location.hash;
    
    if (path.startsWith('#/races/') && path.split('/').length >= 4) {
        RaceShow();
        return;
    } else if (path.startsWith('#/classes/') && path.split('/').length >= 4) {
        ClasseShow();
        return;
    } else if (path.startsWith('#/equipments/') && path.split('/').length >= 4) {
        EquipmentShow();
        return;
    } else if (path.startsWith('#/characters/') && path.split('/').length >= 4) {
        CharacterShow();
        return;
    }

    const view = routes[path];
    if (view) {
        view();
    } 
}

window.addEventListener('load', router);
window.addEventListener('hashchange', router);