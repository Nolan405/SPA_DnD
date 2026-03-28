export class Equipment {
    
    constructor(id, name, type, damage, weight) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.damage = damage;
        this.weight = weight;
    }

    get getId() { return this.id; }
    get getName() { return this.name; }
    get getDescription() { return this.type; }
    get getDamage() { return this.damage; }
    get getWeight() { return this.weight; }

    renderGenericCard(ul) {
        const li = document.createElement('li');
        li.className = "race-card";

        const a = document.createElement('a');
        a.href = `#/equipments/${this.id}/`;
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

        const p1 = document.createElement('p');
        p1.textContent = "Type : " + this.type; 
        p1.classList.add('dnd-text');

        const p2 = document.createElement('p');
        p2.textContent = "Dommage : " + this.damage; 
        p2.classList.add('dnd-text');

        const p3 = document.createElement('p');
        p3.textContent = "Poids : " + this.weight; 
        p3.classList.add('dnd-text');

        section.appendChild(h1);
        section.appendChild(p1);
        section.appendChild(p2);
        section.appendChild(p3);
        app.appendChild(section);
    }
}