import { Equipment } from "../models/Equipment.js";
import { researchField } from '../utils/research.js';
import { renderPaginatedList } from '../utils/pagination.js';

export async function render_equipments(data) {
    const app = document.querySelector('#app');
    app.innerHTML = "";

    const title = document.createElement('h1');
    title.textContent = "Choisir un Équipement";
    title.className = "dnd-title";
    app.appendChild(title);

    const listContainer = document.createElement('div');
    app.appendChild(listContainer);

    const renderEquipments = (items) => {
        listContainer.innerHTML = '';
        renderPaginatedList(listContainer, items, {
            pageSize: 8,
            renderItem: (element, list) => {
                const equipment = new Equipment (
                    element.id, 
                    element.name, 
                    element.type, 
                    element.damage,
                    element.weight
                );
               equipment.renderGenericCard(list);
            }
        });
    };

    renderEquipments(data);

    researchField(app, (query) => {
        const searchTerm = query.trim().toUpperCase();
        const filteredData = data.filter((element) => {
            return element.name.toUpperCase().includes(searchTerm);
        });
        renderEquipments(filteredData);
    }, "Rechercher un équipement");
}