import { Race } from "../models/Race.js";
import { researchField } from '../utils/research.js';
import { renderPaginatedList } from '../utils/pagination.js';
export async function render_races(data) {
    const app = document.querySelector('#app');
    app.innerHTML = "";

    const title = document.createElement('h1');
    title.textContent = "Choisir une Race";
    title.className = "dnd-title";
    app.appendChild(title);

    const listContainer = document.createElement('div');
    app.appendChild(listContainer);

    const renderRaces = (items) => {
        listContainer.innerHTML = '';
        renderPaginatedList(listContainer, items, {
            pageSize: 8,
            renderItem: (element, list) => {
                const race = new Race (
                    element.id,
                    element.name,
                    element.description
                );
               race.renderGenericCard(list);
            }
        });
    };

    renderRaces(data);

    researchField(app, (query) => {
        const searchTerm = query.trim().toUpperCase();
        const filteredData = data.filter((element) => {
            return element.name.toUpperCase().includes(searchTerm);
        });
        renderRaces(filteredData);
    }, "Rechercher une race");
}