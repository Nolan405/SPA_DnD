import { Character } from '../models/Character.js';
import { Classe } from '../models/Classe.js';
import { Equipment } from '../models/Equipment.js';
import { Race } from '../models/Race.js';

export async function render_favorites(data) {
    console.log("test")
    const app = document.querySelector('#app');
    app.innerHTML = "";

    const title = document.createElement('h1');
    title.textContent = "Mes Favoris";
    title.className = "dnd-title";
    app.appendChild(title);

    console.log(data);

    const ul = document.createElement('ul');
    ul.className = "races-grid";

    data["characters"].forEach(element => {
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
        if (character.inFavorites()) {    
            character.renderGenericCard(ul);
        }
    });

    data["classes"].forEach(element => {
        const classe = new Classe (
            element.id, 
            element.name, 
            element.hit_die, 
            element.primary_ability
        ); 
        if (classe.inFavorites()) {    
            classe.renderGenericCard(ul);
        }
    });

    data["equipments"].forEach(element => {
        const equipment = new Equipment (
            element.id, 
            element.name, 
            element.type, 
            element.damage,
            element.weight
        );
        if (equipment.inFavorites()) {    
            equipment.renderGenericCard(ul);
        }
    });

    data["races"].forEach(element => {
        const race = new Race (
            element.id,
            element.name,
            element.description
        );
        if (race.inFavorites()) {    
            race.renderGenericCard(ul);
        }
    });
    app.appendChild(ul);
}