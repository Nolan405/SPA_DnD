async function render_races(data) {
    const app = document.querySelector('#app');
    app.innerHTML = "";

    const title = document.createElement('h1');
    title.textContent = "Races";
    app.appendChild(title);

    let ul = document.createElement('ul');
    ul.className = "races-list";

    data.forEach(element => {
        let li = document.createElement('li');
        let a = document.createElement('a')

        li.className = "race-item";
        a.href = `#/races/${element.id}/`;
        a.textContent = element.name;

        li.appendChild(a);
        ul.appendChild(li);
    });
    app.appendChild(ul)
}