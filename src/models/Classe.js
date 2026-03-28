export class Classe {
    
    constructor(id, name, hitDie, primaryAbility) {
        this.id = id;
        this.name = name;
        this.hitDie = hitDie;
        this.primaryAbility = primaryAbility;
    }

    get getId() { return this.id; }
    get getName() { return this.name; }
    get getHitDie() { return this.hitDie; }
    get getPrimaryAbility() { return this.primaryAbility; }

    renderGenericCard(ul) {
        const li = document.createElement('li');
        li.className = "race-card";

        const a = document.createElement('a');
        a.href = `#/classes/${this.id}/`;
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
        p1.textContent = "Dé de Vie : " + this.hit_die; 
        p1.classList.add('dnd-text');

        const p2 = document.createElement('p');
        p2.textContent = "Attribut Principal : " + this.primary_ability; 
        p2.classList.add('dnd-text');

        section.appendChild(h1);
        section.appendChild(p1);
        section.appendChild(p2);
        app.appendChild(section);
    }
}