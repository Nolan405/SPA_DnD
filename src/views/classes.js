import { Classe } from "../models/Classe.js";
import {researchField} from '../utils/research.js';

export async function render_classes(data) {
    const app = document.querySelector('#app');
    app.innerHTML = "";

    const title = document.createElement('h1');
    title.textContent = "Choisir une Classe";
    title.className = "dnd-title";
    app.appendChild(title);

    researchField(app)

    const ul = document.createElement('ul');
    ul.className = "races-grid";

    data.forEach(element => {
        const classe = new Classe (
            element.id, 
            element.name, 
            element.hit_die, 
            element.primary_ability
        );
       classe.renderGenericCard(ul);
    });
    app.appendChild(ul);
}