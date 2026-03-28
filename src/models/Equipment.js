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
}