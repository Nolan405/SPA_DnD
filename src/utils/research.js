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

export function researchField(app){
    const input = document.createElement("input");
    input.id = "recherche";
    input.className = "dnd-search-bar";
    input.placeholder = "Rechercher";
    app.appendChild(input);
    
    input.addEventListener('keyup', () => research(input));
}