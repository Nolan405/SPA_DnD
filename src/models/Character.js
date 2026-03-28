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

    renderGenericCard(ul) {
        const li = document.createElement('li');
        li.className = "race-card";

        const a = document.createElement('a');
        a.href = `#/characters/${this.id}/`;
        a.innerHTML = `
            <img src="${this.image}" alt="" width="50">
            <span class="scroll-icon">📜</span> ${this.name}
        `;

        li.appendChild(a);
        ul.appendChild(li);
    }
}