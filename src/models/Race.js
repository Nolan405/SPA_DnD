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

    renderDetailCard(app) {
        const section = document.createElement('section');
        section.classList.add('parchment-container');

        const h1 = document.createElement('h1');
        h1.textContent = this.name;
        h1.classList.add('dnd-title');

        const p = document.createElement('p');
        p.textContent = this.description; 
        p.classList.add('dnd-text');

        section.appendChild(h1);
        section.appendChild(p);
        app.appendChild(section);
    }
}