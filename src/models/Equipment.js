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

    addToFavorites() {
        localStorage.setItem("favorite_equipment_" + this.id, "yes");
    }

    inFavorites() {
        return localStorage.getItem("favorite_equipment_" + this.id) != null;
    }

    removeFavorite() {
        localStorage.removeItem("favorite_equipment_" + this.id)
    }

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
        p1.textContent = "Type : " + this.type; 
        p1.classList.add('dnd-text');

        const p2 = document.createElement('p');
        p2.textContent = "Dommage : " + this.damage; 
        p2.classList.add('dnd-text');

        const p3 = document.createElement('p');
        p3.textContent = "Poids : " + this.weight; 
        p3.classList.add('dnd-text');

        section.appendChild(div);
        section.appendChild(p1);
        section.appendChild(p2);
        section.appendChild(p3);
        app.appendChild(section);
    }
}