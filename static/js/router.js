const routes = {
    '#/'                   : Home,
    // '#/characters/'        : Characters,
    // '#/characters/:id/'    : CharacterShow,
    // '#/classes/'           : classes,
    // '#/classes/:id/'       : classeShow,
    // '#/equipements/'       : Equipements,
    // '#/equipements/:id/'   : EquipementShow,
    '#/races/'             : Races,
    // '#/races/:id/'         : RaceShow
}

const router = async () => {
    const path = location.hash;
    
    // if (path.startsWith('#/articles/') && path.split('/').length >= 4) {
    //     ArticleShow();
    //     return;
    // }

    const view = routes[path];
    if (view) {
        view();
    } 
}

window.addEventListener('load', router);
window.addEventListener('hashchange', router);