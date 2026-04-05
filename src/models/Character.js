export class Character {
    
    constructor(id, name, level, idRace, idClasse, lstIdEquipments, stats, rating, votes, image) {
        this.id = id;
        this.name = name;
        this.level = level;
        this.idRace = idRace;
        this.idClasse = idClasse;
        this.lstIdEquipments = lstIdEquipments;
        this.stats = stats;
        this.rating = rating;
        this.votes = votes;
        this.image = image;
    }

    get getId() { return this.id; }
    get getName() { return this.name; }
    get getLevel() { return this.level; }
    get getIdRace() { return this.idRace; }
    get getIdClasse() { return this.idClasse; }
    get getLstIdEquipments() { return this.lstIdEquipments; }
    get getStats() { return this.stats; }
    get getRating() { return this.rating; }
    get getVotes() { return this.votes; }
    get getImage() { return this.image; }

    addToFavorites() {
        localStorage.setItem("favorite_character_" + this.id, "yes");
    }

    inFavorites() {
        return localStorage.getItem("favorite_character_" + this.id) != null;
    }

    removeFavorite() {
        localStorage.removeItem("favorite_character_" + this.id)
    }

    static #generateTable(data) {
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

    renderGenericCard(ul) {
        const li = document.createElement('li');
        li.className = "race-card";

        const a = document.createElement('a');
        a.href = `#/characters/${this.id}/`;
        a.innerHTML = `
            <img src="${this.image}" alt="" width="50" loading="lazy" decoding="async">
            <span class="scroll-icon">📜</span> ${this.name}
        `;

        li.appendChild(a);
        ul.appendChild(li);
    }

    renderDetailCard(app) {
        const section = document.createElement('section');
        section.classList.add('parchment-container');

        const div = document.createElement('div');
        div.className = "fav-actions";

        const h1 = document.createElement('h1');
        h1.textContent = this.name;
        h1.classList.add('dnd-title');

        const button1 = document.createElement('button');
        button1.textContent = "Ajouter aux favoris";
        button1.className = "dnd-button btn-add";
        if (!this.inFavorites()) {
            button1.onclick = () => {
                this.addToFavorites();
                window.location.reload();
            };
        } else {
            button1.disabled = true;
        }

        const button2 = document.createElement('button');
        button2.textContent = "Supprimer des favoris";
        button2.className = "dnd-button btn-remove";
        if (this.inFavorites()) {
            button2.onclick = () => {
                this.removeFavorite();
                window.location.reload();
            };
        } else {
            button2.disabled = true;
        }

        div.appendChild(h1);
        div.appendChild(button1);    
        div.appendChild(button2); 

        const p1 = document.createElement('p');
        p1.textContent = "Niveau : " + this.level; 
        p1.classList.add('dnd-text');

        const p2 = document.createElement('p');
        p2.textContent = "Race : " + this.idRace; 
        p2.classList.add('dnd-text');

        const p3 = document.createElement('p');
        p3.textContent = "Classe : " + this.idClasse; 
        p3.classList.add('dnd-text');

        const p4 = document.createElement('p');
        p4.textContent = "Équipements : " + this.lstIdEquipments; 
        p4.classList.add('dnd-text');

        const p5 = document.createElement('p');
        p5.textContent = "Stats : "; 
        p5.classList.add('dnd-text');
        const table = Character.#generateTable(this.stats);

        const p6 = document.createElement('p');
        p6.textContent = "Notation : " + this.rating + "/5"; 
        p6.classList.add('dnd-text');

        section.appendChild(div);
        section.appendChild(p1);
        section.appendChild(p2);
        section.appendChild(p3);
        section.appendChild(p4);
        section.appendChild(p5);
        section.appendChild(table);
        section.appendChild(p6);
        app.appendChild(section);
    }
}