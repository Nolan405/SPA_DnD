async function render_single_race(data) {
    const app = document.querySelector('#app');
    app.innerHTML = "";

    const backBtn = document.createElement('a');
    backBtn.href = "#/races/";
    backBtn.textContent = "← Retour aux Races";
    backBtn.className = "back-button"; 
    app.appendChild(backBtn);

    const section = document.createElement('section');
    section.classList.add('parchment-container');

    const h1 = document.createElement('h1');
    h1.textContent = data.name;
    h1.classList.add('dnd-title');

    const p = document.createElement('p');
    p.textContent = data.description; 
    p.classList.add('dnd-text');

    section.appendChild(h1);
    section.appendChild(p);
    app.appendChild(section);
}