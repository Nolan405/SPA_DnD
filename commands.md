# Mémo : Commandes de Développement (SPA DnD)

**Lancer ces commandes depuis la racine du projet (/SPA_DND)** 


### Terminal 1 : La Base de Données (API)
    json-server --watch data/data.json --port 3000


### Terminal 2 : Le Compilateur (Webpack)

#### À faire une seule fois si le dossier node_modules est absent :
    npm install 

#### Pour compiler automatiquement à chaque sauvegarde :
    npx webpack --watch


### Terminal 3 : Le Serveur Web (Affichage)
    python -m http.server