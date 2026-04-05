import { Character } from '../models/Character.js';
import { Classe } from '../models/Classe.js';
import { Equipment } from '../models/Equipment.js';
import { Race } from '../models/Race.js';
import { researchField } from '../utils/research.js';
import { renderPaginatedList } from '../utils/pagination.js';

export async function render_favorites(data) {
    const app = document.querySelector('#app');
    app.innerHTML = "";

    const title = document.createElement('h1');
    title.textContent = "Mes Favoris";
    title.className = "dnd-title";
    app.appendChild(title);

    const favorites = [];

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
            favorites.push({
                type: 'character',
                name: element.name,
                render(list) {
                    character.renderGenericCard(list);
                }
            });
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
            favorites.push({
                type: 'class',
                name: element.name,
                render(list) {
                    classe.renderGenericCard(list);
                }
            });
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
            favorites.push({
                type: 'equipment',
                name: element.name,
                render(list) {
                    equipment.renderGenericCard(list);
                }
            });
        }
    });

    data["races"].forEach(element => {
        const race = new Race (
            element.id,
            element.name,
            element.description
        );
        if (race.inFavorites()) {
            favorites.push({
                type: 'race',
                name: element.name,
                render(list) {
                    race.renderGenericCard(list);
                }
            });
        }
    });

    const listContainer = document.createElement('div');
    app.appendChild(listContainer);

    const renderFavorites = (items) => {
        listContainer.innerHTML = '';
        renderPaginatedList(listContainer, items, {
            pageSize: 8,
            renderItem: (element, list) => {
                element.render(list);
            }
        });
    };

    renderFavorites(favorites);

    researchField(app, (query) => {
        const searchTerm = query.trim().toUpperCase();
        const filteredFavorites = favorites.filter((element) => {
            return element.name.toUpperCase().includes(searchTerm);
        });
        renderFavorites(filteredFavorites);
    }, "Rechercher un favori");
}