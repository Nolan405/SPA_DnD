async function render_home(data) {
    const app = document.querySelector('#app');
    app.innerHTML = "";

    const section = document.createElement('section');
    section.classList.add('parchment-container');

    const h1 = document.createElement('h1');
    h1.textContent = "Bienvenue, Aventurier";
    h1.classList.add('dnd-title');

    const p = document.createElement('p');
    p.textContent = data; 
    p.classList.add('dnd-text');

    section.appendChild(h1);
    section.appendChild(p);
    app.appendChild(section);
}