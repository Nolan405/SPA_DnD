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
}