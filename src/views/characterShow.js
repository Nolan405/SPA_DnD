import { Character } from '../models/Character.js';


export async function render_single_character(data) {
    const app = document.querySelector('#app');
    app.innerHTML = "";

    const backBtn = document.createElement('a');
    backBtn.href = "#/characters/";
    backBtn.textContent = "← Retour aux Personnages";
    backBtn.className = "back-button"; 
    app.appendChild(backBtn);

    const character = new Character(
        data.id, 
        data.name, 
        data.level, 
        data.race_id,
        data.class_id, 
        data.equipment_ids, 
        data.stats, 
        data.rating, 
        data.votes, 
        data.image
    );
    character.renderDetailCard(app);   
}