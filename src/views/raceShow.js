import { Race } from "../models/Race.js";

export async function render_single_race(data) {
    const app = document.querySelector('#app');
    app.innerHTML = "";

    const backBtn = document.createElement('a');
    backBtn.href = "#/races/";
    backBtn.textContent = "← Retour aux Races";
    backBtn.className = "back-button"; 
    app.appendChild(backBtn);

    const race = new Race (
        data.id, 
        data.name, 
        data.description 
    );
    race.renderDetailCard(app);
}