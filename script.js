let player1 = [],
    player2 = [],
    pickedBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8],
    move = 'x',
    gameOverOnWin = false;

const cell = document.querySelectorAll('.cell')


cell.forEach(item => {
    item.addEventListener('click', e => {
        if (player1.length == 5) { console.log('test'); }
        let clicked = e.target.dataset.cellIndex;
        e.target.style.pointerEvents = "none";

        e.target.innerHTML = `<p class='clicked'>${move}</p>`
        pushPlay(move, clicked)
        playerTurn(move)
        if (move == 'o' && player1.length != 5 && gameOverOnWin == false) {
            setTimeout(function() {
                botPlayer()
            }, 1000)
        }
        checkIfWin()

    })
})


function playerTurn(playMove) {
    (playMove == 'x') ? move = 'o': move = 'x'
}

function pushPlay(player, clicked) {
    if (player == 'x') {
        player1.push(Number(clicked));
        pickedBoard[clicked] = 'x'
    }
}

function botPlayer() {
    let rand = Math.floor(Math.random() * 8)
    let piked = 0
    while (piked == 0) {
        rand = Math.floor(Math.random() * 8)
        if (pickedBoard.includes(rand)) {
            player2.push(Number(rand))
            pickedBoard[rand] = 'o'
            cell[rand].innerHTML = `<p class='clicked'>o</p>`
            cell[rand].style.pointerEvents = "none";
            playerTurn(move)
            piked = 1
        } else {
            piked = 0
        }
    }
    checkIfWin()

}


function checkIfWin() {

    if (pickedBoard[0] == pickedBoard[1] && pickedBoard[1] == pickedBoard[2]) {
        win(pickedBoard[0])
        gameOverOnWin = true
    }
    if (pickedBoard[3] == pickedBoard[4] && pickedBoard[4] == pickedBoard[5]) {
        win(pickedBoard[3])
        gameOverOnWin = true
    }
    if (pickedBoard[6] == pickedBoard[7] && pickedBoard[7] == pickedBoard[8]) {
        win(pickedBoard[6])
        gameOverOnWin = true
    }
    if (pickedBoard[0] == pickedBoard[3] && pickedBoard[3] == pickedBoard[6]) {
        win(pickedBoard[0])
        gameOverOnWin = true
    }
    if (pickedBoard[1] == pickedBoard[4] && pickedBoard[4] == pickedBoard[7]) {
        win(pickedBoard[1])
        gameOverOnWin = true
    }
    if (pickedBoard[2] == pickedBoard[5] && pickedBoard[5] == pickedBoard[8]) {
        win(pickedBoard[2])
        gameOverOnWin = true
    }
    if (pickedBoard[0] == pickedBoard[4] && pickedBoard[4] == pickedBoard[8]) {
        win(pickedBoard[0])
        gameOverOnWin = true
    }
    if (pickedBoard[2] == pickedBoard[4] && pickedBoard[4] == pickedBoard[6]) {
        win(pickedBoard[2])
        gameOverOnWin = true
    }
    if (player1.length == 5 && gameOverOnWin != true) {
        draw()
    }

}


let statusText = document.getElementById('status');

function win(winner) {
    statusText.innerHTML = 'The winner is ' + winner
}

function draw() {
    statusText.innerHTML = 'Draw Game'
}

function resetGame() {
    setTimeout(function() {
        player1 = []
        player2 = []
        pickedBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8]
        move = 'x'
        gameOverOnWin = false
        statusText.innerHTML = ''
        cell.forEach(item => {
            item.innerHTML = ''
            item.style.pointerEvents = "auto";
        })
    }, 1000)
}