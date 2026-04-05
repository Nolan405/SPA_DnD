export function research(input) {
    if (!input) return;
    
    var filter = input.value.toUpperCase();
    var li = document.querySelectorAll("#app li");

    for (var i = 0; i < li.length; i++) {
        
        var txtValue = li[i].textContent || li[i].innerText;
        
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

export function researchField(app, onSearch = null, placeholder = "Rechercher"){
    const input = document.createElement("input");
    input.id = "recherche";
    input.className = "dnd-search-bar";
    input.placeholder = placeholder;
    app.appendChild(input);

    if (onSearch) {
        input.addEventListener('input', () => onSearch(input.value));
        return input;
    }

    input.addEventListener('keyup', () => research(input));
    return input;
}