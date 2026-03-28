async function Home() {
    const url = "/introduction";
    getData(url, render_home);
}

async function Races() {
    const url = "/races";
    getData(url, render_races);
}

async function RaceShow() {
    const pathParts = window.location.hash.split('/'); 
    const id = pathParts[2]; 
    if (id) {
        const url = `/races/${id}`;
        getData(url, render_single_race);
    }
}

async function Classes() {
    const url = "/classes";
    getData(url, render_classes);
}

async function ClasseShow() {
    const pathParts = window.location.hash.split('/'); 
    const id = pathParts[2]; 
    if (id) {
        const url = `/classes/${id}`;
        getData(url, render_single_classe);
    }
}

async function Equipments() {
    const url = "/equipments";
    getData(url, render_equipments);
}

async function EquipmentShow() {
    const pathParts = window.location.hash.split('/'); 
    const id = pathParts[2]; 
    if (id) {
        const url = `/equipments/${id}`;
        getData(url, render_single_equipment);
    }
}

async function Characters() {
    const url = "/characters";
    getData(url, render_characters);
}

async function CharacterShow() {
    const pathParts = window.location.hash.split('/'); 
    const id = pathParts[2]; 
    if (id) {
        const url = `/characters/${id}`;
        getData(url, render_single_character);
    }
}

async function getData(url, callback) {
    let response = await fetch(ENDPOINT + url);
    if (!response.ok) {
        throw new Error(response.status);
    }
    const text = await response.text();
    try {
        const data = JSON.parse(text);
        console.log(data)
        callback(data);
    } catch (e) {
        callback(text);
    }
}