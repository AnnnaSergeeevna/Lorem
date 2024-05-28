let count = 0

let cells = document.getElementById('table-section').querySelectorAll('.tile')

let players = document.getElementsByClassName('player');

function isVin() {
    let combs = [
        [3, 7, 11, 15],
        [12, 13, 14, 15],
        [4, 5, 6, 7],
        [8, 9, 10, 11],
        [0, 1, 2, 3],
        [0, 4, 8, 12],
        [1, 5, 9, 13],
        [2, 6, 10, 14],
    ]
    for (var comb of combs) {
        if (cells[comb[0]].innerHTML == cells[comb[1]].innerHTML &&
            cells[comb[1]].innerHTML == cells[comb[2]].innerHTML &&
            cells[comb[2]].innerHTML == cells[comb[3]].innerHTML &&
            cells[comb[0]].innerHTML !== '') {
            return true;
        }
    }
    return false
}

function tap(event) {
    if (count % 2 == 0) {
        event.target.innerHTML = 'X'
        players[1].classList.add('active');
        players[0].classList.remove('active');
    }
    else {
        event.target.innerHTML = '0'
        players[0].classList.add('active');
        players[1].classList.remove('active');
    }
    if (isVin()) {
        for (var cell of cells) {
            cell.removeEventListener('click', tap)
        }
        if (count % 2 == 0) {
            players[0].innerHTML = 'X is winner'
            players[1].classList.remove('active');

        }
        else {
            players[1].innerHTML = 'O is winner'
            players[0].classList.remove('active');

        }
    }

    else if (count == 15) {
        players[0].innerHTML = 'Draw';
        players[0].classList.remove('active')
        players[1].innerHTML = 'Draw';
        players[1].classList.remove('active')
    }
    count++
    event.target.removeEventListener('click', tap)
}

function startGame() {
    count = 0;
    players[0].innerHTML = 'Player 1';
    players[1].innerHTML = 'Player 2';
    players[0].classList.add('active')
    for (var cell of cells) {
        cell.innerHTML = '';
        cell.addEventListener('click', tap)
    }
}

startGame()