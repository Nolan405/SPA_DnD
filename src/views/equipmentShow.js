import { Equipment } from "../models/Equipment.js";

export async function render_single_equipment(data) {
    const app = document.querySelector('#app');
    app.innerHTML = "";

    const backBtn = document.createElement('a');
    backBtn.href = "#/equipments/";
    backBtn.textContent = "← Retour aux Équipements";
    backBtn.className = "back-button"; 
    app.appendChild(backBtn);

    const equipment = new Equipment (
        data.id, 
        data.name, 
        data.type, 
        data.damage,
        data.weight
    );
    equipment.renderDetailCard(app);
}