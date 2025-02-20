
// Déclaration des variables globales
let currentRow = 0;
const attempts = 5; // Vous aviez défini attempts = 5 et row = 6
const wordToGuess = ['CHEVAL', 'BANANE', 'ORANGE', 'BATEAU', 'MUSCLE', 'JARDIN', 'GÂTEAU', 'TENNIS', 'CAHIER', 'AVIONS',
    'BOUCHE', 'RAISON', 'GRISOU', 'BUREAU', 'CLOCHE', 'POIVRE', 'SAVANE', 'NOUGAT',
    'MARCHE', 'FORCER', 'VALLÉE', 'TOMATE', 'RAPIDE', 'LANCER', 'BRISER',
    'ALLURE', 'DANSER', 'PLIAGE', 'FUMIER', 'COUDRE', 'CHAUFF', 'TORDRE',
    'PLEINE', 'COULER', 'CENDRE', 'GONDOL', 'RETARD', 'MANGER', 'TORDRE',
    'TRICOT', 'PARFUM', 'VISEUR', 'DRAPER', 'ÉPONGE', 'GRELOT',
    'CORTEX', 'JOUETS', 'CACTUS', 'BOURGE', 'FRIMER'];
let targetWord = wordToGuess[Math.floor(Math.random() * wordToGuess.length)];


// Fonction pour créer la grille
function createGrid() {
    const grid = document.getElementById("grid");

    for (let i = 0; i < attempts * 6; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        grid.appendChild(cell);
    }
}

// Fonction pour vérifier le mot que le joueur rentre
function checkWord() {
    let input = document.getElementById("guess").value.toUpperCase();
    if (input.length !== 6) {
        alert("Le mot doit contenir 6 lettres !");
        return;
    }


    let rowCells = document.querySelectorAll(".grid .cell");
    for (let i = 0; i < 6; i++) {
        let cell = rowCells[currentRow * 6 + i];
        cell.textContent = input[i];

        if (input[i] === targetWord[i]) {
            cell.classList.add("correct");
        } else if (targetWord.includes(input[i])) {
            cell.classList.add("present");
        } else {
            cell.classList.add("absent");
        }
    }

    currentRow++;
    document.getElementById("guess").value = "";

    // Vérifier si le joueur a gagné
    if (input === targetWord) {
        setTimeout(() => {
            alert("Bravo, vous avez trouvé le mot !");
        })
    }

    // Vérifier si le joueur essayer toutes les essais et na pas réussi
    if (currentRow >= attempts) {
        setTimeout(() => {
            alert("Dommage ! Le mot à deviner était : " + targetWord);
        })
    }
}

createGrid();