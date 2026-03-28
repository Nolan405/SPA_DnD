import { Race } from "../models/Race.js";

export async function render_races(data) {
    const app = document.querySelector('#app');
    app.innerHTML = "";

    const title = document.createElement('h1');
    title.textContent = "Choisir une Race";
    title.className = "dnd-title";
    app.appendChild(title);

    const ul = document.createElement('ul');
    ul.className = "races-grid";

    data.forEach(element => {
        const race = new Race (
            element.id,
            element.name,
            element.description
        );
       race.renderGenericCard(ul);
    });
    app.appendChild(ul);
}