import { Character } from '../models/Character.js';
import { researchField } from '../utils/research.js';
import { renderPaginatedList } from '../utils/pagination.js';

export async function render_characters(data) {
    const app = document.querySelector('#app');
    app.innerHTML = "";

    const title = document.createElement('h1');
    title.textContent = "Choisir un Personnage";
    title.className = "dnd-title";
    app.appendChild(title);

    const listContainer = document.createElement('div');
    app.appendChild(listContainer);

    const renderCharacters = (items) => {
        listContainer.innerHTML = '';
        renderPaginatedList(listContainer, items, {
            pageSize: 8,
            renderItem: (element, list) => {
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
               character.renderGenericCard(list);
            }
        });
    };

    renderCharacters(data);

    researchField(app, (query) => {
        const searchTerm = query.trim().toUpperCase();
        const filteredData = data.filter((element) => {
            return element.name.toUpperCase().includes(searchTerm);
        });
        renderCharacters(filteredData);
    }, "Rechercher un personnage");
}