export async function render_equipments(data) {
    const app = document.querySelector('#app');
    app.innerHTML = "";

    const title = document.createElement('h1');
    title.textContent = "Choisir un Équipement";
    title.className = "dnd-title";
    app.appendChild(title);

    const ul = document.createElement('ul');
    ul.className = "races-grid";

    data.forEach(element => {
        const li = document.createElement('li');
        li.className = "race-card";

        const a = document.createElement('a');
        a.href = `#/equipments/${element.id}/`;
        a.innerHTML = `<span class="scroll-icon">📜</span> ${element.name}`;

        li.appendChild(a);
        ul.appendChild(li);
    });
    app.appendChild(ul);
}