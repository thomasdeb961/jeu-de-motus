
// Déclaration des variables globales
let currentRow = 0;
const attempts = 5 ;
const wordToGuess = ['LIVRE', 'POMME', 'TABLE', 'BATON', 'CHIEN', 'PLAGE', 'FLEUR', 'CRANE', 'VERRE', 'GLACE', 'ROUGE', 'NOIRE', 'BOMBE', 'BLANC', 'VERTU', 'GRAVE', 'CARTE', 'PLUIE', 'ORAGE', 'NEIGE', 'GOMME', 'TRACE', 'FONCE', 'TRAIN', 'VESTE', 'CLASSE', 'MAIRE', 'SUCRE', 'TARTE', 'BICHE', 'DRAPE', 'AIMER', 'SALTO', 'LARGE', 'NAVET', 'PISTE', 'VOILE', 'FABLE', 'CORPS', 'VIGNE', 'CHUTE', 'TRAME', 'TIGRE', 'ROCHE', 'DOUTE', 'RONDE', 'MOULE', 'FUITE', 'BOTTE', 'SAUTE'];
let targetWord = wordToGuess[Math.floor(Math.random() * wordToGuess.length)];

// Fonction pour créer la grille
function createGrid() {
    const grid = document.getElementById("grid");

    for (let i = 0; i < attempts * 5; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        grid.appendChild(cell);
    }
}

// Fonction pour vérifier le mot que le joueur rentre
function checkWord() {
    let input = document.getElementById("guess").value.toUpperCase();
    if (input.length !== 5) {
        alert("Le mot doit contenir 5 lettres !");
        return;
    }


    let rowCells = document.querySelectorAll(".grid .cell");
    for (let i = 0; i < 5; i++) {
        let cell = rowCells[currentRow * 5 + i];
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