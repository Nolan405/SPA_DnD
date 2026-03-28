export async function render_single_equipment(data) {
    const app = document.querySelector('#app');
    app.innerHTML = "";

    const backBtn = document.createElement('a');
    backBtn.href = "#/equipments/";
    backBtn.textContent = "← Retour aux Équipements";
    backBtn.className = "back-button"; 
    app.appendChild(backBtn);

    const section = document.createElement('section');
    section.classList.add('parchment-container');

    const h1 = document.createElement('h1');
    h1.textContent = data.name;
    h1.classList.add('dnd-title');

    const p1 = document.createElement('p');
    p1.textContent = "Type : " + data.type; 
    p1.classList.add('dnd-text');

    const p2 = document.createElement('p');
    p2.textContent = "Dommage : " + data.damage; 
    p2.classList.add('dnd-text');

    const p3 = document.createElement('p');
    p3.textContent = "Poids : " + data.weight; 
    p3.classList.add('dnd-text');

    section.appendChild(h1);
    section.appendChild(p1);
    section.appendChild(p2);
    section.appendChild(p3);
    app.appendChild(section);
}