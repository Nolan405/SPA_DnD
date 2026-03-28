import { ENDPOINT } from '../config.js';

import { render_home } from '../views/home.js';
import { render_characters } from '../views/characters.js';
import { render_single_character } from '../views/characterShow.js';
import { render_races } from '../views/races.js';
import { render_single_race } from '../views/raceShow.js';
import { render_classes } from '../views/classes.js';
import { render_single_classe } from '../views/classeShow.js';
import { render_equipments } from '../views/equipments.js';
import { render_single_equipment } from '../views/equipmentShow.js';
import { render_favorites } from '../views/favorites.js';

export async function Home() {
    const url = "/introduction";
    getData(url, render_home);
}

export async function Races() {
    const url = "/races";
    getData(url, render_races);
}

export async function RaceShow() {
    const pathParts = window.location.hash.split('/'); 
    const id = pathParts[2]; 
    if (id) {
        const url = `/races/${id}`;
        getData(url, render_single_race);
    }
}

export async function Classes() {
    const url = "/classes";
    getData(url, render_classes);
}

export async function ClasseShow() {
    const pathParts = window.location.hash.split('/'); 
    const id = pathParts[2]; 
    if (id) {
        const url = `/classes/${id}`;
        getData(url, render_single_classe);
    }
}

export async function Equipments() {
    const url = "/equipments";
    getData(url, render_equipments);
}

export async function EquipmentShow() {
    const pathParts = window.location.hash.split('/'); 
    const id = pathParts[2]; 
    if (id) {
        const url = `/equipments/${id}`;
        getData(url, render_single_equipment);
    }
}

export async function Characters() {
    const url = "/characters";
    getData(url, render_characters);
}

export async function CharacterShow() {
    const pathParts = window.location.hash.split('/'); 
    const id = pathParts[2]; 
    if (id) {
        const url = `/characters/${id}`;
        getData(url, render_single_character);
    }
}

export async function Favorites() {
    const urls = ["/characters", "/classes", "/races", "/equipments"];
    getData(urls, render_favorites);
}

export async function getData(url, render) {
    let finalData;
    if (Array.isArray(url)) {
        const responses = await Promise.all(url.map(unUrl => fetch(ENDPOINT + unUrl)));
        const allData = await Promise.all(responses.map(res => res.json()));
        const finalData = {
            "characters": allData[0],
            "classes":    allData[1],
            "races":      allData[2],
            "equipments": allData[3]
        };
        render(finalData);  
    } else {
        let response = await fetch(ENDPOINT + url);
        if (!response.ok) {
            throw new Error(response.status);
        }
        try {
            finalData = await response.json();
            console.log(finalData)
            render(finalData);
        } catch (e) {
            render(finalData);
        }
    }
}