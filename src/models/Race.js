export class Race {
    
    constructor(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }

    get getId() { return this.id; }
    get getName() { return this.name; }
    get getDescription() { return this.description; }

    renderGenericCard(ul) {
        const li = document.createElement('li');
        li.className = "race-card";

        const a = document.createElement('a');
        a.href = `#/races/${this.id}/`;
        a.innerHTML = `<span class="scroll-icon">📜</span> ${this.name}`;

        li.appendChild(a);
        ul.appendChild(li);
    }
}