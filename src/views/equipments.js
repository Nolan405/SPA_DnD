import { Equipment } from "../models/Equipment.js";
import {researchField} from '../utils/research.js';

export async function render_equipments(data) {
    const app = document.querySelector('#app');
    app.innerHTML = "";

    const title = document.createElement('h1');
    title.textContent = "Choisir un Équipement";
    title.className = "dnd-title";
    app.appendChild(title);

    researchField(app)
    
    const ul = document.createElement('ul');
    ul.className = "races-grid";

    data.forEach(element => {
        const equipment = new Equipment (
            element.id, 
            element.name, 
            element.type, 
            element.damage,
            element.weight
        );
       equipment.renderGenericCard(ul);
    });
    app.appendChild(ul);
}