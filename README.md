Nolan Morain et Joris Vachey

# SPA_DnD

SPA autour de l'univers DnD, avec routing hash, données servies via json-server, et bundling via Webpack.


## 1. Installation

Depuis la racine du projet:

1. Installer les dependances Node du projet:
	 npm install
2. Installer json-server (si non disponible):
	 - Option globale:
		 npm install -g json-server
	 - Option locale (recommandee):
		 npm install --save-dev json-server

## 2. Commandes de developpement

Lancer ces commandes depuis la racine du projet (dans 3 terminaux differents).

### Terminal 1 - API (base de donnees JSON)

Si json-server est installe globalement:
json-server --watch data/data.json --port 3000

Si json-server est installe localement:
npx json-server --watch data/data.json --port 3000

### Terminal 2 - Bundler Webpack

Compilation continue (rebuild automatique):
npx webpack --watch

Generation ponctuelle du bundle:
npx webpack

### Terminal 3 - Serveur web statique

python -m http.server

Le serveur web est accessible sur http://localhost:8000.

## 3. Routes mises en place

Le routeur est defini dans src/index.js et repose sur location.hash.

Routes principales:

- #/ : page Home
- #/characters/ : liste des personnages
- #/characters/:id/ : detail d'un personnage
- #/classes/ : liste des classes
- #/classes/:id/ : detail d'une classe
- #/equipments/ : liste des equipements
- #/equipments/:id/ : detail d'un equipement
- #/races/ : liste des races
- #/races/:id/ : detail d'une race
- #/favorites/ : page favoris

La logique du routeur convertit automatiquement une URL detaillee comme #/equipments/1/ vers le pattern #/equipments/:id/ pour afficher la bonne vue.

## 4. Explication de la config bundler (webpack.config.js)

Ce fichier configure Webpack en mode developpement:

- mode: development
	Active une compilation non minifiee et plus lisible pour le debug.

- entry: ./src/index.js
	Point d'entree principal de l'application.

- output.filename: bundle.js
	Nom du fichier genere.

- output.path: dist
	Dossier de sortie du bundle.

- resolve.modules: [src, node_modules]
	Permet de resoudre les imports depuis src sans chemins relatifs trop longs.

- resolve.extensions: [.js]
	Autorise la resolution automatique des imports JavaScript.

## 5. Utiliser le bundle ou non (tests modules)

Le choix se fait dans index.html.

### Mode bundle (actuel)

Conserver:

    <script src="./dist/bundle.js"></script>

Dans ce mode, il faut generer le bundle avec Webpack avant de voir les modifications.

### Mode modules natifs (sans bundle)

Remplacer la balise script actuelle par:

    <script type="module" src="./src/index.js"></script>

Et ne pas charger dist/bundle.js en meme temps.

Ce mode permet de tester directement les modules source sans etape de bundling, a condition de servir le projet via un serveur HTTP (pas en ouvrant le fichier HTML directement).

## 6. Resume rapide

1. npm install
2. json-server (global ou via npx)
3. npx webpack --watch
4. python -m http.server
5. Ouvrir http://localhost:8000