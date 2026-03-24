async function Home() {
    const url = "/introduction";
    getData(url, render_home);
}

async function Races() {
    const url = "/races";
    getData(url, render_races);
}


async function ArticleShow() {
    const pathParts = window.location.hash.split('/'); 
    const id = pathParts[2]; 
    if (id) {
        const url = `/articles/${id}`;
        getData(url, render_single_article);
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