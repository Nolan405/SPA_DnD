export async function render_single_classe(data) {
    const app = document.querySelector('#app');
    app.innerHTML = "";

    const backBtn = document.createElement('a');
    backBtn.href = "#/classes/";
    backBtn.textContent = "← Retour aux Classes";
    backBtn.className = "back-button"; 
    app.appendChild(backBtn);

    const section = document.createElement('section');
    section.classList.add('parchment-container');

    const h1 = document.createElement('h1');
    h1.textContent = data.name;
    h1.classList.add('dnd-title');

    const p1 = document.createElement('p');
    p1.textContent = "Dé de Vie : " + data.hit_die; 
    p1.classList.add('dnd-text');

    const p2 = document.createElement('p');
    p2.textContent = "Attribut Principal : " + data.primary_ability; 
    p2.classList.add('dnd-text');

    section.appendChild(h1);
    section.appendChild(p1);
    section.appendChild(p2);
    app.appendChild(section);
}