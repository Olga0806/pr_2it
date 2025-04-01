function clickCell(cell) {
    if (cell.textContent === '') {
        cell.textContent = 'X';
        cell.classList.add('used');
        usedCells.push(cell);

        if (checkWin()) {
            alert('Игрок X выиграл!');
            resetGame();
        } else {
            // Случайный ход компьютера
            const emptyCells = Array.from(document.querySelectorAll('.cell')).filter(c => c.textContent === '');
            if (emptyCells.length > 0) {
                const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
                randomCell.textContent = 'O';
                randomCell.classList.add('used');
                usedCells.push(randomCell);

                if (checkWin()) {
                    alert('Робот выиграл!');
                    resetGame();
                }
            }
        }
    }
}
