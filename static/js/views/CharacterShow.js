function generateTable(data) {
    const table = document.createElement("table");
    table.className = "dnd-stats-table"; 
    const tableBody = document.createElement("tbody");

    Object.entries(data).forEach(([key, value]) => {
        const ligne = document.createElement("tr");

        const celluleName = document.createElement("td");
        celluleName.textContent = key.toUpperCase();
        celluleName.style.fontWeight = "bold";
        celluleName.style.color = "#930c10";
        celluleName.style.paddingLeft = "2em";
        celluleName.style.paddingRight = "2em";
        ligne.appendChild(celluleName);

        const celluleValue = document.createElement("td");
        celluleValue.textContent = value;
        celluleValue.style.textAlign = "center";
        celluleValue.style.paddingLeft = "2em";
        celluleValue.style.paddingRight = "2em";
        ligne.appendChild(celluleValue);

        tableBody.appendChild(ligne);
    });

    table.appendChild(tableBody);
    table.setAttribute("border", "2");
    table.style.borderColor = "#c8aa6e";
    return table;
}

async function render_single_character(data) {
    const app = document.querySelector('#app');
    app.innerHTML = "";

    const backBtn = document.createElement('a');
    backBtn.href = "#/characters/";
    backBtn.textContent = "← Retour aux Personnages";
    backBtn.className = "back-button"; 
    app.appendChild(backBtn);

    const section = document.createElement('section');
    section.classList.add('parchment-container');

    const h1 = document.createElement('h1');
    h1.textContent = data.name;
    h1.classList.add('dnd-title');

    const p1 = document.createElement('p');
    p1.textContent = "Niveau : " + data.level; 
    p1.classList.add('dnd-text');

    const p2 = document.createElement('p');
    p2.textContent = "Race : " + data.race_id; 
    p2.classList.add('dnd-text');

    const p3 = document.createElement('p');
    p3.textContent = "Classe : " + data.class_id; 
    p3.classList.add('dnd-text');

    const p4 = document.createElement('p');
    p4.textContent = "Équipements : " + data.equipment_ids; 
    p4.classList.add('dnd-text');

    const p5 = document.createElement('p');
    p5.textContent = "Stats : "; 
    p5.classList.add('dnd-text');
    table = generateTable(data.stats);

    const p6 = document.createElement('p');
    p6.textContent = "Notation : " + data.rating + "/5"; 
    p6.classList.add('dnd-text');

    section.appendChild(h1);
    section.appendChild(p1);
    section.appendChild(p2);
    section.appendChild(p3);
    section.appendChild(p4);
    section.appendChild(p5);
    section.appendChild(table);
    section.appendChild(p6);
    app.appendChild(section);
}