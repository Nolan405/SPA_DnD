import { Character } from '../models/Character.js';
import {researchField} from '../utils/research.js';

export async function render_characters(data) {
    const app = document.querySelector('#app');
    app.innerHTML = "";

    const title = document.createElement('h1');
    title.textContent = "Choisir un Personnage";
    title.className = "dnd-title";
    app.appendChild(title);

    researchField(app)
    
    const ul = document.createElement('ul');
    ul.className = "races-grid";

    data.forEach(element => {
        const character = new Character(
            element.id, 
            element.name, 
            element.level, 
            element.race_id,
            element.class_id, 
            element.equipment_ids, 
            element.stats, 
            element.rating, 
            element.votes, 
            element.image
        );
       character.renderGenericCard(ul);
    });
    app.appendChild(ul);
}