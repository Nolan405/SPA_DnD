import { Classe } from "../models/Classe.js";


export async function render_single_classe(data) {
    const app = document.querySelector('#app');
    app.innerHTML = "";

    const backBtn = document.createElement('a');
    backBtn.href = "#/classes/";
    backBtn.textContent = "← Retour aux Classes";
    backBtn.className = "back-button"; 
    app.appendChild(backBtn);

    const classe = new Classe (
        data.id, 
        data.name, 
        data.hit_die, 
        data.primary_ability
    );
    classe.renderDetailCard(app);
}